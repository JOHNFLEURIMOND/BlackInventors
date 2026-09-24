import { describe, expect, it } from 'vitest'
import { eventParameters, pageContext } from './analyticsContract'

describe('analytics contract', () => {
  it('redacts arbitrary paths, URLs and unknown inventor slugs', () => {
    for (const path of [
      '/private@example.com',
      '/inventor/private@example.com',
      '//other.example/private',
      '/inventor/constructor',
    ]) {
      expect(pageContext(path).page_path).toBe('/not-found')
      expect(JSON.stringify(pageContext(path))).not.toContain('private')
    }
    expect(
      pageContext('/inventor/lewis-latimer?secret=1#private').page_path
    ).toBe('/inventor/lewis-latimer')
  })
  it('drops unapproved fields and derives inventor metadata from the catalog', () => {
    expect(
      eventParameters('inventor_select', {
        inventor_id: 'lewis-latimer',
        selection_source: 'featured',
        email: 'private@example.com',
        inventor_category: 'private',
      })
    ).toEqual({ inventor_id: 'lewis-latimer', selection_source: 'featured' })
    expect(
      eventParameters('inventor_search', {
        query_length_bucket: '4_10',
        result_count: 1,
        query: 'private',
      })
    ).toEqual({ query_length_bucket: '4_10', result_count: 1 })
  })
  it.each([
    ['unknown_event', {}],
    [
      'inventor_select',
      { inventor_id: 'constructor', selection_source: 'list' },
    ],
    [
      'inventor_select',
      { inventor_id: 'lewis-latimer', selection_source: 'private' },
    ],
    [
      'inventor_filter_apply',
      { filter_name: 'era', filter_value: 'private', result_count: 0 },
    ],
    ['inventor_search', { query_length_bucket: 'private', result_count: 0 }],
    ['inventor_search', { query_length_bucket: 'empty', result_count: -1 }],
    [
      'inventor_search',
      { query_length_bucket: 'empty', result_count: Infinity },
    ],
    ['inventor_search', { query_length_bucket: 'empty', result_count: 99999 }],
  ])('rejects invalid %s payloads', (name, payload) => {
    expect(eventParameters(name, payload)).toBeNull()
  })
})
