import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import RegionalStyles from "@/components/RegionalStyles";
import BeautyGuide from "@/components/BeautyGuide";
import SkincareRoutine from "@/components/SkincareRoutine";
import TrendingNow from "@/components/TrendingNow";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <RegionalStyles />
        <BeautyGuide />
        <SkincareRoutine />
        <TrendingNow />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
