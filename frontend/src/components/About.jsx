import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="aboutme"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-6 py-20 relative overflow-hidden"
    >
      {/* Animated starfield background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 3 + 2 + 's',
              opacity: Math.random() * 0.7 + 0.3,
              boxShadow: '0 0 ' + (Math.random() * 10 + 5) + 'px rgba(255,255,255,0.8)'
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="shooting-star" style={{ top: '20%', left: '10%', animationDelay: '2s' }}></div>
        <div className="shooting-star" style={{ top: '40%', left: '70%', animationDelay: '5s' }}></div>
        <div className="shooting-star" style={{ top: '60%', left: '30%', animationDelay: '8s' }}></div>
        <div className="shooting-star" style={{ top: '80%', left: '60%', animationDelay: '11s' }}></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float"
            style={{
              left: Math.random() * 100 + '%',
              bottom: -10 + 'px',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 15 + 's',
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}
      </div>

      {/* Constellation lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <line x1="10%" y1="20%" x2="25%" y2="35%" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="1" className="animate-pulse" />
        <line x1="25%" y1="35%" x2="40%" y2="25%" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <line x1="60%" y1="30%" x2="75%" y2="45%" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }} />
        <line x1="75%" y1="45%" x2="85%" y2="35%" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
      </svg>

      {/* Left side - Photo */}
      <div
        className={`md:w-1/3 flex justify-center mb-8 md:mb-0 relative z-10 transform transition-all duration-1000 ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-20 opacity-0"
        }`}
      >
        <div className="relative group">
          {/* Glowing ring effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          
          {/* Orbiting circles */}
          <div className="absolute -inset-12 animate-spin-slow">
            <div className="w-4 h-4 bg-blue-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 shadow-lg shadow-blue-400/50 animate-pulse"></div>
          </div>
          <div className="absolute -inset-12 animate-spin-slow-reverse">
            <div className="w-3 h-3 bg-purple-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 shadow-lg shadow-purple-400/50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          <div className="absolute -inset-12 animate-spin-medium">
            <div className="w-2 h-2 bg-pink-400 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2 shadow-lg shadow-pink-400/50 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <img
            src="/profile.jpg"
            alt="Akshith"
            className="relative w-64 h-64 rounded-2xl object-cover shadow-2xl border-4 border-white/10 transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2"
          />
          
          {/* Decorative glow */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500"></div>
          
          {/* Sparkle effects on hover */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-sparkle shadow-lg shadow-white/50"></div>
          <div className="absolute bottom-8 left-8 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-sparkle shadow-lg shadow-white/50" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-12 left-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-sparkle shadow-lg shadow-white/50" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute top-8 right-12 w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 animate-sparkle shadow-lg shadow-yellow-300/50" style={{ animationDelay: '0.9s' }}></div>
        </div>
      </div>

      {/* Right side - Description */}
      <div
        className={`md:w-2/3 text-center md:text-left relative z-10 transform transition-all duration-1000 delay-300 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        }`}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient relative inline-block">
          About Me
          <div className="absolute -top-3 -right-3 w-4 h-4 bg-yellow-400 rounded-full animate-ping shadow-lg shadow-yellow-400/50"></div>
          <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-blue-400 rounded-full animate-bounce shadow-lg shadow-blue-400/50"></div>
          <div className="absolute top-1/2 -right-6 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
        </h2>
        
        <div className="space-y-6 text-gray-200 leading-relaxed text-lg max-w-2xl mx-auto md:mx-0">
          <p className="transform transition-all duration-700 delay-500 hover:translate-x-2 hover:text-white backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
            Hi, I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient-text">Akshith</span> —
            a passionate Full Stack and AI Developer who loves creating scalable,
            user-friendly web applications using the MERN stack and AI tools.
          </p>
          
          <p className="transform transition-all duration-700 delay-700 hover:translate-x-2 hover:text-white backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
            I have experience in <span className="font-semibold text-blue-400">Java, Python, C/C++</span>, MERN stack, React, Node.js, MongoDB, and Docker. I enjoy building scalable web applications and AI-driven projects, solving complex problems, and contributing to innovative solutions.
          </p>
          
          <div className="transform transition-all duration-700 delay-900 hover:translate-x-2 backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
            <p className="mb-4 text-white font-medium">Notable achievements include:</p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-medium shadow-lg shadow-blue-500/50 transform hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/70 cursor-pointer border border-blue-400/30">
                🏆 500+ LeetCode Problems
              </span>
              <span className="px-5 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg shadow-purple-500/50 transform hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/70 cursor-pointer border border-purple-400/30">
                💡 Hackathon Participant
              </span>
            </div>
          </div>
          
          <p className="transform transition-all duration-700 delay-1100 hover:translate-x-2 hover:text-white backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
            Apart from coding, I like exploring AI tools, reading tech blogs, and
            contributing to open-source projects.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes tilt {
          0%, 100% {
            transform: rotate(-1deg);
          }
          50% {
            transform: rotate(1deg);
          }
        }
        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        @keyframes gradient-text {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
        @keyframes shoot {
          0% {
            transform: translateX(0) translateY(0) rotate(45deg);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(-500px) translateY(500px) rotate(45deg);
            opacity: 0;
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.5) rotate(180deg);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes spin-medium {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-tilt {
          animation: tilt 3s infinite linear;
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }
        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradient-text 3s ease infinite;
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
        .shooting-star {
          position: absolute;
          width: 3px;
          height: 3px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
          animation: shoot 3s linear infinite;
        }
        .shooting-star::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 2px;
          background: linear-gradient(to left, rgba(255,255,255,0.8), transparent);
          border-radius: 50%;
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-sparkle {
          animation: sparkle 1.5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 10s linear infinite;
        }
        .animate-spin-medium {
          animation: spin-medium 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
