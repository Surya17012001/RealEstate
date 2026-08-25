import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

import {
  RealEstateProvider,
} from "./context/RealEstateContext.jsx";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <RealEstateProvider>
      <App />
    </RealEstateProvider>
  </React.StrictMode>
);