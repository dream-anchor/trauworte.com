import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import { useAuth } from "@/components/admin/AdminPasswordGate";
import { pageRegistry, PAGE_GROUPS } from "@/config/pageRegistry";
import { fetchPages, type PageContent } from "@/config/apiClient";

const AdminDashboard = () => {
  const { user } = useAuth();
  const [pages, setPages] = useState<PageContent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPages().then((p) => {
      setPages(p);
      setLoading(false);
    });
  }, []);

  // Tageszeit-Begrüßung
  const hour = new Date().getHours();
  const greeting =
    hour < 6
      ? "Gute Nacht"
      : hour < 12
        ? "Guten Morgen"
        : hour < 17
          ? "Guten Tag"
          : hour < 21
            ? "Guten Abend"
            : "Gute Nacht";

  const firstName = user?.name.split(" ")[0] ?? "";

  // Stats
  const totalPages = pageRegistry.length;
  const editedPages = pages.length;
  const lastEdited = pages
    .filter((p) => p.updated_at)
    .sort((a, b) => (b.updated_at ?? "").localeCompare(a.updated_at ?? ""))
    .slice(0, 5);

  return (
    <AdminLayout title="Dashboard">
      {/* Begrüßung */}
      <div className="mb-8">
        <h2
          style={{
            fontFamily: "'Boska', serif",
            fontSize: "28px",
            fontWeight: 400,
            color: "#1a1a1a",
            letterSpacing: "0.02em",
          }}
        >
          {greeting},{" "}
          <span style={{ color: "#B8956A" }}>{firstName}</span>
        </h2>
        <p
          className="mt-1"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            color: "#6b7280",
          }}
        >
          {new Date().toLocaleDateString("de-DE", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div
          className="rounded-xl p-5"
          style={{ background: "#ffffff", border: "1px solid #e5e7eb" }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#9ca3af",
            }}
          >
            Seiten gesamt
          </p>
          <p
            className="mt-2"
            style={{
              fontFamily: "'Boska', serif",
              fontSize: "36px",
              fontWeight: 500,
              color: "#1a1a1a",
            }}
          >
            {totalPages}
          </p>
        </div>
        <div
          className="rounded-xl p-5"
          style={{ background: "#ffffff", border: "1px solid #e5e7eb" }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#9ca3af",
            }}
          >
            Im CMS bearbeitet
          </p>
          <p
            className="mt-2"
            style={{
              fontFamily: "'Boska', serif",
              fontSize: "36px",
              fontWeight: 500,
              color: "#B8956A",
            }}
          >
            {loading ? "..." : editedPages}
          </p>
        </div>
        <div
          className="rounded-xl p-5"
          style={{ background: "#ffffff", border: "1px solid #e5e7eb" }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#9ca3af",
            }}
          >
            Rolle
          </p>
          <p
            className="mt-2"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              color: "#1a1a1a",
            }}
          >
            {user?.role === "admin" ? "Administrator" : "Redakteur"}
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Seiten-Übersicht */}
        <div
          className="rounded-xl p-6"
          style={{ background: "#ffffff", border: "1px solid #e5e7eb" }}
        >
          <h3
            className="mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "#1a1a1a",
            }}
          >
            Alle Seiten bearbeiten
          </h3>
          {PAGE_GROUPS.map((group) => (
            <div key={group} className="mb-4">
              <p
                className="mb-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#9ca3af",
                }}
              >
                {group}
              </p>
              <div className="flex flex-wrap gap-2">
                {pageRegistry
                  .filter((p) => p.group === group)
                  .map((page) => (
                    <Link
                      key={page.slug}
                      to={`/admin/pages/${page.slug}`}
                      className="inline-block px-3 py-1.5 rounded-lg text-xs transition-colors hover:bg-[#fdf5ef] hover:text-[#B8956A]"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        color: "#374151",
                        background: "#f9fafb",
                        border: "1px solid #e5e7eb",
                      }}
                    >
                      {page.title}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Letzte Bearbeitungen */}
        <div
          className="rounded-xl p-6"
          style={{ background: "#ffffff", border: "1px solid #e5e7eb" }}
        >
          <h3
            className="mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "#1a1a1a",
            }}
          >
            Zuletzt bearbeitet
          </h3>
          {lastEdited.length > 0 ? (
            <div className="space-y-3">
              {lastEdited.map((page) => (
                <Link
                  key={page.page_slug}
                  to={`/admin/pages/${page.page_slug}`}
                  className="block p-3 rounded-lg transition-colors hover:bg-gray-50"
                  style={{ border: "1px solid #f3f4f6" }}
                >
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "#1a1a1a",
                    }}
                  >
                    {page.page_title}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      color: "#9ca3af",
                    }}
                  >
                    {page.updated_at
                      ? new Date(page.updated_at).toLocaleDateString("de-DE", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "–"}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                color: "#9ca3af",
              }}
            >
              {loading ? "Lade..." : "Noch keine Seiten im CMS bearbeitet. Wähle eine Seite aus der Sidebar."}
            </p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
