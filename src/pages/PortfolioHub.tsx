console.log("PORTFOLIO HUB RENDERED");

import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useUISound } from "@/hooks/useUISounds";

// Optional: use any 2 nice images you already have.
// If you don’t want images yet, remove the <img /> blocks.
import gameThumb from "@/assets/ElementalEcho/Front Page.png";
import aiThumb from "@/assets/Extraction Protocol/Extraction Protocol_1.png"; // change to an AI thumbnail when you have it

export default function PortfolioHub() {
  const { play } = useUISound();

  const cards = [
    {
      title: "Game Portfolio",
      description:
        "Gameplay systems, AI, networking, and engine work across Unity and Unreal projects.",
      to: "/portfolio/games",
      image: gameThumb,
    },
    {
      title: "AI Projects",
      description:
        "Machine learning and deep learning work focused on real datasets, evaluation, and reproducible experiments.",
      to: "/portfolio/ai",
      image: aiThumb,
    },
  ];

  return (
    <div className="min-h-screen bg-dark-space text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="font-heading text-6xl md:text-7xl font-black mb-6">
              Portfolio
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose a track — games or AI — to explore projects in the right context.
            </p>
          </div>
        </div>
      </section>

      {/* Choice Cards */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {cards.map((card, i) => (
              <div
                key={card.title}
                onMouseEnter={() => play("hover")}
                className="group relative bg-dark-surface rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 hover-scale animate-slide-up"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h2 className="font-heading text-3xl font-bold text-neon-green group-hover:text-primary transition-colors">
                    {card.title}
                  </h2>

                  <p className="text-light-text leading-relaxed">
                    {card.description}
                  </p>

                  <div className="pt-2">
                    <Link to={card.to}>
                      <Button
                        onClick={() => play("click")}
                        className="w-full group/btn font-heading bg-secondary hover:bg-secondary/90 text-secondary-foreground glow-blue transition-all duration-300"
                      >
                        Explore
                        <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 glow-neon rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
