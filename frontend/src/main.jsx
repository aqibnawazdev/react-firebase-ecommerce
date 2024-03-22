import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GolbalContextProvider from "./globalContext/GlobalContext.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GolbalContextProvider>
      <ToastContainer />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GolbalContextProvider>
  </React.StrictMode>
);
