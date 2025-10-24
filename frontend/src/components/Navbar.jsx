import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [stars, setStars] = useState([]);
  const navItems = ["Home", "About Me", "Skills", "Projects", "Leetcode", "Contact"];

  useEffect(() => {
    // Generate stars
    const newStars = [];
    for (let i = 0; i < 30; i++) {
      newStars.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      });
    }
    setStars(newStars);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (section) => {
    const sectionId = section.toLowerCase().replace(/\s+/g, "");
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close mobile menu after click
    }
  };

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-link {
          position: relative;
          overflow: hidden;
        }
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
        .nav-link:hover::before {
          transform: translateX(0);
        }
      `}</style>

      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900 bg-opacity-95 backdrop-blur-md shadow-lg">
        {/* Stars Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.left}%`,
                top: "50%",
                width: `${star.size}px`,
                height: `${star.size}px`,
                animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">
          {/* Logo */}
          <h1
            className="text-3xl font-bold cursor-pointer transition-all duration-300 hover:scale-110"
            style={{
              background: "linear-gradient(to right, #60a5fa, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "glow 2s ease-in-out infinite",
            }}
            onClick={() => scrollToSection("Home")}
          >
            Akshith
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="nav-link text-gray-300 hover:text-white font-medium transition-all duration-300 py-2 transform hover:scale-110"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-300 transform hover:scale-110 active:scale-95"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-900 bg-opacity-98 backdrop-blur-md border-t border-blue-500 border-opacity-30">
            <div className="flex flex-col items-center py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="menu-item text-gray-300 hover:text-white font-medium transition-all duration-300 py-2 px-6 rounded-lg hover:bg-white hover:bg-opacity-10 transform hover:scale-105 w-48 text-center"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
