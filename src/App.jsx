import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`scroll-smooth flex flex-col min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Halaman utama */}
      <main className="flex-grow">
        <Home darkMode={darkMode} />
      </main>

    </div>
  );
}