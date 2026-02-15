import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import EureFreieTrauung from "./pages/EureFreieTrauung";
import UnterschiedeDerTrauungen from "./pages/UnterschiedeDerTrauungen";
import BayrischTrachtTrauung from "./pages/BayrischTrachtTrauung";
import QueereTrauung from "./pages/QueereTrauung";
import MeineAngebote from "./pages/MeineAngebote";
import TraurednerinPreise from "./pages/TraurednerinPreise";
import HochzeitsplanerinFotograf from "./pages/HochzeitsplanerinFotograf";
import ZeitlicherAblauf from "./pages/ZeitlicherAblauf";
import HaeufigeFragen from "./pages/HaeufigeFragen";
import Kontakt from "./pages/Kontakt";
import UeberMich from "./pages/UeberMich";
import Blog from "./pages/Blog";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import TraurednerinMuenchen from "./pages/TraurednerinMuenchen";
import TraurednerinBayern from "./pages/TraurednerinBayern";
import TraurednerinOesterreich from "./pages/TraurednerinOesterreich";
import FreieTrauungMallorca from "./pages/FreieTrauungMallorca";
import FreieTrauungToskana from "./pages/FreieTrauungToskana";
import FreieTrauungGardasee from "./pages/FreieTrauungGardasee";
import FreieTrauungAlpen from "./pages/FreieTrauungAlpen";
import FreieTrauungItalien from "./pages/FreieTrauungItalien";
import MagazinTrausprueche from "./pages/MagazinTrausprueche";
import Bildnachweise from "./pages/Bildnachweise";
import NotFound from "./pages/NotFound";

// Admin (lazy-loaded — nicht im Prerender)
const AdminPasswordGate = lazy(() => import("./components/admin/AdminPasswordGate"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminPageEditor = lazy(() => import("./pages/admin/AdminPageEditor"));
const AdminNavEditor = lazy(() => import("./pages/admin/AdminNavEditor"));

const AppRoutes = () => (
  <Routes>
    {/* Hauptseiten */}
    <Route path="/" element={<Index />} />
    <Route path="/eure-freie-trauung" element={<EureFreieTrauung />} />
    <Route path="/unterschiede-der-trauungen" element={<UnterschiedeDerTrauungen />} />
    <Route path="/bayrisch-tracht-trauung" element={<BayrischTrachtTrauung />} />
    <Route path="/gleichgeschlechtliche-queer-und-diverse-trauung" element={<QueereTrauung />} />
    <Route path="/meine-angebote-freie-trauung" element={<MeineAngebote />} />
    <Route path="/hochzeitsreden-traurednerin" element={<TraurednerinPreise />} />
    <Route path="/hochzeitsplanerin-fotograf" element={<HochzeitsplanerinFotograf />} />
    <Route path="/zeitlicher-ablauf-freie-trauung" element={<ZeitlicherAblauf />} />
    <Route path="/persoenliche-trauung-haeufige-fragen" element={<HaeufigeFragen />} />
    <Route path="/freie-trauung-kontakt" element={<Kontakt />} />
    <Route path="/ueber-traurednerin-stefanie" element={<UeberMich />} />
    <Route path="/magazin" element={<Blog />} />
    <Route path="/blog" element={<Navigate to="/magazin" replace />} />
    <Route path="/impressum" element={<Impressum />} />
    <Route path="/datenschutzerklaerung" element={<Datenschutz />} />

    {/* Regionale Landingpages */}
    <Route path="/traurednerin-muenchen" element={<TraurednerinMuenchen />} />
    <Route path="/traurednerin-bayern" element={<TraurednerinBayern />} />
    <Route path="/traurednerin-oesterreich" element={<TraurednerinOesterreich />} />
    <Route path="/freie-trauung-mallorca" element={<FreieTrauungMallorca />} />
    <Route path="/freie-trauung-toskana" element={<FreieTrauungToskana />} />
    <Route path="/freie-trauung-gardasee" element={<FreieTrauungGardasee />} />
    <Route path="/freie-trauung-alpen" element={<FreieTrauungAlpen />} />
    <Route path="/freie-trauung-italien" element={<FreieTrauungItalien />} />

    {/* Magazin */}
    <Route path="/magazin/trausprueche-freie-trauung" element={<MagazinTrausprueche />} />

    {/* Redirects: alte Slugs → neue Slugs */}
    <Route path="/ueber-mich" element={<Navigate to="/ueber-traurednerin-stefanie" replace />} />
    <Route path="/angebote" element={<Navigate to="/meine-angebote-freie-trauung" replace />} />
    <Route path="/kontakt" element={<Navigate to="/freie-trauung-kontakt" replace />} />
    <Route path="/datenschutz" element={<Navigate to="/datenschutzerklaerung" replace />} />

    {/* Bildnachweise */}
    <Route path="/bildnachweise" element={<Bildnachweise />} />

    {/* Angebote Detail-Links von Startseite */}
    <Route path="/meine-angebote-freie-trauung/hochzeitsreden-traurednerin" element={<Navigate to="/hochzeitsreden-traurednerin" replace />} />

    {/* Admin CMS (lazy-loaded) */}
    <Route
      path="/admin"
      element={
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center" style={{ background: "#f3f4f6" }}><p style={{ fontFamily: "'Inter', sans-serif", color: "#9ca3af" }}>Lade...</p></div>}>
          <AdminPasswordGate><AdminDashboard /></AdminPasswordGate>
        </Suspense>
      }
    />
    <Route
      path="/admin/pages/:slug"
      element={
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center" style={{ background: "#f3f4f6" }}><p style={{ fontFamily: "'Inter', sans-serif", color: "#9ca3af" }}>Lade...</p></div>}>
          <AdminPasswordGate><AdminPageEditor /></AdminPasswordGate>
        </Suspense>
      }
    />
    <Route
      path="/admin/navigation"
      element={
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center" style={{ background: "#f3f4f6" }}><p style={{ fontFamily: "'Inter', sans-serif", color: "#9ca3af" }}>Lade...</p></div>}>
          <AdminPasswordGate><AdminNavEditor /></AdminPasswordGate>
        </Suspense>
      }
    />

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
