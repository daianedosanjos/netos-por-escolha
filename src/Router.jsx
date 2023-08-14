import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import Doacoes from "./components/pages/Doacoes"

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>      
        <Route path="*" element={<Home />} />
        <Route path="/doacoes" element={<Doacoes />} />
       </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
