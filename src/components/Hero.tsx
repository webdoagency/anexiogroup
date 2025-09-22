import { Button } from "@/components/ui/button";
import heroBg from "@/assets/connected-network-bg.jpg";
const Hero = () => {
  return <section id="home" className="glass-hero min-h-screen flex items-center justify-center relative">
      {/* Animated Background */}
      <div className="liquid-bg animate-liquid"></div>
      
      {/* 3D Connected Network Background */}
      <div className="absolute inset-0 opacity-30" style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }} />
      
      {/* 3D Network Nodes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-3 h-3 rounded-full animate-float [animation-delay:0s] shadow-lg shadow-primary/20"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full animate-float [animation-delay:1s] shadow-md shadow-accent/15"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full animate-float [animation-delay:2s] shadow-lg shadow-primary/25"></div>
        <div className="absolute bottom-1/4 right-1/6 w-2.5 h-2.5 rounded-full animate-float [animation-delay:3s] shadow-md shadow-accent/20"></div>
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full animate-float [animation-delay:4s] shadow-sm shadow-primary/30"></div>
        
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary) / 0.1)" />
              <stop offset="50%" stopColor="hsl(var(--primary) / 0.3)" />
              <stop offset="100%" stopColor="hsl(var(--primary) / 0.1)" />
            </linearGradient>
          </defs>
          <line x1="16%" y1="25%" x2="33%" y2="67%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" />
          <line x1="75%" y1="33%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse [animation-delay:0.5s]" />
          <line x1="33%" y1="67%" x2="83%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse [animation-delay:1s]" />
          <line x1="50%" y1="50%" x2="83%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse [animation-delay:1.5s]" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-foreground">Multi-brand</span>
            <br />
            <span className="text-foreground">business partner</span>
            <br />
            <span className="text-foreground">connecting enterprises</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up [animation-delay:0.2s]">We reduce employee costs and simplify management through strategic partnerships</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:0.4s]">
            <Button size="lg" className="btn-glass px-8 py-4 text-lg rounded-2xl hover-lift" onClick={() => document.getElementById('brands')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Explore Our Brands
            </Button>
            <Button size="lg" variant="outline" className="glass px-8 py-4 text-lg rounded-2xl hover-lift" onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>

    </section>;
};
export default Hero;