"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HomePage() {
  const [theme, setTheme] = useState("dark");
  const [amount, setAmount] = useState(100);
  const [type, setType] = useState("crypto");
  const [fee, setFee] = useState(0);
  const [net, setNet] = useState(0);

  const rates = { crypto: 0.005, giftcard: 0.01, fx: 0.003 };
  const limits = {
    crypto: { min: 2, max: 2000 },
    giftcard: { min: 5, max: 1000 },
    fx: { min: 10, max: 10000 },
  };

  useEffect(() => {
    calculate();
  }, [amount, type]);

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

  return (
    <div className={`page ${theme}`}>
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="logo">
            <Image src="/logo.png" alt="PaySwap Logo" width={40} height={40} />
            <h1 className="brand">PaySwap</h1>
          </div>
          <button className="toggle-btn" onClick={toggleTheme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <h2 className="hero-title">
            <span className="premium">Transparent. Fast. Reliable. Swaps. Premium. Yours.</span>
          </h2>
          <p className="hero-sub">
            Know your exact fee before you swap. Real-time calculator. Instant execution.
          </p>
          <button className="btn-glow">Start Swapping</button>
        </section>

        {/* Cards */}
        <section className="cards">
          {[
            { title: "Crypto Swap", fee: "0.5%", limit: "$2.00 – $2,000.00", badge: "Instant" },
            { title: "GiftCard Trade", fee: "1.0%", limit: "$5.00 – $1,000.00", badge: "<10 mins" },
            { title: "FX Exchange", fee: "0.3%", limit: "$10 – $10,000", badge: "5–10 mins" },
          ].map((card, i) => (
            <div key={i} className="fee-card">
              <h3>{card.title}</h3>
              <p>
                {card.fee} fee <br />
                {card.limit}
              </p>
              <span className="badge">{card.badge}</span>
            </div>
          ))}
        </section>

        {/* Calculator */}
        <section className="calculator">
          <h2>Estimate Your Swap</h2>
          <div className="form">
            <div>
              <label>Amount (USD)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div>
              <label>Transaction Type</label>
              <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="crypto">Crypto Swap (0.5%)</option>
                <option value="giftcard">GiftCard Trade (1.0%)</option>
                <option value="fx">FX Exchange (0.3%)</option>
              </select>
            </div>
          </div>

          <div className="result">
            <p>Estimated Fee: ${fee.toFixed(2)}</p>
            <p>You’ll Receive: ${net.toFixed(2)}</p>
          </div>

          <button className="btn-glow wide">Swap Now</button>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 PaySwap. Trusted by 50,000+ users.</p>
          <div className="links">
            <a href="#">Privacy</a> • <a href="#">Terms</a> • <a href="#">Support</a>
          </div>
        </footer>
      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .page {
          min-height: 100vh;
          transition: all 0.4s ease;
          font-family: "Inter", sans-serif;
        }

        .page.dark {
          background: radial-gradient(circle at top, #1a1f3c, #0d111f);
          color: #fff;
        }

        .page.light {
          background: linear-gradient(to bottom right, #f9fafb, #e5e7eb);
          color: #111;
        }

        .container {
          max-width: 960px;
          margin: 0 auto;
          padding: 2rem 1rem;
          text-align: center;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand {
          font-size: 1.4rem;
          font-weight: 700;
          color: #3b82f6;
        }

        .toggle-btn {
          font-size: 1.4rem;
          border: none;
          background: transparent;
          cursor: pointer;
          transition: transform 0.3s;
        }

        .toggle-btn:hover {
          transform: scale(1.2);
        }

        .hero {
          margin-top: 3rem;
        }

        .hero-title {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .premium {
          background: linear-gradient(to right, #60a5fa, #facc15);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-sub {
          opacity: 0.9;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .btn-glow {
          background: linear-gradient(90deg, #facc15, #fbbf24);
          color: #111;
          padding: 0.9rem 2.2rem;
          border-radius: 50px;
          border: none;
          font-weight: 700;
          cursor: pointer;
          font-size: 1.1rem;
          box-shadow: 0 0 25px rgba(251, 191, 36, 0.6);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .btn-glow:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 40px rgba(250, 204, 21, 0.8);
        }

        .cards {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          margin: 3rem 0;
        }

        .fee-card {
          border-radius: 14px;
          padding: 1.5rem;
          transition: background 0.3s ease;
        }

        .page.dark .fee-card {
          background: rgba(17, 24, 39, 0.85);
          border: 1px solid rgba(59, 130, 246, 0.2);
          color: #fff;
        }

        .page.light .fee-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          color: #111;
        }

        .badge {
          display: inline-block;
          margin-top: 0.5rem;
          background: #2563eb;
          color: #fff;
          padding: 0.25rem 0.75rem;
          border-radius: 8px;
          font-size: 0.85rem;
        }

        .calculator {
          border-radius: 16px;
          padding: 2rem;
          transition: background 0.3s ease;
        }

        .page.dark .calculator {
          background: rgba(17, 24, 39, 0.9);
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
        }

        .page.light .calculator {
          background: #ffffff;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }

        input,
        select {
          width: 100%;
          padding: 0.8rem;
          border-radius: 10px;
          border: none;
          margin-top: 0.4rem;
          background: #111827;
          color: #fff;
        }

        .page.light input,
        .page.light select {
          background: #f3f4f6;
          color: #111;
        }

        .result {
          margin-top: 1.5rem;
          background: linear-gradient(90deg, #0ea5e9, #facc15);
          border-radius: 12px;
          padding: 1.2rem;
          color: #111;
          font-weight: 700;
          font-size: 1.05rem;
        }

        .wide {
          width: 100%;
          margin-top: 1.5rem;
        }

        .footer {
          margin-top: 3rem;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .links a {
          color: #3b82f6;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
