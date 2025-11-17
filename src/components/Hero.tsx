import heroMenCasual from "@/assets/hero-men-casual-street.jpg";
import heroMenFormal from "@/assets/hero-men-formal.jpg";
import heroMenAthleisure from "@/assets/hero-men-athleisure.jpg";
import heroWomenJFashion from "@/assets/hero-women-jfashion.jpg";
import heroWomenStreet from "@/assets/hero-women-street.jpg";
import heroWomenMinimalist from "@/assets/hero-women-minimalist.jpg";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [
    heroMenCasual,
    heroWomenJFashion,
    heroMenFormal,
    heroWomenStreet,
    heroMenAthleisure,
    heroWomenMinimalist
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Korean · Japanese · Taiwanese</span>
        </div>
        
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
          Asian Fashion & Beauty
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light" style={{ color: '#111111' }}>
          Discover the latest trends in K-beauty, J-beauty, and Asian fashion. Your guide to achieving that perfect glass skin and effortless style.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#beauty" 
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Explore Beauty
          </a>
          <a 
            href="#fashion" 
            className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Browse Fashion
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
