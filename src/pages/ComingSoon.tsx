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

            {/* Social Links */}
            <div className="mt-16 max-w-md mx-auto" id="newsletter">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Connect With Us</h3>
              <div className="flex justify-center gap-6">
                <a 
                  href="/coming-soon" 
                  aria-label="Instagram - Coming Soon"
                  className="w-12 h-12 rounded-full bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all hover:scale-110"
                >
                  <svg className="w-6 h-6 text-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a 
                  href="/coming-soon" 
                  aria-label="Pinterest - Coming Soon"
                  className="w-12 h-12 rounded-full bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all hover:scale-110"
                >
                  <svg className="w-6 h-6 text-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
                </a>
                <a 
                  href="/coming-soon" 
                  aria-label="TikTok - Coming Soon"
                  className="w-12 h-12 rounded-full bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all hover:scale-110"
                >
                  <svg className="w-6 h-6 text-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                </a>
                <a 
                  href="https://x.com/asianfashion" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on X"
                  className="w-12 h-12 rounded-full bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all hover:scale-110"
                >
                  <svg className="w-6 h-6 text-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ComingSoon;
