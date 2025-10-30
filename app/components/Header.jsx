export default function Header({ theme, toggleTheme }) {
  return (
    <header className="flex justify-between items-center mb-16 animate-fadeIn">
      <div className="h-10">
        <img
          src={theme === "dark" ? "/dark-logo.png" : "/logo.png"}
          alt="The Debuggers Logo"
          className="h-full w-auto"
        />
      </div>
      <button
        onClick={toggleTheme}
        className={`p-3 rounded-2xl backdrop-blur-lg transition-all duration-300 hover:scale-110 ${
          theme === "dark"
            ? "bg-white/10 text-yellow-300 hover:bg-white/20"
            : "bg-gray-900/10 text-gray-900 hover:bg-gray-900/20"
        }`}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </header>
  );
}