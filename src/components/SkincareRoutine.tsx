import skincareImage from "@/assets/skincare-routine.jpg";

const steps = [
  { 
    step: "1", 
    name: "Oil Cleanser", 
    purpose: "Remove makeup & sunscreen",
    product: "COSRX Low pH Good Morning Gel Cleanser",
    price: "$10.20",
    url: "/coming-soon"
  },
  { 
    step: "2", 
    name: "Water-Based Cleanser", 
    purpose: "Deep clean pores",
    product: "Anua Heartleaf Pore Control Cleansing Oil",
    price: "$17.90",
    url: "/coming-soon"
  },
  { 
    step: "3", 
    name: "Exfoliator", 
    purpose: "2-3x weekly for smooth skin",
    product: "Some By Mi AHA-BHA-PHA 30 Days Miracle Toner",
    price: "$15.80",
    url: "/coming-soon"
  },
  { 
    step: "4", 
    name: "Toner", 
    purpose: "Balance & prep skin",
    product: "Isntree Hyaluronic Acid Toner",
    price: "$14.50",
    url: "/coming-soon"
  },
  { 
    step: "5", 
    name: "Essence", 
    purpose: "Boost hydration",
    product: "Missha Time Revolution The First Essence 5X",
    price: "$31.90",
    url: "/coming-soon"
  },
  { 
    step: "6", 
    name: "Serum", 
    purpose: "Target glass-skin glow",
    product: "Beauty of Joseon Glow Serum",
    price: "$16.80",
    url: "/coming-soon"
  },
  { 
    step: "7", 
    name: "Eye Cream", 
    purpose: "Delicate eye area care",
    product: "Purito Centella Unscented Eye Cream",
    price: "$19.90",
    url: "/coming-soon"
  },
  { 
    step: "8", 
    name: "Moisturizer", 
    purpose: "Lock in hydration",
    product: "COSRX Advanced Snail 92 All in One Cream",
    price: "$14.90",
    url: "/coming-soon"
  },
  { 
    step: "9", 
    name: "Sheet Mask", 
    purpose: "Intensive care 2-3x weekly",
    product: "Mediheal Tea Tree Essential Blemish Control Mask",
    price: "$1.90",
    url: "/coming-soon"
  },
  { 
    step: "10", 
    name: "Sunscreen", 
    purpose: "SPF 50+ daily (AM only)",
    product: "Round Lab Birch Juice Moisturizing Sunscreen",
    price: "$19.80",
    url: "/coming-soon"
  },
];

const SkincareRoutine = () => {
  return (
    <section id="skincare" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            The 10-Step K-Beauty Routine
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The secret to glass skin isn't just products—it's the method. Here's how to layer like a pro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((item) => (
                <a
                  key={item.step}
                  href={item.url}
                  className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1 text-sm">
                        {item.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        {item.purpose}
                      </p>
                      <div className="text-xs text-primary group-hover:underline font-medium">
                        Shop {item.product}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {item.price}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 bg-secondary/10 border border-secondary/20 rounded-xl p-4">
              <p className="text-sm text-foreground">
                <span className="font-semibold">Remember:</span> You don't need all 10 steps every day! Start with the basics (cleanser, toner, moisturizer, SPF) and add products as needed.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={skincareImage}
                alt="Korean skincare routine products"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkincareRoutine;
