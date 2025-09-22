import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import anexioLogo from "@/assets/anexio-logo.png";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={anexioLogo} alt="Anexio Group Logo" className="h-12 w-auto" />
            <div className="flex flex-col">
              
              <span className="text-xs text-muted-foreground -mt-1">
                Where Everything Connects
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#brands" className="text-foreground hover:text-primary transition-colors">
              Brands
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          
        </div>
      </div>
    </nav>;
};
export default Navigation;