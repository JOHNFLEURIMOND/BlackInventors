import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error?.message || "Unexpected error" };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section
          style={{
            maxWidth: "112rem",
            margin: "2rem auto",
            padding: "0 1.6rem",
          }}
        >
          <h1>Something went wrong.</h1>
          <p>{this.state.message}</p>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
