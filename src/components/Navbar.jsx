import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll saat menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Tentang Saya", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Proyek", to: "projects" },
    { name: "Kontak", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md text-gray-800"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <h1
          className={`text-xl md:text-2xl font-extrabold tracking-wide transition-colors ${
            isScrolled ? "text-pink-600" : "text-white"
          }`}
        >
          Patimah.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 font-semibold tracking-wide text-sm">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                activeClass="text-pink-600 after:w-full"
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`relative cursor-pointer group transition-all duration-300 py-2 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                <span className="group-hover:text-pink-600 transition duration-200">
                  {link.name}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-3xl p-2 rounded-md relative z-[60] text-black"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden z-[70] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 space-y-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              activeClass="text-pink-600 font-bold"
              className="text-gray-800 text-lg font-medium hover:text-pink-600 transition cursor-pointer py-2 border-b border-gray-100"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
