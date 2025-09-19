import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Excellence from "@/components/Excellence";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Brands />
      <Excellence />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
