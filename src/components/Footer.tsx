const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Asian Fashion Chronicles
            </h3>
            <p className="text-muted-foreground mb-4">
              Celebrating the diversity, innovation, and cultural richness of fashion across Asia.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#regions" className="text-muted-foreground hover:text-primary transition-colors">Regional Styles</a></li>
              <li><a href="#trends" className="text-muted-foreground hover:text-primary transition-colors">Modern Trends</a></li>
              <li><a href="#heritage" className="text-muted-foreground hover:text-primary transition-colors">Cultural Heritage</a></li>
              <li><a href="#designers" className="text-muted-foreground hover:text-primary transition-colors">Designer Spotlight</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Newsletter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Asian Fashion Chronicles. Celebrating fashion heritage and innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
