import { Search, Settings, User } from "lucide-react";

export function Header() {
  return (
    <header className="bg-navy-900 border-b border-navy-700 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-cyan-500 text-2xl font-bold">Space</div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by logo, themes, artists, and"
              className="w-full bg-navy-800 border border-navy-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <a
            href="#"
            className="text-cyan-500 hover:text-cyan-400 transition-colors"
          >
            Upload
          </a>
          <div className="relative">
            <button className="text-white hover:text-gray-300 transition-colors flex items-center">
              Activity
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Account
          </a>
          <div className="flex items-center space-x-3">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5z" />
              </svg>
            </button>
            <button className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
