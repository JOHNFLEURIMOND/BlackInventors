import { useMemo } from 'react'
import {
  getAllInventors,
  getInventorById,
  getInventorBySlug,
} from '../lib/dataLoader'

// useInventors exposes a stable API for local synchronous data today while
// preserving lookup helpers for future async backends.

export default function useInventors() {
  const inventors = useMemo(() => {
    try {
      return getAllInventors()
    } catch {
      return []
    }
  }, [])

  const loading = false
  const error = null
  const getBySlug = (slug) => getInventorBySlug(slug)
  const getById = (id) => getInventorById(id)

  return {
    inventors,
    loading,
    error,
    getBySlug,
    getById,
    getInventorBySlug: getBySlug,
    getInventorById: getById,
  }
}
