import { Button } from "@/components/ui/button";
import heroBg from "@/assets/connected-network-bg.jpg";
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center relative">

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