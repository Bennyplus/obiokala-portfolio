import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

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
            <Link to="/contact">
              <Button 
                size="lg"
                className="group font-heading text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground hover-scale glow-blue transition-all duration-300"
              >
                <Mail className="mr-2 w-5 h-5" />
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-16 relative z-10">
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Fryo21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="www.linkedin.com/in/francis-obiokala-8604b329b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            {/* Copyright */}
            <p className="text-muted-foreground text-sm order-first md:order-none">
              © 2025 Francis Obiokala. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;