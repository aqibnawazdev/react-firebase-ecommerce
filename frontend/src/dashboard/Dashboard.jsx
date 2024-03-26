import React from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManageProducts from "./ManageProducts";
import AddProduct from "./AddProduct";

function Dashboard() {
  return (
    <div className="flex gap-4">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manageproducts" element={<ManageProducts />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
