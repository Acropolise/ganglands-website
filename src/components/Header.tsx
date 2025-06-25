import { Button } from "@/components/ui/button";
import { ExternalLink, Heart } from "lucide-react";
const Header = () => {
  const handleWishlist = () => {
    // Replace with actual Steam store URL
    window.open("https://store.steampowered.com/", "_blank");
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-white">Ganglands</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#trailer" className="text-gray-300 hover:text-white transition-colors">Trailer</a>
              <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
              <a href="#screenshots" className="text-gray-300 hover:text-white transition-colors">Screenshots</a>
            </nav>
          </div>
          <Button onClick={handleWishlist} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Wishlist on Steam
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;