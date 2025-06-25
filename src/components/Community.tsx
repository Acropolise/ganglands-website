
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
    <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Join Our Community</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Connect with fellow players, get the latest updates, and be part of the Ganglands universe
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {/* Discord */}
          <Button 
            onClick={handleDiscord} 
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 h-auto rounded-xl transition-all duration-200 flex flex-col items-center gap-2 group font-normal"
          >
            <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <h3 className="font-bold text-base">Discord</h3>
              <p className="text-xs opacity-90 hidden md:block">Chat & Community</p>
            </div>
          </Button>
          
          {/* YouTube */}
          <Button 
            onClick={handleYoutube} 
            className="bg-red-600 hover:bg-red-700 text-white p-4 h-auto rounded-xl transition-all duration-200 flex flex-col items-center gap-2 group"
          >
            <Youtube className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <h3 className="font-bold text-base">YouTube</h3>
              <p className="text-xs opacity-90 hidden md:block">Trailers & Gameplay</p>
            </div>
          </Button>
          
          {/* Steam */}
          <Button 
            onClick={handleSteam} 
            className="bg-cyan-600 hover:bg-cyan-700 text-white p-4 h-auto rounded-xl transition-all duration-200 flex flex-col items-center gap-2 group"
          >
            <ExternalLink className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <h3 className="font-bold text-base">Steam</h3>
              <p className="text-xs opacity-90 hidden md:block">Store & Reviews</p>
            </div>
          </Button>
          
          {/* Instagram */}
          <Button 
            onClick={handleInstagram} 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-4 h-auto rounded-xl transition-all duration-200 flex flex-col items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-lg font-bold">📷</span>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-base">Instagram</h3>
              <p className="text-xs opacity-90 hidden md:block">Behind the Scenes</p>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;
