import { type ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AdminPasswordGate";
import { pageRegistry, PAGE_GROUPS } from "@/config/pageRegistry";

interface Props {
  children: ReactNode;
  title?: string;
}

const GROUP_ICONS: Record<string, string> = {
  Hauptseiten: "📄",
  "Regionale LPs": "📍",
  Magazin: "📰",
  Rechtliches: "⚖️",
};

const AdminLayout = ({ children, title }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

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
          width: "260px",
          background: "#ffffff",
          borderColor: "#e5e7eb",
        }}
      >
        {/* Logo */}
        <div className="px-6 py-5 border-b" style={{ borderColor: "#e5e7eb" }}>
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

        {/* Dashboard Link */}
        <div className="px-3 pt-4 pb-2">
          <Link
            to="/admin"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: isActive("/admin") ? 600 : 400,
              color: isActive("/admin") ? "#B8956A" : "#374151",
              background: isActive("/admin") ? "#fdf5ef" : "transparent",
              borderLeft: isActive("/admin") ? "2px solid #B8956A" : "2px solid transparent",
            }}
          >
            <span>📊</span>
            Dashboard
          </Link>
        </div>

        {/* Seitengruppen */}
        {PAGE_GROUPS.map((group) => (
          <div key={group} className="px-3 pt-4">
            <p
              className="px-3 mb-2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#9ca3af",
              }}
            >
              {GROUP_ICONS[group]} {group}
            </p>
            {pageRegistry
              .filter((p) => p.group === group)
              .map((page) => {
                const path = `/admin/pages/${page.slug}`;
                const active = isActive(path);
                return (
                  <Link
                    key={page.slug}
                    to={path}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: active ? 600 : 400,
                      color: active ? "#B8956A" : "#374151",
                      background: active ? "#fdf5ef" : "transparent",
                      borderLeft: active ? "2px solid #B8956A" : "2px solid transparent",
                      fontSize: "13px",
                    }}
                  >
                    {page.title}
                  </Link>
                );
              })}
          </div>
        ))}

        {/* Navigation */}
        <div className="px-3 pt-4">
          <p
            className="px-3 mb-2"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#9ca3af",
            }}
          >
            🔗 Navigation
          </p>
          <Link
            to="/admin/navigation"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: isActive("/admin/navigation") ? 600 : 400,
              color: isActive("/admin/navigation") ? "#B8956A" : "#374151",
              background: isActive("/admin/navigation") ? "#fdf5ef" : "transparent",
              borderLeft: isActive("/admin/navigation") ? "2px solid #B8956A" : "2px solid transparent",
              fontSize: "13px",
            }}
          >
            Menü bearbeiten
          </Link>
        </div>

        {/* User Management (nur Admin) */}
        {user?.role === "admin" && (
          <div className="px-3 pt-4">
            <p
              className="px-3 mb-2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#9ca3af",
              }}
            >
              ⚙️ System
            </p>
            <Link
              to="/admin/users"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: isActive("/admin/users") ? 600 : 400,
                color: isActive("/admin/users") ? "#B8956A" : "#374151",
                background: isActive("/admin/users") ? "#fdf5ef" : "transparent",
                borderLeft: isActive("/admin/users") ? "2px solid #B8956A" : "2px solid transparent",
                fontSize: "13px",
              }}
            >
              Benutzer
            </Link>
          </div>
        )}

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
        style={{ marginLeft: "260px", minHeight: "100vh" }}
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
