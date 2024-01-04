import React from "react";
import "./assets/style/style.scss"
import App from "./App";
import "../node_modules/normalize.css/normalize.css";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);