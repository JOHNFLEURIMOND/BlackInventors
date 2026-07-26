import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const headerDate = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
}).format(new Date());

const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="header-content">
        <Link to="/" className="brand-mark" aria-label="Go to homepage">
          Black Inventors
        </Link>
        <div className="header-meta">
          <span className="header-date">{headerDate}</span>
          <a
            href="https://github.com/JOHNFLEURIMOND/BlackInventors"
            className="header-link"
          >
            Project Repo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
