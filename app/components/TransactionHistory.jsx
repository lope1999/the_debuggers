import { useState, useEffect } from "react";
import { History, X, Download } from "lucide-react";

export default function TransactionHistory({ theme, currency }) {
  const [history, setHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load history from localStorage
    const savedHistory = localStorage.getItem('feeCalculatorHistory');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Error loading history:', error);
      }
    }
  }, []);

  const addToHistory = (calculation) => {
    console.log('addToHistory called with:', calculation);
    
    const newEntry = {
      ...calculation,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };

    // Get fresh history from localStorage to avoid stale closure
    const savedHistory = localStorage.getItem('feeCalculatorHistory');
    const currentHistory = savedHistory ? JSON.parse(savedHistory) : [];
    
    console.log('Current history before adding:', currentHistory.length, 'items');
    
    const updatedHistory = [newEntry, ...currentHistory].slice(0, 10); // Keep last 10
    
    console.log('Updated history after adding:', updatedHistory.length, 'items');
    
    setHistory(updatedHistory);
    localStorage.setItem('feeCalculatorHistory', JSON.stringify(updatedHistory));
    
    console.log('History saved to localStorage');
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('feeCalculatorHistory');
  };

  const formatCurrency = (value, curr) => {
    const symbol = curr === 'NGN' ? '₦' : '$';
    return `${symbol}${parseFloat(value).toFixed(2)}`;
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();
    
    if (isToday) {
      return `Today at ${date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
      })}`;
    }
    
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const exportHistory = () => {
    const data = history.map(item => ({
      Date: formatDate(item.timestamp),
      Service: item.service,
      Category: item.category,
      Amount: formatCurrency(item.amount, item.currency),
      Fee: formatCurrency(item.fee, item.currency),
      Net: formatCurrency(item.net, item.currency),
      Currency: item.currency
    }));

    const csv = [
      Object.keys(data[0]).join(','),
      ...data.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fee-calculations-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Expose addToHistory function globally
  useEffect(() => {
    console.log('TransactionHistory mounted - exposing addToFeeHistory to window');
    window.addToFeeHistory = addToHistory;
    return () => {
      console.log('TransactionHistory unmounting - removing addToFeeHistory');
      delete window.addToFeeHistory;
    };
  }, []); // Empty dependency array since addToHistory now reads fresh data

  return (
    <>
      {/* History Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 left-8 p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110 ${
          theme === "dark"
            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
            : "bg-gradient-to-r from-blue-400 to-purple-400 text-white"
        }`}
        title="View calculation history"
      >
        <History className="w-6 h-6" />
        {history.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {history.length}
          </span>
        )}
      </button>

      {/* History Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className={`relative w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden ${
            theme === "dark"
              ? "bg-gray-900 border border-blue-500/20"
              : "bg-white border border-gray-200"
          }`}>
            {/* Header */}
            <div className={`sticky top-0 p-6 border-b z-10 ${
              theme === "dark"
                ? "bg-gray-900 border-gray-700"
                : "bg-white border-gray-200"
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">
                    <History className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className={`text-2xl font-black ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}>
                      Calculation History
                    </h2>
                    <p className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}>
                      {history.length} recent calculation{history.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {history.length > 0 && (
                    <>
                      <button
                        onClick={exportHistory}
                        className={`p-2 rounded-xl transition-colors ${
                          theme === "dark"
                            ? "hover:bg-gray-800 text-gray-400 hover:text-white"
                            : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                        }`}
                        title="Export to CSV"
                      >
                        <Download className="w-5 h-5" />
                      </button>
                      <button
                        onClick={clearHistory}
                        className={`px-4 py-2 rounded-xl font-semibold transition-colors ${
                          theme === "dark"
                            ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                            : "bg-red-100 text-red-600 hover:bg-red-200"
                        }`}
                      >
                        Clear All
                      </button>
                    </>
                  )}
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
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {history.length === 0 ? (
                <div className={`text-center py-12 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  <History className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold mb-2">No calculations yet</p>
                  <p className="text-sm">Your recent fee calculations will appear here</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {history.map((item, index) => (
                    <div
                      key={item.id}
                      className={`p-5 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] ${
                        theme === "dark"
                          ? "bg-gray-800/50 border-blue-500/20 hover:border-blue-500/40"
                          : "bg-gray-50 border-gray-200 hover:border-blue-300"
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className={`font-bold text-lg mb-1 ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}>
                            {item.service}
                          </h3>
                          <p className={`text-sm ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}>
                            {item.category} • {item.userType}
                          </p>
                        </div>
                        <div className={`text-xs px-3 py-1 rounded-full ${
                          theme === "dark" ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
                        }`}>
                          {formatDate(item.timestamp)}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className={`text-xs mb-1 ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}>
                            Amount
                          </p>
                          <p className={`font-bold ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}>
                            {formatCurrency(item.amount, item.currency)}
                          </p>
                        </div>
                        <div>
                          <p className={`text-xs mb-1 ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}>
                            Fee
                          </p>
                          <p className="font-bold text-red-500">
                            {formatCurrency(item.fee, item.currency)}
                          </p>
                        </div>
                        <div>
                          <p className={`text-xs mb-1 ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}>
                            You Receive
                          </p>
                          <p className="font-bold text-green-500">
                            {formatCurrency(item.net, item.currency)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
