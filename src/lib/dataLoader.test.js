import { describe, expect, it } from 'vitest'
import {
  getAllInventors,
  getDiagnostics,
  getInventorBySlug,
} from './dataLoader'

describe('dataLoader', () => {
  it('returns unique ids and slugs for canonical inventors', () => {
    const inventors = getAllInventors()
    const ids = new Set(inventors.map((inventor) => inventor.id))
    const slugs = new Set(inventors.map((inventor) => inventor.slug))

    expect(ids.size).toBe(inventors.length)
    expect(slugs.size).toBe(inventors.length)
    expect(inventors[0].id).toBe(inventors[0].slug)
  })

  it('exposes exactly one visible inventor per slug (no duplicate raw records)', () => {
    const inventors = getAllInventors()
    const bouchetRecords = inventors.filter(
      (inventor) => inventor.slug === 'edward-bouchet'
    )

    expect(bouchetRecords).toHaveLength(1)
    expect(getInventorBySlug('edward-bouchet')).toBeTruthy()
    expect(getDiagnostics().duplicates).toBe(0)
    expect(getDiagnostics().collisions).toBe(0)
  })
})
