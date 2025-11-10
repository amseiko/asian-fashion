import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shirt, Star, TrendingUp, Sparkles } from "lucide-react";
import heroFashion from "@/assets/hero-beauty-fashion.jpg";
import trendY2K from "@/assets/trend-y2k-revival.jpg";
import trendGorpcore from "@/assets/trend-gorpcore.jpg";
import productCardigan from "@/assets/product-cardigan.jpg";
import productSkirt from "@/assets/product-skirt.jpg";
import productSneakers from "@/assets/product-sneakers.jpg";

const fashionStyles = [
  {
    title: "Korean Street Style",
    description: "Oversized silhouettes, layering, and playful accessories define K-fashion. From Hongdae to Gangnam, Korean street style is all about mixing high and low fashion with confidence.",
    features: ["Oversized fits", "Pastel colors", "Layered looks", "Sneaker culture"]
  },
  {
    title: "Japanese Minimalism",
    description: "Clean lines, neutral colors, and quality fabrics characterize Japanese fashion. Brands like Uniqlo and Muji have popularized this timeless, effortless aesthetic worldwide.",
    features: ["Neutral palettes", "Quality basics", "Functional design", "Timeless pieces"]
  },
  {
    title: "Taiwanese Trends",
    description: "A blend of street style and feminine touches, Taiwanese fashion embraces both casual comfort and cute details. Think denim with floral accents and sneakers with dresses.",
    features: ["Mix & match", "Feminine details", "Casual chic", "Playful prints"]
  }
];

const trends = [
  { icon: Star, title: "Y2K Revival", description: "Low-rise jeans and baby tees are back" },
  { icon: TrendingUp, title: "Oversized Blazers", description: "The power suit gets a relaxed update" },
  { icon: Sparkles, title: "Colorful Accessories", description: "Beaded bags and statement jewelry" },
  { icon: Shirt, title: "Utility Fashion", description: "Cargo pants and functional details" }
];

const Fashion = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <img
            src={heroFashion}
            alt="Korean and Japanese street fashion"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                Asian Fashion
              </h1>
              <p className="text-xl text-foreground/90 mb-8">
                Explore the diverse and innovative fashion scenes of Korea, Japan, and Taiwan. From street style to haute couture, discover what makes Asian fashion so influential worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Regional Styles */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Regional Style Guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {fashionStyles.map((style) => (
                <div key={style.title} className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-shadow">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    {style.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {style.description}
                  </p>
                  <ul className="space-y-2">
                    {style.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trend Image Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Current Fashion Trends
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                <img
                  src={trendY2K}
                  alt="Y2K Revival fashion trend"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                  <h3 className="font-display text-2xl font-bold text-foreground">Y2K Revival</h3>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                <img
                  src={trendGorpcore}
                  alt="Gorpcore aesthetic fashion trend"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                  <h3 className="font-display text-2xl font-bold text-foreground">Gorpcore</h3>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-center">
                <Star className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">More Trends</h3>
                <p className="text-muted-foreground">Discover seasonal styles and emerging aesthetics</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Teaser Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Shop the Look
            </h2>
            <div className="flex gap-6 overflow-x-auto pb-4 max-w-6xl mx-auto scrollbar-hide">
              <a
                href="/shops-coming-soon"
                className="flex-shrink-0 w-72 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-primary/50 group"
              >
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img
                    src={productCardigan}
                    alt="Korean oversized cardigan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    Oversized Cardigan
                  </h3>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
              </a>

              <a
                href="/shops-coming-soon"
                className="flex-shrink-0 w-72 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-primary/50 group"
              >
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img
                    src={productSkirt}
                    alt="Pleated midi skirt"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    Pleated Midi Skirt
                  </h3>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
              </a>

              <a
                href="/shops-coming-soon"
                className="flex-shrink-0 w-72 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-primary/50 group"
              >
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img
                    src={productSneakers}
                    alt="Platform sneakers"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    Platform Sneakers
                  </h3>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Fashion;
