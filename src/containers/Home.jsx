import React, { Component } from "react";
import { Animated } from "react-animated-css";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-content">
          <Animated
            animationInDelay={100}
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible
          >
            <section className="hero-section">
              <h1 className="hero-title">Black Inventors</h1>
              <p className="hero-description">
                This is an application that shows famous Black inventors'
                history.
              </p>
              <p className="hero-details">
                Higher order functions like reduce to show long-lived inventors,
                map the inventors alphabetically by first & last name, and
                filter the inventors from oldest to youngest.
              </p>
              <p className="hero-action">
                <a
                  className="hero-button"
                  href="https://github.com/JOHNFLEURIMOND/BlackInventors"
                  role="button"
                  aria-label="Learn more about Black Inventors"
                >
                  Learn More
                </a>
              </p>
            </section>
          </Animated>
        </div>
      </div>
    );
  }
}
