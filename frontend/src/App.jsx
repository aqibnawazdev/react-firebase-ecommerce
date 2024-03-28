import CategoryList from "./components/CategoryList";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import AuthLogin from "./pages/AuthLogin";
import AuthRegister from "./pages/AuthRegister";
import Home from "./pages/Home";

import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Dashboard from "./dashboard/Dashboard";
import { ProtectAuth, ProtectDashboard } from "./config/ProtectedRoutes";
import Checkout from "./pages/Checkout";
import MyOrders from "./pages/MyOrders";

export default function App() {
  return (
    <div>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth/register"
          element={
            <ProtectAuth>
              <AuthRegister />
            </ProtectAuth>
          }
        />
        <Route
          path="/auth/login"
          element={
            <ProtectAuth>
              <AuthLogin />
            </ProtectAuth>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/product/:id" element={<ProductDetails replace />} />
        <Route
          path="/admin/dashboard/*"
          element={
            <ProtectDashboard>
              <Dashboard />
            </ProtectDashboard>
          }
        />
      </Routes>
    </div>
  );
}
