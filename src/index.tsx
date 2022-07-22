import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import authgear from "@authgear/web";

async function init() {
  try {
    await authgear.configure({
      endpoint: "https://react-tutorial.authgearapps.com",
      clientID: "bdeabc526d0ddacf",
      sessionType: "refresh_token",
    });
  } finally {
    createRoot(document.getElementById("react-app-root")!).render(<App />);
  }
}

// eslint-disable-next-line no-console
init().catch((e) => console.log(e));
