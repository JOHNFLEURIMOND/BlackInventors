const raw = require('../src/data/seats.json');

function slugify(input) {
  return String(input)
    .trim()
    .toLowerCase()
    .normalize('NFKD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function genId(r, i) {
  const base = `${r.first || 'unknown'} ${r.last || 'unknown'}`;
  const yearPart = r.year ? `-${r.year}` : '';
  return slugify(`${base}${yearPart}-${i}`);
}

function normalize(r, i) {
  const first = r.first || '';
  const last = r.last || '';
  const displayName = `${first} ${last}`.trim();
  const birthYear = r.year || null;
  const deathYear = r.passed === null || r.passed === undefined ? null : r.passed;

  return {
    _raw: r,
    id: genId(r, i),
    slug: slugify(displayName + (birthYear ? `-${birthYear}` : '')),
    firstName: first,
    lastName: last,
    displayName,
    birthYear,
    deathYear,
    summary: null,
    bio: null,
    inventions: [],
    categories: [],
    tags: [],
    images: [],
    timeline: [],
    relatedIds: [],
    sources: [],
  };
}

const normalized = raw.map((r, i) => normalize(r, i));
console.log(JSON.stringify(normalized.slice(0, 5), null, 2));
