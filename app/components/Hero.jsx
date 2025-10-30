import { ArrowRight, Shield } from "lucide-react";

export default function Hero({ theme }) {
  return (
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
  );
}