import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FormDataProvider } from "./context/FormDataProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FormDataProvider>
        <App />
      </FormDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
