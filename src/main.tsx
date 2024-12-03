import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import authgear from "@authgear/web"

async function init() {
  try {
    // configure Authgear container instance
    await authgear.configure({
      endpoint: import.meta.env.VITE_AUTHGEAR_ENDPOINT,
      clientID: import.meta.env.VITE_AUTHGEAR_CLIENT_ID,
      sessionType: "refresh_token",
    });
  } finally {
    createRoot(document.getElementById("root")!).render(<App />);
  }
}

init().catch((e) => {
  // Error handling
  console.error(e)
});
