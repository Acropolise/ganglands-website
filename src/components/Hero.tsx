import { Button } from "@/components/ui/button";
import { Play, Heart, ExternalLink } from "lucide-react";
const Hero = () => {
  const handleWishlist = () => {
    window.open("https://store.steampowered.com/", "_blank");
  };
  return <section id="trailer" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-20 bg-[#ff3131]/0">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
            NEXUS WARS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
            Enter a world where reality bends to your will. Master cybernetic powers and fight for humanity's future.
          </p>
          
          {/* Video Trailer */}
          <div className="relative mb-8 rounded-xl overflow-hidden shadow-2xl animate-scale-in">
            <div className="aspect-video bg-gray-800 flex items-center justify-center">
              <video className="w-full h-full object-cover" poster="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" controls preload="metadata">
                {/* Placeholder - replace with actual trailer */}
                <source src="#" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/50 text-white p-6 rounded-full">
                  <Play className="w-8 h-8" fill="white" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button onClick={handleWishlist} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Wishlist on Steam
              <ExternalLink className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200" onClick={() => document.getElementById('demo')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Try Demo
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;