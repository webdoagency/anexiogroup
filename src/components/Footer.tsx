import { ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const brandLinks = [
    { name: "Webdo Agency", url: "#" },
    { name: "Ballers", url: "#" },
    { name: "Darlise", url: "#" }
  ];

  const quickLinks = [
    { name: "Home", url: "#home" },
    { name: "Brands", url: "#brands" },
    { name: "Services", url: "#services" },
    { name: "Contact", url: "#contact" }
  ];

  return (
    <footer className="glass-nav border-t border-primary/10 py-12 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-bold text-foreground">
                Anexio Group
              </span>
              <span className="text-sm text-muted-foreground">
                Where Everything Connects
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Multi-brand business partner connecting enterprises through strategic partnerships. 
              Reducing costs and simplifying management worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                Based in Kosovo & UK
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Our Brands</h4>
            <ul className="space-y-2">
              {brandLinks.map((brand) => (
                <li key={brand.name}>
                  <a 
                    href={brand.url}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {brand.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} Anexio Group. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <div className="flex items-center">
                <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                <span className="text-muted-foreground">contact@anexiogroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;