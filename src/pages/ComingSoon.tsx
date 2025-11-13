import { Mail, ArrowLeft, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import productSerum from "@/assets/product-serum-1.jpg";
import productCardigan from "@/assets/product-cardigan.jpg";
import productSunscreen from "@/assets/product-sunscreen-1.jpg";
import productSkirt from "@/assets/product-skirt.jpg";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you when we launch our curated Asian fashion & beauty collection.",
      });
      setEmail("");
    }
  };

  const teaserProducts = [
    {
      image: productSerum,
      title: "K-Beauty Essentials",
      description: "Curated serums & treatments from Seoul's best brands",
    },
    {
      image: productCardigan,
      title: "Korean Street Style",
      description: "Oversized fashion pieces inspired by Hongdae",
    },
    {
      image: productSunscreen,
      title: "Japanese Skincare",
      description: "Minimalist beauty with maximum results",
    },
    {
      image: productSkirt,
      title: "Taiwanese Chic",
      description: "Playful fashion meets everyday comfort",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Blurry Hero Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid grid-cols-3 gap-4 p-8 blur-2xl opacity-30">
          <img src={productSerum} alt="" className="w-full h-full object-cover rounded-2xl" />
          <img src={productCardigan} alt="" className="w-full h-full object-cover rounded-2xl" />
          <img src={productSunscreen} alt="" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      {/* Content */}
      <main className="relative z-10 min-h-screen flex flex-col">
        {/* Back Link */}
        <div className="container mx-auto px-4 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center py-12 px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Launching Soon</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
              Stylish Picks Coming Soon!
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              We're curating the best Korean, Japanese, and Taiwanese fashion & beauty finds just for you. 
              Sign up below to be the first to shop when we launch affiliates!
            </p>

            {/* Email Signup Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-20">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="pl-12 h-12 text-base"
                  />
                </div>
                <Button type="submit" size="lg" className="h-12 px-8 font-semibold">
                  Notify Me
                </Button>
              </div>
            </form>

            {/* Teaser Product Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {teaserProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-primary/50 group"
                >
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">
                      {product.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3">
                      {product.description}
                    </p>
                    <button
                      onClick={handleSubmit}
                      className="w-full py-2 px-4 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary text-xs font-semibold rounded-lg transition-colors"
                    >
                      Notify Me
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Curated Brands</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">🎁</div>
                <div className="text-sm text-muted-foreground">Launch Gifts</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ComingSoon;
