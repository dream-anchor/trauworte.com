import { type ReactNode, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AdminPasswordGate";

interface Props {
  children: ReactNode;
  title?: string;
}

// Sidebar-Menüstruktur — spiegelt das Frontend-Menü wider
interface SidebarItem {
  label: string;
  slug?: string; // Wenn vorhanden → Link zu /admin/pages/:slug
  path?: string; // Wenn vorhanden → Link zu diesem Pfad
  children?: SidebarItem[];
}

const sidebarMenu: SidebarItem[] = [
  { label: "Dashboard", path: "/admin" },
  { label: "Startseite", slug: "index" },
  {
    label: "Eure Trauung",
    slug: "eure-freie-trauung",
    children: [
      { label: "Bayrisch & Tracht", slug: "bayrisch-tracht-trauung" },
      { label: "Queere Trauung", slug: "gleichgeschlechtliche-queer-und-diverse-trauung" },
      {
        label: "Deutschland",
        children: [
          { label: "Traurednerin München", slug: "traurednerin-muenchen" },
          { label: "Traurednerin Bayern", slug: "traurednerin-bayern" },
        ],
      },
      {
        label: "Alpen & Nachbarländer",
        children: [
          { label: "Freie Trauung Alpen", slug: "freie-trauung-alpen" },
          { label: "Freie Trauung Österreich", slug: "traurednerin-oesterreich" },
        ],
      },
      {
        label: "Mittelmeer",
        children: [
          { label: "Freie Trauung Italien", slug: "freie-trauung-italien" },
          { label: "Toskana", slug: "freie-trauung-toskana" },
          { label: "Gardasee", slug: "freie-trauung-gardasee" },
          { label: "Freie Trauung Mallorca", slug: "freie-trauung-mallorca" },
        ],
      },
    ],
  },
  {
    label: "Meine Angebote",
    slug: "meine-angebote-freie-trauung",
    children: [
      { label: "Preise & Pakete", slug: "hochzeitsreden-traurednerin" },
      { label: "Unterschiede der Trauungen", slug: "unterschiede-der-trauungen" },
      { label: "Partner", slug: "hochzeitsplanerin-fotograf" },
      { label: "Zeitlicher Ablauf", slug: "zeitlicher-ablauf-freie-trauung" },
    ],
  },
  { label: "Über mich", slug: "ueber-traurednerin-stefanie" },
  { label: "Häufige Fragen", slug: "persoenliche-trauung-haeufige-fragen" },
  {
    label: "Magazin",
    slug: "magazin",
    children: [
      { label: "Trausprüche", slug: "magazin/trausprueche-freie-trauung" },
    ],
  },
  { label: "Kontakt", slug: "freie-trauung-kontakt" },
  {
    label: "Rechtliches",
    children: [
      { label: "Impressum", slug: "impressum" },
      { label: "Datenschutz", slug: "datenschutzerklaerung" },
    ],
  },
  { label: "Menü bearbeiten", path: "/admin/navigation" },
  { label: "Papierkorb", path: "/admin/trash" },
];

// Rekursive Sidebar-Item-Komponente
function SidebarNavItem({ item, depth, currentPath }: { item: SidebarItem; depth: number; currentPath: string }) {
  const itemPath = item.path ?? (item.slug ? `/admin/pages/${item.slug}` : "");
  const isActive = itemPath ? currentPath === itemPath : false;
  const hasChildren = item.children && item.children.length > 0;

  // Auto-open wenn ein Kind aktiv ist
  const isChildActive = hasChildren && item.children!.some(
    (child) => {
      const childPath = child.path ?? (child.slug ? `/admin/pages/${child.slug}` : "");
      if (currentPath === childPath) return true;
      if (child.children) return child.children.some((gc) => {
        const gcPath = gc.path ?? (gc.slug ? `/admin/pages/${gc.slug}` : "");
        return currentPath === gcPath;
      });
      return false;
    }
  );

  const [open, setOpen] = useState(isActive || isChildActive);

  // Depth-basierte Styles
  const isGroupHeading = depth > 0 && hasChildren && !item.slug;
  const pl = depth === 0 ? "12px" : depth === 1 ? "24px" : "36px";

  if (isGroupHeading) {
    // Gruppenüberschrift (z.B. "Deutschland", "Mittelmeer")
    return (
      <div className="mt-2">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-1.5 text-left"
          style={{
            paddingLeft: pl,
            paddingRight: "12px",
            fontFamily: "'Inter', sans-serif",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#9ca3af",
          }}
        >
          {item.label}
          <span style={{ fontSize: "10px", color: "#d1d5db" }}>{open ? "▼" : "▶"}</span>
        </button>
        {open && item.children!.map((child) => (
          <SidebarNavItem key={child.slug ?? child.label} item={child} depth={depth + 1} currentPath={currentPath} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center">
        {itemPath ? (
          <Link
            to={itemPath}
            className="flex-1 flex items-center py-2 rounded-md text-sm transition-colors"
            style={{
              paddingLeft: pl,
              paddingRight: "8px",
              fontFamily: "'Inter', sans-serif",
              fontSize: depth === 0 ? "13px" : "12px",
              fontWeight: isActive ? 600 : depth === 0 ? 500 : 400,
              color: isActive ? "#B8956A" : "#374151",
              background: isActive ? "#fdf5ef" : "transparent",
              borderLeft: isActive ? "2px solid #B8956A" : "2px solid transparent",
            }}
          >
            {item.label}
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex-1 flex items-center justify-between py-2 rounded-md text-sm transition-colors text-left"
            style={{
              paddingLeft: pl,
              paddingRight: "8px",
              fontFamily: "'Inter', sans-serif",
              fontSize: depth === 0 ? "13px" : "12px",
              fontWeight: depth === 0 ? 500 : 400,
              color: "#374151",
            }}
          >
            {item.label}
            <span style={{ fontSize: "10px", color: "#d1d5db" }}>{open ? "▼" : "▶"}</span>
          </button>
        )}
        {hasChildren && itemPath && (
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="px-2 py-2 transition-colors"
            style={{ fontSize: "10px", color: "#d1d5db" }}
          >
            {open ? "▼" : "▶"}
          </button>
        )}
      </div>
      {open && hasChildren && item.children!.map((child) => (
        <SidebarNavItem key={child.slug ?? child.label} item={child} depth={depth + 1} currentPath={currentPath} />
      ))}
    </div>
  );
}

const AdminLayout = ({ children, title }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  return (
    <div className="min-h-screen flex" style={{ background: "#f3f4f6" }}>
      {/* Sidebar */}
      <aside
        className="fixed top-0 left-0 h-full overflow-y-auto border-r"
        style={{
          width: "280px",
          background: "#ffffff",
          borderColor: "#e5e7eb",
        }}
      >
        {/* Logo */}
        <div className="px-5 py-4 border-b" style={{ borderColor: "#e5e7eb" }}>
          <Link to="/admin" className="flex items-center gap-2">
            <span
              style={{
                fontFamily: "'Boska', serif",
                fontSize: "20px",
                fontWeight: 500,
                color: "#1a1a1a",
                letterSpacing: "0.05em",
              }}
            >
              Sick{" "}
              <span style={{ color: "#B8956A" }}>CMS</span>
            </span>
            <span
              className="ml-auto inline-block rounded-full"
              style={{
                width: "8px",
                height: "8px",
                background: "#B8956A",
              }}
            />
          </Link>
        </div>

        {/* Navigation — spiegelt Frontend-Menü wider */}
        <nav className="px-2 py-3 space-y-0.5">
          {sidebarMenu.map((item) => (
            <SidebarNavItem
              key={item.slug ?? item.path ?? item.label}
              item={item}
              depth={0}
              currentPath={location.pathname}
            />
          ))}
        </nav>

        {/* User Info + Logout */}
        <div
          className="px-3 py-4 mt-4 border-t"
          style={{ borderColor: "#e5e7eb" }}
        >
          <div className="flex items-center gap-3 px-3">
            <div
              className="flex items-center justify-center rounded-full text-white text-xs font-medium"
              style={{
                width: "32px",
                height: "32px",
                background: "#B8956A",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {user?.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="truncate"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#1a1a1a",
                }}
              >
                {user?.name}
              </p>
              <p
                className="truncate"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  color: "#9ca3af",
                }}
              >
                {user?.role === "admin" ? "Administrator" : "Redakteur"}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              title="Abmelden"
              style={{ fontSize: "18px" }}
            >
              ↪
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className="flex-1"
        style={{ marginLeft: "280px", minHeight: "100vh" }}
      >
        {/* Top Bar */}
        <header
          className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 border-b"
          style={{
            background: "rgba(243,244,246,0.95)",
            backdropFilter: "blur(8px)",
            borderColor: "#e5e7eb",
          }}
        >
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              color: "#1a1a1a",
            }}
          >
            {title ?? "Dashboard"}
          </h1>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors hover:text-[#B8956A]"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#6b7280",
              fontSize: "12px",
            }}
          >
            Website ansehen →
          </a>
        </header>

        {/* Page Content */}
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
