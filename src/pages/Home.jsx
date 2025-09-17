import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaCode, FaPalette, FaMobile, FaServer, FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaExternalLinkAlt, FaDownload } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";

// Komponen Footer yang sudah mendukung mode gelap
const Footer = ({ theme, language }) => {
  const t = {
    id: {
      navigation: "Navigasi",
      contact: "Kontak",
      socialMedia: "Sosial Media",
      copyright: `© ${new Date().getFullYear()} Patimah Sari Siregar. Hak Cipta Dilindungi.`
    },
    en: {
      navigation: "Navigation",
      contact: "Contact",
      socialMedia: "Social Media",
      copyright: `© ${new Date().getFullYear()} Patimah Sari Siregar. All Rights Reserved.`
    }
  }[language];

  return (
    <footer className={`py-10 px-6 border-t shadow-sm transition-colors duration-300 ${
      theme === "dark" 
        ? "bg-gray-900 text-gray-300 border-gray-700" 
        : "bg-[#fff1f5] text-gray-800 border-pink-300"
    }`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Navigation */}
        <div>
          <h3 className={`text-lg font-semibold mb-4 ${
            theme === "dark" ? "text-pink-400" : "text-pink-700"
          }`}>
            {t.navigation}
          </h3>
          <ul className="space-y-2 text-sm">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`} 
                  className={`${theme === "dark" ? "hover:text-pink-300" : "hover:text-pink-600"}`}
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
            theme === "dark" ? "text-pink-400" : "text-pink-700"
          }`}>
            {t.contact}
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className={theme === "dark" ? "text-pink-400" : "text-pink-600"} /> 
              patimahsarisrg@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className={theme === "dark" ? "text-pink-400" : "text-pink-600"} /> 
              Bandung, Indonesia
            </li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className={`text-lg font-semibold mb-4 ${
            theme === "dark" ? "text-pink-400" : "text-pink-700"
          }`}>
            {t.socialMedia}
          </h3>
          <div className={`flex gap-4 text-xl ${
            theme === "dark" ? "text-pink-400" : "text-pink-600"
          }`}>
            <a 
              href="https://facebook.com" 
              className={theme === "dark" ? "hover:text-pink-300" : "hover:text-pink-800"}
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://instagram.com" 
              className={theme === "dark" ? "hover:text-pink-300" : "hover:text-pink-800"}
            >
              <FaInstagram />
            </a>
            <a 
              href="https://twitter.com" 
              className={theme === "dark" ? "hover:text-pink-300" : "hover:text-pink-800"}
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className={`mt-10 text-center text-sm border-t pt-4 ${
        theme === "dark" 
          ? "text-gray-400 border-gray-700" 
          : "text-gray-600 border-pink-200"
      }`}>
        {t.copyright}
      </div>
    </footer>
  );
};

// Komponen Project Card yang terpisah untuk reusable
const ProjectCard = ({ project, theme, language, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  

  return (
    <div 
      className={`rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
        theme === "dark" 
          ? "bg-gray-800 border-gray-700 shadow-lg" 
          : "bg-white border-gray-100 shadow-md"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <div className="h-48 overflow-hidden relative">
        <div className={`absolute inset-0 bg-gradient-to-t ${
          theme === "dark" ? "from-gray-900/80 to-transparent" : "from-black/40 to-transparent"
        } z-10`}></div>
        <img 
          src={project.img} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />
        <div className="absolute bottom-3 left-4 z-20">
          <h3 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-white"}`}>
            {project.title}
          </h3>
        </div>
        <div className="absolute top-3 right-3 z-20">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            theme === "dark" 
              ? "bg-rose-600/90 text-white" 
              : "bg-rose-500/90 text-white"
          }`}>
            {project.tags[0]}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <p className={`text-sm mb-4 leading-relaxed ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}>
          {project.desc}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className={`text-xs px-3 py-1 rounded-full font-medium ${
                theme === "dark" 
                  ? "bg-rose-900/30 text-rose-300 border border-rose-700/30" 
                  : "bg-rose-100 text-rose-700 border border-rose-200"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-3">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`inline-flex items-center font-medium group transition-all duration-300 ${
              theme === "dark" 
                ? "text-rose-400 hover:text-rose-300" 
                : "text-rose-600 hover:text-rose-700"
            }`}
          >
            <FaGithub className="mr-2 text-sm" />
            <span className="text-sm">
              GitHub
            </span>
          </a>
          
          {/* Hanya tampilkan link Vercel jika tersedia */}
          {project.vercelLink && (
            <a 
              href={project.vercelLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`inline-flex items-center font-medium group transition-all duration-300 ${
                theme === "dark" 
                  ? "text-blue-400 hover:text-blue-300" 
                  : "text-blue-600 hover:text-blue-700"
              }`}
            >
              <FaExternalLinkAlt className="mr-2 text-xs" />
              <span className="text-sm">
                Live Demo
            </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [language, setLanguage] = useState("id");
  const [activeTab, setActiveTab] = useState("home");
  const [theme, setTheme] = useState("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State untuk menu mobile

  // Font classes for consistent typography
  const fonts = {
    heading: "font-['Poppins'] font-bold",
    subheading: "font-['Poppins'] font-semibold",
    body: "font-['Inter'] font-normal",
    button: "font-['Poppins'] font-medium",
    navigation: "font-['Poppins'] font-medium",
    cardTitle: "font-['Poppins'] font-semibold"
  };

  // Background styles (ikut tema)
  const backgroundStyle =
    theme === "light"
      ? language === "id"
        ? "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-rose-100 via-purple-100 to-indigo-100"
        : "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-50 via-purple-50 to-pink-50"
      : "bg-gradient-to-br from-gray-900 to-gray-800";

  // Translation content
  const t = {
    id: {
      greeting: "Halo, saya Patimah Sari Siregar",
      role: "Frontend, Backend & Fullstack Developer | UI/UX Enthusiast",
      description: "Merancang pengalaman web yang cepat, intuitif, dan mudah diakses.",
      viewProjects: "Lihat Proyek",
      contactMe: "Hubungi Saya",
      downloadCV: "Unduh CV",
      aboutTitle: "Tentang Saya",
      about1: "Saya adalah mahasiswa D3 Manajemen Informatika semester akhir dengan pengalaman 2 tahun dalam pemrograman. Saya menguasai berbagai bahasa pemrograman seperti Java dan pengembangan Fullstack serta pemahaman dalam pengembangan web menggunakan framework seperti Laravel dan React. Siap untuk belajar dan berkembang di lingkungan kerja profesional.",
      about2: "Saya selalu mempelajari teknologi baru dan terus berkembang melalui proyek serta kolaborasi.",
      skillsTitle: "Keahlian Saya",
      projectsTitle: "Proyek Saya",
      contactTitle: "Hubungi Saya",
      servicesTitle: "Layanan Saya",
      email: "Email",
      phone: "Telepon",
      socialMedia: "Media Sosial",
      homeTitle: "Beranda",
      footerText: "© 2023 Patimah Sari Siregar. Hak Cipta Dilindungi."
    },
    en: {
      greeting: "Hi, I'm Patimah Sari Siregar",
      role: "Frontend, Backend & Fullstack Developer | UI/UX Enthusiast",
      description: "Designing web experiences that are fast, intuitive, and accessible.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      downloadCV: "Download CV",
      aboutTitle: "About Me",
      about1: "I am a final-year Diploma student in Information Management with 2 years of programming experience. I am proficient in various programming languages, including Java and Fullstack development, and have a strong understanding of web development using frameworks such as Laravel and React. I am eager to learn, grow, and contribute in a professional work environment.",
      about2: "I constantly learn new technologies and keep growing through projects and collaborations.",
      skillsTitle: "My Skills",
      projectsTitle: "My Projects",
      contactTitle: "Contact Me",
      servicesTitle: "My Services",
      email: "Email",
      phone: "Phone",
      socialMedia: "Social Media",
      homeTitle: "Home",
      footerText: "© 2023 Patimah Sari Siregar. All Rights Reserved."
    }
  }[language];

const skills = [
  { 
    name: "HTML", 
    description: language === "id" ? "Struktur Web" : "Web Structure",
    icon: "🔶",
    color: theme === "dark" ? "text-orange-400" : "text-orange-600"
  },
  { 
    name: "CSS", 
    description: language === "id" ? "Styling & Design" : "Styling & Design",
    icon: "🎨",
    color: theme === "dark" ? "text-blue-400" : "text-blue-600"
  },
  { 
    name: "JavaScript", 
    description: language === "id" ? "Interaktivitas" : "Interactivity",
    icon: "📜",
    color: theme === "dark" ? "text-yellow-400" : "text-yellow-600"
  },
  { 
    name: "React", 
    description: language === "id" ? "Library UI" : "UI Library",
    icon: "⚛️",
    color: theme === "dark" ? "text-blue-300" : "text-blue-500"
  },
  { 
    name: "Tailwind CSS", 
    description: language === "id" ? "Framework CSS" : "CSS Framework",
    icon: "💨",
    color: theme === "dark" ? "text-teal-400" : "text-teal-600"
  },
  { 
    name: "Node.js", 
    description: language === "id" ? "Runtime JavaScript" : "JavaScript Runtime",
    icon: "🟢",
    color: theme === "dark" ? "text-green-400" : "text-green-600"
  },
  { 
    name: "Git/GitHub", 
    description: language === "id" ? "Version Control" : "Version Control",
    icon: "📂",
    color: theme === "dark" ? "text-gray-400" : "text-gray-600"
  },
  { 
    name: "MySQL", 
    description: language === "id" ? "Database Relasional" : "Relational Database",
    icon: "🐬",
    color: theme === "dark" ? "text-blue-400" : "text-blue-600"
  },
  { 
    name: "PostgreSQL", 
    description: language === "id" ? "Database Advanced" : "Advanced Database",
    icon: "🐘",
    color: theme === "dark" ? "text-blue-500" : "text-blue-700"
  },
  { 
    name: "Java Spring Boot", 
    description: language === "id" ? "Framework Backend" : "Backend Framework",
    icon: "☕",
    color: theme === "dark" ? "text-red-400" : "text-red-600"
  },
  { 
    name: "UI/UX Design", 
    description: language === "id" ? "Desain Pengalaman" : "Experience Design",
    icon: "🎯",
    color: theme === "dark" ? "text-purple-400" : "text-purple-600"
  }
];
  // Projects
  const projects = [
    {
      img: "/glowup.jpg",
      title: "Glow Up Patimah",
      desc:
        language === "id"
          ? "Aplikasi penjualan makeup online dengan menampilkan katalog produk dan berita kosmetik."
          : "An online makeup sales application that features a product catalog and cosmetic news.",
      link: "https://github.com/fatimaasiregar/PATIMAH-SARI-SIREGAR",
      tags: ["HTML", "CSS", "E-Commerce", "API"],
    },
    {
      img: "/movie.jpg",
      title: "Cine-Fatima",
      desc:
        language === "id"
          ? "Website untuk pencarian dan informasi film dengan lengkap dan antarmuka yang user-friendly."
          : "A website for comprehensive movie search and information with a user-friendly interface.",
      link: "https://github.com/fatimaasiregar/Cine-Fatima",
      vercelLink: "https://cine-fatima-pprd.vercel.app/",
      tags: ["React", "HTML", "Movies",],
    },
    {
      img: "/food.jpg",
      title: "ZharfaFood",
      desc:
        language === "id"
          ? "Aplikasi pemesanan makanan online dengan database postgresql."
          : "An online food ordering application with a PostgreSQL database.",
      link: "https://github.com/fatimaasiregar/pemesanan-makanan-online",
      tags: ["fullstack", "React-Javaspringboot", "Tailwind", "Food App"],
    },
  ];

  // Fungsi untuk menutup menu mobile saat mengklik link
  const handleMobileNavClick = (item) => {
    setActiveTab(item);
    setMobileMenuOpen(false);
  };

  // Fungsi untuk download CV
  const handleDownloadCV = () => {
    // Ganti dengan URL file CV Anda
    const cvUrl = "/CV PATIMAH SARI SIREGAR.pdf";
    
    // Membuat elemen anchor untuk download
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV_Patimah_Sari_Siregar.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Efek untuk smooth scroll ke anchor
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const targetId = e.target.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          setActiveTab(targetId.substring(1));
          setMobileMenuOpen(false); // Tutup menu mobile setelah klik
        }
      }
    };

    // Menambahkan event listener ke semua anchor link
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      // Membersihkan event listener saat komponen unmount
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  // Efek untuk animasi saat elemen About masuk ke viewport
  useEffect(() => {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animasi untuk elemen-elemen di dalam about section
          const aboutContent = entry.target.querySelector('.about-content');
          const serviceCards = entry.target.querySelectorAll('.service-card');
          
          if (aboutContent) {
            aboutContent.style.opacity = '1';
            aboutContent.style.transform = 'translateY(0)';
          }
          
          serviceCards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0) rotate(0)';
            }, index * 200); // Stagger effect
          });
        }
      });
    }, { threshold: 0.3 });

    observer.observe(aboutSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`min-h-screen ${fonts.body} ${backgroundStyle} bg-fixed transition-colors duration-300 ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}>
      {/* Navigation - Diperbarui dengan menu hamburger */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 
        ${theme === "dark" 
          ? "bg-gray-900/90 text-gray-200 border-b border-gray-700" 
          : "bg-white/90 text-gray-800 border-b border-gray-200"} shadow-sm`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a 
            href="#home" 
            className={`text-2xl ${fonts.heading} bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent`}
            onClick={() => setActiveTab("home")}
          >
            Patimah Sari Siregar.
          </a>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                className={`capitalize ${fonts.navigation} ${
                  activeTab === item 
                    ? 'text-rose-600' 
                    : theme === "dark" 
                      ? "text-gray-300 hover:text-rose-400" 
                      : "text-gray-600 hover:text-rose-500"
                } transition-colors duration-300`}
                onClick={() => setActiveTab(item)}
              >
                {t[`${item}Title`] || item}
              </a>
            ))}
          </div>

          {/* Tombol kanan (bahasa + tema) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === "id" ? "en" : "id")}
              className={`px-4 py-2 ${fonts.button} bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300`}
            >
              {language === "id" ? "EN" : "ID"}
            </button>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className={`px-4 py-2 ${fonts.button} rounded-full shadow-md hover:shadow-lg transition-all duration-300 ${
                theme === "dark" 
                  ? "bg-rose-500 text-white hover:bg-rose-600" 
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Tombol hamburger mobile */}
            <button 
              className="md:hidden text-2xl z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`md:hidden fixed top-0 left-0 w-full h-screen transition-transform duration-300 ease-in-out z-40
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div 
            className={`absolute inset-0 ${theme === "dark" ? "bg-gray-900/95" : "bg-white/95"}`}
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          <div className={`relative z-10 h-full flex flex-col items-center justify-center space-y-8 ${fonts.navigation}`}>
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                className={`text-2xl capitalize ${
                  activeTab === item 
                    ? 'text-rose-600' 
                    : theme === "dark" 
                      ? "text-gray-300" 
                      : "text-gray-600"
                } transition-colors duration-300`}
                onClick={() => handleMobileNavClick(item)}
              >
                {t[`${item}Title`] || item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section - DIPERBAIKI: Menambahkan padding atas yang cukup */}
      <section id="home" className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden pt-24 md:pt-28">
        {/* Animated background elements */}
        <div className={`absolute -top-64 -left-64 w-[800px] h-[800px] rounded-full opacity-10 mix-blend-multiply animate-blob animation-delay-2000 ${theme === "dark" ? "bg-rose-900" : "bg-rose-300"}`}></div>
        <div className={`absolute -bottom-96 right-0 w-[700px] h-[700px] rounded-full opacity-10 mix-blend-multiply animate-blob animation-delay-4000 ${theme === "dark" ? "bg-purple-900" : "bg-purple-300"}`}></div>
        <div className={`absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-10 mix-blend-multiply animate-blob ${theme === "dark" ? "bg-indigo-900" : "bg-indigo-300"}`}></div>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-8 md:mt-0">
          {/* Glow effect */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 blur-2xl opacity-30"></div>
          
          {/* Foto profil - DIPERBAIKI: Responsivitas untuk berbagai ukuran layar */}
          <div className="relative order-2 md:order-1">
            <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 blur-md opacity-70"></div>
            <img
              src="/foto patimah.jpg"
              alt="Profile"
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full shadow-2xl border-4 object-cover"
            />
          </div>

          <div className={`space-y-6 backdrop-blur-sm p-6 md:p-8 rounded-2xl border transition-colors duration-300 order-1 md:order-2 ${theme === "dark" ? "bg-gray-800/30 border-gray-700" : "bg-white/30 border-white/20"}`}>
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${fonts.heading} leading-tight ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              {t.greeting}
            </h1>
            <p className={`text-lg sm:text-xl md:text-2xl ${fonts.subheading} text-rose-600`}>{t.role}</p>
            <p className={`text-base sm:text-lg ${fonts.body} ${theme === "dark" ? "text-gray-300" : "text-gray-700"} max-w-xl`}>{t.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                className={`px-6 py-3 ${fonts.button} bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 shadow-md text-center`}
                onClick={() => setActiveTab("projects")}
              >
                {t.viewProjects}
              </a>
              <button
                onClick={handleDownloadCV}
                className={`px-6 py-3 ${fonts.button} flex items-center justify-center gap-2 rounded-full border transition-all duration-300 shadow-md ${
                  theme === "dark" 
                    ? "bg-gray-800 text-rose-400 border-gray-600 hover:bg-gray-700" 
                    : "bg-white text-rose-600 border-rose-200 hover:bg-rose-50"
                }`}
              >
                <FaDownload className="text-sm" />
                {t.downloadCV}
              </button>
              <a 
                href="#contact" 
                className={`px-6 py-3 ${fonts.button} rounded-full border transition-all duration-300 shadow-md text-center ${theme === "dark" ? "bg-gray-700 text-rose-400 border-gray-600 hover:bg-gray-600" : "bg-white text-rose-600 border-rose-200 hover:bg-rose-50"}`}
                onClick={() => setActiveTab("contact")}
              >
                {t.contactMe}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section dengan animasi */}
      <section id="about" className={`py-20 px-6 backdrop-blur-sm transition-colors duration-300 ${theme === "dark" ? "bg-gray-800/70" : "bg-white/70"}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl ${fonts.heading} mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600`}>
            {t.aboutTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Konten about dengan animasi fade-in */}
            <div className={`p-8 rounded-2xl shadow-lg border transition-colors duration-300 about-content ${theme === "dark" ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700" : "bg-gradient-to-br from-white to-rose-50 border-rose-100"}`}
                 style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>
              <p className={`text-lg ${fonts.body} leading-relaxed mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{t.about1}</p>
              <p className={`text-lg ${fonts.body} leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{t.about2}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: language === 'id' ? "Frontend Development" : "Frontend Development",
                  icon: <FaCode className="text-4xl mb-4 text-rose-500" />,
                  desc: language === 'id' ? "Membangun antarmuka web interaktif dan responsif" : "Building interactive and responsive web interfaces"
                },
                {
                  title: language === 'id' ? "Backend Development" : "Backend Development",
                  icon: <FaPalette className="text-4xl mb-4 text-purple-500" />,
                  desc: language === 'id' ? "Mengembangkan logika server dan basis data yang efisien" : "Developing efficient server logic and databases"
                },
                {
                  title: language === 'id' ? "Fullstack Development" : "Fullstack Development",
                  icon: <FaMobile className="text-4xl mb-4 text-indigo-500" />,
                  desc: language === 'id' ? "Menggabungkan frontend dan backend untuk solusi lengkap" : "Combining frontend and backend for complete solutions"
                },
                {
                  title: language === 'id' ? "UI/UX Design" : "UI/UX Design",
                  icon: <FaServer className="text-4xl mb-4 text-rose-400" />,
                  desc: language === 'id' ? "Merancang pengalaman dan antarmuka pengguna yang menarik" : "Designing engaging user interfaces and experiences"
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl shadow-sm border text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 service-card ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}
                  style={{ 
                    opacity: 0, 
                    transform: 'translateY(20px) rotate(' + (index % 2 === 0 ? '-2deg' : '2deg') + ')', 
                    transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease' 
                  }}
                >
                  {service.icon}
                  <h3 className={`text-lg ${fonts.cardTitle} mb-2 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>{service.title}</h3>
                  <p className={`text-sm ${fonts.body} ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* Skills Section */}
<section id="skills" className={`py-20 px-6 backdrop-blur-sm transition-colors duration-300 ${theme === "dark" ? "bg-gray-800/80" : "bg-white/80"}`}>
  <div className="max-w-6xl mx-auto">
    <h2 className={`text-4xl ${fonts.heading} text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600`}>
      {t.skillsTitle}
    </h2>
    
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {skills.map((skill, index) => (
        <div 
          key={index} 
          className={`flex flex-col items-center p-5 rounded-xl border transition-all duration-300 hover:scale-105 ${
            theme === "dark" 
              ? "bg-gray-800 border-gray-700 hover:bg-gray-750" 
              : "bg-white border-gray-200 hover:bg-gray-50"
          } shadow-sm hover:shadow-md`}
        >
          <span className="text-3xl mb-2">{skill.icon}</span>
          <h3 className={`text-md ${fonts.cardTitle} mb-1 text-center ${skill.color}`}>
            {skill.name}
          </h3>
          <span className={`text-xs ${fonts.body} font-medium ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          } text-center`}>
            {skill.description}
          </span>
        </div>
      ))}
    </div>

    {/* Additional Skills Info */}
    <div className={`mt-12 p-6 rounded-2xl text-center ${
      theme === "dark" ? "bg-gray-800/50" : "bg-white/50"
    }`}>

    </div>
  </div>
</section> 
{/* Projects Section */}
      <section id="projects" className={`py-20 px-6 transition-colors duration-300 ${theme === "dark" ? "bg-gradient-to-br from-gray-800 to-gray-900" : "bg-gradient-to-br from-rose-50 to-purple-50"}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl ${fonts.heading} text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600`}>
            {t.projectsTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ProjectCard 
                key={i}
                project={project}
                theme={theme}
                language={language}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`relative py-20 px-6 overflow-hidden transition-colors duration-300 ${theme === "dark" ? "bg-gray-900" : ""}`}>
        <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20 ${theme === "dark" ? "bg-rose-900" : "bg-rose-200"}`}></div>
        <div className={`absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-20 ${theme === "dark" ? "bg-purple-900" : "bg-purple-200"}`}></div>
        
        <div className={`relative max-w-4xl mx-auto backdrop-blur-sm rounded-2xl shadow-xl p-12 border transition-colors duration-300 ${theme === "dark" ? "bg-gray-800/90 border-gray-700" : "bg-white/90 border-white"}`}>
          <h2 className={`text-4xl ${fonts.heading} text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600`}>
            {t.contactTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full text-rose-600 ${theme === "dark" ? "bg-rose-900/30" : "bg-rose-100"}`}>
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <p className={`text-sm ${fonts.body} ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{t.email}</p>
                  <a href="mailto:patimah@example.com" className={`${fonts.body} font-medium ${theme === "dark" ? "text-gray-300 hover:text-rose-400" : "text-gray-800 hover:text-rose-600"}`}>
                    patimahsarisrg@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full text-purple-600 ${theme === "dark" ? "bg-purple-900/30" : "bg-purple-100"}`}>
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <p className={`text-sm ${fonts.body} ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{t.phone}</p>
                  <a href="tel:+6281234567890" className={`${fonts.body} font-medium ${theme === "dark" ? "text-gray-300 hover:text-purple-400" : "text-gray-800 hover:text-purple-600"}`}>
                    +62 812-6524-2934
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="text-center">
                <p className={`${fonts.body} mb-4 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  {language === 'id' 
                    ? 'Mari berkolaborasi dalam proyek menarik!' 
                    : "Let's collaborate on exciting projects!"}
                </p>
              </div>
              <div className="flex space-x-6">
                <a 
                  href="https://github.com/fatimaasiregar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`p-4 rounded-full transition-colors hover:-translate-y-1 ${theme === "dark" ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/patimah-sari-3512a633a/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`p-4 rounded-full transition-colors hover:-translate-y-1 ${theme === "dark" ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer theme={theme} language={language} />
    </div>
  );
}