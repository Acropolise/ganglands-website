import { Button } from "@/components/ui/button";
import { Heart, ExternalLink } from "lucide-react";

const Hero = () => {
  const handleWishlist = () => {
    window.open("https://store.steampowered.com/app/3734080/Ganglands/", "_blank");
  };

  return (
    <section
      id="trailer"
      className="min-h-screen flex items-center justify-center pt-20 relative bg-cover bg-center bg-no-repeat"
    >
      {/* Background images: mobile first then lg breakpoint */}
      <div
        className="
          absolute inset-0 z-0 
          bg-[url('/images/city-bg.png')]
          lg:bg-[url('/images/city-bg.png')]
          bg-center bg-cover bg-no-repeat
        "
      />
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          {/* Left side */}
          <div className="text-center lg:text-left">
<h1
  className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 animate-fade-in"
  style={{ color: '#06B6D4' }}
>
  Ganglands
</h1>
            <p className="text-base md:text-lg lg:text-2xl text-slate-300 mb-8 animate-fade-in">
              In a city ruled by gangs, power means everything. Rob banks, raid houses, recruit gangsters, sell weed and dominate other gangs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
<Button
  onClick={handleWishlist}
  style={{ backgroundColor: '#06B6D4' }}
  className="hover:brightness-110 text-white px-6 md:px-8 py-3 text-base md:text-lg rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
>
  <Heart className="w-4 md:w-5 h-4 md:h-5" />
  Wishlist on Steam
  <ExternalLink className="w-4 md:w-5 h-4 md:h-5" />
</Button>
              {/* <Button
                variant="outline"
                onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-white hover:bg-white px-6 md:px-8 py-3 text-base md:text-lg font-semibold rounded-lg transition-all duration-200 text-gray-950"
              >
                Try Demo
              </Button> */}
            </div>
          </div>

          {/* Right side - YouTube Embed */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl rounded-xl overflow-hidden shadow-2xl animate-scale-in aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Cqsna2vClm4"
                title="Ganglands Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#000000] z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;