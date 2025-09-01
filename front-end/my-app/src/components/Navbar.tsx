import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-transparent border-b border-white/20">
      <div className="max-w-8xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-light text-white hover:text-blue-300 transition-colors"
          >
            Notifica<span className="text-blue-300">+</span>
          </Link>

          <div className="flex space-x-4">
            <Link
              to="/"
              className="px-6 py-2 rounded-lg font-medium transition-colors text-gray-300 hover:text-white hover:bg-white/10"
            >
              Início
            </Link>

            <Link
              to="/dashboard"
              className="px-6 py-2 rounded-lg font-medium transition-colors text-gray-300 hover:text-white hover:bg-white/10"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
