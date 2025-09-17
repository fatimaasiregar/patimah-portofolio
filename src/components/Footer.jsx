import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-10 px-6 border-t shadow-sm transition-colors duration-300 ${
      darkMode 
        ? "bg-gray-900 text-gray-300 border-gray-700" 
        : "bg-[#fff1f5] text-gray-800 border-pink-300"
    }`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Navigation */}
        <div>
          <h3 className={`text-lg font-semibold mb-4 ${
            darkMode ? "text-pink-400" : "text-pink-700"
          }`}>
            Navigasi
          </h3>
          <ul className="space-y-2 text-sm">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`} 
                  className={`${darkMode ? "hover:text-pink-300" : "hover:text-pink-600"}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className={`text-lg font-semibold mb-4 ${
            darkMode ? "text-pink-400" : "text-pink-700"
          }`}>
            Kontak
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className={darkMode ? "text-pink-400" : "text-pink-600"} /> 
              patimahsarisrg@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className={darkMode ? "text-pink-400" : "text-pink-600"} /> 
              Medan, Indonesia
            </li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className={`text-lg font-semibold mb-4 ${
            darkMode ? "text-pink-400" : "text-pink-700"
          }`}>
            Sosial Media
          </h3>
          <div className={`flex gap-4 text-xl ${
            darkMode ? "text-pink-400" : "text-pink-600"
          }`}>
            <a 
              href="https://facebook.com" 
              className={darkMode ? "hover:text-pink-300" : "hover:text-pink-800"}
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://instagram.com" 
              className={darkMode ? "hover:text-pink-300" : "hover:text-pink-800"}
            >
              <FaInstagram />
            </a>
            <a 
              href="https://twitter.com" 
              className={darkMode ? "hover:text-pink-300" : "hover:text-pink-800"}
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className={`mt-10 text-center text-sm border-t pt-4 ${
        darkMode 
          ? "text-gray-400 border-gray-700" 
          : "text-gray-600 border-pink-200"
      }`}>
        © {new Date().getFullYear()} Patimah Sari Siregar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;