
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Maximize2 } from "lucide-react";

const Screenshots = () => {
  const screenshots = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Cyberpunk cityscape with neon lights"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Dark atmospheric forest scene"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Futuristic building architecture"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Abstract geometric building design"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Blue starry night scene"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Body of water surrounded by trees"
    }
  ];

  const openFullscreen = (index: number) => {
    window.open(screenshots[index].src, '_blank');
  };

  return (
    <section id="screenshots" className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Screenshots</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Explore the stunning visuals and immersive environments of Ganglands
          </p>
        </div>
        
        {/* 3x2 Grid Collage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <Card key={screenshot.id} className="bg-gray-800/80 border-gray-700 overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 backdrop-blur-sm">
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
