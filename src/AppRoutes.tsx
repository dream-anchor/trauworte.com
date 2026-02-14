import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UeberMich from "./pages/UeberMich";
import Angebote from "./pages/Angebote";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/ueber-mich" element={<UeberMich />} />
    <Route path="/angebote" element={<Angebote />} />
    <Route path="/kontakt" element={<Kontakt />} />
    <Route path="/impressum" element={<Impressum />} />
    <Route path="/datenschutz" element={<Datenschutz />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
