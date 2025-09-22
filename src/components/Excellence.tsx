import { Globe, Handshake, Zap } from "lucide-react";
const excellencePoints = [{
  icon: Globe,
  title: "Global Reach",
  description: "Based in Kosovo, expanding worldwide",
  detail: "From our headquarters in Prishtina to international markets, we connect businesses across continents"
}, {
  icon: Handshake,
  title: "Partnership Focus",
  description: "Commission-based model",
  detail: "We align our success with yours through strategic commission-based partnerships that drive results"
}, {
  icon: Zap,
  title: "Innovation Driven",
  description: "No upfront costs, results-focused approach",
  detail: "Zero initial investment required. We prove our value through measurable outcomes and performance"
}];
const Excellence = () => {
  return <section className="py-20 px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Corporate <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on trust, driven by results, powered by innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {excellencePoints.map((point, index) => {
          const IconComponent = point.icon;
          return <div key={point.title} className="glass-card p-8 rounded-3xl hover-lift animate-slide-in-right group text-center lg:text-left" style={{
            animationDelay: `${index * 0.3}s`
          }}>
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className="p-4 rounded-2xl group-hover:transition-colors">
                    <IconComponent className="w-10 h-10 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {point.title}
                </h3>
                
                <p className="text-lg text-primary mb-4 font-medium">
                  {point.description}
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  {point.detail}
                </p>

                {/* Decorative element */}
                <div className="mt-6 flex justify-center lg:justify-start">
                  <div className="w-16 h-1 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>;
        })}
        </div>

        {/* Stats Section */}
        
      </div>
    </section>;
};
export default Excellence;