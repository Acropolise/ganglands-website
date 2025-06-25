
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Monitor, HardDrive, Cpu, Gamepad2 } from "lucide-react";

const Demo = () => {
  const handleDownload = () => {
    // Replace with actual demo download link
    alert("Demo download would start here!");
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
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Download Section */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center gap-3">
                <Gamepad2 className="w-8 h-8 text-blue-400" />
                Free Demo Available
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-gray-300">
                <h3 className="text-lg font-semibold mb-2">What's Included:</h3>
                <ul className="space-y-2">
                  <li>• First 2 chapters of the campaign</li>
                  <li>• 3 unique cybernetic abilities</li>
                  <li>• 2 boss encounters</li>
                  <li>• Full tutorial system</li>
                </ul>
              </div>
              <Button 
                onClick={handleDownload}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Demo (2.4 GB)
              </Button>
            </CardContent>
          </Card>
          
          {/* System Requirements */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center gap-3">
                <Monitor className="w-8 h-8 text-purple-400" />
                System Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-3">
                  <Cpu className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Processor</p>
                    <p className="text-gray-400">Intel Core i5-8400 / AMD Ryzen 5 2600</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HardDrive className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Memory</p>
                    <p className="text-gray-400">8 GB RAM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Monitor className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Graphics</p>
                    <p className="text-gray-400">NVIDIA GTX 1060 / AMD RX 580</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HardDrive className="w-6 h-6 text-orange-400 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Storage</p>
                    <p className="text-gray-400">25 GB available space</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Demo;
