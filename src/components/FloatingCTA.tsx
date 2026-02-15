import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const docH = document.documentElement.scrollHeight;
      const winH = window.innerHeight;
      // Einblenden nach 600px Scroll, ausblenden kurz vor Footer
      const nearBottom = scrollY + winH > docH - 300;
      setVisible(scrollY > 600 && !nearBottom);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      to="/freie-trauung-kontakt"
      className="fixed bottom-6 right-6 z-40 btn-primary shadow-xl transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      Jetzt anfragen
    </Link>
  );
};

export default FloatingCTA;
