import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="glass-hero min-h-screen flex items-center justify-center relative">
      {/* Animated Background */}
      <div className="liquid-bg animate-liquid"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-foreground">Multi-brand</span>
            <br />
            <span className="text-primary glow-primary">business partner</span>
            <br />
            <span className="text-foreground">connecting enterprises</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up [animation-delay:0.2s]">
            We reduce employee costs and simplify management through strategic partnerships
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:0.4s]">
            <Button 
              size="lg" 
              className="btn-glass px-8 py-4 text-lg rounded-2xl hover-lift"
              onClick={() => document.getElementById('brands')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Brands
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass px-8 py-4 text-lg rounded-2xl hover-lift"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-float [animation-delay:0s]"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-accent/20 rounded-full animate-float [animation-delay:1s]"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary-glow/40 rounded-full animate-float [animation-delay:2s]"></div>
      <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-accent-glow/30 rounded-full animate-float [animation-delay:3s]"></div>
    </section>
  );
};

export default Hero;