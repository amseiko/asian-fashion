const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Asian Fashion
            </h3>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Your ultimate guide to Korean, Japanese, and Taiwanese fashion and beauty trends. Discover the secrets to K-beauty glass skin and Asian style for everyone.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Browse</h4>
            <ul className="space-y-2">
              <li><a href="#fashion" className="text-muted-foreground hover:text-primary transition-colors text-sm">Fashion Styles</a></li>
              <li><a href="#beauty" className="text-muted-foreground hover:text-primary transition-colors text-sm">Beauty Guide</a></li>
              <li><a href="#trends" className="text-muted-foreground hover:text-primary transition-colors text-sm">Trending Now</a></li>
              <li><a href="#skincare" className="text-muted-foreground hover:text-primary transition-colors text-sm">Skincare Routine</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="/coming-soon" className="text-muted-foreground hover:text-primary transition-colors text-sm">Instagram</a></li>
              <li><a href="/coming-soon" className="text-muted-foreground hover:text-primary transition-colors text-sm">Pinterest</a></li>
              <li><a href="/coming-soon" className="text-muted-foreground hover:text-primary transition-colors text-sm">TikTok</a></li>
              <li><a href="https://x.com/asianfashion" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">X (Twitter)</a></li>
              <li><a href="/coming-soon#newsletter" className="text-muted-foreground hover:text-primary transition-colors text-sm">Newsletter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Asian Fashion. Celebrating Korean, Japanese, and Taiwanese style and beauty.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
