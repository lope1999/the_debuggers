import { Zap, Sparkles, TrendingUp, CreditCard, Wallet, ArrowRightLeft, Building, DollarSign } from "lucide-react";

export default function ServiceCategories({ fees, theme, userType, setUserType }) {
  if (!fees) return null;

  const getIconForCategory = (categoryName) => {
    const icons = {
      'Freedom Virtual Card': CreditCard,
      'US Virtual Bank Account': Building,
      'NG Virtual Bank Account': Wallet,
      'Payout': DollarSign,
      'Business Payout': DollarSign,
      'Wallet to Wallet Transfer': ArrowRightLeft,
      'FX': TrendingUp,
      'Business Collections': Sparkles
    };
    return icons[categoryName] || Zap;
  };

  const getColorForCategory = (index) => {
    const colors = [
      "from-blue-500 to-blue-600",
      "from-purple-500 to-purple-600", 
      "from-green-500 to-green-600",
      "from-yellow-500 to-yellow-600",
      "from-red-500 to-red-600",
      "from-cyan-500 to-cyan-600",
      "from-pink-500 to-pink-600",
      "from-indigo-500 to-indigo-600"
    ];
    return colors[index % colors.length];
  };

  const currentData = fees[userType] || {};

  return (
    <div className="mb-20">
      {/* User Type Selector */}
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-black mb-6 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}>
          Choose Your Account Type
        </h2>
        <div className="inline-flex p-2 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm">
          <button
            onClick={() => setUserType('Customer')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              userType === 'Customer'
                ? 'bg-blue-500 text-white shadow-lg'
                : theme === "dark" 
                  ? 'text-blue-200 hover:text-white' 
                  : 'text-blue-700 hover:text-blue-900'
            }`}
          >
            Customer
          </button>
          <button
            onClick={() => setUserType('Business')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              userType === 'Business'
                ? 'bg-blue-500 text-white shadow-lg'
                : theme === "dark" 
                  ? 'text-blue-200 hover:text-white' 
                  : 'text-blue-700 hover:text-blue-900'
            }`}
          >
            Business
          </button>
        </div>
      </div>

      {/* Service Categories Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Object.entries(currentData).map(([categoryName, services], categoryIndex) => {
          const IconComponent = getIconForCategory(categoryName);
          const color = getColorForCategory(categoryIndex);
          
          return (
            <div
              key={categoryName}
              className={`group relative p-6 rounded-3xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer animate-fadeIn ${
                theme === "dark"
                  ? "bg-gray-800/40 hover:bg-gray-800/60 border border-blue-500/20"
                  : "bg-white/60 hover:bg-white/80 border border-gray-200 shadow-lg"
              }`}
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="w-6 h-6" />
              </div>
              
              <h3 className={`text-lg font-bold mb-3 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                {categoryName}
              </h3>
              
              <div className="space-y-2">
                {services.slice(0, 3).map((service, index) => (
                  <div key={index} className={`text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}>
                    <div className="flex justify-between items-center">
                      <span className="truncate">{service.Service}</span>
                      <span className={`font-semibold ml-2 ${
                        service.Fee === 'FREE' 
                          ? 'text-green-500' 
                          : 'text-blue-500'
                      }`}>
                        {service.Fee}
                      </span>
                    </div>
                  </div>
                ))}
                {services.length > 3 && (
                  <div className={`text-xs ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}>
                    +{services.length - 3} more services
                  </div>
                )}
              </div>

              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${color.replace('to-', 'to-')} opacity-0 group-hover:opacity-10 transition-opacity blur-xl -z-10`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}