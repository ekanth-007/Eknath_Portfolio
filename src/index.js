import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
//import "components/assets/css/styles.css";
import "./../src/components/Css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//import reportWebVitals from './reportWebVitals';
//reportWebVitals();
