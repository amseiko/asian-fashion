import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";
import { useState } from "react";

const ShopsComingSoon = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add email signup logic
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-32 bg-gradient-to-b from-[#FDF4F6] to-[#F3F9F5] min-h-[80vh] flex items-center">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                Shops Coming Soon
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Handpicked Korean, Japanese & Taiwanese brands launching soon.
              </p>
              
              <div className="max-w-md mx-auto">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Stay Updated
                </h2>
                <a
                  href="/coming-soon"
                  className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  Get updates on our Coming Soon page
                </a>
              </div>

              <div className="mt-16 grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Curated Brands</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">🎁</div>
                  <div className="text-sm text-muted-foreground">Launch Gifts</div>
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

export default ShopsComingSoon;
