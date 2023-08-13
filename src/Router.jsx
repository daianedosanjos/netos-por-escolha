import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import QuemSomos from "./components/pages/QuemSomos";
import ComoAjudar from "./components/pages/ComoAjudar";
import Contato from "./components/pages/Contato";
import Doacoes from "./components/pages/Doacoes";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/comoajudar" element={<ComoAjudar />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/doacoes" element={<Doacoes />} />  
        <Route path="/" element={<Home />} />     
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
