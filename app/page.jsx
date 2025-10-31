"use client"

import { useState, useEffect } from "react";
import { getFees, getExchangeRate } from "./services/api";
import { calculateFee, getServiceFromFees } from "./utils/feeCalculations";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceCategories from "./components/ServiceCategories";
import Calculator from "./components/Calculator";
import LoadingError from "./components/LoadingError";
import Footer from "./components/Footer";
import FeeComparison from "./components/FeeComparison";
import TransactionHistory from "./components/TransactionHistory";
import { QuickHelpGuide } from "./components/HelpTooltip";
import AIAssistant from "./components/AIAssistant";

export default function HomePage() {
  const [theme, setTheme] = useState("light");
  const [amount, setAmount] = useState(100);
  const [fee, setFee] = useState(0);
  const [net, setNet] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fees, setFees] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [userType, setUserType] = useState("Customer");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [activeSection, setActiveSection] = useState("home");

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const [feesData, exchangeData] = await Promise.all([
        getFees(),
        getExchangeRate('USD', 'NGN')
      ]);
      setFees(feesData);
      setExchangeRate(exchangeData);
      console.log('Fees Data:', feesData);
      console.log('Exchange Rate Data:', exchangeData);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.message || 'Failed to load data. Please check your internet connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    calculate();
  }, [amount, selectedService, selectedCategory, userType, fees]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculate = () => {
    try {
      if (!fees || !selectedService || !selectedCategory) {
        setFee(0);
        setNet(0);
        return;
      }

      const amt = parseFloat(amount);
      if (isNaN(amt) || amt < 0) {
        setFee(0);
        setNet(0);
        return;
      }

      const service = getServiceFromFees(fees, userType, selectedCategory, selectedService);
      if (!service) {
        setFee(0);
        setNet(0);
        return;
      }

      const feeVal = calculateFee(amt, service.Fee);
      const netVal = Math.max(0, amt - feeVal); // Ensure net amount is never negative
      
      setFee(feeVal);
      setNet(netVal);
    } catch (error) {
      console.error('Error in calculation:', error);
      setFee(0);
      setNet(0);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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

      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div id="home">
          <Hero theme={theme} />
        </div>
        
        <LoadingError loading={loading} error={error} theme={theme} onRetry={fetchData} />
        
        {!loading && !error && (
          <>
            <div id="services">
              <ServiceCategories 
                fees={fees} 
                theme={theme} 
                userType={userType} 
                setUserType={setUserType} 
              />
            </div>
            
            <div id="calculator">
              <Calculator 
              theme={theme}
              fees={fees}
              exchangeRate={exchangeRate}
              userType={userType}
              amount={amount}
              setAmount={setAmount}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedService={selectedService}
              setSelectedService={setSelectedService}
              fee={fee}
              net={net}
              currency={currency}
              setCurrency={setCurrency}
            />
            </div>

            <div id="comparison">
              <FeeComparison
              fees={fees}
              theme={theme}
              userType={userType}
              amount={amount}
              currency={currency}
              exchangeRate={exchangeRate}
            />
            </div>
          </>
        )}
        
        <Footer theme={theme} />
      </div>

      {/* Transaction History - Fixed position */}
      <TransactionHistory theme={theme} currency={currency} />
      
      {/* Quick Help Guide */}
      <QuickHelpGuide theme={theme} />

      {/* AI Assistant */}
      <AIAssistant theme={theme} fees={fees} exchangeRate={exchangeRate} userType={userType} />

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