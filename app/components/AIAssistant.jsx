"use client";
import { useState, useRef, useEffect } from "react";
import { Bot, Send, X, Minimize2, Maximize2, Sparkles, Calculator, HelpCircle, TrendingUp } from "lucide-react";

export default function AIAssistant({ theme, fees, exchangeRate, userType }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Hi! I'm your Fee Calculator AI Assistant. I can help you:\n\n• Calculate fees for any service\n• Compare different services\n• Explain fee structures\n• Find the best option for your needs\n\nWhat would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  // AI Response Logic
  const generateAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Fee calculation queries
    if (lowerMessage.includes("calculate") || lowerMessage.includes("fee for")) {
      return generateCalculationResponse(userMessage);
    }
    
    // Comparison queries
    if (lowerMessage.includes("compare") || lowerMessage.includes("which is better") || lowerMessage.includes("best option")) {
      return generateComparisonResponse();
    }
    
    // Service explanation
    if (lowerMessage.includes("what is") || lowerMessage.includes("explain") || lowerMessage.includes("tell me about")) {
      return generateExplanationResponse(userMessage);
    }
    
    // Help with categories
    if (lowerMessage.includes("category") || lowerMessage.includes("categories") || lowerMessage.includes("services")) {
      return generateCategoriesResponse();
    }
    
    // Exchange rate queries
    if (lowerMessage.includes("exchange") || lowerMessage.includes("rate") || lowerMessage.includes("naira") || lowerMessage.includes("dollar")) {
      return generateExchangeRateResponse();
    }
    
    // Savings tips
    if (lowerMessage.includes("save") || lowerMessage.includes("cheaper") || lowerMessage.includes("reduce")) {
      return generateSavingsResponse();
    }
    
    // Greeting responses
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! 👋 I'm here to help you understand fees and find the best options. What would you like to know?";
    }
    
    // Thank you responses
    if (lowerMessage.includes("thank") || lowerMessage.includes("thanks")) {
      return "You're welcome! 😊 Feel free to ask me anything else about fees and services.";
    }
    
    // Default helpful response
    return `I can help you with:

📊 **Fee Calculations** - Ask me to calculate fees for specific services
🔄 **Service Comparisons** - I'll help you find the best option
💡 **Explanations** - Learn about different fee structures
💰 **Money Saving Tips** - Discover how to minimize fees

Try asking something like:
• "Calculate fee for $100 virtual card"
• "Compare payout services"
• "What's the exchange rate?"
• "How can I save on fees?"`;
  };

  const generateCalculationResponse = (message) => {
    if (!fees) return "I need the fee data to help with calculations. Please ensure the app has loaded successfully.";
    
    const currentData = fees[userType] || {};
    const categories = Object.keys(currentData);
    
    if (categories.length === 0) {
      return "No fee data available for the current user type. Try switching between Customer and Business.";
    }
    
    return `🧮 **To calculate fees**, I recommend:

1. **Select your amount** (e.g., $100)
2. **Choose a category** from: ${categories.slice(0, 3).join(", ")}${categories.length > 3 ? ", and more" : ""}
3. **Pick a service** that matches your needs

**Quick Example:**
For a $100 Freedom Virtual Card:
• Standard fee might be around $1-2
• You'd receive approximately $98-99

Use the calculator above to get exact figures! Want me to explain a specific service?`;
  };

  const generateComparisonResponse = () => {
    if (!fees) return "Fee data is loading. Please wait a moment.";
    
    const currentData = fees[userType] || {};
    const allServices = [];
    
    Object.entries(currentData).forEach(([category, services]) => {
      services.forEach(service => {
        if (service.Fee === "FREE") {
          allServices.push(`${service.Service} (${category})`);
        }
      });
    });
    
    if (allServices.length > 0) {
      return `💎 **FREE Services Available:**

${allServices.slice(0, 3).map(s => `✅ ${s}`).join("\n")}
${allServices.length > 3 ? `\n...and ${allServices.length - 3} more!\n` : ""}

💡 **Pro Tip:** Use the Fee Comparison tool above to compare up to 4 services side-by-side with your specific amount!`;
    }
    
    return `🔄 **To compare services:**

1. Use the **Fee Comparison** section above
2. Select up to 4 different services
3. Enter your amount
4. See which option saves you the most!

The comparison shows total fees, net amounts, and highlights the best option in green.`;
  };

  const generateExplanationResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes("virtual card") || lowerMessage.includes("freedom")) {
      return `💳 **Freedom Virtual Card Explained:**

A virtual card allows you to make online purchases without a physical card. Perfect for:
• Online shopping (Amazon, eBay, etc.)
• Digital subscriptions (Netflix, Spotify)
• International payments
• Secure transactions

**Fee Structure:** Usually a small percentage (1-2%) or fixed fee ($1-2) per transaction.

Want to calculate fees for a specific amount?`;
    }
    
    if (lowerMessage.includes("payout") || lowerMessage.includes("withdrawal")) {
      return `💸 **Payout Services Explained:**

Payouts allow you to receive money from platforms to your bank account.

**Types:**
• **Standard Payout:** Regular withdrawal speeds
• **Business Payout:** Higher limits, business features
• **Instant Payout:** Faster processing (may cost more)

**Fees vary by:** Amount, destination, and speed. Use the calculator to see exact costs!`;
    }
    
    if (lowerMessage.includes("fx") || lowerMessage.includes("foreign exchange")) {
      return `💱 **Foreign Exchange (FX) Explained:**

FX services let you convert between currencies (e.g., USD to NGN).

**Current Rate:** ${exchangeRate ? `$1 = ₦${exchangeRate.rate?.toFixed(2)}` : "Loading..."}

**Fees typically include:**
• Conversion fee (percentage)
• Spread (difference from market rate)
• Transaction fee (if applicable)

Always compare rates before converting!`;
    }
    
    return `I can explain various services! Ask me about:

💳 Virtual Cards
💸 Payouts & Withdrawals
💱 Foreign Exchange (FX)
🏦 Virtual Bank Accounts
🔄 Wallet Transfers

Just ask: "Explain [service name]"`;
  };

  const generateCategoriesResponse = () => {
    if (!fees) return "Loading service categories...";
    
    const currentData = fees[userType] || {};
    const categories = Object.keys(currentData);
    
    return `📋 **Available Categories for ${userType}:**

${categories.map((cat, idx) => {
  const count = currentData[cat]?.length || 0;
  return `${idx + 1}. **${cat}** (${count} service${count !== 1 ? 's' : ''})`;
}).join("\n")}

Tap on any category card above to explore services! Want details about a specific category?`;
  };

  const generateExchangeRateResponse = () => {
    if (!exchangeRate) {
      return "Exchange rate data is loading. Please wait a moment...";
    }
    
    const rate = exchangeRate.rate;
    const lastUpdate = exchangeRate.lastUpdate ? new Date(exchangeRate.lastUpdate).toLocaleString() : "Unknown";
    
    return `💱 **Current Exchange Rate:**

**$1 USD = ₦${rate?.toFixed(2)} NGN**

Last updated: ${lastUpdate}

**Quick Conversions:**
• $10 = ₦${(rate * 10).toFixed(2)}
• $50 = ₦${(rate * 50).toFixed(2)}
• $100 = ₦${(rate * 100).toFixed(2)}
• $500 = ₦${(rate * 500).toFixed(2)}

Use the currency toggle in the calculator to see fees in NGN!`;
  };

  const generateSavingsResponse = () => {
    return `💡 **Money-Saving Tips:**

1. **Compare Services** 🔄
   Use the comparison tool to find the cheapest option

2. **Look for FREE Services** 🎁
   Some services have zero fees - check the categories!

3. **Bundle Transactions** 📦
   Larger amounts may have better percentage rates

4. **Check Account Type** 🔀
   Sometimes Business accounts have different (better) rates

5. **Use the Right Currency** 💱
   Calculate in both USD and NGN to see if conversion helps

6. **Plan Ahead** 📅
   Avoid urgent/express services that charge premium fees

Want me to compare specific services for you?`;
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = {
      role: "user",
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = generateAIResponse(input);
      const assistantMessage = {
        role: "assistant",
        content: aiResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 400); // Random delay 800-1200ms for realism
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Quick action buttons
  const quickActions = [
    { icon: Calculator, label: "Calculate Fees", query: "How do I calculate fees?" },
    { icon: TrendingUp, label: "Compare Services", query: "Compare different services" },
    { icon: HelpCircle, label: "Explain Fees", query: "Explain fee structures" },
    { icon: Sparkles, label: "Save Money", query: "How can I save on fees?" }
  ];

  const handleQuickAction = (query) => {
    setInput(query);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* AI Assistant Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed bottom-20 right-6 z-40 group ${
            theme === "dark"
              ? "bg-gradient-to-r from-purple-600 to-pink-600"
              : "bg-gradient-to-r from-purple-500 to-pink-500"
          } text-white p-5 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110`}
          title="AI Assistant"
          style={{
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        >
          <Bot className="w-7 h-7" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
          
          {/* Tooltip */}
          <div className={`absolute bottom-full right-0 mb-2 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-900 text-white"
          }`}>
            💬 Ask AI Assistant
            <div className={`absolute top-full right-4 border-4 border-transparent ${
              theme === "dark" ? "border-t-gray-800" : "border-t-gray-900"
            }`} />
          </div>
        </button>
      )}
      
      {/* Enhanced pulse animation styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.7);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(168, 85, 247, 0);
          }
        }
      `}</style>

      {/* AI Chat Window */}
      {isOpen && (
        <div className={`fixed ${isMinimized ? "bottom-6 right-6" : "bottom-6 right-6"} z-50 ${
          isMinimized ? "w-72" : "w-96"
        } transition-all duration-300 animate-fadeIn`}>
          <div className={`rounded-2xl shadow-2xl overflow-hidden border-2 ${
            theme === "dark"
              ? "bg-gray-900/95 border-purple-500/30"
              : "bg-white/95 border-purple-200"
          } backdrop-blur-xl`}>
            {/* Header */}
            <div className={`px-4 py-3 flex items-center justify-between ${
              theme === "dark"
                ? "bg-gradient-to-r from-purple-600 to-pink-600"
                : "bg-gradient-to-r from-purple-500 to-pink-500"
            }`}>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Bot className="w-6 h-6 text-white" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                </div>
                <div className="text-white">
                  <h3 className="font-bold text-sm">AI Assistant</h3>
                  <p className="text-xs opacity-90">Always here to help</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            {!isMinimized && (
              <>
                <div className={`h-96 overflow-y-auto p-4 space-y-4 ${
                  theme === "dark" ? "bg-gray-900/50" : "bg-gray-50/50"
                }`}>
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
                    >
                      <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                          : theme === "dark"
                            ? "bg-gray-800 text-gray-100"
                            : "bg-white text-gray-900"
                      } shadow-lg`}>
                        <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.role === "user" ? "text-white/70" : "text-gray-500"
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start animate-fadeIn">
                      <div className={`rounded-2xl px-4 py-3 ${
                        theme === "dark" ? "bg-gray-800" : "bg-white"
                      } shadow-lg`}>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Actions */}
                {messages.length === 1 && (
                  <div className={`p-3 border-t ${
                    theme === "dark" ? "border-gray-800" : "border-gray-200"
                  }`}>
                    <p className={`text-xs font-semibold mb-2 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}>
                      Quick Actions:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {quickActions.map((action, index) => {
                        const IconComponent = action.icon;
                        return (
                          <button
                            key={index}
                            onClick={() => handleQuickAction(action.query)}
                            className={`flex items-center gap-2 p-2 rounded-lg text-xs font-medium transition-all hover:scale-105 ${
                              theme === "dark"
                                ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            <IconComponent className="w-4 h-4" />
                            <span className="truncate">{action.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Input Area */}
                <div className={`p-3 border-t ${
                  theme === "dark" ? "border-gray-800" : "border-gray-200"
                }`}>
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything..."
                      className={`flex-1 px-4 py-2 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        theme === "dark"
                          ? "bg-gray-800 text-white placeholder-gray-500"
                          : "bg-gray-100 text-gray-900 placeholder-gray-400"
                      }`}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!input.trim()}
                      className={`px-4 py-2 rounded-xl transition-all ${
                        input.trim()
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 shadow-lg"
                          : theme === "dark"
                            ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
