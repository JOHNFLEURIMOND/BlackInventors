import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Inventors = lazy(() => import('../component/Inventors'));

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <section className="hero-section" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="eyebrow">Digital Museum Archive</p>
              <h1 id="hero-title" className="hero-title">
                Black Inventors
              </h1>
              <p className="hero-description">
                Discover a curated collection of Black innovators whose work shaped modern life
                across science, technology, and design.
              </p>
              <p className="hero-details">
                This experience highlights the breadth of invention, creativity, and perseverance
                behind a remarkable legacy.
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
            </div>

            <aside className="hero-spotlight" aria-labelledby="spotlight-title">
              <p className="spotlight-eyebrow">Featured Story</p>
              <h2 id="spotlight-title" className="spotlight-name">
                Lewis Latimer
              </h2>
              <p className="spotlight-dates">1848 - 1928</p>
              <p className="spotlight-copy">
                From carbon filament improvements to blueprint systems, Latimer helped make electric
                light practical for everyday life.
              </p>
              <Link className="spotlight-link" to="/inventor/lewis-latimer">
                View story
              </Link>
            </aside>
          </section>
        </div>
      </div>
      <Suspense
        fallback={
          <section className="inventors-container" aria-labelledby="inventors-heading">
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
