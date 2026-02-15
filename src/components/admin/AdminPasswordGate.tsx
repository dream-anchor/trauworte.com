import { useState, createContext, useContext, type ReactNode } from "react";

// ── Benutzer-Konfiguration ──

export type UserRole = "admin" | "user";

interface CmsUser {
  email: string;
  password: string;
  role: UserRole;
  name: string;
}

const CMS_USERS: CmsUser[] = [
  {
    email: "monot@hey.com",
    password: "6.VFPpJbeVrNX*e4wusb8jGftA34gfAfN!zCa3v_2TJLv4xEnQcdb",
    role: "admin",
    name: "Antoine Monot",
  },
  {
    email: "info@stefaniesick.com",
    password: "MinniMouse2001!",
    role: "user",
    name: "Stefanie Sick",
  },
];

// ── Auth Context ──

interface AuthContext {
  user: CmsUser | null;
  logout: () => void;
}

const AuthCtx = createContext<AuthContext>({ user: null, logout: () => {} });
export const useAuth = () => useContext(AuthCtx);

const SESSION_KEY = "sickcms_auth";

// ── Komponente ──

interface Props {
  children: ReactNode;
}

const AdminPasswordGate = ({ children }: Props) => {
  const [user, setUser] = useState<CmsUser | null>(() => {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (!stored) return null;
    try {
      const parsed = JSON.parse(stored);
      return CMS_USERS.find((u) => u.email === parsed.email) ?? null;
    } catch {
      return null;
    }
  });

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = CMS_USERS.find(
      (u) => u.email.toLowerCase() === email.toLowerCase().trim() && u.password === pw
    );
    if (found) {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify({ email: found.email, role: found.role }));
      setUser(found);
    } else {
      setError("E-Mail oder Passwort falsch");
      setPw("");
    }
  };

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setUser(null);
    setEmail("");
    setPw("");
  };

  if (user) {
    return (
      <AuthCtx.Provider value={{ user, logout }}>
        {children}
      </AuthCtx.Provider>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#f3f4f6" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-sm text-center"
      >
        {/* Logo */}
        <div className="mb-6">
          <span
            style={{
              fontFamily: "'Boska', serif",
              fontSize: "24px",
              fontWeight: 500,
              color: "#1a1a1a",
              letterSpacing: "0.05em",
            }}
          >
            Sick{" "}
            <span style={{ color: "#B8956A" }}>CMS</span>
          </span>
        </div>

        <p
          className="mb-6"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            color: "#6b7280",
          }}
        >
          Anmelden um fortzufahren
        </p>

        {/* E-Mail */}
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          placeholder="E-Mail"
          autoFocus
          className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors mb-3"
          style={{
            fontFamily: "'Inter', sans-serif",
            borderColor: error ? "#ef4444" : "#e5e7eb",
            background: "#fafafa",
          }}
        />

        {/* Passwort */}
        <input
          type="password"
          value={pw}
          onChange={(e) => {
            setPw(e.target.value);
            setError("");
          }}
          placeholder="Passwort"
          className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
          style={{
            fontFamily: "'Inter', sans-serif",
            borderColor: error ? "#ef4444" : "#e5e7eb",
            background: "#fafafa",
          }}
        />

        {error && (
          <p
            className="mt-2 text-left"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              color: "#ef4444",
            }}
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full mt-5 py-3 rounded-lg text-white text-sm font-medium transition-opacity hover:opacity-90"
          style={{
            fontFamily: "'Inter', sans-serif",
            background: "#B8956A",
          }}
        >
          Anmelden
        </button>
      </form>
    </div>
  );
};

export default AdminPasswordGate;
