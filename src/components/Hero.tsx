import { Button } from "@/components/ui/button";
import { Play, Heart, ExternalLink } from "lucide-react";
const Hero = () => {
  const handleWishlist = () => {
    window.open("https://store.steampowered.com/", "_blank");
  };
  return <section id="trailer" className="min-h-screen flex items-center justify-center pt-20 relative" style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Logo and Description */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in">Ganglands</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 animate-fade-in">
              Enter a world where reality bends to your will. Master cybernetic powers and fight for humanity's future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
              <Button onClick={handleWishlist} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Wishlist on Steam
                <ExternalLink className="w-5 h-5" />
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('demo')?.scrollIntoView({
              behavior: 'smooth'
            })} className="border-2 border-white hover:bg-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 text-gray-950">
                Try Demo
              </Button>
            </div>
          </div>
          
          {/* Right side - Video Trailer (25% smaller) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-2xl animate-scale-in">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <video className="w-full h-full object-cover" poster="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" controls preload="metadata">
                  <source src="#" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/50 text-white p-4 rounded-full">
                    <Play className="w-6 h-6" fill="white" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;