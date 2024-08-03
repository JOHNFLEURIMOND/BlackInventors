import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Ensure you have a root element with the ID 'root' in your index.html file
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element with id 'root' not found.");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode>,
);
