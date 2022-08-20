import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/home/Navbar";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ServicePage from "./pages/ServicePage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <div className="max-w-7xl mx-auto text-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
