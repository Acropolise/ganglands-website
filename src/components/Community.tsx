
import { Button } from "@/components/ui/button";
import { MessageCircle, Youtube, ExternalLink } from "lucide-react";

const Community = () => {
  const handleDiscord = () => {
    window.open("https://discord.gg/nexuswars", "_blank");
  };

  const handleYoutube = () => {
    window.open("https://youtube.com/@nexuswars", "_blank");
  };

  const handleSteam = () => {
    window.open("https://store.steampowered.com/", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/nexuswars", "_blank");
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with fellow players, get the latest updates, and be part of the Nexus Wars universe
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {/* Discord */}
          <Button 
            onClick={handleDiscord}
            className="bg-purple-600 hover:bg-purple-700 text-white p-6 h-auto rounded-xl transition-all duration-200 flex flex-col items-center gap-3 group"
          >
            <MessageCircle className="w-12 h-12 group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <h3 className="font-bold text-lg">Discord</h3>
              <p className="text-sm opacity-90">Chat & Community</p>
            </div>
          </Button>
          
          {/* YouTube */}
          <Button 
            onClick={handleYoutube}
            className="bg-red-600 hover:bg-red-700 text-white p-6 h-auto rounded-xl transition-all duration-200 flex flex-col items-center gap-3 group"
          >
            <Youtube className="w-12 h-12 group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <h3 className="font-bold text-lg">YouTube</h3>
              <p className="text-sm opacity-90">Trailers & Gameplay</p>
            </div>
          </Button>
          
          {/* Steam */}
          <Button 
            onClick={handleSteam}
            className="bg-blue-600 hover:bg-blue-700 text-white p-6 h-auto rounded-xl transition-all duration-200 flex flex-col items-center gap-3 group"
          >
            <ExternalLink className="w-12 h-12 group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <h3 className="font-bold text-lg">Steam</h3>
              <p className="text-sm opacity-90">Store & Reviews</p>
            </div>
          </Button>
          
          {/* Instagram */}
          <Button 
            onClick={handleInstagram}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-6 h-auto rounded-xl transition-all duration-200 flex flex-col items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl font-bold">📷</span>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg">Instagram</h3>
              <p className="text-sm opacity-90">Behind the Scenes</p>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;
