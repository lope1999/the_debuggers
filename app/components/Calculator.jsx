import { ArrowRight } from "lucide-react";
import ShareCalculation from "./ShareCalculation";

export default function Calculator({ 
  theme, 
  fees, 
  exchangeRate, 
  userType, 
  amount, 
  setAmount, 
  selectedCategory, 
  setSelectedCategory, 
  selectedService, 
  setSelectedService, 
  fee, 
  net, 
  currency, 
  setCurrency 
}) {
  if (!fees) {
    return (
      <section className={`relative p-10 rounded-3xl backdrop-blur-2xl mb-16 animate-fadeIn ${
        theme === "dark"
          ? "bg-gray-800/40 border border-blue-500/20"
          : "bg-white/60 border border-gray-200 shadow-2xl"
      }`}>
        <div className="text-center">
          <div className="animate-pulse">
            <div className={`h-8 rounded mb-4 ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-200"
            }`}></div>
            <div className={`h-4 rounded mb-2 ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-200"
            }`}></div>
            <div className={`h-4 rounded w-3/4 mx-auto ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-200"
            }`}></div>
          </div>
        </div>
      </section>
    );
  }

  const currentData = fees[userType] || {};
  const categories = Object.keys(currentData);
  const services = selectedCategory ? currentData[selectedCategory] || [] : [];

  const getExchangeRateDisplay = () => {
    if (!exchangeRate) return "";
    return `1 ${exchangeRate.from} = ${exchangeRate.rate} ${exchangeRate.to}`;
  };

  const formatAmount = (amount, curr) => {
    const numAmount = parseFloat(amount) || 0;
    if (curr === 'NGN') {
      return `₦${numAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return `$${numAmount.toFixed(2)}`;
  };

  const safeAmount = parseFloat(amount) || 0;
  const safeFee = parseFloat(fee) || 0;
  const safeNet = parseFloat(net) || 0;
  const safeRate = parseFloat(exchangeRate?.rate) || 1;

  const convertedAmount = currency === 'NGN' && exchangeRate ? safeAmount * safeRate : safeAmount;
  const convertedFee = currency === 'NGN' && exchangeRate ? safeFee * safeRate : safeFee;
  const convertedNet = currency === 'NGN' && exchangeRate ? safeNet * safeRate : safeNet;

  return (
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

      <h2 className={`text-4xl font-black mb-2 text-center mt-4 ${
        theme === "dark" ? "text-white" : "text-gray-900"
      }`}>
        Calculate Your Fees
      </h2>

      {exchangeRate && (
        <p className={`text-center mb-8 ${
          theme === "dark" ? "text-blue-200" : "text-blue-600"
        }`}>
          Current Rate: {getExchangeRateDisplay()}
        </p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div>
          <label className={`block text-sm font-bold mb-3 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}>
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              const value = e.target.value;
              // Allow empty input or valid positive numbers
              if (value === '' || (!isNaN(parseFloat(value)) && parseFloat(value) >= 0)) {
                setAmount(value);
              }
            }}
            placeholder="Enter amount"
            min="0"
            step="0.01"
            className={`w-full px-4 py-3 rounded-xl border-2 text-lg font-semibold transition-all duration-300 focus:scale-105 focus:shadow-lg outline-none ${
              theme === "dark"
                ? "bg-gray-900/50 border-blue-500/30 text-white focus:border-blue-500 placeholder-gray-500"
                : "bg-white border-blue-200 text-gray-900 focus:border-blue-500 placeholder-gray-400"
            }`}
          />
        </div>

        <div>
          <label className={`block text-sm font-bold mb-3 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}>
            Currency
          </label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border-2 text-lg font-semibold transition-all duration-300 focus:scale-105 focus:shadow-lg outline-none cursor-pointer ${
              theme === "dark"
                ? "bg-gray-900/50 border-blue-500/30 text-white focus:border-blue-500"
                : "bg-white border-blue-200 text-gray-900 focus:border-blue-500"
            }`}
          >
            <option value="USD">USD ($)</option>
            <option value="NGN">NGN (₦)</option>
          </select>
        </div>

        <div>
          <label className={`block text-sm font-bold mb-3 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}>
            Service Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedService('');
            }}
            className={`w-full px-4 py-3 rounded-xl border-2 text-lg font-semibold transition-all duration-300 focus:scale-105 focus:shadow-lg outline-none cursor-pointer ${
              theme === "dark"
                ? "bg-gray-900/50 border-blue-500/30 text-white focus:border-blue-500"
                : "bg-white border-blue-200 text-gray-900 focus:border-blue-500"
            }`}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={`block text-sm font-bold mb-3 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}>
            Service
          </label>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            disabled={!selectedCategory}
            className={`w-full px-4 py-3 rounded-xl border-2 text-lg font-semibold transition-all duration-300 focus:scale-105 focus:shadow-lg outline-none cursor-pointer ${
              theme === "dark"
                ? "bg-gray-900/50 border-blue-500/30 text-white focus:border-blue-500"
                : "bg-white border-blue-200 text-gray-900 focus:border-blue-500"
            } ${!selectedCategory ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <option value="">Select Service</option>
            {services.map((service, index) => (
              <option key={index} value={service.Service}>
                {service.Service} ({service.Fee})
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedService && (
        <>
          <div className="relative p-8 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-yellow-400 text-white overflow-hidden mb-6">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-sm font-semibold opacity-90 mb-2">Amount</p>
                <p className="text-3xl font-black">{formatAmount(convertedAmount, currency)}</p>
              </div>
              <div>
                <p className="text-sm font-semibold opacity-90 mb-2">Fee</p>
                <p className="text-3xl font-black">{formatAmount(convertedFee, currency)}</p>
              </div>
              <div>
                <p className="text-sm font-semibold opacity-90 mb-2">You'll Receive</p>
                <p className="text-3xl font-black">{formatAmount(convertedNet, currency)}</p>
              </div>
            </div>
          </div>

          <ShareCalculation
            theme={theme}
            amount={convertedAmount}
            fee={convertedFee}
            net={convertedNet}
            currency={currency}
            service={selectedService}
            category={selectedCategory}
          />
        </>
      )}

      <button 
        className="group mt-4 relative w-full px-8 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-full text-xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105"
        disabled={!selectedService}
        onClick={() => {
          if (selectedService) {
            const calculationData = {
              service: selectedService,
              category: selectedCategory,
              userType,
              amount: safeAmount,
              fee: safeFee,
              net: safeNet,
              currency
            };
            
            console.log('Saving to history:', calculationData);
            
            if (window.addToFeeHistory) {
              window.addToFeeHistory(calculationData);
              console.log('Successfully called addToFeeHistory');
            } else {
              console.error('window.addToFeeHistory is not available!');
            }
          }
        }}
      >
        {selectedService ? 'Process Transaction' : 'Select a Service'}
        <ArrowRight className="inline-block ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>
    </section>
  );
}