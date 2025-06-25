
import { ExternalLink, Twitter, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Game Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">NEXUS WARS</h3>
            <p className="text-gray-400 mb-4">
              A cyberpunk action-adventure game where you master cybernetic powers to save humanity's future.
            </p>
            <p className="text-gray-500 text-sm">
              Coming Q2 2024 to PC, PlayStation 5, and Xbox Series X|S
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#trailer" className="text-gray-400 hover:text-white transition-colors">
                  Trailer
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-400 hover:text-white transition-colors">
                  Download Demo
                </a>
              </li>
              <li>
                <a href="#screenshots" className="text-gray-400 hover:text-white transition-colors">
                  Screenshots
                </a>
              </li>
              <li>
                <a 
                  href="https://store.steampowered.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  Steam Store <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Discord"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-gray-500 text-sm">
                &copy; 2024 Nexus Wars. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
