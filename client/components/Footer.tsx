import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-700 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="text-cyan-500 text-2xl font-bold">Notify</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">
                The New Creative Economy.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Subscribe our newsletter to get more free design course and
                resource.
              </p>
            </div>

            <div className="bg-navy-800 rounded-lg p-6">
              <h4 className="text-white text-lg font-semibold mb-4">
                Join Newsletter
              </h4>
              <p className="text-gray-400 mb-4">
                Subscribe our newsletter to get more free design course and
                resource.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-navy-700 border border-navy-600 rounded-l-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-cyan-500 hover:bg-cyan-400 text-navy-900 px-6 py-3 rounded-r-lg font-semibold transition-colors flex items-center">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Discover
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Connect wallet
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Create wallet
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Info</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Download
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Demo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Help center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Suggestions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Recommended Section */}
        <div className="mb-8">
          <h4 className="text-white font-semibold text-lg mb-4">
            Recommended for you
          </h4>
        </div>

        {/* Bottom */}
        <div className="border-t border-navy-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            Copyright 2024 Space all rights reserved
          </div>
          <div className="text-cyan-500 text-2xl font-bold">Space</div>
        </div>
      </div>
    </footer>
  );
}
