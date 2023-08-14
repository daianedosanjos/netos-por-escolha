import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>      
        <Route path="*" element={<Home />} />
       </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
