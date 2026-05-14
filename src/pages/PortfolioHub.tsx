import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useUISound } from "@/hooks/useUISounds";

export default function PortfolioHub() {
  const { play } = useUISound();

  const cards = [
    {
      title: "Game Projects",
      description:
        "Gameplay systems, AI, networking, and engine work across Unity and Unreal projects.",
      to: "/portfolio/games",
    },
    {
      title: "AI Projects",
      description:
        "Machine learning and deep learning work focused on real datasets, evaluation, and reproducible experiments.",
      to: "/portfolio/ai",
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
              Select a category to explore featured work and technical projects.
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
                className="group relative bg-dark-surface rounded-xl border border-border hover:border-primary transition-all duration-300 hover-scale animate-slide-up p-8 flex flex-col"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {/* Accent number */}
                <span className="font-heading text-7xl font-black text-primary/10 group-hover:text-primary/20 transition-colors duration-300 select-none mb-6 block">
                  0{i + 1}
                </span>

                {/* Title */}
                <h2 className="font-heading text-3xl font-bold text-neon-green group-hover:text-primary transition-colors duration-300 mb-3">
                  {card.title}
                </h2>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                  {card.description}
                </p>

                {/* CTA */}
                <Link to={card.to}>
                  <Button
                    onClick={() => play("click")}
                    className="w-full group/btn font-heading bg-secondary hover:bg-secondary/90 text-secondary-foreground glow-blue transition-all duration-300"
                  >
                    Preview Projects
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                {/* Hover glow */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  <div className="absolute inset-0 glow-neon rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
