import { HelpCircle, X } from "lucide-react";
import { useState } from "react";

const serviceDescriptions = {
  "Freedom Virtual Card": "A virtual card for online purchases and subscriptions. Perfect for international transactions without physical card requirements.",
  "US Virtual Bank Account": "Get a US-based virtual bank account for receiving payments and conducting USD transactions globally.",
  "NG Virtual Bank Account": "Nigerian virtual bank account for local transactions and NGN-denominated payments.",
  "Payout": "Transfer funds from your account to external banks or mobile wallets quickly and securely.",
  "Business Payout": "Bulk payout solution for businesses to pay vendors, suppliers, or employees efficiently.",
  "Wallet to Wallet Transfer": "Instant transfer of funds between PaySwap user wallets with minimal fees.",
  "FX": "Foreign exchange services for converting between different currencies at competitive rates.",
  "Business Collections": "Accept payments from customers via multiple channels including cards, bank transfers, and more."
};

const feeTypeDescriptions = {
  "FREE": "No charges apply for this transaction - completely free of fees!",
  "percentage": "Fee is calculated as a percentage of your transaction amount.",
  "fixed": "A flat fee that remains constant regardless of transaction amount.",
  "capped": "Percentage-based fee with minimum and maximum limits for your protection."
};

export default function HelpTooltip({ content, theme, type = "info" }) {
  const [isOpen, setIsOpen] = useState(false);

  const getDescription = () => {
    if (type === "service") {
      return serviceDescriptions[content] || "Service information not available.";
    } else if (type === "feeType") {
      if (content === "FREE") return feeTypeDescriptions["FREE"];
      if (content?.includes("%") && content?.includes("$")) return feeTypeDescriptions["capped"];
      if (content?.includes("%")) return feeTypeDescriptions["percentage"];
      if (content?.includes("$") || content?.includes("₦")) return feeTypeDescriptions["fixed"];
      return "Fee calculation information.";
    }
    return content;
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`inline-flex items-center justify-center w-5 h-5 rounded-full transition-all ${
          theme === "dark"
            ? "text-blue-400 hover:bg-blue-500/20"
            : "text-blue-600 hover:bg-blue-100"
        }`}
        aria-label="Help"
      >
        <HelpCircle className="w-4 h-4" />
      </button>

      {isOpen && (
        <div 
          className={`absolute z-50 w-64 p-4 rounded-xl shadow-2xl transform -translate-x-1/2 left-1/2 bottom-full mb-2 animate-fadeIn ${
            theme === "dark"
              ? "bg-gray-800 border border-blue-500/30"
              : "bg-white border border-blue-200"
          }`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className={`text-sm leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}>
            {getDescription()}
          </div>
          
          {/* Arrow */}
          <div 
            className={`absolute w-3 h-3 transform rotate-45 left-1/2 -translate-x-1/2 -bottom-1.5 ${
              theme === "dark" ? "bg-gray-800 border-r border-b border-blue-500/30" : "bg-white border-r border-b border-blue-200"
            }`}
          />
        </div>
      )}
    </div>
  );
}

// Quick help guide component
export function QuickHelpGuide({ theme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 left-8 p-4 rounded-full shadow-2xl z-40 transition-all duration-300 hover:scale-110 ${
          theme === "dark"
            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
            : "bg-gradient-to-r from-cyan-400 to-blue-400 text-white"
        }`}
        title="Quick Help Guide"
      >
        <HelpCircle className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className={`relative w-full max-w-2xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden ${
            theme === "dark"
              ? "bg-gray-900 border border-blue-500/20"
              : "bg-white border border-gray-200"
          }`}>
            <div className={`sticky top-0 p-6 border-b z-10 ${
              theme === "dark"
                ? "bg-gray-900 border-gray-700"
                : "bg-white border-gray-200"
            }`}>
              <div className="flex items-center justify-between">
                <h2 className={`text-2xl font-black ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  Quick Help Guide
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-2 rounded-xl transition-colors ${
                    theme === "dark"
                      ? "hover:bg-gray-800 text-gray-400 hover:text-white"
                      : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
              <div className="space-y-6">
                <section>
                  <h3 className={`text-xl font-bold mb-3 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    How to Calculate Fees
                  </h3>
                  <ol className={`space-y-2 list-decimal list-inside ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}>
                    <li>Enter the amount you want to transact</li>
                    <li>Select your preferred currency (USD or NGN)</li>
                    <li>Choose a service category</li>
                    <li>Select the specific service</li>
                    <li>View instant fee breakdown and savings</li>
                  </ol>
                </section>

                <section>
                  <h3 className={`text-xl font-bold mb-3 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    Understanding Fees
                  </h3>
                  <div className="space-y-3">
                    <div className={`p-4 rounded-xl ${
                      theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                    }`}>
                      <p className={`font-semibold mb-1 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}>
                        Fixed Fees (e.g., $1, ₦200)
                      </p>
                      <p className={`text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}>
                        A constant amount charged regardless of transaction size
                      </p>
                    </div>

                    <div className={`p-4 rounded-xl ${
                      theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                    }`}>
                      <p className={`font-semibold mb-1 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}>
                        Percentage Fees (e.g., 1.5%, 3%)
                      </p>
                      <p className={`text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}>
                        Calculated as a percentage of your transaction amount
                      </p>
                    </div>

                    <div className={`p-4 rounded-xl ${
                      theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                    }`}>
                      <p className={`font-semibold mb-1 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}>
                        Capped Fees (e.g., 1.5% ($1 - $5))
                      </p>
                      <p className={`text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}>
                        Percentage fee with minimum and maximum limits
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className={`text-xl font-bold mb-3 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    Tips for Saving Money
                  </h3>
                  <ul className={`space-y-2 list-disc list-inside ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}>
                    <li>Use the comparison tool to find the lowest fees</li>
                    <li>Consider account type (Customer vs Business) for better rates</li>
                    <li>Bundle transactions when possible for fixed-fee services</li>
                    <li>Monitor exchange rates for currency conversions</li>
                    <li>Check for FREE services that meet your needs</li>
                  </ul>
                </section>

                <section>
                  <h3 className={`text-xl font-bold mb-3 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    Additional Features
                  </h3>
                  <ul className={`space-y-2 list-disc list-inside ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}>
                    <li><strong>History:</strong> View your recent calculations</li>
                    <li><strong>Export:</strong> Download calculations as images or CSV</li>
                    <li><strong>Share:</strong> Share results via social media</li>
                    <li><strong>Compare:</strong> Compare fees across multiple services</li>
                    <li><strong>Themes:</strong> Switch between light and dark modes</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
