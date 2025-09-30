import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToPortfolio = () => {
    document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-background">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main Heading */}
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-foreground">
            CLIENT NAME
          </h1>
          
          {/* Subheading */}
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium text-neon-green tracking-wide">
            Game Developer | Immersive Worlds Creator
          </p>
          
          {/* CTA Button */}
          <div className="pt-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              onClick={scrollToPortfolio}
              size="lg"
              className="group font-heading text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground hover-scale glow-blue transition-all duration-300"
            >
              View Portfolio
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
