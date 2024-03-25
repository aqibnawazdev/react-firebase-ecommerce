import React from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManageProducts from "./ManageProducts";
import Modal from "./Model";

function Dashboard() {
  return (
    <div className="flex gap-4">
      <Sidebar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/manageproducts" element={<ManageProducts />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
