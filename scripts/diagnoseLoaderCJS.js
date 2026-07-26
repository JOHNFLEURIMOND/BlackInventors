const raw = require('../src/data/seats.json');

function normalizeUnicode(s) {
  return String(s || '')
    .trim()
    .normalize('NFKD')
    .replace(/\p{Diacritic}/gu, '');
}

function stripHonorifics(name) {
  if (!name) return '';
  return name.replace(/^\s*(dr\.|mr\.|mrs\.|ms\.|miss\.|sir\s+|dame\s+|rev\.)\s*/i, '').trim();
}

function slugify(input) {
  return normalizeUnicode(String(input || ''))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 60);
}

function shortHash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = (h * 33) ^ str.charCodeAt(i);
  }
  return (h >>> 0).toString(16).slice(0, 6);
}

function displayNameOf(r) {
  const first = r.first || '';
  const last = r.last || '';
  return `${first} ${last}`.trim();
}

const items = raw.map((r, i) => {
  const firstClean = stripHonorifics(r.first || '');
  const last = r.last || '';
  const displayName = displayNameOf(r);
  const birthYear = r.year || null;
  const deathYear = r.passed === undefined ? null : r.passed;

  const baseSlug = slugify(`${firstClean} ${last}`);
  const expandedSlug = slugify(`${r.first || ''} ${last}`);

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
  };
});

const groups = items.reduce((acc, it) => {
  const key = it.baseSlug || 'unknown';
  if (!acc[key]) acc[key] = [];
  acc[key].push(it);
  return acc;
}, {});

function rawKey(r) {
  try {
    return JSON.stringify(r);
  } catch {
    return String(r);
  }
}

const normalized = [];
const collisionReport = { total: raw.length, collisions: 0, duplicates: 0, sampleSlugs: [] };

Object.entries(groups).forEach(([base, group]) => {
  if (group.length === 1) {
    const g = group[0];
    const slug = base || slugify(g.displayName);
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
    };
    normalized[g.index] = rec;
    collisionReport.sampleSlugs.push(slug);
    return;
  }

  collisionReport.collisions++;

  const rawMap = {};
  group.forEach((g) => {
    const key = rawKey(g._raw);
    if (!rawMap[key]) rawMap[key] = [];
    rawMap[key].push(g);
  });

  const representatives = Object.values(rawMap).map((arr) => arr[0]);

  Object.values(rawMap).forEach((arr) => {
    if (arr.length > 1) {
      const canonical = arr[0];
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
        };
        collisionReport.duplicates++;
      });
    }
  });

  if (representatives.length === 1) {
    const rep = representatives[0];
    const slug = rep.baseSlug || slugify(rep.displayName);
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
    };
    collisionReport.sampleSlugs.push(slug);
    return;
  }

  const expandedMap = representatives.reduce((acc, r) => {
    acc[r.expandedSlug] = (acc[r.expandedSlug] || 0) + 1;
    return acc;
  }, {});

  const canUseExpanded = Object.values(expandedMap).every((v) => v === 1);
  if (canUseExpanded) {
    representatives.forEach((r) => {
      const slug = r.expandedSlug;
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
      };
      collisionReport.sampleSlugs.push(slug);
    });
    return;
  }

  const birthCounts = representatives.reduce((acc, r) => {
    const by = r.birthYear || 'null';
    acc[by] = (acc[by] || 0) + 1;
    return acc;
  }, {});

  const canUseBirth = representatives.every((r) => r.birthYear && birthCounts[r.birthYear] === 1);
  if (canUseBirth) {
    representatives.forEach((r) => {
      const slug = `${r.baseSlug}-${r.birthYear}`;
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
      };
      collisionReport.sampleSlugs.push(slug);
    });
    return;
  }

  representatives.forEach((r) => {
    const basePart = r.baseSlug || slugify(r.displayName);
    const birthPart = r.birthYear || 'na';
    const h = shortHash(`${r.displayName}|${r.birthYear}|${JSON.stringify(r._raw)}`);
    const slug = `${basePart}-${birthPart}-${h}`;
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
    };
    collisionReport.sampleSlugs.push(slug);
  });
});

Object.keys(groups).forEach((base) => {
  const group = groups[base];
  const rep = group.find((g) => normalized[g.index] && !normalized[g.index].duplicate);
  if (!rep) return;
  const canonicalSlug = normalized[rep.index].slug;
  group.forEach((g) => {
    const rec = normalized[g.index];
    if (rec && rec.duplicate && !rec.duplicateOf) {
      rec.duplicateOf = canonicalSlug;
    }
  });
});

for (let i = 0; i < raw.length; i++) {
  if (!normalized[i]) {
    const r = raw[i];
    const slug = slugify(displayNameOf(r));
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
    };
  }
}

console.log('diagnostics: total=', collisionReport.total);
console.log('diagnostics: collisions=', collisionReport.collisions);
console.log('diagnostics: duplicates=', collisionReport.duplicates);
console.log('diagnostics: sample slugs=', collisionReport.sampleSlugs.slice(0, 12));
console.log(JSON.stringify(normalized.slice(0, 5), null, 2));
