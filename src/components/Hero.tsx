import heroImage from "@/assets/hero-fashion.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in">
          Asian Fashion Chronicles
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 font-light">
          Discover the rich tapestry of style across Asia—where ancient traditions meet contemporary innovation
        </p>
        <a 
          href="#regions" 
          className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Explore the Journey
        </a>
      </div>
    </section>
  );
};

export default Hero;
