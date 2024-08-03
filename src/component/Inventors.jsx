import React from "react";
import Data from "../data/seats.json";
import "./Inventors.css"; // Import the CSS file for styling

const Inventors = () => {
  return (
    <section className="inventors-container">
      <div className="card-container">
        {Data.map((dataDetail, index) => (
          <a
            href="/"
            key={index}
            className="card"
            aria-labelledby={`card-title-${index}`}
          >
            <div
              className="card-image"
              style={{
                backgroundImage: `url(${dataDetail.image || "default-image.jpg"})`,
              }}
              aria-hidden="true"
            />
            <div className="card-content">
              <h2 id={`card-title-${index}`} className="card-name">
                {dataDetail.first} {dataDetail.last}
              </h2>
              <p className="card-year">{dataDetail.year}</p>
              <p className="card-passed">{dataDetail.passed}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Inventors;
