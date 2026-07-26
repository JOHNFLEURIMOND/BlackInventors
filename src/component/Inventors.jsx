import React, { useMemo, useState } from "react";
import "./Inventors.css";
import InventorCard from "./InventorCard";
import useInventors from "../hooks/useInventors";
import { trackFilter, trackInventorClick, trackSearch } from "../lib/analytics";

function getEra(year) {
  if (!year) return "unknown";
  if (year < 1800) return "1700s";
  if (year < 1900) return "1800s";
  if (year < 2000) return "1900s";
  return "2000+";
}

const Inventors = () => {
  const { inventors, loading, error } = useInventors();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [era, setEra] = useState("all");
  const [sort, setSort] = useState("name-asc");

  const categories = useMemo(() => {
    const set = new Set();
    inventors.forEach((inventor) => {
      inventor.categories.forEach((item) => set.add(item));
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [inventors]);

  const featured = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const filtered = inventors.filter((inventor) => {
      const searchable = [
        inventor.displayName,
        inventor.summary,
        inventor.bio,
        ...inventor.tags,
        ...inventor.categories,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        !normalizedQuery || searchable.includes(normalizedQuery);
      const matchesCategory =
        category === "all" || inventor.categories.includes(category);
      const matchesEra = era === "all" || getEra(inventor.birthYear) === era;

      return matchesQuery && matchesCategory && matchesEra;
    });

    const sorted = [...filtered];
    sorted.sort((a, b) => {
      if (sort === "birth-asc") return (a.birthYear || 0) - (b.birthYear || 0);
      if (sort === "recent")
        return (
          (b.deathYear || b.birthYear || 0) - (a.deathYear || a.birthYear || 0)
        );
      return a.displayName.localeCompare(b.displayName);
    });

    return sorted;
  }, [inventors, query, category, era, sort]);

  if (loading) {
    return (
      <section
        id="featured-innovators"
        className="inventors-container"
        aria-labelledby="inventors-heading"
      >
        <div className="inventors-intro">
          <h2 id="inventors-heading" className="inventors-title">
            Loading the archive...
          </h2>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="featured-innovators"
        className="inventors-container"
        aria-labelledby="inventors-heading"
      >
        <div className="inventors-intro">
          <h2 id="inventors-heading" className="inventors-title">
            Archive unavailable right now
          </h2>
          <p className="inventors-copy">Please refresh and try again.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="featured-innovators"
      className="inventors-container"
      aria-labelledby="inventors-heading"
    >
      <div className="inventors-intro">
        <p className="inventors-eyebrow">Featured innovators</p>
        <h2 id="inventors-heading" className="inventors-title">
          Voices behind the inventions
        </h2>
        <p className="inventors-copy">
          Explore a selection of visionary figures whose work redefined what was
          possible in science, engineering, and everyday life.
        </p>

        <form
          className="inventors-controls"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="control-field" htmlFor="inventor-search">
            Search
            <input
              id="inventor-search"
              type="search"
              value={query}
              onChange={(event) => {
                const value = event.target.value;
                setQuery(value);
                trackSearch({ query: value });
              }}
              placeholder="Search by name, field, or keyword"
            />
          </label>

          <label className="control-field" htmlFor="inventor-category">
            Category
            <select
              id="inventor-category"
              value={category}
              onChange={(event) => {
                const value = event.target.value;
                setCategory(value);
                trackFilter({ type: "category", value });
              }}
            >
              <option value="all">All categories</option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="control-field" htmlFor="inventor-era">
            Era
            <select
              id="inventor-era"
              value={era}
              onChange={(event) => {
                const value = event.target.value;
                setEra(value);
                trackFilter({ type: "era", value });
              }}
            >
              <option value="all">All eras</option>
              <option value="1700s">1700s</option>
              <option value="1800s">1800s</option>
              <option value="1900s">1900s</option>
              <option value="2000+">2000+</option>
            </select>
          </label>

          <label className="control-field" htmlFor="inventor-sort">
            Sort by
            <select
              id="inventor-sort"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <option value="name-asc">A-Z</option>
              <option value="birth-asc">Birth year</option>
              <option value="recent">Most recent</option>
            </select>
          </label>
        </form>

        <p className="inventors-status" aria-live="polite">
          Showing {featured.length} of {inventors.length} inventors.
        </p>
      </div>

      <div className="card-container">
        {featured.map((inventor, index) => (
          <InventorCard
            inventor={inventor}
            index={index}
            key={inventor.id}
            onSelect={(selected, position) => {
              trackInventorClick({
                inventorId: selected.id,
                category: selected.categories[0] || "uncategorized",
                position: position + 1,
              });
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Inventors;
