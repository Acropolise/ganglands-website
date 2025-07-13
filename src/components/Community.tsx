import { Button } from "@/components/ui/button";
import { MessageCircle, Youtube, Instagram, ExternalLink } from "lucide-react";

const Community = () => {
  const handleDiscord = () => window.open("https://discord.com/invite/JvWZRQzBFM", "_blank");
  const handleYoutube = () => window.open("https://www.youtube.com/@playganglands", "_blank");
  const handleSteam = () => window.open("https://store.steampowered.com/app/3734080/Ganglands/", "_blank");
  const handleInstagram = () => window.open("https://www.instagram.com/playganglands/", "_blank");

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-[#111827] to-[#000000] transition-all duration-1000 ease-in-out">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Join Our Community</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Connect with players, get updates and access early versions!
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {/* Discord */}
          <Button 
            onClick={handleDiscord} 
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 md:p-3 h-16 md:h-20 rounded-xl transition-all duration-200 flex flex-col items-center gap-1 md:gap-2 group font-normal"
          >
            <MessageCircle className="w-6 md:w-8 h-6 md:h-8 group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <h3 className="text-sm md:text-base">Discord</h3>
              <p className="text-xs opacity-90 hidden md:block">Chat & Community</p>
            </div>
          </Button>
          
          {/* YouTube */}
          <Button 
            onClick={handleYoutube} 
            className="bg-red-600 hover:bg-red-700 text-white p-3 md:p-3 h-16 md:h-20 rounded-xl transition-all duration-200 flex flex-col items-center gap-1 md:gap-2 group"
          >
            <Youtube className="w-6 md:w-8 h-6 md:h-8 group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <h3 className="text-sm md:text-base">YouTube</h3>
              <p className="text-xs opacity-90 hidden md:block">Trailers & Gameplay</p>
            </div>
          </Button>
          
          {/* Steam */}
          <Button 
            onClick={handleSteam} 
            className="bg-cyan-600 hover:bg-cyan-700 text-white p-3 md:p-3 h-16 md:h-20 rounded-xl transition-all duration-200 flex flex-col items-center gap-1 md:gap-2 group"
          >
            {/* Use your local Steam SVG icon here */}
            <img 
              src="icons/steamIcon.png" 
              alt="Steam" 
              className="w-4 md:w-6 h-4 md:h-8 group-hover:scale-110 transition-transform" 
            />
            <div className="text-center">
              <h3 className="text-sm md:text-base">Steam</h3>
              <p className="text-xs opacity-90 hidden md:block">Store & Reviews</p>
            </div>
          </Button>
          
          {/* Instagram */}
          <Button 
            onClick={handleInstagram} 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 md:p-3 h-16 md:h-20 rounded-xl transition-all duration-200 flex flex-col items-center gap-1 md:gap-2 group"
          >
            <Instagram className="w-6 md:w-8 h-6 md:h-8 group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <h3 className="text-sm md:text-base">Instagram</h3>
              <p className="text-xs opacity-90 hidden md:block">Behind the Scenes</p>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;