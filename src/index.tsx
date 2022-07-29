import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import authgear from "@authgear/web";

export const endpoint = ""; // The Authgear endpoint of your project e.g. https://my-app.authgearapps.com
export const clientID = ""; // Client ID can be obtained in the "Applications" page of the Portal

async function init() {
  try {
    await authgear.configure({
      endpoint,
      clientID,
      sessionType: "refresh_token",
    });
  } finally {
    createRoot(document.getElementById("react-app-root")!).render(<App />);
  }
}

// eslint-disable-next-line no-console
init().catch((e) => console.log(e));
