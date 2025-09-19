import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Locations",
    details: ["Prishtina, Kosovo", "London, UK"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@anexiogroup.com"]
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+38348878111", "+38348878222"]
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's <span className="text-primary glow-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="glass-card border-0 rounded-3xl animate-fade-in-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input 
                      className="glass bg-transparent border-primary/20 focus:border-primary rounded-xl"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input 
                      className="glass bg-transparent border-primary/20 focus:border-primary rounded-xl"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input 
                    type="email"
                    className="glass bg-transparent border-primary/20 focus:border-primary rounded-xl"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Company</label>
                  <Input 
                    className="glass bg-transparent border-primary/20 focus:border-primary rounded-xl"
                    placeholder="Your Company"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    className="glass bg-transparent border-primary/20 focus:border-primary rounded-xl min-h-[120px]"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button className="btn-glass w-full py-3 rounded-xl text-lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={info.title} className="glass-card border-0 rounded-2xl hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-primary/10 glow-primary">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Call to Action */}
            <Card className="glass-card border-0 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Ready to start?
                </h4>
                <p className="text-muted-foreground mb-4">
                  No upfront costs, commission-based partnership
                </p>
                <Button className="btn-glass px-6 py-2 rounded-xl">
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float [animation-delay:2s]"></div>
      <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-float [animation-delay:4s]"></div>
    </section>
  );
};

export default Contact;