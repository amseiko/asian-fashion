import koreaImage from "@/assets/kbeauty-products.jpg";
import japanImage from "@/assets/japan-beauty-style.jpg";
import taiwanImage from "@/assets/taiwan-style.jpg";
import { Card, CardContent } from "@/components/ui/card";

const regions = [
  {
    name: "Korean Style",
    emoji: "🇰🇷",
    description: "K-beauty revolutionized skincare with the 10-step routine and innovative ingredients. Korean fashion blends feminine aesthetics with street style, creating the perfect 'cute but cool' vibe.",
    image: koreaImage,
    highlights: ["Glass Skin", "Cushion Compacts", "Oversized Fashion"],
    trend: "Dewy makeup, gradient lips, and minimalist chic clothing",
  },
  {
    name: "Japanese Style",
    emoji: "🇯🇵",
    description: "J-beauty focuses on gentle, nourishing ingredients and simplicity. Japanese fashion ranges from Harajuku street style to timeless minimalism with impeccable quality and attention to detail.",
    image: japanImage,
    highlights: ["Mochi Skin", "Double Cleansing", "Layered Minimalism"],
    trend: "Natural makeup, healthy skin focus, and effortless elegance",
  },
  {
    name: "Taiwanese Style",
    emoji: "🇹🇼",
    description: "Taiwanese beauty and fashion blend traditional and modern influences with a youthful, energetic approach. Known for fresh, natural looks and comfortable yet stylish casual wear.",
    image: taiwanImage,
    highlights: ["Fresh Face", "Bubble Tea Aesthetic", "Casual Chic"],
    trend: "Natural brows, coral lips, and relaxed streetwear",
  },
];

const RegionalStyles = () => {
  return (
    <section id="fashion" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Three Unique Styles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each country brings its own beauty philosophy and fashion sensibility
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <Card 
              key={region.name}
              className="group overflow-hidden border-border hover:shadow-2xl transition-all duration-500 bg-card"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={region.image}
                  alt={`${region.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 text-4xl">{region.emoji}</div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {region.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {region.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {region.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Current Trend:</span> {region.trend}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionalStyles;
