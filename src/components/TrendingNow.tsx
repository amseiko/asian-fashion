import { TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import trendY2K from "@/assets/trend-y2k-revival.jpg";
import trendLatte from "@/assets/trend-latte-makeup.jpg";
import trendSkinCycling from "@/assets/trend-skin-cycling.jpg";
import trendGorpcore from "@/assets/trend-gorpcore.jpg";
import trendBlurring from "@/assets/trend-blurring-primer.jpg";
import trendFermented from "@/assets/trend-fermented.jpg";

const trends = [
  {
    image: trendY2K,
    category: "Fashion",
    title: "Y2K Revival",
    description: "Low-rise jeans, baby tees, and colorful accessories making a major comeback.",
    hook: "Oversized silhouettes meet playful nostalgia.",
    slug: "y2k-revival",
  },
  {
    image: trendLatte,
    category: "Beauty",
    title: "Latte Makeup",
    description: "Warm, neutral tones create a soft, sophisticated coffee-inspired look.",
    hook: "Effortless elegance in every shade.",
    slug: "latte-makeup",
  },
  {
    image: trendSkinCycling,
    category: "Skincare",
    title: "Skin Cycling",
    description: "Strategic rotation of actives with recovery nights for powerful results.",
    hook: "Smart skincare that works with your skin.",
    slug: "skin-cycling",
  },
  {
    image: trendGorpcore,
    category: "Fashion",
    title: "Gorpcore Aesthetic",
    description: "Outdoor-inspired fashion with technical fabrics dominates street style.",
    hook: "Function meets urban fashion.",
    slug: "gorpcore",
  },
  {
    image: trendBlurring,
    category: "Beauty",
    title: "Blurring Primers",
    description: "Korean beauty brands perfect pore-blurring for flawless filtered skin IRL.",
    hook: "Glass skin in real life.",
    slug: "blurring-primers",
  },
  {
    image: trendFermented,
    category: "Skincare",
    title: "Fermented Ingredients",
    description: "Galactomyces and bifida are secret weapons for radiant, even-toned skin.",
    hook: "Ancient wisdom meets modern science.",
    slug: "fermented-skincare",
  },
];

const TrendingNow = () => {
  return (
    <section id="trends" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">What's Hot Right Now</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trending Now
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay ahead of the curve with the latest trends sweeping across Asia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {trends.map((trend, index) => (
            <div
              key={trend.title}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={trend.image}
                  alt={`${trend.title} - ${trend.category} trend`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <span className="absolute top-4 right-4 text-xs px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground rounded-full border border-border">
                  {trend.category}
                </span>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium mb-1 italic">
                    "{trend.hook}"
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {trend.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {trend.description}
                </p>
                <Link to={`/trends#${trend.slug}`}>
                  <Button 
                    className="w-full group/btn"
                    variant="outline"
                  >
                    Shop the Trend
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
