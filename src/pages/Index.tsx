
import Hero from "@/components/Hero";
import Demo from "@/components/Demo";
import Screenshots from "@/components/Screenshots";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <Demo />
      <Screenshots />
      <Footer />
    </div>
  );
};

export default Index;
