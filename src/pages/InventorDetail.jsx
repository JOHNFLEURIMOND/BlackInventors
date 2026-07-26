import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useInventors from "../hooks/useInventors";
import "./InventorDetail.css";

export default function InventorDetail() {
  const { slug } = useParams();
  const { loading, error, getBySlug, getById } = useInventors();
  const inventor = getBySlug(slug);

  useEffect(() => {
    if (loading) return;

    if (!inventor) {
      document.title = "Inventor Not Found | Black Inventors Archive";
      return;
    }

    document.title = `${inventor.displayName} | Black Inventors Archive`;
  }, [inventor, loading]);

  if (loading)
    return <div className="inventor-detail-shell">Loading inventor...</div>;
  if (error)
    return <div className="inventor-detail-shell">Error loading data.</div>;

  if (!inventor) {
    return (
      <main className="inventor-detail-shell">
        <h1>Inventor not found</h1>
        <p>No inventor matches &ldquo;{slug}&rdquo;.</p>
        <p>
          <Link to="/">Return home</Link>
        </p>
      </main>
    );
  }

  const related = inventor.relatedIds.map((id) => getById(id)).filter(Boolean);

  return (
    <main className="inventor-detail-shell">
      <nav className="detail-nav">
        <Link to="/">← Back to archive</Link>
      </nav>

      <article className="inventor-detail-card" aria-labelledby="inv-title">
        <header className="detail-hero">
          <h1 id="inv-title">{inventor.displayName}</h1>
          <p className="detail-dates">
            {inventor.birthYear}
            {inventor.deathYear ? ` - ${inventor.deathYear}` : " - Present"}
          </p>
          <p>
            {inventor.summary ||
              "A pioneer whose work advanced modern innovation."}
          </p>
        </header>

        <section className="detail-section">
          <h2>Summary</h2>
          <p>{inventor.summary || "Summary not yet provided."}</p>
        </section>

        <section className="detail-section">
          <h2>Biography</h2>
          <p>{inventor.bio || "Biography not yet provided."}</p>
        </section>

        <section className="detail-section">
          <h2>Major Inventions</h2>
          {inventor.inventions.length === 0 ? (
            <p>Invention records are being curated.</p>
          ) : (
            <ul>
              {inventor.inventions.map((invention) => (
                <li key={`${inventor.id}-${invention.name}`}>
                  {invention.name}
                  {invention.year ? ` (${invention.year})` : ""}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="detail-section">
          <h2>Timeline</h2>
          {inventor.timeline.length === 0 ? (
            <p>Timeline entries are being curated.</p>
          ) : (
            <ol>
              {inventor.timeline.map((item, index) => (
                <li key={`${inventor.id}-timeline-${index}`}>
                  <strong>{item.year}:</strong> {item.event}
                </li>
              ))}
            </ol>
          )}
        </section>

        <section className="detail-section">
          <h2>Related Inventors</h2>
          {related.length === 0 ? (
            <p>Related profiles are being curated.</p>
          ) : (
            <ul>
              {related.map((person) => (
                <li key={person.id}>
                  <Link to={`/inventor/${person.slug}`}>
                    {person.displayName}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </article>
    </main>
  );
}
