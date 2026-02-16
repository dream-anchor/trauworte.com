import { Hono } from "hono";
import { cors } from "hono/cors";
import { pages } from "./routes/pages";
import { history } from "./routes/history";
import { navigation } from "./routes/navigation";

type Env = {
  DATABASE_URL: string;
  ALLOWED_ORIGIN: string;
};

const app = new Hono<{ Bindings: Env }>();

// CORS — nur trauworte.com + localhost für Dev
app.use(
  "*",
  cors({
    origin: (origin, c) => {
      const allowed = c.env.ALLOWED_ORIGIN || "https://trauworte.com";
      if (
        origin === allowed ||
        origin?.startsWith("http://localhost:") ||
        origin?.startsWith("http://127.0.0.1:")
      ) {
        return origin;
      }
      return "";
    },
    allowMethods: ["GET", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type"],
  })
);

// Health check
app.get("/", (c) => c.json({ status: "ok", service: "trauworte-api" }));

// Routes
app.route("/api/pages", pages);
app.route("/api/history", history);
app.route("/api/navigation", navigation);

export default app;
