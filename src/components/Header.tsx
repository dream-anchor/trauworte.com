import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const LOGO_URL =
  "https://cdn.durable.co/blocks/dQ3cBEXFTRESpwpPWP8YwCVR4XygOvrXgd09r9CKfF1GjjyEyoTRMOhJwlYgrlo1.png";

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
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 font-body text-sm transition-colors hover:opacity-70 ${
          isActive ? "font-semibold" : ""
        }`}
        style={{ color: "#111827" }}
      >
        {item.label}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          className="absolute top-full left-0 mt-2 py-2 min-w-[220px] rounded-lg shadow-lg z-50"
          style={{ backgroundColor: "#FBE9DA", border: "1px solid rgba(17,24,39,0.1)" }}
        >
          {item.children!.map((child) => (
            <Link
              key={child.path}
              to={child.path}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 font-body text-sm transition-colors hover:bg-white/50"
              style={{ color: "#111827" }}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (item: NavItem) =>
    location.pathname === item.path ||
    item.children?.some((c) => location.pathname === c.path);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{ backgroundColor: "#FBE9DA", color: "#111827" }}
    >
      <div className="container mx-auto px-4 py-4 flex flex-col items-center relative">
        {/* Logo */}
        <Link to="/" className="mb-3">
          <img
            src={LOGO_URL}
            alt="TrauWorte"
            className="drop-shadow-sm"
            style={{ height: "144px" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) =>
            item.children ? (
              <Dropdown key={item.path} item={item} isActive={!!isActive(item)} />
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`font-body text-sm transition-colors hover:opacity-70 ${
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
            className="font-body text-sm px-4 py-2 rounded-lg border transition-colors hover:bg-white/30"
            style={{ borderColor: "#111827", color: "#111827" }}
          >
            Kontakt
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden absolute right-4 top-6"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü öffnen"
          style={{ color: "#111827" }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="lg:hidden px-4 pb-4" style={{ backgroundColor: "#FBE9DA" }}>
          {navItems.map((item) => (
            <div key={item.path}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block py-3 font-body text-sm border-b"
                style={{ color: "#111827", borderColor: "rgba(17,24,39,0.1)" }}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 pl-6 font-body text-sm border-b"
                  style={{ color: "#111827", borderColor: "rgba(17,24,39,0.05)" }}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            to="/freie-trauung-kontakt"
            onClick={() => setIsOpen(false)}
            className="block py-3 font-body text-sm font-semibold"
            style={{ color: "#111827" }}
          >
            Kontakt
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
