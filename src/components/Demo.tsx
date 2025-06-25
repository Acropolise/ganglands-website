
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Demo = () => {
  const handleSteamDownload = () => {
    window.open("https://store.steampowered.com/", "_blank");
  };

  return (
    
<section id="demo" className="py-20 bg-gradient-to-b from-[#000000] to-[#111827]">
  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-t from-[#111827] to-transparent pointer-events-none z-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Try the Demo</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">Download now a free demo version on steam!</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-center">
          {/* Left side - Game GIF */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-slate-900 flex items-center justify-center">
              <img 
                src="https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif" 
                alt="Ganglands Gameplay" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-semibold">Live Gameplay</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Steam Download Call to Action */}
          <div className="text-center">
            <Card className="bg-slate-900/80 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Download on Steam</h3>
                <Button 
                  onClick={handleSteamDownload} 
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 text-lg md:text-xl font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-3"
                >
                  <ExternalLink className="w-6 h-6" />
                  Download Free Demo on Steam
                </Button>
                <p className="text-center text-slate-400 text-sm mt-4">
                  Free to download • Available now
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
