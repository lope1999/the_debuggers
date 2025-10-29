"use client"

import { useState, useEffect } from "react";
import { ArrowRight, Zap, Shield, TrendingUp, Sparkles } from "lucide-react";

export default function HomePage() {
  const [theme, setTheme] = useState("light");
  const [amount, setAmount] = useState(100);
  const [type, setType] = useState("crypto");
  const [fee, setFee] = useState(0);
  const [net, setNet] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const rates = { crypto: 0.005, giftcard: 0.01, fx: 0.003 };
  const limits = {
    crypto: { min: 2, max: 2000 },
    giftcard: { min: 5, max: 1000 },
    fx: { min: 10, max: 10000 },
  };

  useEffect(() => {
    calculate();
  }, [amount, type]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculate = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt)) return;
    const { min, max } = limits[type];
    if (amt < min || amt > max) return;
    const feeVal = amt * rates[type];
    setFee(feeVal);
    setNet(amt - feeVal);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const cards = [
    { 
      title: "Crypto Swap", 
      fee: "0.5%", 
      limit: "$2 – $2,000", 
      badge: "Instant",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    { 
      title: "GiftCard Trade", 
      fee: "1.0%", 
      limit: "$5 – $1,000", 
      badge: "<10 mins",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    { 
      title: "FX Exchange", 
      fee: "0.3%", 
      limit: "$10 – $10,000", 
      badge: "5–10 mins",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
  ];

  return (
    <div className={`min-h-screen transition-all duration-700 ${
      theme === "dark" 
        ? "bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900" 
        : "bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100"
    }`}>
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{
            left: `${mousePos.x / 20}px`,
            top: `${mousePos.y / 20}px`,
          }}
        />
        <div className="absolute w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 right-0" />
        <div className="absolute w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-0 left-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-16 animate-fadeIn">
          <div className="h-10">
            <img
              src={theme === "dark" ? "/dark-logo.png" : "/logo.png"}
              alt="The Debuggers Logo"
              className="h-full w-auto"
            />
          </div>
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-2xl backdrop-blur-lg transition-all duration-300 hover:scale-110 ${
              theme === "dark"
                ? "bg-white/10 text-yellow-300 hover:bg-white/20"
                : "bg-gray-900/10 text-gray-900 hover:bg-gray-900/20"
            }`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </header>

        {/* Hero Section */}
        <section className="text-center mb-20 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm mb-6 animate-pulse">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className={`text-sm font-semibold ${
              theme === "dark" ? "text-blue-200" : "text-blue-700"
            }`}>
              Trusted by 50,000+ users
            </span>
          </div>
          
          <h1 className={`text-6xl md:text-7xl font-black mb-6 leading-tight ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-yellow-400 text-transparent bg-clip-text animate-gradient">
              Transparent
            </span>
            <br />
            Lightning-Fast Swaps
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
            Know your exact fee before you swap. Real-time calculator. Instant execution.
          </p>
          
          <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-full text-lg shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            Start Swapping
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10" />
          </button>
        </section>

        {/* Feature Cards */}
        <section className="grid md:grid-cols-3 gap-6 mb-20">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`group relative p-8 rounded-3xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer animate-fadeIn ${
                theme === "dark"
                  ? "bg-gray-800/40 hover:bg-gray-800/60 border border-blue-500/20"
                  : "bg-white/60 hover:bg-white/80 border border-gray-200 shadow-lg"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${card.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>
              
              <h3 className={`text-2xl font-bold mb-3 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                {card.title}
              </h3>
              
              <div className={`text-lg mb-4 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}>
                <span className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                  {card.fee}
                </span>
                <span className="block text-sm mt-2">{card.limit}</span>
              </div>
              
              <span className="inline-block px-4 py-2 rounded-xl text-sm font-bold bg-blue-600 text-white">
                {card.badge}
              </span>

              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity blur-xl -z-10`} />
            </div>
          ))}
        </section>

        {/* Calculator */}
        <section className={`relative p-10 rounded-3xl backdrop-blur-2xl mb-16 animate-fadeIn ${
          theme === "dark"
            ? "bg-gray-800/40 border border-blue-500/20"
            : "bg-white/60 border border-gray-200 shadow-2xl"
        }`}>
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-sm shadow-lg">
              ⚡ Live Calculator
            </div>
          </div>

          <h2 className={`text-4xl font-black mb-8 text-center mt-4 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            Estimate Your Swap
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className={`block text-sm font-bold mb-3 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}>
                Amount (USD)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className={`w-full px-6 py-4 rounded-2xl border-2 text-lg font-semibold transition-all duration-300 focus:scale-105 focus:shadow-lg outline-none ${
                  theme === "dark"
                    ? "bg-gray-900/50 border-blue-500/30 text-white focus:border-blue-500"
                    : "bg-white border-blue-200 text-gray-900 focus:border-blue-500"
                }`}
              />
            </div>

            <div>
              <label className={`block text-sm font-bold mb-3 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}>
                Transaction Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className={`w-full px-6 py-4 rounded-2xl border-2 text-lg font-semibold transition-all duration-300 focus:scale-105 focus:shadow-lg outline-none cursor-pointer ${
                  theme === "dark"
                    ? "bg-gray-900/50 border-blue-500/30 text-white focus:border-blue-500"
                    : "bg-white border-blue-200 text-gray-900 focus:border-blue-500"
                }`}
              >
                <option value="crypto">Crypto Swap (0.5%)</option>
                <option value="giftcard">GiftCard Trade (1.0%)</option>
                <option value="fx">FX Exchange (0.3%)</option>
              </select>
            </div>
          </div>

          <div className="relative p-8 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-yellow-400 text-white overflow-hidden mb-6">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative grid md:grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-sm font-semibold opacity-90 mb-2">Estimated Fee</p>
                <p className="text-4xl font-black">${fee.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm font-semibold opacity-90 mb-2">You'll Receive</p>
                <p className="text-4xl font-black">${net.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <button className="group relative w-full px-8 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-full text-xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105">
            Swap Now
            <ArrowRight className="inline-block ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </section>

        {/* Footer */}
        <footer className={`text-center py-8 ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}>
          <p className="mb-4 font-semibold">© 2025 PaySwap. Secured & Trusted.</p>
          <div className="flex justify-center gap-6 text-sm font-medium">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
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

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </div>
  );
}