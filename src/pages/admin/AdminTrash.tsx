import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { useAuth } from "@/components/admin/AdminPasswordGate";
import { fetchTrash, restorePage, type PageContent } from "@/config/apiClient";

const AdminTrash = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";
  const [items, setItems] = useState<PageContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [restoring, setRestoring] = useState<string | null>(null);

  useEffect(() => {
    fetchTrash()
      .then(setItems)
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, []);

  const handleRestore = async (slug: string) => {
    setRestoring(slug);
    try {
      await restorePage(slug);
      setItems((prev) => prev.filter((p) => p.page_slug !== slug));
    } catch {
      // Fehler ignorieren
    }
    setRestoring(null);
  };

  const daysLeft = (deletedAt: string) => {
    const deleted = new Date(deletedAt);
    const expiry = new Date(deleted.getTime() + 30 * 24 * 60 * 60 * 1000);
    const now = new Date();
    return Math.max(0, Math.ceil((expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
  };

  return (
    <AdminLayout title="Papierkorb">
      <div className="mb-6">
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#6b7280" }}>
          Gelöschte Seiten werden 30 Tage lang aufbewahrt. Danach werden sie endgültig entfernt.
        </p>
      </div>

      {loading ? (
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#9ca3af" }}>
          Lade...
        </p>
      ) : items.length === 0 ? (
        <div
          className="rounded-xl p-8 text-center"
          style={{ background: "#ffffff", border: "1px solid #e5e7eb" }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              color: "#9ca3af",
            }}
          >
            Der Papierkorb ist leer.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.page_slug}
              className="flex items-center justify-between rounded-xl p-4"
              style={{ background: "#ffffff", border: "1px solid #e5e7eb" }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1a1a1a",
                  }}
                >
                  {item.page_title}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    color: "#9ca3af",
                  }}
                >
                  /{item.page_slug}
                  {item.updated_at && (
                    <>
                      {" — Gelöscht am "}
                      {new Date(item.updated_at).toLocaleDateString("de-DE", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </>
                  )}
                  {item.updated_at && (
                    <span style={{ color: daysLeft(item.updated_at) < 7 ? "#ef4444" : "#9ca3af" }}>
                      {" — "}
                      {daysLeft(item.updated_at)} Tage verbleibend
                    </span>
                  )}
                </p>
              </div>

              {isAdmin && (
                <button
                  type="button"
                  onClick={() => handleRestore(item.page_slug)}
                  disabled={restoring === item.page_slug}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    background: "#B8956A",
                    color: "#fff",
                  }}
                >
                  {restoring === item.page_slug ? "..." : "Wiederherstellen"}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminTrash;
