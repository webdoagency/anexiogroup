import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Excellence from "@/components/Excellence";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import heroBg from "@/assets/connected-network-bg.jpg";

const Index = () => {
  return (
    <main className="min-h-screen glass-hero relative">
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

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Brands />
        <Excellence />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
