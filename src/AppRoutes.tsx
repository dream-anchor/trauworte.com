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
import IndexV2 from "./pages/IndexV2";
import IndexV3 from "./pages/IndexV3";
import NotFound from "./pages/NotFound";

const AppRoutes = () => (
  <Routes>
    {/* Hauptseiten */}
    <Route path="/" element={<Index />} />
    <Route path="/v2" element={<IndexV2 />} />
    <Route path="/v3" element={<IndexV3 />} />
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
    <Route path="/blog" element={<Blog />} />
    <Route path="/impressum" element={<Impressum />} />
    <Route path="/datenschutzerklaerung" element={<Datenschutz />} />

    {/* Redirects: alte Slugs → neue Slugs */}
    <Route path="/ueber-mich" element={<Navigate to="/ueber-traurednerin-stefanie" replace />} />
    <Route path="/angebote" element={<Navigate to="/meine-angebote-freie-trauung" replace />} />
    <Route path="/kontakt" element={<Navigate to="/freie-trauung-kontakt" replace />} />
    <Route path="/datenschutz" element={<Navigate to="/datenschutzerklaerung" replace />} />

    {/* Angebote Detail-Links von Startseite */}
    <Route path="/meine-angebote-freie-trauung/hochzeitsreden-traurednerin" element={<Navigate to="/hochzeitsreden-traurednerin" replace />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
