import japanImage from "@/assets/japan-fashion.jpg";
import koreaImage from "@/assets/korea-fashion.jpg";
import chinaImage from "@/assets/china-fashion.jpg";
import southeastImage from "@/assets/southeast-fashion.jpg";
import { Card, CardContent } from "@/components/ui/card";

const regions = [
  {
    name: "Japan",
    description: "From the avant-garde streets of Harajuku to the minimalist elegance of contemporary Japanese design, Japan's fashion scene is a captivating blend of rebellion and refinement.",
    image: japanImage,
    highlights: ["Street Fashion", "Minimalism", "Avant-Garde"],
  },
  {
    name: "Korea",
    description: "Korean fashion has taken the world by storm with its sophisticated yet accessible style. K-fashion emphasizes clean lines, neutral palettes, and effortless layering.",
    image: koreaImage,
    highlights: ["K-Style", "Minimalist Chic", "Oversized Tailoring"],
  },
  {
    name: "China",
    description: "Chinese fashion honors centuries of textile mastery while embracing bold modernity. The resurgence of hanfu and qipao designs showcases cultural pride meets contemporary aesthetics.",
    image: chinaImage,
    highlights: ["Hanfu Revival", "Silk Heritage", "Modern Cheongsam"],
  },
  {
    name: "Southeast Asia",
    description: "The vibrant fashion of Southeast Asia celebrates bold colors, intricate patterns, and luxurious textiles. Traditional batik and weaving techniques inspire contemporary designers.",
    image: southeastImage,
    highlights: ["Batik Artistry", "Tropical Colors", "Textile Innovation"],
  },
];

const RegionalShowcase = () => {
  return (
    <section id="regions" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Regional Styles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each region tells its own fashion story, woven from cultural heritage and modern innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regions.map((region, index) => (
            <Card 
              key={region.name}
              className="group overflow-hidden border-border hover:shadow-2xl transition-all duration-500 bg-card"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={region.image}
                  alt={`${region.name} fashion`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-3xl font-bold text-foreground mb-2">
                    {region.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {region.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full border border-primary/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  {region.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionalShowcase;
