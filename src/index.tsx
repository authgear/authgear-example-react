import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import authgear from "@authgear/web";

authgear
  .configure({
    endpoint: "https://react-tutorial.authgearapps.com",
    clientID: "bdeabc526d0ddacf",
    sessionType: "refresh_token",
  })
  .then(
    () => {
      console.log("Success");
    },
    (err) => {
      console.log(err);
    }
  );

const root = ReactDOM.createRoot(
  document.getElementById("react-app-root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
