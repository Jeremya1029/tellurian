import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App.js"
import MainPage from "./components/MainPage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App/>
  </>
);
