import { readFile } from 'node:fs/promises'

async function read(path) {
  try {
    return await readFile(path, 'utf8')
  } catch (error) {
    throw new Error(`Missing required build artifact: ${path}`, { cause: error })
  }
}

const indexHtml = await read('dist/index.html')
const manifestText = await read('dist/manifest.json')

const failures = []

if (!indexHtml.includes('<div id="root"></div>')) {
  failures.push('dist/index.html is missing the React root element')
}

if (!indexHtml.includes('Black Inventors Archive')) {
  failures.push('dist/index.html does not contain the production document metadata')
}

if (indexHtml.includes('%PUBLIC_URL%')) {
  failures.push('dist/index.html contains an unresolved Create React App placeholder')
}

if (indexHtml.includes('/src/main.jsx')) {
  failures.push('dist/index.html still references the source entry instead of bundled assets')
}

let manifest
try {
  manifest = JSON.parse(manifestText)
} catch (error) {
  throw new Error('dist/manifest.json is not valid JSON', { cause: error })
}

if (manifest.start_url !== '/') {
  failures.push('dist/manifest.json must use "/" as start_url')
}

if (manifest.scope !== '/') {
  failures.push('dist/manifest.json must use "/" as scope')
}

if (failures.length > 0) {
  console.error('Production build verification failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log('Production build artifacts verified.')
