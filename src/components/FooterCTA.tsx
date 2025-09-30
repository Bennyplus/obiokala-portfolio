import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const FooterCTA = () => {
  return (
    <section className="py-24 bg-dark-surface relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 grid-background opacity-30"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Let's Build Worlds Together
          </h2>
          
          <p className="text-xl text-light-text max-w-2xl mx-auto">
            Ready to bring your game vision to life? Let's collaborate and create something extraordinary.
          </p>
          
          <div className="pt-4">
            <Button 
              size="lg"
              className="group font-heading text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground hover-scale glow-blue transition-all duration-300"
            >
              <Mail className="mr-2 w-5 h-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-16 relative z-10">
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 CLIENT NAME. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
