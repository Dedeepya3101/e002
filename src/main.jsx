// src/main.jsx
import React from "react";                         // safe to import React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";                              // global styles (keep if present)
import App from "./App.jsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
  // helpful error if index.html missing the <div id="root"></div>
  throw new Error("Root element not found — please ensure <div id=\"root\"></div> exists in index.html");
}

// create root and render App inside StrictMode
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// debug log to confirm the app started
console.log("React app mounted — App rendered to #root");
