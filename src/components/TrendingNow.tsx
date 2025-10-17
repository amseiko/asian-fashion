import { TrendingUp, Flame, Zap, Sparkles } from "lucide-react";

const trends = [
  {
    icon: Flame,
    category: "Fashion",
    title: "Y2K Revival",
    description: "Low-rise jeans, baby tees, and colorful accessories are making a major comeback across Korea, Japan, and Taiwan.",
  },
  {
    icon: Sparkles,
    category: "Beauty",
    title: "Latte Makeup",
    description: "Warm, neutral tones inspired by coffee drinks create a soft, sophisticated look that's perfect for everyday wear.",
  },
  {
    icon: TrendingUp,
    category: "Skincare",
    title: "Skin Cycling",
    description: "Strategic rotation of actives (retinol, acids) with recovery nights is the new approach to powerful ingredients.",
  },
  {
    icon: Zap,
    category: "Fashion",
    title: "Gorpcore Aesthetic",
    description: "Outdoor-inspired fashion with technical fabrics and utilitarian details dominates street style in Tokyo and Seoul.",
  },
  {
    icon: Flame,
    category: "Beauty",
    title: "Blurring Primers",
    description: "Korean beauty brands are perfecting pore-blurring technology for that flawless, filtered skin look IRL.",
  },
  {
    icon: TrendingUp,
    category: "Skincare",
    title: "Fermented Ingredients",
    description: "Galactomyces, bifida, and other ferments are the secret weapons in Asian skincare for radiant, even-toned skin.",
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
            Stay ahead of the curve with the latest trends sweeping across East Asia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {trends.map((trend, index) => {
            const Icon = trend.icon;
            return (
              <div
                key={trend.title}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full border border-secondary/20">
                    {trend.category}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {trend.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {trend.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
