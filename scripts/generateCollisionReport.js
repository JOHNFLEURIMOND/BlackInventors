const raw = require('../src/data/seats.json')
const crypto = require('crypto')

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
  return normalizeUnicode(input)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 60)
}

function fullDisplayName(rec) {
  const first = rec.first || ''
  const last = rec.last || ''
  return `${first} ${last}`.trim()
}

function baseSlugFor(rec) {
  // remove common honorifics from first name for slugging
  const first = stripHonorifics(rec.first || '')
  const last = rec.last || ''
  return slugify(`${first} ${last}`)
}

function shortHash(rec) {
  const h = crypto.createHash('sha1')
  h.update(JSON.stringify(rec))
  return h.digest('hex').slice(0, 6)
}

// Build groups
const groups = {}
raw.forEach((r, idx) => {
  const base = baseSlugFor(r) || 'unknown'
  if (!groups[base]) groups[base] = []
  groups[base].push({ raw: r, index: idx })
})

const collisions = Object.entries(groups).filter(([, v]) => v.length > 1)

const report = {
  totalRecords: raw.length,
  uniqueBaseSlugs: Object.keys(groups).length,
  collisionGroups: [],
  likelyDuplicates: [],
  requiresReview: [],
}

for (const [base, items] of collisions) {
  const recs = items.map((it) => {
    const r = it.raw
    return {
      index: it.index,
      displayName: fullDisplayName(r),
      birthYear: r.year || null,
      deathYear: r.passed === undefined ? null : r.passed,
      raw: r,
    }
  })

  // Build candidate slugs using rules: prefer middle-name expansion, then birthYear, then hash
  const candidateSlugs = recs.map((rec) => {
    // try middle-name expansion: if first contains more than one token, use full first
    const firstTokens = (rec.raw.first || '')
      .trim()
      .split(/\s+/)
      .filter(Boolean)
    let slugWithMiddle = null
    if (firstTokens.length > 1) {
      slugWithMiddle = slugify(`${rec.raw.first} ${rec.raw.last}`)
    }
    return { rec, slugWithMiddle }
  })

  // Check if slugWithMiddle yields unique slugs across this group
  const slugSet = {}
  let uniqueByMiddle = true
  candidateSlugs.forEach((c) => {
    const s = c.slugWithMiddle || slugify(`${c.rec.displayName}`)
    slugSet[s] = (slugSet[s] || 0) + 1
    if (slugSet[s] > 1) uniqueByMiddle = false
  })

  const recommendations = recs.map((rec) => {
    // prefer slugWithMiddle if it exists and leads to unique
    const firstTokens = (rec.raw.first || '')
      .trim()
      .split(/\s+/)
      .filter(Boolean)
    let proposed = slugify(`${rec.raw.first} ${rec.raw.last}`)
    let reason = 'base'

    if (firstTokens.length > 1 && uniqueByMiddle) {
      proposed = slugify(`${rec.raw.first} ${rec.raw.last}`)
      reason = 'used full first (middle name) to disambiguate'
    } else {
      // try birthYear if available and unique within group
      const birth = rec.birthYear
      const birthCounts = recs.reduce((acc, r) => {
        const by = r.birthYear || 'null'
        acc[by] = (acc[by] || 0) + 1
        return acc
      }, {})

      if (birth && birthCounts[birth] === 1) {
        proposed = `${slugify(`${rec.raw.first} ${rec.raw.last}`)}-${birth}`
        reason = 'appended birthYear to disambiguate'
      } else {
        // fallback to short hash
        proposed = `${slugify(`${rec.raw.first} ${rec.raw.last}`)}-${rec.birthYear || 'na'}-${shortHash(rec.raw)}`
        reason = 'appended deterministic hash fallback'
      }
    }

    return {
      displayName: rec.displayName,
      birthYear: rec.birthYear,
      deathYear: rec.deathYear,
      index: rec.index,
      proposedSlug: proposed,
      reason,
    }
  })

  // classify collisions: duplicates if displayName + birthYear + deathYear identical
  const classifications = recs.map((rec) => {
    const dupes = recs.filter(
      (r) =>
        r.displayName === rec.displayName &&
        r.birthYear === rec.birthYear &&
        r.deathYear === rec.deathYear
    )
    if (dupes.length > 1)
      return { index: rec.index, classification: 'duplicate record' }
    // same name different person if birthYear differs
    const sameNameOthers = recs.filter(
      (r) =>
        r.displayName === rec.displayName &&
        !(r.birthYear === rec.birthYear && r.deathYear === rec.deathYear)
    )
    if (sameNameOthers.length > 0)
      return {
        index: rec.index,
        classification: 'same name, different person',
      }
    return { index: rec.index, classification: 'requires editorial review' }
  })

  // collect likely duplicates and review items
  classifications.forEach((c) => {
    if (c.classification === 'duplicate record')
      report.likelyDuplicates.push(c.index)
    if (c.classification === 'requires editorial review')
      report.requiresReview.push(c.index)
  })

  report.collisionGroups.push({
    baseSlug: base,
    count: items.length,
    records: recs,
    recommendations,
    classifications,
  })
}

// dedupe lists
report.likelyDuplicates = Array.from(new Set(report.likelyDuplicates))
report.requiresReview = Array.from(new Set(report.requiresReview))

// summary counts
report.collisionsFound = report.collisionGroups.length
report.recordsRequiringReview = report.requiresReview.length

console.log(JSON.stringify(report, null, 2))
