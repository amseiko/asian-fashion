import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import RegionalShowcase from "@/components/RegionalShowcase";
import ModernTrends from "@/components/ModernTrends";
import CulturalHeritage from "@/components/CulturalHeritage";
import DesignerSpotlight from "@/components/DesignerSpotlight";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <RegionalShowcase />
        <ModernTrends />
        <CulturalHeritage />
        <DesignerSpotlight />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
