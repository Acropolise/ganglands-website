
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Maximize2 } from "lucide-react";

const Screenshots = () => {
  const screenshots = [
    {
      id: 1,
      src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3734080/bbf10bdaa964010c2d13d223e8b5b814fc66f76e/ss_bbf10bdaa964010c2d13d223e8b5b814fc66f76e.1920x1080.jpg?t=1752231397",
      alt: "Town"
    },
    {
      id: 2,
      src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3734080/88922f77a5773ae0650cb12cc1746b96324bb191/ss_88922f77a5773ae0650cb12cc1746b96324bb191.1920x1080.jpg?t=1752231397",
      alt: "Bank"
    },
    {
      id: 3,
      src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3734080/e023b9a37ed99f991f89ae78d61398e526407faf/ss_e023b9a37ed99f991f89ae78d61398e526407faf.1920x1080.jpg?t=1752231397",
      alt: "Be a dealer"
    },
    {
      id: 4,
      src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3734080/ec926975dba8d266ac44711b9c49e58bdf17882a/ss_ec926975dba8d266ac44711b9c49e58bdf17882a.1920x1080.jpg?t=1752231397",
      alt: "Gangs"
    },
    {
      id: 5,
      src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3734080/63870b2cde7bf1f23bf013e47c311badc83e50fc/ss_63870b2cde7bf1f23bf013e47c311badc83e50fc.1920x1080.jpg?t=1752231397",
      alt: "Rob house"
    },
    {
      id: 6,
      src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3734080/b1e2fbd9e468dee15d07895891af60c223b3a800/ss_b1e2fbd9e468dee15d07895891af60c223b3a800.1920x1080.jpg?t=1752231397",
      alt: "Lockpick"
    }
  ];

  const openFullscreen = (index: number) => {
    window.open(screenshots[index].src, '_blank');
  };

  return (
    <section id="screenshots" className="py-20 bg-gradient-to-b from-[#000000] to-[#111827] transition-all duration-1000 ease-in-out">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Screenshots</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Real-time shots captured directly from gameplay!
          </p>
        </div>
        
        {/* 3x2 Grid Collage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <Card key={screenshot.id} className="bg-slate-800/80 border-slate-700 overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <div className="relative aspect-video">
                <img 
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <button 
                    onClick={() => openFullscreen(index)}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
                  >
                    <Maximize2 className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
