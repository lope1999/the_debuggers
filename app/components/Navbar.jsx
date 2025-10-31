import { Calculator, TrendingUp, History, Share2, HelpCircle, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar({ theme, toggleTheme, activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: null },
    { id: "services", label: "Services", icon: TrendingUp },
    { id: "calculator", label: "Calculator", icon: Calculator },
    { id: "comparison", label: "Compare Fees", icon: TrendingUp },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? theme === "dark"
            ? "bg-gray-900/95 backdrop-blur-lg shadow-2xl border-b border-blue-500/20"
            : "bg-white/95 backdrop-blur-lg shadow-2xl border-b border-gray-200"
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="h-8 flex items-center gap-3 group"
            >
              <img
                src={theme === "dark" ? "/dark-logo.png" : "/logo.png"}
                alt="The Debuggers Logo"
                className="h-full w-auto transition-transform group-hover:scale-105"
              />
              <span className={`font-black text-lg hidden sm:block ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                Fee Calculator
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-blue-500 text-white shadow-lg scale-105"
                        : theme === "dark"
                          ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    {item.label}
                  </button>
                );
              })}

              {/* Quick Action Buttons */}
              <div className={`flex items-center gap-2 ml-4 pl-4 border-l-2 ${
                theme === "dark" ? "border-gray-700" : "border-gray-200"
              }`}>
                <button
                  onClick={() => {
                    const historyBtn = document.querySelector('[title="View calculation history"]');
                    if (historyBtn) historyBtn.click();
                  }}
                  className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                    theme === "dark"
                      ? "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30"
                      : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                  }`}
                  title="History"
                >
                  <History className="w-5 h-5" />
                </button>

                <button
                  onClick={() => {
                    const helpBtn = document.querySelector('[title="Quick Help Guide"]');
                    if (helpBtn) helpBtn.click();
                  }}
                  className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                    theme === "dark"
                      ? "bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30"
                      : "bg-cyan-100 text-cyan-700 hover:bg-cyan-200"
                  }`}
                  title="Help"
                >
                  <HelpCircle className="w-5 h-5" />
                </button>

                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                    theme === "dark"
                      ? "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30"
                      : "bg-gray-900/10 text-gray-900 hover:bg-gray-900/20"
                  }`}
                  title="Toggle Theme"
                >
                  {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                  theme === "dark"
                    ? "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30"
                    : "bg-gray-900/10 text-gray-900 hover:bg-gray-900/20"
                }`}
              >
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-xl transition-all ${
                  theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className={`w-full h-0.5 rounded transition-all ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  } ${theme === "dark" ? "bg-white" : "bg-gray-900"}`} />
                  <span className={`w-full h-0.5 rounded transition-all ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  } ${theme === "dark" ? "bg-white" : "bg-gray-900"}`} />
                  <span className={`w-full h-0.5 rounded transition-all ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  } ${theme === "dark" ? "bg-white" : "bg-gray-900"}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={`md:hidden mt-4 p-4 rounded-2xl border-2 animate-fadeIn ${
              theme === "dark"
                ? "bg-gray-800/95 border-blue-500/20"
                : "bg-white/95 border-gray-200"
            }`}>
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
                        activeSection === item.id
                          ? "bg-blue-500 text-white shadow-lg"
                          : theme === "dark"
                            ? "text-gray-300 hover:bg-gray-700"
                            : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {IconComponent && <IconComponent className="w-5 h-5" />}
                      {item.label}
                    </button>
                  );
                })}

                {/* Mobile Quick Actions */}
                <div className={`mt-4 pt-4 border-t-2 flex gap-2 ${
                  theme === "dark" ? "border-gray-700" : "border-gray-200"
                }`}>
                  <button
                    onClick={() => {
                      const historyBtn = document.querySelector('[title="View calculation history"]');
                      if (historyBtn) historyBtn.click();
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all ${
                      theme === "dark"
                        ? "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30"
                        : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                    }`}
                  >
                    <History className="w-5 h-5" />
                    History
                  </button>

                  <button
                    onClick={() => {
                      const helpBtn = document.querySelector('[title="Quick Help Guide"]');
                      if (helpBtn) helpBtn.click();
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all ${
                      theme === "dark"
                        ? "bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30"
                        : "bg-cyan-100 text-cyan-700 hover:bg-cyan-200"
                    }`}
                  >
                    <HelpCircle className="w-5 h-5" />
                    Help
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20" />
    </>
  );
}
