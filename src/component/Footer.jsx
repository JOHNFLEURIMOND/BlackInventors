import './Footer.css';

const footerDate = new Intl.DateTimeFormat('en-US', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
}).format(new Date());

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-brand__name">Black Inventors</span>
          <span className="footer-brand__meta">Curated stories of innovation</span>
        </div>
        <ul className="footer-list">
          <li className="footer-list-item">
            <a
              href="https://github.com/JOHNFLEURIMOND/BlackInventors"
              className="footer-link footer-link-highlight"
              target="_blank"
              rel="noreferrer"
            >
              <span>{footerDate}</span>
            </a>
          </li>
          <li className="footer-list-item">
            <a
              href="https://johnfleurimond.com"
              className="footer-link"
              target="_blank"
              rel="noreferrer"
            >
              John Fleurimond
            </a>
          </li>
          <li className="footer-list-item">
            <a
              href="https://twitter.com/tcodemonger"
              className="footer-link"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li className="footer-list-item">
            <a
              href="https://github.com/JOHNFLEURIMOND"
              className="footer-link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="footer-list-item">
            <a
              href="https://www.linkedin.com/in/john-fleurimond/"
              className="footer-link"
              title="LinkedIn"
              target="_blank"
              rel="noreferrer"
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
