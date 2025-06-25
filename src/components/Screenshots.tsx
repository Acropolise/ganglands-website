
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const Screenshots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const screenshots = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Cyberpunk cityscape with neon lights"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Dark atmospheric forest scene"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Futuristic building architecture"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Abstract geometric building design"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const openFullscreen = (index: number) => {
    // In a real implementation, you'd open a modal or lightbox
    window.open(screenshots[index].src, '_blank');
  };

  return (
    <section id="screenshots" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Screenshots</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore the stunning visuals and immersive environments of Nexus Wars
          </p>
        </div>
        
        {/* Main Screenshot Display */}
        <div className="relative max-w-6xl mx-auto mb-8">
          <Card className="bg-gray-800 border-gray-700 overflow-hidden">
            <div className="relative aspect-video">
              <img 
                src={screenshots[currentIndex].src}
                alt={screenshots[currentIndex].alt}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <button 
                  onClick={() => openFullscreen(currentIndex)}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
                >
                  <Maximize2 className="w-6 h-6" />
                </button>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </Card>
        </div>
        
        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
          {screenshots.map((screenshot, index) => (
            <button
              key={screenshot.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 w-32 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                index === currentIndex 
                  ? 'ring-2 ring-blue-500 opacity-100' 
                  : 'opacity-60 hover:opacity-80'
              }`}
            >
              <img 
                src={screenshot.src}
                alt={screenshot.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
        
        {/* Screenshot Counter */}
        <div className="text-center mt-6">
          <p className="text-gray-400">
            {currentIndex + 1} of {screenshots.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
