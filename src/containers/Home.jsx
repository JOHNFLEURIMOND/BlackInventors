import React, { lazy, Suspense } from "react";
import "./Home.css";

const Inventors = lazy(() => import("../component/Inventors"));

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <section className="hero-section" aria-labelledby="hero-title">
            <p className="eyebrow">Digital Museum Archive</p>
            <h1 id="hero-title" className="hero-title">
              Black Inventors
            </h1>
            <p className="hero-description">
              Discover a curated collection of Black innovators whose work
              shaped modern life across science, technology, and design.
            </p>
            <p className="hero-details">
              This experience highlights the breadth of invention, creativity,
              and perseverance behind a remarkable legacy.
            </p>
            <p className="hero-action">
              <a
                className="hero-button"
                href="#featured-innovators"
                aria-label="Jump to featured innovators"
              >
                Explore the archive
              </a>
            </p>
          </section>
        </div>
      </div>
      <Suspense
        fallback={
          <section
            className="inventors-container"
            aria-labelledby="inventors-heading"
          >
            <div className="inventors-intro">
              <h2 id="inventors-heading" className="inventors-title">
                Loading the archive...
              </h2>
            </div>
          </section>
        }
      >
        <Inventors />
      </Suspense>
    </>
  );
};

export default Home;
