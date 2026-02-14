import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root")!;

// SSG: Wenn bereits HTML vom Prerender vorhanden ist → hydrieren
if (rootEl.innerHTML.trim() && rootEl.innerHTML.trim() !== "<!--app-html-->") {
  hydrateRoot(rootEl, <App />);
} else {
  // Dev-Modus: Normal rendern
  createRoot(rootEl).render(<App />);
}
