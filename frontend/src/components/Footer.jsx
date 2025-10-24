import React, { useState, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";

const Footer = () => {
  const [stars, setStars] = useState([]);
  const [heartBeat, setHeartBeat] = useState(false);

  useEffect(() => {
    // Generate stars
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 25; i++) {
        newStars.push({
          id: i,
          left: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
        });
      }
      setStars(newStars);
    };
    generateStars();

    // Heart beat animation
    const interval = setInterval(() => {
      setHeartBeat(true);
      setTimeout(() => setHeartBeat(false), 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes rotateSparkle {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-heartbeat {
          animation: heartbeat 0.3s ease-in-out;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>

      <footer
        className="w-full py-6 fixed bottom-0 z-50"
        style={{
          background: "linear-gradient(to top, #0f172a, #1e293b)",
          position: "relative",
          overflow: "hidden",
        }}
      >
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

        {/* Gradient Border Top */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{
            background: "linear-gradient(to right, transparent, #3b82f6, #8b5cf6, #ec4899, transparent)",
          }}
        />

        {/* Floating gradient orbs */}
        <div
          className="absolute w-32 h-32 rounded-full blur-2xl opacity-20 animate-float"
          style={{
            background: "radial-gradient(circle, #3b82f6, transparent)",
            left: "10%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
        <div
          className="absolute w-32 h-32 rounded-full blur-2xl opacity-20 animate-float"
          style={{
            background: "radial-gradient(circle, #a855f7, transparent)",
            right: "10%",
            top: "50%",
            transform: "translateY(-50%)",
            animationDelay: "1s",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          {/* Left side - Decorative sparkles */}
          <div className="hidden md:flex items-center gap-2 animate-slideUp">
            <Sparkles
              size={20}
              className="text-blue-400"
              style={{ animation: "rotateSparkle 4s linear infinite" }}
            />
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-float"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>
          </div>

          {/* Center - Main content */}
          <div className="flex items-center gap-3 animate-slideUp" style={{ animationDelay: "0.2s" }}>
            <span
              className="text-sm font-medium"
              style={{
                background: "linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 3s linear infinite",
              }}
            >
              Designed
            </span>
            {/* <Heart
              size={16}
              className={`text-pink-400 ${heartBeat ? "animate-heartbeat" : ""}`}
              fill="currentColor"
            /> */}
            <span
              className="text-sm font-medium"
              style={{
                background: "linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 3s linear infinite",
              }}
            >
            by Akshith Nayini
            </span>
          </div>

          {/* Right side - Year and copyright */}
          <div className="flex items-center gap-2 animate-slideUp" style={{ animationDelay: "0.4s" }}>
            <span className="text-xs text-gray-400">© 2025</span>
            <div className="w-1 h-1 rounded-full bg-gray-500 animate-float" />
            <span className="text-xs text-gray-400">All rights reserved</span>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
      </footer>
    </>
  );
};

export default Footer;