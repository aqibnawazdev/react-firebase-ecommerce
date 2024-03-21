import CategoryList from "./components/CategoryList";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import AuthLogin from "./pages/AuthLogin";
import AuthRegister from "./pages/AuthRegister";
import Home from "./pages/Home";

import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
export default function App() {
  return (
    <div>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails replace />} />
      </Routes>
    </div>
  );
}
