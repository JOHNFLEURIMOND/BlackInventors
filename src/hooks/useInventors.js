import { useMemo } from "react";
import dataLoader from "../lib/dataLoader";

// useInventors exposes a stable API for local synchronous data today while
// preserving lookup helpers for future async backends.

export default function useInventors() {
  const inventors = useMemo(() => {
    try {
      return dataLoader.getAllInventors();
    } catch {
      return [];
    }
  }, []);

  const loading = false;
  const error = null;
  const getBySlug = (slug) => dataLoader.getInventorBySlug(slug);
  const getById = (id) => dataLoader.getInventorById(id);

  return {
    inventors,
    loading,
    error,
    getBySlug,
    getById,
    getInventorBySlug: getBySlug,
    getInventorById: getById,
  };
}
