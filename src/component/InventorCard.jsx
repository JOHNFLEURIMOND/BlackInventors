import React from "react";
import { Link } from "react-router-dom";

/**
 * InventorCard
 * Reusable card component for inventor entries.
 * - lightweight, no external deps
 * - uses native `loading="lazy"` for images
 * - accessible: focusable, labeled, semantic
 */
const InventorCard = ({ inventor, index, onSelect }) => {
  const fullName =
    inventor.displayName ||
    `${inventor.firstName || ""} ${inventor.lastName || ""}`.trim();
  const image = inventor.images?.[0] || null;
  const deathLabel = inventor.deathYear
    ? `d. ${inventor.deathYear}`
    : "Living legacy";

  return (
    <article
      className="card"
      role="group"
      aria-labelledby={`card-title-${index}`}
    >
      <Link
        className="card-link"
        to={`/inventor/${inventor.slug}`}
        onClick={() => onSelect?.(inventor, index)}
        aria-label={`View details for ${fullName}`}
      >
        <div className="card-media">
          {image ? (
            <img
              className="card-img"
              src={image.url}
              alt={image.alt || `Portrait of ${fullName}`}
              loading="lazy"
              decoding="async"
              width="600"
              height="400"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <div className="card-img--placeholder" aria-hidden="true" />
          )}
        </div>

        <div className="card-content">
          <p className="card-year">{inventor.birthYear || "Unknown year"}</p>
          <h3 id={`card-title-${index}`} className="card-name">
            {fullName}
          </h3>
          <p className="card-passed">{deathLabel}</p>
        </div>
      </Link>
    </article>
  );
};

export default InventorCard;
