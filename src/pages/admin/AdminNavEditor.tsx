import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  fetchNavigation,
  saveNavigation,
  type NavigationItem,
  type NavigationData,
} from "@/config/apiClient";

const AdminNavEditor = () => {
  const [items, setItems] = useState<NavigationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchNavigation("main").then((nav) => {
      if (nav) {
        setItems(nav.items);
      }
      setLoading(false);
    });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    const data: NavigationData = {
      nav_key: "main",
      items,
    };
    await saveNavigation(data);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const updateItem = (idx: number, field: keyof NavigationItem, value: string) => {
    const updated = [...items];
    updated[idx] = { ...updated[idx], [field]: value };
    setItems(updated);
  };

  const addItem = () => {
    setItems([...items, { label: "", path: "/" }]);
  };

  const removeItem = (idx: number) => {
    setItems(items.filter((_, i) => i !== idx));
  };

  const moveItem = (idx: number, direction: -1 | 1) => {
    const newIdx = idx + direction;
    if (newIdx < 0 || newIdx >= items.length) return;
    const updated = [...items];
    [updated[idx], updated[newIdx]] = [updated[newIdx], updated[idx]];
    setItems(updated);
  };

  // Sub-Items (Dropdown-Kinder)
  const addChild = (parentIdx: number) => {
    const updated = [...items];
    const children = updated[parentIdx].children ?? [];
    updated[parentIdx] = {
      ...updated[parentIdx],
      children: [...children, { label: "", path: "/" }],
    };
    setItems(updated);
  };

  const updateChild = (
    parentIdx: number,
    childIdx: number,
    field: keyof NavigationItem,
    value: string
  ) => {
    const updated = [...items];
    const children = [...(updated[parentIdx].children ?? [])];
    children[childIdx] = { ...children[childIdx], [field]: value };
    updated[parentIdx] = { ...updated[parentIdx], children };
    setItems(updated);
  };

  const removeChild = (parentIdx: number, childIdx: number) => {
    const updated = [...items];
    const children = (updated[parentIdx].children ?? []).filter((_, i) => i !== childIdx);
    updated[parentIdx] = { ...updated[parentIdx], children: children.length > 0 ? children : undefined };
    setItems(updated);
  };

  return (
    <AdminLayout title="Menü bearbeiten">
      {/* Save Bar */}
      <div className="flex items-center justify-between mb-6">
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            color: "#6b7280",
          }}
        >
          Hauptnavigation der Website
        </p>
        <div className="flex items-center gap-3">
          {saved && (
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                color: "#22c55e",
                fontWeight: 500,
              }}
            >
              ✓ Gespeichert
            </span>
          )}
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="px-5 py-2.5 rounded-lg text-white text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: "#B8956A",
            }}
          >
            {saving ? "Speichern..." : "Speichern"}
          </button>
        </div>
      </div>

      {loading ? (
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#9ca3af" }}>
          Lade...
        </p>
      ) : (
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl p-5"
              style={{ background: "#ffffff", border: "1px solid #e5e7eb" }}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#9ca3af",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Menüpunkt {idx + 1}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => moveItem(idx, -1)}
                    disabled={idx === 0}
                    className="px-1.5 py-0.5 text-xs rounded transition-colors disabled:opacity-30"
                    style={{ color: "#6b7280" }}
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => moveItem(idx, 1)}
                    disabled={idx === items.length - 1}
                    className="px-1.5 py-0.5 text-xs rounded transition-colors disabled:opacity-30"
                    style={{ color: "#6b7280" }}
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    onClick={() => removeItem(idx)}
                    className="px-1.5 py-0.5 text-xs rounded transition-colors hover:text-red-500"
                    style={{ color: "#6b7280" }}
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    className="block mb-1"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#6b7280",
                    }}
                  >
                    Label
                  </label>
                  <input
                    type="text"
                    value={item.label}
                    onChange={(e) => updateItem(idx, "label", e.target.value)}
                    placeholder="Menü-Text"
                    className="w-full px-3 py-2 rounded-lg border text-sm outline-none"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      borderColor: "#e5e7eb",
                      background: "#fafafa",
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block mb-1"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#6b7280",
                    }}
                  >
                    Pfad
                  </label>
                  <input
                    type="text"
                    value={item.path}
                    onChange={(e) => updateItem(idx, "path", e.target.value)}
                    placeholder="/pfad"
                    className="w-full px-3 py-2 rounded-lg border text-sm outline-none"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      borderColor: "#e5e7eb",
                      background: "#fafafa",
                    }}
                  />
                </div>
              </div>

              {/* Unterpunkte */}
              {item.children && item.children.length > 0 && (
                <div className="mt-3 ml-4 pl-4 border-l-2 space-y-2" style={{ borderColor: "#B8956A" }}>
                  {item.children.map((child, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={child.label}
                        onChange={(e) => updateChild(idx, cIdx, "label", e.target.value)}
                        placeholder="Label"
                        className="flex-1 px-2 py-1.5 rounded border text-xs outline-none"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          borderColor: "#e5e7eb",
                          background: "#fafafa",
                        }}
                      />
                      <input
                        type="text"
                        value={child.path}
                        onChange={(e) => updateChild(idx, cIdx, "path", e.target.value)}
                        placeholder="/pfad"
                        className="flex-1 px-2 py-1.5 rounded border text-xs outline-none"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          borderColor: "#e5e7eb",
                          background: "#fafafa",
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => removeChild(idx, cIdx)}
                        className="text-xs hover:text-red-500 transition-colors"
                        style={{ color: "#9ca3af" }}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <button
                type="button"
                onClick={() => addChild(idx)}
                className="mt-2 text-xs transition-colors hover:text-[#B8956A]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#9ca3af",
                }}
              >
                + Unterpunkt
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addItem}
            className="w-full py-3 rounded-xl text-sm font-medium transition-colors hover:bg-[#fdf5ef] hover:text-[#B8956A]"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#6b7280",
              border: "1px dashed #d1d5db",
            }}
          >
            + Menüpunkt hinzufügen
          </button>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminNavEditor;
