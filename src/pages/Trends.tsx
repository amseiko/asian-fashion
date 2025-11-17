import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { TrendingUp, Flame, Zap, Sparkles, Star, Heart } from "lucide-react";
import heroCollage from "@/assets/hero-trends-collage.jpg";
import trendLatte from "@/assets/trend-latte-makeup.jpg";
import trendBlurring from "@/assets/trend-blurring-primer.jpg";
import trendCycling from "@/assets/trend-skin-cycling.jpg";
import trendFermented from "@/assets/trend-fermented.jpg";

const fashionTrends = [
  {
    icon: Flame,
    title: "Y2K Revival",
    category: "Fashion",
    description: "Low-rise jeans, baby tees, and colorful accessories are making a major comeback across Korea, Japan, and Taiwan. Nostalgic pieces from the early 2000s are everywhere.",
    howToStyle: "Pair low-rise jeans with crop tops or baby tees. Add butterfly clips and mini bags for the full Y2K effect."
  },
  {
    icon: Zap,
    title: "Gorpcore Aesthetic",
    category: "Fashion",
    description: "Outdoor-inspired fashion with technical fabrics and utilitarian details dominates street style in Tokyo and Seoul. Function meets fashion in this trend.",
    howToStyle: "Layer technical jackets over simple basics. Mix outdoor gear like cargo pants with more polished pieces."
  },
  {
    icon: Star,
    title: "Romantic Prairie",
    category: "Fashion",
    description: "Flowy dresses, lace details, and feminine silhouettes inspired by cottagecore and prairie aesthetics are trending across Taiwan and Korea.",
    howToStyle: "Choose midi or maxi dresses in floral prints. Layer with cardigans and finish with Mary Jane shoes."
  }
];

const beautyTrends = [
  {
    icon: Sparkles,
    title: "Latte Makeup",
    category: "Beauty",
    description: "Warm, neutral tones inspired by coffee drinks create a soft, sophisticated look that's perfect for everyday wear. Think caramel, mocha, and cream shades.",
    howToApply: "Use warm browns on eyes, peachy-brown blush, and nude lips. Keep the look cohesive with similar tones."
  },
  {
    icon: Flame,
    title: "Blurring Primers",
    category: "Beauty",
    description: "Korean beauty brands are perfecting pore-blurring technology for that flawless, filtered skin look IRL. These primers create a smooth canvas for makeup.",
    howToApply: "Apply after skincare and before foundation. Focus on areas with visible pores like T-zone."
  },
  {
    icon: Heart,
    title: "Fruit Tints",
    category: "Beauty",
    description: "Sheer, buildable lip and cheek tints in juicy fruit shades provide a natural flush. These versatile products work on both lips and cheeks.",
    howToApply: "Tap onto lips and cheeks for a fresh, youthful look. Build up color gradually for intensity."
  }
];

const skincareTrends = [
  {
    icon: TrendingUp,
    title: "Skin Cycling",
    category: "Skincare",
    description: "Strategic rotation of actives (retinol, acids) with recovery nights is the new approach to powerful ingredients. This method prevents over-exfoliation.",
    routine: "Night 1: Exfoliation. Night 2: Retinoid. Night 3-4: Recovery with hydration."
  },
  {
    icon: Sparkles,
    title: "Fermented Ingredients",
    category: "Skincare",
    description: "Galactomyces, bifida, and other ferments are the secret weapons in Asian skincare for radiant, even-toned skin. These ingredients improve texture and clarity.",
    routine: "Add a fermented essence after cleansing and before other treatments."
  },
  {
    icon: Zap,
    title: "Peptide Power",
    category: "Skincare",
    description: "Peptides are becoming mainstream in Asian skincare for their anti-aging and skin-strengthening benefits. They help boost collagen production.",
    routine: "Use peptide serums morning and night after toner and before moisturizer."
  }
];

const Trends = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section with Vertical Collage */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">What's Hot Right Now</span>
                </div>
                <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                  Trending Now
                </h1>
                <p className="text-xl text-muted-foreground">
                  Stay ahead of the curve with the latest fashion, beauty, and skincare trends sweeping across Korea, Japan, and Taiwan.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0">
                <img
                  src={heroCollage}
                  alt="Trending Asian fashion and beauty styles"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fashion Trends */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Fashion Trends
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {fashionTrends.map((trend) => {
                const Icon = trend.icon;
                return (
                  <div key={trend.title} className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all hover:border-primary/50">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full border border-secondary/20 inline-block mb-4">
                      {trend.category}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                      {trend.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {trend.description}
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-semibold text-foreground mb-2">How to Style:</p>
                      <p className="text-sm text-muted-foreground">{trend.howToStyle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Beauty Trends */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Beauty Trends
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {beautyTrends.map((trend) => {
                const Icon = trend.icon;
                return (
                  <div key={trend.title} className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all hover:border-primary/50">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full border border-secondary/20 inline-block mb-4">
                      {trend.category}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                      {trend.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {trend.description}
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-semibold text-foreground mb-2">How to Apply:</p>
                      <p className="text-sm text-muted-foreground">{trend.howToApply}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trend Video Thumbnails */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Tutorial Previews
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src={trendLatte}
                  alt="Latte makeup tutorial preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src={trendBlurring}
                  alt="Blurring primer tutorial preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src={trendCycling}
                  alt="Skin cycling routine preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src={trendFermented}
                  alt="Fermented skincare preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Shop Trending Products */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Shop Trending Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              <a
                href="/coming-soon"
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-primary/50 group"
              >
                <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&auto=format&fit=crop"
                    alt="Trending fashion item"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Trending Fashion
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">Coming Soon</p>
                </div>
              </a>

              <a
                href="/coming-soon"
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-primary/50 group"
              >
                <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop"
                    alt="Trending beauty item"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Trending Beauty
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">Coming Soon</p>
                </div>
              </a>
            </div>

            <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-12 text-center">
              <Star className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Never Miss a Trend
              </h2>
              <p className="text-muted-foreground mb-8">
                Get the latest fashion, beauty, and skincare trends delivered straight to your inbox every week.
              </p>
              <Link
                to="/coming-soon"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Get updates on our Coming Soon page
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Trends;
