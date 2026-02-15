import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const LOGO_URL = "/images/trauworte-logo.webp";

interface DropdownItem {
  label: string;
  path: string;
}

interface NavItem {
  label: string;
  path: string;
  children?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  {
    label: "Eure Trauung",
    path: "/eure-freie-trauung",
    children: [
      { label: "Unterschiede der Trauungen", path: "/unterschiede-der-trauungen" },
      { label: "Bayrisch & Tracht", path: "/bayrisch-tracht-trauung" },
      { label: "Queere Trauung", path: "/gleichgeschlechtliche-queer-und-diverse-trauung" },
    ],
  },
  {
    label: "Meine Angebote",
    path: "/meine-angebote-freie-trauung",
    children: [
      { label: "Traurednerin & Preise", path: "/hochzeitsreden-traurednerin" },
      { label: "Hochzeitsplanerin & Fotograf", path: "/hochzeitsplanerin-fotograf" },
      { label: "Zeitlicher Ablauf", path: "/zeitlicher-ablauf-freie-trauung" },
    ],
  },
  { label: "Häufige Fragen", path: "/persoenliche-trauung-haeufige-fragen" },
  { label: "Über mich", path: "/ueber-traurednerin-stefanie" },
  { label: "Hochzeits-Blog", path: "/blog" },
];

const Dropdown = ({ item, isActive }: { item: NavItem; isActive: boolean }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 font-body text-sm tracking-wide transition-all duration-300 hover:opacity-70 ${
          isActive ? "font-semibold" : ""
        }`}
        style={{ color: "#111827" }}
      >
        {item.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 py-3 min-w-[240px] rounded-2xl z-50 transition-all duration-300 origin-top ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
        }}
      >
        {item.children!.map((child) => (
          <Link
            key={child.path}
            to={child.path}
            onClick={() => setOpen(false)}
            className="block px-5 py-2.5 font-body text-sm transition-all duration-200 hover:bg-white/60 hover:pl-6"
            style={{ color: "#111827" }}
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile-Menü schließen bei Navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (item: NavItem) =>
    location.pathname === item.path ||
    item.children?.some((c) => location.pathname === c.path);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-0" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(251, 233, 218, 0.85)" : "#FBE9DA",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.06)" : "none",
        color: "#111827",
      }}
    >
      <div className="container mx-auto px-4 py-4 flex flex-col items-center relative">
        {/* Logo */}
        <Link to="/" className="mb-3 transition-transform duration-500" style={{ transform: scrolled ? "scale(0.8)" : "scale(1)" }}>
          <img
            src={LOGO_URL}
            alt="TrauWorte"
            className="drop-shadow-sm"
            style={{ height: scrolled ? "100px" : "144px", transition: "height 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.children ? (
              <Dropdown key={item.path} item={item} isActive={!!isActive(item)} />
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`font-body text-sm tracking-wide transition-all duration-300 hover:opacity-70 ${
                  isActive(item) ? "font-semibold" : ""
                }`}
                style={{ color: "#111827" }}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            to="/freie-trauung-kontakt"
            className="btn-outline !py-2.5 !px-6 !text-sm"
          >
            Kontakt
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden absolute right-4 top-6 p-2 rounded-full transition-colors duration-200 hover:bg-white/30"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          style={{ color: "#111827" }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          backgroundColor: "rgba(251, 233, 218, 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <nav className="px-6 pb-6 pt-2">
          {navItems.map((item) => (
            <div key={item.path}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block py-3 font-body text-sm tracking-wide border-b"
                style={{ color: "#111827", borderColor: "rgba(17,24,39,0.08)" }}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-2.5 pl-6 font-body text-sm border-b"
                  style={{ color: "rgba(17,24,39,0.7)", borderColor: "rgba(17,24,39,0.04)" }}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="mt-4">
            <Link
              to="/freie-trauung-kontakt"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full text-center"
            >
              Kontakt
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
