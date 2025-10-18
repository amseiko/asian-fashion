import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Sparkles, Heart, Star, Droplets, Flame, Sun } from "lucide-react";
import makeupImage from "@/assets/makeup-trends.jpg";

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
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                Asian Beauty
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
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

        {/* Must-Have Products */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
                Must-Have Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularProducts.map((product) => {
                  const Icon = product.icon;
                  return (
                    <div key={product.name} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.note}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Makeup Trends */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={makeupImage}
                  alt="Asian makeup trends"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                  Makeup Trends
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Gradient Lips</h3>
                    <p className="text-sm text-muted-foreground">
                      The signature Korean makeup look featuring a soft, blurred lip color that's darker in the center and fades outward.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Straight Brows</h3>
                    <p className="text-sm text-muted-foreground">
                      Natural, straight eyebrows create a youthful, innocent appearance that's popular across Asia.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Aegyo Sal</h3>
                    <p className="text-sm text-muted-foreground">
                      Highlighting under the eyes to create the appearance of "eye smiles" for a more youthful look.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Dewy Skin</h3>
                    <p className="text-sm text-muted-foreground">
                      Glass skin extends to makeup with glowing, luminous bases that look fresh and hydrated.
                    </p>
                  </div>
                </div>
              </div>
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
