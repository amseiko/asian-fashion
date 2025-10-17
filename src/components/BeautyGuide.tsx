import makeupImage from "@/assets/makeup-trends.jpg";
import { Sparkles, Heart, Star, Droplets } from "lucide-react";

const beautyCategories = [
  {
    icon: Droplets,
    title: "Glass Skin Secrets",
    description: "Achieve that coveted glass skin look with hydrating toners, essences, and layering techniques that create a luminous, dewy complexion.",
    color: "text-accent",
  },
  {
    icon: Sparkles,
    title: "Makeup Trends",
    description: "From gradient lips to puppy eyeliner, explore the latest East Asian makeup trends that emphasize natural beauty with a playful twist.",
    color: "text-primary",
  },
  {
    icon: Heart,
    title: "K-Beauty Routine",
    description: "Master the famous 10-step Korean skincare routine with double cleansing, essences, sheet masks, and targeted treatments for flawless skin.",
    color: "text-secondary",
  },
  {
    icon: Star,
    title: "J-Beauty Philosophy",
    description: "Embrace Japanese beauty's focus on simplicity, quality ingredients, and gentle care that works in harmony with your skin.",
    color: "text-accent",
  },
];

const BeautyGuide = () => {
  return (
    <section id="beauty" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Beauty Essentials
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              East Asian beauty is all about healthy, glowing skin and enhancing your natural features with carefully curated products and techniques.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {beautyCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.title} className="space-y-2">
                    <Icon className={`w-8 h-8 ${category.color}`} />
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={makeupImage}
                alt="Asian makeup trends"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl max-w-xs">
              <p className="font-semibold mb-1">Pro Tip</p>
              <p className="text-sm opacity-90">Layer your skincare from thinnest to thickest consistency for maximum absorption!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautyGuide;
