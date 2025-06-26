
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart } from "lucide-react";

const Header = () => {
  const handleWishlist = () => {
    window.open("https://store.steampowered.com/app/3734080/Ganglands/", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 md:space-x-8">
            <h1 className="text-xl md:text-2xl font-bold text-white">Ganglands</h1>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('demo')} 
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Demo
              </button>
              <button 
                onClick={() => scrollToSection('screenshots')} 
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Screenshots
              </button>
              <button 
                onClick={() => scrollToSection('community')} 
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Community
              </button>
            </nav>
          </div>
          <Button 
            onClick={handleWishlist} 
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-3 md:px-6 py-2 rounded-lg transition-all duration-200 flex items-center gap-1 md:gap-2 text-sm md:text-base"
          >
            <Heart className="w-3 md:w-4 h-3 md:h-4" />
            <span className="hidden sm:inline">Wishlist on</span>
            <span>Steam</span>
            <ExternalLink className="w-3 md:w-4 h-3 md:h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
