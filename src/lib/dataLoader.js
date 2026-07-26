// src/lib/dataLoader.js
// Lightweight in-memory data loader and normalizer for inventor data.
// - Keeps `src/data/seats.json` unchanged.
// - Normalizes records in memory and generates stable `id` and `slug` values.
// - Exposes simple lookup helpers for list and single-record access.

import raw from '../data/seats.json'

// dataLoader: improved normalization, canonical slug/id strategy, collision
// resolution, and duplicate detection. All transformations are in-memory and
// do not modify `seats.json`.

// ----- utilities -----
function normalizeUnicode(s) {
  return String(s || '')
    .trim()
    .normalize('NFKD')
    .replace(/\p{Diacritic}/gu, '')
}

function stripHonorifics(name) {
  if (!name) return ''
  return name
    .replace(/^\s*(dr\.|mr\.|mrs\.|ms\.|miss\.|sir\s+|dame\s+|rev\.)\s*/i, '')
    .trim()
}

function slugify(input) {
  return normalizeUnicode(String(input || ''))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 60)
}

function shortHash(str) {
  // deterministic, small hex from djb2 hash
  let h = 5381
  for (let i = 0; i < str.length; i++) {
    h = (h * 33) ^ str.charCodeAt(i)
  }
  // convert to positive 32-bit and to hex
  return (h >>> 0).toString(16).slice(0, 6)
}

function displayNameOf(rec) {
  const first = rec.first || ''
  const last = rec.last || ''
  return `${first} ${last}`.trim()
}

// ----- build base/expanded slugs and grouping -----
const items = raw.map((r, i) => {
  const firstClean = stripHonorifics(r.first || '')
  const last = r.last || ''
  const displayName = displayNameOf(r)
  const birthYear = r.year || null
  const deathYear = r.passed === undefined ? null : r.passed

  const baseSlug = slugify(`${firstClean} ${last}`)
  // expanded slug uses full first token (with middle names) if present
  const expandedSlug = slugify(`${r.first || ''} ${last}`)

  return {
    _raw: r,
    displayName,
    firstName: r.first || '',
    lastName: last,
    birthYear,
    deathYear,
    baseSlug,
    expandedSlug,
    index: i,
  }
})

// group by baseSlug
const groups = items.reduce((acc, it) => {
  const key = it.baseSlug || 'unknown'
  if (!acc[key]) acc[key] = []
  acc[key].push(it)
  return acc
}, {})

// helper to stringify raw for exact duplicate detection
function rawKey(r) {
  try {
    return JSON.stringify(r)
  } catch {
    return String(r)
  }
}

const normalized = []
const collisionReport = {
  total: raw.length,
  collisions: 0,
  duplicates: 0,
  sampleSlugs: [],
}

// resolve each group
Object.entries(groups).forEach(([base, group]) => {
  if (group.length === 1) {
    const g = group[0]
    const slug = base || slugify(g.displayName)
    const rec = {
      id: slug,
      slug,
      displayName: g.displayName,
      firstName: g.firstName,
      lastName: g.lastName,
      birthYear: g.birthYear,
      deathYear: g.deathYear,
      summary: null,
      bio: null,
      inventions: [],
      categories: [],
      tags: [],
      images: [],
      timeline: [],
      relatedIds: [],
      sources: [],
      collisionReason: null,
      duplicate: false,
    }
    normalized[g.index] = rec
    collisionReport.sampleSlugs.push(slug)
    return
  }

  // group has multiple entries => potential collisions
  collisionReport.collisions++

  // detect exact duplicates by raw content
  const rawMap = {}
  group.forEach((g) => {
    const key = rawKey(g._raw)
    if (!rawMap[key]) rawMap[key] = []
    rawMap[key].push(g)
  })

  // representatives: unique raw entries
  const representatives = Object.values(rawMap).map((arr) => arr[0])

  // mark duplicates for non-representatives
  Object.values(rawMap).forEach((arr) => {
    if (arr.length > 1) {
      // canonical will be arr[0]
      const canonical = arr[0]
      arr.slice(1).forEach((dup) => {
        normalized[dup.index] = {
          id: null,
          slug: null,
          displayName: dup.displayName,
          firstName: dup.firstName,
          lastName: dup.lastName,
          birthYear: dup.birthYear,
          deathYear: dup.deathYear,
          summary: null,
          bio: null,
          inventions: [],
          categories: [],
          tags: [],
          images: [],
          timeline: [],
          relatedIds: [],
          sources: [],
          collisionReason: 'duplicate-record',
          duplicate: true,
          duplicateOfIndex: canonical.index,
        }
        collisionReport.duplicates++
      })
    }
  })

  // Now process representatives (unique raw records)
  if (representatives.length === 1) {
    // only one unique record (others were duplicates)
    const rep = representatives[0]
    const slug = rep.baseSlug || slugify(rep.displayName)
    normalized[rep.index] = {
      id: slug,
      slug,
      displayName: rep.displayName,
      firstName: rep.firstName,
      lastName: rep.lastName,
      birthYear: rep.birthYear,
      deathYear: rep.deathYear,
      summary: null,
      bio: null,
      inventions: [],
      categories: [],
      tags: [],
      images: [],
      timeline: [],
      relatedIds: [],
      sources: [],
      collisionReason: 'resolved-by-duplicate-collapse',
      duplicate: false,
    }
    collisionReport.sampleSlugs.push(slug)
    return
  }

  // multiple distinct representatives; attempt disambiguation
  // 1) try expandedSlug uniqueness
  const expandedMap = representatives.reduce((acc, r) => {
    acc[r.expandedSlug] = (acc[r.expandedSlug] || 0) + 1
    return acc
  }, {})

  const canUseExpanded = Object.values(expandedMap).every((v) => v === 1)
  if (canUseExpanded) {
    representatives.forEach((r) => {
      const slug = r.expandedSlug
      normalized[r.index] = {
        id: slug,
        slug,
        displayName: r.displayName,
        firstName: r.firstName,
        lastName: r.lastName,
        birthYear: r.birthYear,
        deathYear: r.deathYear,
        summary: null,
        bio: null,
        inventions: [],
        categories: [],
        tags: [],
        images: [],
        timeline: [],
        relatedIds: [],
        sources: [],
        collisionReason: 'expanded-name-used',
        duplicate: false,
      }
      collisionReport.sampleSlugs.push(slug)
    })
    return
  }

  // 2) try birthYear uniqueness
  const birthCounts = representatives.reduce((acc, r) => {
    const by = r.birthYear || 'null'
    acc[by] = (acc[by] || 0) + 1
    return acc
  }, {})

  const canUseBirth = representatives.every(
    (r) => r.birthYear && birthCounts[r.birthYear] === 1
  )
  if (canUseBirth) {
    representatives.forEach((r) => {
      const slug = `${r.baseSlug}-${r.birthYear}`
      normalized[r.index] = {
        id: slug,
        slug,
        displayName: r.displayName,
        firstName: r.firstName,
        lastName: r.lastName,
        birthYear: r.birthYear,
        deathYear: r.deathYear,
        summary: null,
        bio: null,
        inventions: [],
        categories: [],
        tags: [],
        images: [],
        timeline: [],
        relatedIds: [],
        sources: [],
        collisionReason: 'birthYear-appended',
        duplicate: false,
      }
      collisionReport.sampleSlugs.push(slug)
    })
    return
  }

  // 3) fallback to deterministic hash
  representatives.forEach((r) => {
    const basePart = r.baseSlug || slugify(r.displayName)
    const birthPart = r.birthYear || 'na'
    const h = shortHash(
      `${r.displayName}|${r.birthYear}|${JSON.stringify(r._raw)}`
    )
    const slug = `${basePart}-${birthPart}-${h}`
    normalized[r.index] = {
      id: slug,
      slug,
      displayName: r.displayName,
      firstName: r.firstName,
      lastName: r.lastName,
      birthYear: r.birthYear,
      deathYear: r.deathYear,
      summary: null,
      bio: null,
      inventions: [],
      categories: [],
      tags: [],
      images: [],
      timeline: [],
      relatedIds: [],
      sources: [],
      collisionReason: 'hash-fallback',
      duplicate: false,
    }
    collisionReport.sampleSlugs.push(slug)
  })
})

// Post-process duplicates: assign duplicateOf slug values for marked duplicates
Object.keys(groups).forEach((base) => {
  const group = groups[base]
  // find representative slug for this group (first non-duplicate with normalized entry)
  const rep = group.find(
    (g) => normalized[g.index] && !normalized[g.index].duplicate
  )
  if (!rep) return
  const canonicalSlug = normalized[rep.index].slug
  // assign duplicateOf for entries previously marked duplicate
  group.forEach((g) => {
    const rec = normalized[g.index]
    if (rec && rec.duplicate && !rec.duplicateOf) {
      rec.duplicateOf = canonicalSlug
    }
  })
})

// final index fill: if any normalized slot is still undefined (shouldn't happen), create placeholder
for (let i = 0; i < raw.length; i++) {
  if (!normalized[i]) {
    const r = raw[i]
    const slug = slugify(displayNameOf(r))
    normalized[i] = {
      id: slug,
      slug,
      displayName: displayNameOf(r),
      firstName: r.first || '',
      lastName: r.last || '',
      birthYear: r.year || null,
      deathYear: r.passed === undefined ? null : r.passed,
      summary: null,
      bio: null,
      inventions: [],
      categories: [],
      tags: [],
      images: [],
      timeline: [],
      relatedIds: [],
      sources: [],
      collisionReason: null,
      duplicate: false,
    }
  }
}

// Development validation output
if (process.env.NODE_ENV !== 'production') {
  console.log('dataLoader: processed', collisionReport.total, 'records')
  console.log('dataLoader: collisions found', collisionReport.collisions)
  console.log('dataLoader: duplicates found', collisionReport.duplicates)
  console.log(
    'dataLoader: sample slugs',
    collisionReport.sampleSlugs.slice(0, 10)
  )
}

const canonicalInventors = normalized.filter(
  (record) => record && !record.duplicate && record.id && record.slug
)

const byId = Object.fromEntries(
  canonicalInventors.map((record) => [record.id, record])
)
const bySlug = Object.fromEntries(
  canonicalInventors.map((record) => [record.slug, record])
)

export function getAllInventors() {
  return canonicalInventors.slice()
}

export function getInventorById(id) {
  return byId[id] || null
}

export function getInventorBySlug(slug) {
  return bySlug[slug] || null
}

export function getDiagnostics() {
  return {
    total: collisionReport.total,
    collisions: collisionReport.collisions,
    duplicates: collisionReport.duplicates,
  }
}

export default {
  getAllInventors,
  getInventorById,
  getInventorBySlug,
  getDiagnostics,
}
