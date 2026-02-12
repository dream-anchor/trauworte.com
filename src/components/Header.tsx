import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LOGO_URL = "https://cdn.durable.co/blocks/dQ3cBEXFTRESpwpPWP8YwCVR4XygOvrXgd09r9CKfF1GjjyEyoTRMOhJwlYgrlo1.png";

const navItems = [
  { label: "Startseite", path: "/" },
  { label: "Über mich", path: "/ueber-mich" },
  { label: "Meine Angebote", path: "/angebote" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background/80 backdrop-blur-sm"} border-b border-border/50`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/">
          <img src={LOGO_URL} alt="TrauWorte Logo" className="h-10 md:h-12" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body text-sm tracking-wide transition-colors hover:text-accent ${
                location.pathname === item.path ? "text-accent font-semibold" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" className="font-body tracking-wide">
            <Link to="/kontakt">Kontakt</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü öffnen"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-background border-t border-border px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block py-3 font-body text-sm tracking-wide border-b border-border/50 transition-colors hover:text-accent ${
                location.pathname === item.path ? "text-accent font-semibold" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/kontakt"
            onClick={() => setIsOpen(false)}
            className="block py-3 font-body text-sm tracking-wide text-accent font-semibold"
          >
            Kontakt
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
