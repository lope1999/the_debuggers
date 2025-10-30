export default function Footer({ theme }) {
  return (
    <footer className={`text-center py-8 ${
      theme === "dark" ? "text-gray-400" : "text-gray-600"
    }`}>
      <p className="mb-4 font-semibold">© 2025 The Debuggers. Secured & Trusted.</p>
      <div className="flex justify-center gap-6 text-sm font-medium">
        <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
        <span>•</span>
        <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
        <span>•</span>
        <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
      </div>
    </footer>
  );
}