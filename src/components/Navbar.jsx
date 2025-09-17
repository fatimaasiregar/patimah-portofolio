import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-pink-600 tracking-wide">
          Patimah.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-semibold tracking-wide text-gray-800 uppercase text-sm">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                activeClass="text-pink-600 after:w-full"
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="relative cursor-pointer group transition-all duration-300 py-2"
              >
                <span className="group-hover:text-pink-600 transition duration-200">
                  {link.name}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-pink-600 text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg px-6 py-4 space-y-4 text-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              activeClass="text-pink-600"
              className="block text-gray-800 font-medium text-base tracking-wide uppercase hover:text-pink-600 transition cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
