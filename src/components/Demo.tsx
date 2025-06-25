
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Gamepad2 } from "lucide-react";

const Demo = () => {
  const handleSteamDownload = () => {
    window.open("https://store.steampowered.com/", "_blank");
  };

  return (
    <section id="demo" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Try the Demo</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the first chapter of Nexus Wars. Download the free demo and dive into 2 hours of intense gameplay.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left side - Game GIF */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              {/* Placeholder for game GIF - replace with actual gameplay GIF */}
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Nexus Wars Gameplay"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-semibold">Live Gameplay</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Steam Download Call to Action */}
          <div className="text-center lg:text-left">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-3xl flex items-center gap-3 justify-center lg:justify-start">
                  <Gamepad2 className="w-10 h-10 text-blue-400" />
                  Download on Steam
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-gray-300 text-lg">
                  <h3 className="text-xl font-semibold mb-4 text-white">What's Included:</h3>
                  <ul className="space-y-3">
                    <li>• First 2 chapters of the campaign</li>
                    <li>• 3 unique cybernetic abilities</li>
                    <li>• 2 boss encounters</li>
                    <li>• Full tutorial system</li>
                    <li>• 2+ hours of gameplay</li>
                  </ul>
                </div>
                <Button 
                  onClick={handleSteamDownload}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-xl font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-3"
                >
                  <ExternalLink className="w-6 h-6" />
                  Download Free Demo on Steam
                </Button>
                <p className="text-center text-gray-400 text-sm">
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
