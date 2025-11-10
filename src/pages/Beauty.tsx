import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Sparkles, Heart, Star, Droplets, Flame, Sun } from "lucide-react";
import heroGlassSkin from "@/assets/hero-glass-skin.jpg";
import routineMap from "@/assets/routine-map.jpg";
import beforeAfter from "@/assets/before-after-glass-skin.jpg";
import ingredientSpotlight from "@/assets/ingredient-spotlight.jpg";
import productSerum from "@/assets/product-serum-1.jpg";
import productToner from "@/assets/product-toner-1.jpg";
import productMoisturizer from "@/assets/product-moisturizer-1.jpg";
import productSunscreen from "@/assets/product-sunscreen-1.jpg";
import productEssence from "@/assets/product-essence-1.jpg";
import productEyecream from "@/assets/product-eyecream-1.jpg";

const beautyPhilosophies = [
  {
    icon: Droplets,
    title: "K-Beauty: Hydration First",
    description: "Korean beauty is all about achieving glass skin through intense hydration, layering products, and prevention over correction. The famous 10-step routine emphasizes treating skin gently.",
    principles: ["Hydration focus", "Layering products", "Prevention mindset", "Natural ingredients"]
  },
  {
    icon: Star,
    title: "J-Beauty: Simplicity & Quality",
    description: "Japanese beauty philosophy focuses on simple, effective routines with high-quality ingredients. Less is more, with emphasis on gentle care and working with your skin's natural rhythm.",
    principles: ["Minimal steps", "Quality over quantity", "Gentle formulas", "Long-term results"]
  },
  {
    icon: Heart,
    title: "T-Beauty: Modern Innovation",
    description: "Taiwanese beauty combines traditional ingredients with modern technology. Sheet masks, innovative textures, and affordable prices make T-beauty accessible and effective.",
    principles: ["Innovation focus", "Affordable luxury", "Sheet mask culture", "Texture variety"]
  }
];

const popularProducts = [
  { icon: Droplets, name: "Hydrating Toners", note: "Essential for glass skin" },
  { icon: Sparkles, name: "Essence & Serums", note: "Concentrated treatments" },
  { icon: Sun, name: "Sunscreen", note: "The most important step" },
  { icon: Flame, name: "Cushion Compacts", note: "For flawless base makeup" }
];

const Beauty = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <img
            src={heroGlassSkin}
            alt="Korean glass skin beauty close-up"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                Asian Beauty
              </h1>
              <p className="text-xl text-foreground/90 mb-8">
                Discover the secrets behind Korean glass skin, Japanese simplicity, and Taiwanese innovation. Learn about the products, routines, and philosophies that have revolutionized skincare worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Beauty Philosophies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Beauty Philosophies
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {beautyPhilosophies.map((philosophy) => {
                const Icon = philosophy.icon;
                return (
                  <div key={philosophy.title} className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-shadow">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                      {philosophy.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {philosophy.description}
                    </p>
                    <ul className="space-y-2">
                      {philosophy.principles.map((principle) => (
                        <li key={principle} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {principle}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Beauty Trend Carousel */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Glass Skin Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={routineMap}
                  alt="10-step Korean skincare routine map"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={beforeAfter}
                  alt="Before and after glass skin transformation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={ingredientSpotlight}
                  alt="Centella and snail mucin ingredients spotlight"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Close-Ups */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Essential Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto mb-16">
              <a
                href="/shops-coming-soon"
                className="group text-center"
              >
                <div className="w-full aspect-square rounded-full overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <img
                    src={productSerum}
                    alt="Korean serum"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Serum</p>
              </a>

              <a
                href="/shops-coming-soon"
                className="group text-center"
              >
                <div className="w-full aspect-square rounded-full overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <img
                    src={productToner}
                    alt="Korean toner"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Toner</p>
              </a>

              <a
                href="/shops-coming-soon"
                className="group text-center"
              >
                <div className="w-full aspect-square rounded-full overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <img
                    src={productMoisturizer}
                    alt="Korean moisturizer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Moisturizer</p>
              </a>

              <a
                href="/shops-coming-soon"
                className="group text-center"
              >
                <div className="w-full aspect-square rounded-full overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <img
                    src={productSunscreen}
                    alt="Korean sunscreen"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Sunscreen</p>
              </a>

              <a
                href="/shops-coming-soon"
                className="group text-center"
              >
                <div className="w-full aspect-square rounded-full overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <img
                    src={productEssence}
                    alt="Korean essence"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Essence</p>
              </a>

              <a
                href="/shops-coming-soon"
                className="group text-center"
              >
                <div className="w-full aspect-square rounded-full overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <img
                    src={productEyecream}
                    alt="Korean eye cream"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Eye Cream</p>
              </a>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-primary/5 border border-primary/20 rounded-2xl p-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
                Getting Started with Asian Beauty
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Start Simple:</strong> You don't need a 10-step routine right away. Begin with cleanser, moisturizer, and sunscreen.
                </p>
                <p>
                  <strong className="text-foreground">Patch Test:</strong> Always patch test new products, especially if you have sensitive skin. Asian beauty products may contain ingredients you haven't used before.
                </p>
                <p>
                  <strong className="text-foreground">Be Patient:</strong> Skincare results take time. Give new products at least 4-6 weeks before deciding if they work for you.
                </p>
                <p>
                  <strong className="text-foreground">Layer Properly:</strong> Apply products from thinnest to thickest consistency for maximum absorption and effectiveness.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Beauty;
