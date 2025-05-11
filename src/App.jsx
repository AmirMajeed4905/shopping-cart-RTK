import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages & Components
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard"; // This is your product catalog
import CartPage from "./components/cartPage";
import ProductDetail from "./components/ProductDetail"; // ✅ Add this component
import Footer from "./components/Footer"; // adjust path
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductCard />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />{" "}
        {/* ✅ Detail route */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
