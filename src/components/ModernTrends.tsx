import { TrendingUp, Sparkles, Globe } from "lucide-react";

const trends = [
  {
    icon: TrendingUp,
    title: "Sustainable Innovation",
    description: "Asian designers are leading the sustainable fashion movement, incorporating traditional eco-friendly techniques with modern technology. From mushroom leather in China to pineapple fiber in the Philippines, innovation meets sustainability.",
  },
  {
    icon: Sparkles,
    title: "Digital Fashion Fusion",
    description: "The rise of virtual fashion shows and digital-first collections has made Asia the epicenter of fashion-tech innovation. AR try-ons, NFT collections, and metaverse fashion are reshaping the industry.",
  },
  {
    icon: Globe,
    title: "Cultural Crossovers",
    description: "Contemporary Asian designers are creating bold fusions that celebrate multiple cultural influences. This new wave of fashion transcends borders while honoring heritage, creating truly global designs.",
  },
];

const ModernTrends = () => {
  return (
    <section id="trends" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Modern Trends
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Asian fashion is shaping the future of the global industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trends.map((trend, index) => {
            const Icon = trend.icon;
            return (
              <div
                key={trend.title}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {trend.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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

export default ModernTrends;
