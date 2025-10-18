import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shirt, Star, TrendingUp, Sparkles } from "lucide-react";
import koreaImage from "@/assets/kbeauty-products.jpg";

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
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                Asian Fashion
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
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

        {/* Current Trends */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Current Fashion Trends
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {trends.map((trend) => {
                const Icon = trend.icon;
                return (
                  <div key={trend.title} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{trend.title}</h3>
                    <p className="text-sm text-muted-foreground">{trend.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Shopping Tips */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
                Shopping Asian Fashion Online
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Sizing Tips</h3>
                  <p className="text-sm text-muted-foreground">
                    Asian sizing typically runs smaller than Western sizing. Always check the size chart and measurements before ordering.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Popular Brands</h3>
                  <p className="text-sm text-muted-foreground">
                    Look for brands like Stylenanda, Chuu, and W Concept for Korean fashion, or Uniqlo and GU for Japanese basics.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Shipping</h3>
                  <p className="text-sm text-muted-foreground">
                    Expect 2-4 weeks for international shipping. Some retailers offer express options for faster delivery.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Styling Advice</h3>
                  <p className="text-sm text-muted-foreground">
                    Don't be afraid to mix pieces from different regions. The key is finding what makes you feel confident.
                  </p>
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

export default Fashion;
