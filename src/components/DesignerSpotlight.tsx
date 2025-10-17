import { Quote } from "lucide-react";

const designers = [
  {
    name: "Rei Kawakubo",
    brand: "Comme des Garçons",
    country: "Japan",
    philosophy: "Fashion is not about beauty. It's about creating something new and challenging perceptions.",
    contribution: "Revolutionary deconstruction and avant-garde aesthetics that redefined fashion's boundaries.",
  },
  {
    name: "Guo Pei",
    brand: "Guo Pei Couture",
    country: "China",
    philosophy: "I want to show the world the beauty and richness of Chinese culture through contemporary fashion.",
    contribution: "Masterful embroidery and craftsmanship that elevates Chinese haute couture to global recognition.",
  },
  {
    name: "Prabal Gurung",
    brand: "Prabal Gurung",
    country: "Nepal/USA",
    philosophy: "Fashion is a powerful platform for change, activism, and representing diverse voices.",
    contribution: "Bridging Eastern elegance with Western sophistication while championing social causes.",
  },
];

const DesignerSpotlight = () => {
  return (
    <section id="designers" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Designer Spotlight
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visionaries shaping the global fashion landscape
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {designers.map((designer, index) => (
            <div
              key={designer.name}
              className="bg-card border border-border rounded-2xl p-8 md:p-10 hover:shadow-xl transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="font-display text-3xl font-bold text-foreground">
                      {designer.name}
                    </h3>
                    <span className="text-sm text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {designer.country}
                    </span>
                  </div>
                  <p className="text-primary font-semibold mb-4">{designer.brand}</p>
                  
                  <div className="bg-muted/50 border-l-4 border-secondary rounded-r-lg p-4 mb-4">
                    <Quote className="w-5 h-5 text-secondary mb-2" />
                    <p className="text-foreground italic">{designer.philosophy}</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Impact:</span> {designer.contribution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignerSpotlight;
