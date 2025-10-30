import { Zap, AlertTriangle, RefreshCw } from "lucide-react";

export default function LoadingError({ loading, error, theme, onRetry }) {
  if (loading) {
    return (
      <div className="text-center p-12 animate-fadeIn">
        <div className="relative mb-6">
          <div className="inline-block p-6 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm">
            <Zap className="w-12 h-12 text-blue-500 animate-spin" />
          </div>
          <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-ping"></div>
        </div>
        <h3 className={`text-2xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          Loading Your Data
        </h3>
        <p className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
          Fetching fees and exchange rates...
        </p>
        <div className="mt-6 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-12 animate-fadeIn">
        <div className="inline-block p-6 rounded-full bg-red-500/20 mb-6">
          <AlertTriangle className="w-12 h-12 text-red-500" />
        </div>
        <h3 className="text-2xl font-bold text-red-500 mb-3">Oops! Something went wrong</h3>
        <p className={`text-lg mb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
          {error || "We're having trouble loading the data. Please try again."}
        </p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>
        )}
      </div>
    );
  }

  return null;
}