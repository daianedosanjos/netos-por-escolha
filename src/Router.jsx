import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import Carrossel from "./components/pages/Carrossel";
import QuemSomos from "./components/pages/QuemSomos";
import Doacoes from "./components/pages/Doacoes";
import Contato from "./components/pages/Contato";
import Footer from "./components/pages/Footer";
import ComoAjudar from "./components/pages/ComoAjudar";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/comoajudar" element={<ComoAjudar />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/doacoes" element={<Doacoes />} />
        <Route path="*" element={<Carrossel />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
