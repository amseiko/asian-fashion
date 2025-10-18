import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Droplets, Sun, Moon, Clock } from "lucide-react";
import skincareImage from "@/assets/skincare-routine.jpg";

const morningRoutine = [
  { step: 1, name: "Cleanser", purpose: "Remove overnight oils and prepare skin" },
  { step: 2, name: "Toner", purpose: "Balance pH and prep for absorption" },
  { step: 3, name: "Essence", purpose: "Boost hydration and skin renewal" },
  { step: 4, name: "Serum", purpose: "Target specific concerns (brightening, hydration)" },
  { step: 5, name: "Eye Cream", purpose: "Treat delicate under-eye area" },
  { step: 6, name: "Moisturizer", purpose: "Lock in all previous layers" },
  { step: 7, name: "Sunscreen", purpose: "MOST IMPORTANT - Protect from UV damage" }
];

const eveningRoutine = [
  { step: 1, name: "Oil Cleanser", purpose: "Remove makeup and sunscreen" },
  { step: 2, name: "Water Cleanser", purpose: "Deep clean pores (double cleanse)" },
  { step: 3, name: "Exfoliant", purpose: "2-3x per week, remove dead skin" },
  { step: 4, name: "Toner", purpose: "Restore pH balance" },
  { step: 5, name: "Essence", purpose: "Hydrate and repair" },
  { step: 6, name: "Treatment", purpose: "Retinol, acids, or targeted serums" },
  { step: 7, name: "Sheet Mask", purpose: "2-3x per week for extra boost" },
  { step: 8, name: "Eye Cream", purpose: "Prevent aging and puffiness" },
  { step: 9, name: "Moisturizer", purpose: "Rich night cream to repair" },
  { step: 10, name: "Sleeping Mask", purpose: "Optional final seal for hydration" }
];

const skinTypes = [
  {
    type: "Oily/Acne-Prone",
    tips: [
      "Use gel or water-based products",
      "Look for salicylic acid or tea tree",
      "Don't skip moisturizer - dehydration causes more oil",
      "Double cleansing is essential"
    ]
  },
  {
    type: "Dry/Dehydrated",
    tips: [
      "Layer hydrating products (toner, essence, serum)",
      "Use cream-based cleansers",
      "Look for hyaluronic acid and ceramides",
      "Apply moisturizer on damp skin"
    ]
  },
  {
    type: "Combination",
    tips: [
      "Use different products for different zones",
      "Lightweight hydration is key",
      "Balance is important - not too heavy, not too light",
      "Consider pH-balanced products"
    ]
  },
  {
    type: "Sensitive",
    tips: [
      "Patch test everything",
      "Avoid fragrances and harsh actives",
      "Look for centella and mugwort",
      "Keep routine simple and consistent"
    ]
  }
];

const keyIngredients = [
  {
    name: "Hyaluronic Acid",
    benefit: "Intense hydration - holds 1000x its weight in water",
    bestFor: "All skin types, especially dry skin"
  },
  {
    name: "Niacinamide",
    benefit: "Brightens, minimizes pores, controls oil",
    bestFor: "All skin types, great for combination skin"
  },
  {
    name: "Vitamin C",
    benefit: "Brightens dark spots, antioxidant protection",
    bestFor: "Dull or pigmented skin"
  },
  {
    name: "Retinol",
    benefit: "Anti-aging, increases cell turnover",
    bestFor: "Mature skin, use at night only"
  },
  {
    name: "Centella Asiatica",
    benefit: "Calms irritation, repairs skin barrier",
    bestFor: "Sensitive or irritated skin"
  },
  {
    name: "Snail Mucin",
    benefit: "Repairs, hydrates, improves texture",
    bestFor: "All skin types, especially damaged skin"
  }
];

const Skincare = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                Skincare Guide
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Master the art of Korean skincare with comprehensive routines, ingredient guides, and tips for achieving your best skin ever.
              </p>
            </div>
          </div>
        </section>

        {/* Morning Routine */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Sun className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-4xl font-bold text-foreground">
                  Morning Routine
                </h2>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="space-y-4">
                  {morningRoutine.map((item) => (
                    <div key={item.step} className="flex gap-4 items-start group hover:bg-muted/30 p-4 rounded-lg transition-colors">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <span className="font-bold text-primary">{item.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.purpose}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evening Routine */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Moon className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="font-display text-4xl font-bold text-foreground">
                  Evening Routine
                </h2>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 mb-6">
                <div className="space-y-4">
                  {eveningRoutine.map((item) => (
                    <div key={item.step} className="flex gap-4 items-start group hover:bg-muted/30 p-4 rounded-lg transition-colors">
                      <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                        <span className="font-bold text-secondary">{item.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.purpose}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Remember:</strong> You don't need to do all 10 steps every night! Listen to your skin and adjust based on what it needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skin Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Customize for Your Skin Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {skinTypes.map((skinType) => (
                <div key={skinType.type} className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-shadow">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    {skinType.type}
                  </h3>
                  <ul className="space-y-3">
                    {skinType.tips.map((tip, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Ingredients */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
                Key Ingredients to Know
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyIngredients.map((ingredient) => (
                  <div key={ingredient.name} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                    <h3 className="font-semibold text-foreground mb-2">{ingredient.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{ingredient.benefit}</p>
                    <p className="text-xs text-primary font-medium">{ingredient.bestFor}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={skincareImage}
                  alt="Korean skincare routine"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                  <h2 className="font-display text-3xl font-bold text-foreground">
                    Pro Tips for Success
                  </h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Be Consistent</h3>
                    <p className="text-sm text-muted-foreground">
                      Results take time. Stick with your routine for at least 4-6 weeks before judging effectiveness.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Layer Properly</h3>
                    <p className="text-sm text-muted-foreground">
                      Apply products from thinnest to thickest consistency. Wait 30-60 seconds between layers.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Patch Test</h3>
                    <p className="text-sm text-muted-foreground">
                      Always test new products on a small area first, especially actives like retinol or acids.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Listen to Your Skin</h3>
                    <p className="text-sm text-muted-foreground">
                      If your skin feels tight, add more hydration. If it's oily, use lighter products. Adjust as needed.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Sunscreen is Non-Negotiable</h3>
                    <p className="text-sm text-muted-foreground">
                      SPF 30+ every single day, even indoors. It's the single most important anti-aging step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Skincare;
