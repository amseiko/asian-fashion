const heritageItems = [
  {
    title: "The Kimono",
    region: "Japan",
    description: "This iconic T-shaped robe has evolved over centuries, from courtly elegance to street fashion. Modern designers reinterpret the kimono's graceful silhouette in contemporary fabrics and cuts.",
  },
  {
    title: "The Hanbok",
    region: "Korea",
    description: "With its vibrant colors and elegant lines, the hanbok represents Korean aesthetic ideals. Today's designers create fusion pieces that honor tradition while embracing modern sensibilities.",
  },
  {
    title: "The Cheongsam",
    region: "China",
    description: "Born in 1920s Shanghai, this form-fitting dress symbolizes feminine elegance. Contemporary versions play with length, embellishments, and silhouettes while maintaining its classic grace.",
  },
  {
    title: "Batik & Ikat",
    region: "Southeast Asia",
    description: "These ancient resist-dyeing and weaving techniques create mesmerizing patterns. Modern fashion celebrates these artisan traditions, incorporating them into haute couture and ready-to-wear.",
  },
];

const CulturalHeritage = () => {
  return (
    <section id="heritage" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cultural Heritage
            </h2>
            <p className="text-lg text-muted-foreground">
              Traditional garments that continue to inspire modern fashion
            </p>
          </div>

          <div className="space-y-12">
            {heritageItems.map((item, index) => (
              <div
                key={item.title}
                className="border-l-4 border-primary pl-8 py-6 hover:border-secondary transition-colors duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="font-display text-3xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full inline-block mt-2 md:mt-0">
                    {item.region}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalHeritage;
