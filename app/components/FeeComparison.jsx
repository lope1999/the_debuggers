import { useState } from "react";
import { ArrowRight, TrendingDown, CheckCircle2 } from "lucide-react";
import { calculateFee } from "../utils/feeCalculations";

export default function FeeComparison({ fees, theme, userType, amount, currency, exchangeRate }) {
  const [selectedServices, setSelectedServices] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  if (!fees || !amount || amount <= 0) return null;

  const currentData = fees[userType] || {};
  const allServices = [];

  // Flatten all services with their categories
  Object.entries(currentData).forEach(([category, services]) => {
    services.forEach(service => {
      allServices.push({
        ...service,
        category,
        id: `${category}-${service.Service}`
      });
    });
  });

  const toggleService = (serviceId) => {
    setSelectedServices(prev => {
      if (prev.includes(serviceId)) {
        return prev.filter(id => id !== serviceId);
      }
      if (prev.length >= 4) {
        return [...prev.slice(1), serviceId]; // Keep only last 4
      }
      return [...prev, serviceId];
    });
  };

  const compareServices = allServices.filter(s => selectedServices.includes(s.id));
  const amt = parseFloat(amount) || 0;
  const rate = parseFloat(exchangeRate?.rate) || 1;
  const displayAmount = currency === 'NGN' ? amt * rate : amt;

  // Calculate fees for comparison
  const comparisonData = compareServices.map(service => {
    const feeAmount = calculateFee(amt, service.Fee);
    const netAmount = amt - feeAmount;
    const displayFee = currency === 'NGN' ? feeAmount * rate : feeAmount;
    const displayNet = currency === 'NGN' ? netAmount * rate : netAmount;
    
    return {
      ...service,
      feeAmount: displayFee,
      netAmount: displayNet,
      percentage: amt > 0 ? (feeAmount / amt * 100).toFixed(2) : 0
    };
  });

  // Find best option (lowest fee)
  const bestOption = comparisonData.length > 0 
    ? comparisonData.reduce((best, current) => 
        current.feeAmount < best.feeAmount ? current : best
      )
    : null;

  const formatCurrency = (value) => {
    const symbol = currency === 'NGN' ? '₦' : '$';
    return `${symbol}${value.toFixed(2)}`;
  };

  return (
    <section className={`relative p-10 rounded-3xl backdrop-blur-2xl mb-16 animate-fadeIn ${
      theme === "dark"
        ? "bg-gray-800/40 border border-purple-500/20"
        : "bg-white/60 border border-gray-200 shadow-2xl"
    }`}>
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <div className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-sm shadow-lg">
          🔄 Compare Services
        </div>
      </div>

      <h2 className={`text-4xl font-black mb-2 text-center mt-4 ${
        theme === "dark" ? "text-white" : "text-gray-900"
      }`}>
        Fee Comparison Tool
      </h2>

      <p className={`text-center mb-8 ${
        theme === "dark" ? "text-gray-300" : "text-gray-600"
      }`}>
        Compare fees across different services to find the best option
      </p>

      {/* Service Selection */}
      <div className="mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-6 py-4 rounded-xl border-2 font-semibold flex items-center justify-between transition-all ${
            theme === "dark"
              ? "bg-gray-900/50 border-purple-500/30 text-white hover:border-purple-500"
              : "bg-white border-purple-200 text-gray-900 hover:border-purple-500"
          }`}
        >
          <span>
            {selectedServices.length === 0 
              ? "Select services to compare (up to 4)" 
              : `${selectedServices.length} service${selectedServices.length > 1 ? 's' : ''} selected`}
          </span>
          <ArrowRight className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
        </button>

        {isOpen && (
          <div className={`mt-4 p-4 rounded-xl border-2 max-h-64 overflow-y-auto ${
            theme === "dark"
              ? "bg-gray-900/50 border-purple-500/20"
              : "bg-white border-purple-200"
          }`}>
            <div className="grid md:grid-cols-2 gap-3">
              {allServices.slice(0, 20).map((service) => (
                <button
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`p-3 rounded-lg text-left transition-all ${
                    selectedServices.includes(service.id)
                      ? theme === "dark"
                        ? "bg-purple-500/20 border-2 border-purple-500"
                        : "bg-purple-50 border-2 border-purple-500"
                      : theme === "dark"
                        ? "bg-gray-800/50 border-2 border-transparent hover:border-purple-500/30"
                        : "bg-gray-50 border-2 border-transparent hover:border-purple-200"
                  }`}
                >
                  <div className={`font-semibold text-sm mb-1 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {service.Service}
                  </div>
                  <div className={`text-xs ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {service.category} • {service.Fee}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Comparison Table */}
      {comparisonData.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b-2 ${
                theme === "dark" ? "border-purple-500/20" : "border-purple-200"
              }`}>
                <th className={`text-left p-4 font-bold ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}>
                  Service
                </th>
                <th className={`text-right p-4 font-bold ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}>
                  Fee
                </th>
                <th className={`text-right p-4 font-bold ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}>
                  Fee %
                </th>
                <th className={`text-right p-4 font-bold ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}>
                  You Receive
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((service, index) => {
                const isBest = bestOption && service.id === bestOption.id;
                return (
                  <tr 
                    key={service.id}
                    className={`border-b transition-colors ${
                      theme === "dark" 
                        ? "border-gray-700 hover:bg-purple-500/10" 
                        : "border-gray-200 hover:bg-purple-50"
                    } ${isBest ? 'bg-green-500/10' : ''}`}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {isBest && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                        <div>
                          <div className={`font-semibold ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}>
                            {service.Service}
                          </div>
                          <div className={`text-sm ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}>
                            {service.category}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={`text-right p-4 font-semibold ${
                      theme === "dark" ? "text-red-400" : "text-red-600"
                    }`}>
                      {formatCurrency(service.feeAmount)}
                    </td>
                    <td className={`text-right p-4 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}>
                      {service.percentage}%
                    </td>
                    <td className={`text-right p-4 font-bold ${
                      theme === "dark" ? "text-green-400" : "text-green-600"
                    }`}>
                      {formatCurrency(service.netAmount)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Savings Summary */}
          {comparisonData.length > 1 && bestOption && (
            <div className={`mt-6 p-6 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 ${
              theme === "dark" ? "border-green-500/30" : "border-green-300"
            }`}>
              <div className="flex items-center gap-3 mb-2">
                <TrendingDown className="w-6 h-6 text-green-500" />
                <h3 className={`text-xl font-bold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  Best Option Identified
                </h3>
              </div>
              <p className={`text-lg ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}>
                <span className="font-bold text-green-500">{bestOption.Service}</span> offers the lowest fee at{' '}
                <span className="font-bold">{formatCurrency(bestOption.feeAmount)}</span> ({bestOption.percentage}%)
              </p>
              {comparisonData.length > 1 && (
                <p className={`mt-2 text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  You could save up to{' '}
                  <span className="font-bold text-green-500">
                    {formatCurrency(Math.max(...comparisonData.map(s => s.feeAmount)) - bestOption.feeAmount)}
                  </span>{' '}
                  by choosing this service
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {comparisonData.length === 0 && (
        <div className={`text-center py-12 ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}>
          <p className="text-lg">Select services above to start comparing fees</p>
        </div>
      )}
    </section>
  );
}
