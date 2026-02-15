import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const LOGO_URL = "/images/trauworte-logo.webp";

/* ─── Typen ─── */
interface DropdownItem {
  label: string;
  path: string;
  title?: string;
}

interface NavItem {
  label: string;
  path: string;
  children?: DropdownItem[];
  megaMenu?: boolean;
}

/* ─── Mega-Menu Daten ─── */
const ceremonieLinks: DropdownItem[] = [
  {
    label: "Unterschiede der Trauungen",
    path: "/unterschiede-der-trauungen",
    title: "Kirchliche vs. freie vs. standesamtliche Trauung",
  },
  {
    label: "Bayrisch & Tracht",
    path: "/bayrisch-tracht-trauung",
    title: "Freie Trauung auf Bayerisch mit Dirndl & Tracht",
  },
  {
    label: "Queere Trauung",
    path: "/gleichgeschlechtliche-queer-und-diverse-trauung",
    title: "Gleichgeschlechtliche und queere freie Trauung",
  },
];

interface RegionGroup {
  heading: string;
  links: (DropdownItem & { sub?: DropdownItem[] })[];
}

const regionGroups: RegionGroup[] = [
  {
    heading: "Deutschland",
    links: [
      {
        label: "Traurednerin München",
        path: "/traurednerin-muenchen",
        title: "Traurednerin für freie Trauungen in München",
      },
      {
        label: "Traurednerin Bayern & Seen",
        path: "/traurednerin-bayern",
        title: "Traurednerin Bayern – Starnberger See, Tegernsee, Chiemsee",
      },
    ],
  },
  {
    heading: "Alpen & Nachbarländer",
    links: [
      {
        label: "Freie Trauung Alpen",
        path: "/freie-trauung-alpen",
        title: "Freie Trauung in den Alpen – Berghochzeit",
      },
      {
        label: "Freie Trauung Österreich",
        path: "/traurednerin-oesterreich",
        title: "Freie Trauung Österreich – Salzburg, Tirol, Salzkammergut",
      },
    ],
  },
  {
    heading: "Mittelmeer",
    links: [
      {
        label: "Freie Trauung Italien",
        path: "/freie-trauung-italien",
        title: "Freie Trauung Italien – Toskana & Gardasee",
        sub: [
          {
            label: "Toskana",
            path: "/freie-trauung-toskana",
            title: "Freie Trauung Toskana – Hochzeit unter Zypressen",
          },
          {
            label: "Gardasee",
            path: "/freie-trauung-gardasee",
            title: "Freie Trauung Gardasee – Hochzeit am See",
          },
        ],
      },
      {
        label: "Freie Trauung Mallorca",
        path: "/freie-trauung-mallorca",
        title: "Freie Trauung Mallorca – Destination Wedding",
      },
    ],
  },
];

/* ─── Nav-Items ─── */
const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  {
    label: "Eure Trauung",
    path: "/eure-freie-trauung",
    megaMenu: true,
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
  { label: "Magazin", path: "/magazin" },
];

/* ─── Styles ─── */
const groupHeadingStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#B8956A",
  marginBottom: "6px",
  paddingLeft: "12px",
};

const dropdownBg: React.CSSProperties = {
  backgroundColor: "rgba(255, 255, 255, 0.92)",
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
};

/* ─── Einfaches Dropdown (Meine Angebote) ─── */
const SimpleDropdown = ({ item, isActive }: { item: NavItem; isActive: boolean }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleEnter = () => {
    clearTimeout(timerRef.current);
    setOpen(true);
  };
  const handleLeave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div ref={ref} className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
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
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[240px] z-50 transition-all duration-300 origin-top ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="py-3 rounded-2xl" style={dropdownBg} role="menu">
          {item.children!.map((child) => (
            <Link
              key={child.path}
              to={child.path}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block px-5 py-2.5 font-body text-sm transition-all duration-200 hover:bg-[#FBE9DA]/50 hover:pl-6"
              style={{ color: "#111827" }}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Mega-Menu (Eure Trauung) ─── */
const MegaMenu = ({ item, isActive }: { item: NavItem; isActive: boolean }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Escape schließt Menu
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const handleEnter = () => {
    clearTimeout(timerRef.current);
    setOpen(true);
  };
  const handleLeave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 150);
  };

  const close = () => setOpen(false);

  return (
    <div ref={ref} className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
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

      {/* Mega-Menu Panel */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 transition-all origin-top ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-[0.97] pointer-events-none"
        }`}
        style={{ transitionDuration: "250ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div
          className="rounded-2xl"
          style={{ ...dropdownBg, padding: "24px 28px", width: "680px", maxWidth: "calc(100vw - 32px)" }}
          role="menu"
        >
          <div className="flex gap-0">
            {/* ── Linke Spalte: Wissenswertes ── */}
            <div
              className="pr-7 flex-shrink-0"
              style={{ width: "40%", borderRight: "1px solid rgba(184, 149, 106, 0.15)" }}
            >
              <p style={groupHeadingStyle} role="presentation">Eure Zeremonien</p>
              {ceremonieLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  title={link.title}
                  role="menuitem"
                  onClick={close}
                  className="block font-body rounded-lg transition-all duration-200 hover:bg-[#FBE9DA]/50 hover:pl-4"
                  style={{ fontSize: "14px", color: "#111827", padding: "8px 12px" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* ── Rechte Spalte: Regionen ── */}
            <div className="pl-7 flex-1">
              <p style={groupHeadingStyle} role="presentation">Eure Wunschregion</p>

              {regionGroups.map((group, gi) => (
                <div key={group.heading} style={{ marginTop: gi > 0 ? "14px" : "0" }}>
                  <p
                    style={{
                      ...groupHeadingStyle,
                      fontSize: "9px",
                      color: "rgba(184, 149, 106, 0.65)",
                      marginBottom: "4px",
                      marginTop: "0",
                    }}
                    role="presentation"
                  >
                    {group.heading}
                  </p>
                  {group.links.map((link) => (
                    <div key={link.path}>
                      <Link
                        to={link.path}
                        title={link.title}
                        role="menuitem"
                        onClick={close}
                        className="block font-body rounded-lg transition-all duration-200 hover:bg-[#FBE9DA]/50 hover:pl-4"
                        style={{ fontSize: "14px", color: "#111827", padding: "7px 12px" }}
                      >
                        {link.label}
                        {link.sub && (
                          <span
                            style={{
                              display: "inline-block",
                              width: "5px",
                              height: "5px",
                              borderRight: "1.5px solid #B8956A",
                              borderBottom: "1.5px solid #B8956A",
                              transform: "rotate(-45deg)",
                              marginLeft: "6px",
                              opacity: 0.5,
                              verticalAlign: "middle",
                            }}
                          />
                        )}
                      </Link>
                      {link.sub?.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          title={s.title}
                          role="menuitem"
                          onClick={close}
                          className="block font-body rounded-lg transition-all duration-200 hover:bg-[#FBE9DA]/50 hover:pl-8"
                          style={{
                            fontSize: "13px",
                            color: "rgba(17, 24, 39, 0.7)",
                            padding: "5px 12px 5px 24px",
                          }}
                        >
                          · {s.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Mobile Akkordeon-Gruppe ─── */
const MobileRegionGroup = ({
  heading,
  links,
  onNavigate,
}: {
  heading: string;
  links: RegionGroup["links"];
  onNavigate: () => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-2.5 pl-6 pr-4 font-body text-xs tracking-wide"
        style={{ color: "#B8956A" }}
        aria-expanded={open}
      >
        <span style={{ letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500 }}>
          {heading}
        </span>
        <span
          className="transition-transform duration-300"
          style={{
            fontSize: "16px",
            lineHeight: 1,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            color: "#B8956A",
          }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-400 ease-out"
        style={{
          maxHeight: open ? "500px" : "0",
          opacity: open ? 1 : 0,
          transitionDuration: "400ms",
        }}
      >
        {links.map((link) => (
          <div key={link.path}>
            <Link
              to={link.path}
              title={link.title}
              onClick={onNavigate}
              className="block py-2 pl-10 font-body text-sm"
              style={{ color: "rgba(17,24,39,0.7)" }}
            >
              {link.label}
            </Link>
            {link.sub?.map((s) => (
              <Link
                key={s.path}
                to={s.path}
                title={s.title}
                onClick={onNavigate}
                className="block py-1.5 pl-14 font-body text-xs"
                style={{ color: "rgba(17,24,39,0.55)" }}
              >
                · {s.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── Header ─── */
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

  const allMegaMenuPaths = [
    "/eure-freie-trauung",
    ...ceremonieLinks.map((l) => l.path),
    ...regionGroups.flatMap((g) =>
      g.links.flatMap((l) => [l.path, ...(l.sub?.map((s) => s.path) || [])])
    ),
  ];

  const isActive = (item: NavItem) => {
    if (item.megaMenu) {
      return allMegaMenuPaths.includes(location.pathname);
    }
    return (
      location.pathname === item.path ||
      item.children?.some((c) => location.pathname === c.path)
    );
  };

  const closeMobile = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "py-0" : ""}`}
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
        <Link
          to="/"
          className="mb-3 transition-transform duration-500"
          style={{ transform: scrolled ? "scale(0.8)" : "scale(1)" }}
        >
          <img
            src={LOGO_URL}
            alt="TrauWorte"
            className="drop-shadow-sm"
            style={{
              height: scrolled ? "100px" : "144px",
              transition: "height 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.megaMenu ? (
              <MegaMenu key={item.path} item={item} isActive={!!isActive(item)} />
            ) : item.children ? (
              <SimpleDropdown key={item.path} item={item} isActive={!!isActive(item)} />
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
          <Link to="/freie-trauung-kontakt" className="btn-outline !py-2.5 !px-6 !text-sm">
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

      {/* ── Mobile Nav ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen
            ? "max-h-[800px] opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "rgba(251, 233, 218, 0.98)",
          transform: "translateZ(0)",
          position: "relative",
          zIndex: 60,
        }}
      >
        <nav className="px-6 pb-6 pt-2">
          {navItems.map((item) => (
            <div key={item.path}>
              {/* Nav-Item Link */}
              <Link
                to={item.path}
                onClick={closeMobile}
                className="block py-3 font-body text-sm tracking-wide border-b"
                style={{ color: "#111827", borderColor: "rgba(17,24,39,0.08)" }}
              >
                {item.label}
              </Link>

              {/* Mega-Menu → Mobile Akkordeon */}
              {item.megaMenu && (
                <div>
                  {/* Wissenswertes Links direkt */}
                  {ceremonieLinks.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      title={child.title}
                      onClick={closeMobile}
                      className="block py-2.5 pl-6 font-body text-sm border-b"
                      style={{ color: "rgba(17,24,39,0.7)", borderColor: "rgba(17,24,39,0.04)" }}
                    >
                      {child.label}
                    </Link>
                  ))}

                  {/* Separator */}
                  <div
                    className="flex items-center gap-3 my-3 mx-4"
                    style={{ color: "rgba(184, 149, 106, 0.5)" }}
                  >
                    <div
                      className="flex-1"
                      style={{ height: "1px", background: "rgba(184, 149, 106, 0.2)" }}
                    />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Wunschregion
                    </span>
                    <div
                      className="flex-1"
                      style={{ height: "1px", background: "rgba(184, 149, 106, 0.2)" }}
                    />
                  </div>

                  {/* Region-Gruppen als Akkordeon */}
                  {regionGroups.map((group) => (
                    <MobileRegionGroup
                      key={group.heading}
                      heading={group.heading}
                      links={group.links}
                      onNavigate={closeMobile}
                    />
                  ))}

                  {/* Abschluss-Border */}
                  <div style={{ borderBottom: "1px solid rgba(17,24,39,0.08)" }} />
                </div>
              )}

              {/* Einfaches Dropdown → Mobile Sub-Links */}
              {item.children?.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  onClick={closeMobile}
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
              onClick={closeMobile}
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
