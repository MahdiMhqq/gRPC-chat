// STYLES
import "./assets/styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

// REACT
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
