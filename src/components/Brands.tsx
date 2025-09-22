import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ShoppingBag, Palette } from "lucide-react";
import ballersLogo from "@/assets/ballers-logo.png";
import webdoLogo from "@/assets/webdo-logo.svg";

const brands = [
  {
    name: "Webdo Agency",
    description: "Ecommerce & Web Creation | Shopify Partner",
    icon: ExternalLink,
    features: ["Custom Shopify Development", "E-commerce Solutions", "Web Design & Development"],
    link: "https://webdoagency.com"
  },
  {
    name: "Ballers",
    description: "Streetwear Online Shop | Premium Urban Fashion",
    icon: ShoppingBag,
    features: ["Urban Streetwear", "Premium Fashion", "Limited Edition Drops"],
    link: "https://theballersstore.com"
  },
  {
    name: "Darlise",
    description: "Women's Fashion | Custom- & Handmade Designer Dresses",
    icon: Palette,
    features: ["Custom Designs", "Handmade Quality", "Designer Collections"],
    link: "#"
  }
];

const Brands = () => {
  return (
    <section id="brands" className="py-20 px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Brand Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our diverse ecosystem of premium brands, each excelling in their respective markets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => {
            const IconComponent = brand.icon;
            return (
              <Card 
                key={brand.name} 
                className="glass-card hover-lift animate-fade-in-up border-0 rounded-3xl overflow-hidden group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl">
                      {brand.name === "Webdo Agency" ? (
                        <img 
                          src={webdoLogo} 
                          alt="Webdo Agency Logo" 
                          className="w-12 h-12 object-contain"
                        />
                      ) : brand.name === "Ballers" ? (
                        <img 
                          src={ballersLogo} 
                          alt="Ballers Logo" 
                          className="w-12 h-12 object-contain"
                        />
                      ) : brand.name === "Darlise" ? (
                        <div className="w-12 h-12 flex items-center justify-center">
                          <div className="text-2xl font-bold text-primary">D</div>
                        </div>
                      ) : (
                        <IconComponent className="w-12 h-12 text-primary" />
                      )}
                    </div>
                    <div className="w-2 h-2 rounded-full animate-pulse"></div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {brand.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {brand.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {brand.name === "Darlise" ? (
                    <Button 
                      className="btn-glass w-full rounded-xl opacity-60 cursor-not-allowed"
                      disabled
                    >
                      Coming Soon
                    </Button>
                  ) : (
                    <Button 
                      className="btn-glass w-full rounded-xl"
                      onClick={() => window.open(brand.link, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Floating background elements */}
        <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full blur-xl animate-float [animation-delay:1s]"></div>
        <div className="absolute bottom-1/4 left-10 w-24 h-24 rounded-full blur-xl animate-float [animation-delay:3s]"></div>
      </div>
    </section>
  );
};

export default Brands;