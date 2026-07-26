import React from "react";
import "./Footer.css";

const footerDate = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
}).format(new Date());

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <ul className="footer-list footer-list-right">
          <li className="footer-list-item">
            <a
              href="https://github.com/JOHNFLEURIMOND/BlackInventors"
              className="footer-link footer-link-highlight"
            >
              <span>{footerDate}</span>
              <span className="tablet--hidden"> — </span>
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li className="footer-list-item">
            <a href="https://johnfleurimond.com" className="footer-link">
              John Fleurimond
            </a>
          </li>
          <li className="footer-list-item">
            <a href="https://twitter.com/tcodemonger" className="footer-link">
              Twitter
            </a>
          </li>
          <li className="footer-list-item">
            <a href="https://github.com/JOHNFLEURIMOND" className="footer-link">
              GitHub
            </a>
          </li>
          <li className="footer-list-item">
            <a
              href="https://www.linkedin.com/in/john-fleurimond/"
              className="footer-link"
              title="LinkedIn"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
