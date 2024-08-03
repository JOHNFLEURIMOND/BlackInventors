import React, { Component } from "react";
import moment from "moment";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="footer-content">
            <ul className="footer-list footer-list-right">
              <li className="footer-list-item">
                <a
                  href="http://www.cityofboston.gov/311/"
                  className="footer-link yellow-link"
                >
                  <span className="footer-date">{moment().format("llll")}</span>
                  <span className="tablet-hidden"> - </span>
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
                <a
                  href="https://twitter.com/tcodemonger"
                  className="footer-link"
                >
                  Twitter
                </a>
              </li>
              <li className="footer-list-item">
                <a
                  href="https://github.com/JOHNFLEURIMOND"
                  className="footer-link"
                >
                  Github
                </a>
              </li>
              <li className="footer-list-item">
                <a
                  href="https://www.linkedin.com/in/john-fleurimond/"
                  className="footer-link"
                  title="Linkedin"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
