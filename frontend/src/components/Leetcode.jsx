import React, { useEffect, useState } from "react";

const Leetcode = () => {
  const [stats, setStats] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const username = "nayini_akshith_190";

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setTimeout(() => setIsVisible(true), 100);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!stats) {
    return (
      <section
        id="leetcode"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-6 py-20 relative overflow-hidden"
      >
        {/* Loading stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 3 + 2 + 's',
              }}
            />
          ))}
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-200 text-lg animate-pulse">Loading LeetCode stats...</p>
        </div>
      </section>
    );
  }

  const total = {
    name: "Total Solved",
    solved: stats.totalSolved,
    total: stats.totalQuestions || 3000,
    color: "from-purple-500 to-pink-500",
    shadow: "shadow-purple-500/50",
    glow: "bg-purple-500",
  };
  const easy = {
    name: "Easy",
    solved: stats.easySolved,
    total: stats.totalEasy || 800,
    color: "from-green-500 to-emerald-500",
    shadow: "shadow-green-500/50",
    glow: "bg-green-500",
  };
  const medium = {
    name: "Medium",
    solved: stats.mediumSolved,
    total: stats.totalMedium || 1700,
    color: "from-yellow-500 to-orange-500",
    shadow: "shadow-yellow-500/50",
    glow: "bg-yellow-500",
  };
  const hard = {
    name: "Hard",
    solved: stats.hardSolved,
    total: stats.totalHard || 700,
    color: "from-red-500 to-pink-500",
    shadow: "shadow-red-500/50",
    glow: "bg-red-500",
  };

  return (
    <section
      id="leetcode"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Starfield background */}
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
        <div className="shooting-star" style={{ top: '15%', left: '20%', animationDelay: '1s' }}></div>
        <div className="shooting-star" style={{ top: '45%', left: '70%', animationDelay: '4s' }}></div>
        <div className="shooting-star" style={{ top: '75%', left: '40%', animationDelay: '7s' }}></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float"
            style={{
              left: Math.random() * 100 + '%',
              bottom: -10 + 'px',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 15 + 's',
            }}
          />
        ))}
      </div>

      {/* Title */}
      <div className={`relative z-10 mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <h2 className="text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient mb-2 relative">
          LeetCode Stats
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping shadow-lg shadow-yellow-400/50"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-bounce shadow-lg shadow-blue-400/50"></div>
        </h2>
        {/* <p className="text-center text-gray-300 text-lg">@{username}</p> */}
      </div>

      {/* Total Stats Card - Featured */}
      <div className={`relative z-10 mb-16 w-full flex justify-center transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="relative group w-full max-w-md">
          {/* Glowing border */}
          <div className={`absolute -inset-0.5 bg-gradient-to-r ${total.color} rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-tilt`}></div>
          
          <div className="relative bg-slate-800/90 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8 flex flex-col items-center">
            {/* Orbiting dots */}
            <div className="absolute -inset-8 animate-spin-slow opacity-50">
              <div className={`w-3 h-3 ${total.glow} rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 shadow-lg animate-pulse`}></div>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🏆</div>
              <h3 className="text-3xl font-bold text-white">{total.name}</h3>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                {total.solved}
              </div>
              <p className="text-gray-300 text-lg">out of {total.total} problems</p>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-slate-700/50 rounded-full h-6 overflow-hidden relative">
              <div
                className={`h-6 rounded-full bg-gradient-to-r ${total.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                style={{ width: `${(total.solved / total.total) * 100}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-sm font-bold drop-shadow-lg">
                  {Math.round((total.solved / total.total) * 100)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Difficulty Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {[easy, medium, hard].map((cat, index) => (
          <div
            key={cat.name}
            className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${400 + index * 200}ms` }}
          >
            <div className="relative group h-full">
              {/* Glowing border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${cat.color} rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-500`}></div>
              
              <div className="relative bg-slate-800/90 backdrop-blur-xl border border-white/10 shadow-xl rounded-xl p-6 flex flex-col items-center h-full transform group-hover:scale-105 transition-transform duration-300">
                {/* Decorative corner dots */}
                <div className={`absolute top-2 right-2 w-2 h-2 ${cat.glow} rounded-full animate-pulse ${cat.shadow}`}></div>
                <div className={`absolute bottom-2 left-2 w-2 h-2 ${cat.glow} rounded-full animate-pulse ${cat.shadow}`} style={{ animationDelay: '0.5s' }}></div>
                
                <h3 className={`text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${cat.color}`}>
                  {cat.name}
                </h3>
                
                <div className="text-center mb-4 flex-grow flex flex-col justify-center">
                  <div className={`text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${cat.color} mb-2`}>
                    {cat.solved}
                  </div>
                  <p className="text-gray-300">of {cat.total}</p>
                </div>
                
                {/* Progress bar */}
                <div className="w-full bg-slate-700/50 rounded-full h-4 overflow-hidden relative">
                  <div
                    className={`h-4 rounded-full bg-gradient-to-r ${cat.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                    style={{ width: `${(cat.solved / cat.total) * 100}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-xs font-bold drop-shadow-lg">
                      {Math.round((cat.solved / cat.total) * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes tilt {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
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
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes shoot {
          0% {
            transform: translateX(0) translateY(0) rotate(45deg);
            opacity: 1;
          }
          70% { opacity: 1; }
          100% {
            transform: translateX(-500px) translateY(500px) rotate(45deg);
            opacity: 0;
          }
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-tilt { animation: tilt 3s infinite linear; }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }
        .animate-twinkle { animation: twinkle ease-in-out infinite; }
        .animate-float { animation: float linear infinite; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        
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
      `}</style>
    </section>
  );
};

export default Leetcode;
