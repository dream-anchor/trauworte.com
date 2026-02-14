import { useEffect } from "react";

const usePrerenderReady = (ready: boolean) => {
  useEffect(() => {
    if (ready && typeof document !== "undefined") {
      document.documentElement.setAttribute("data-prerender-ready", "true");
      document.dispatchEvent(new Event("prerender-ready"));
    }
  }, [ready]);
};

export default usePrerenderReady;
