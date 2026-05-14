import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

// Import images
import hoverline1 from "@/assets/hoverline/hoverline_1.png";
import hoverline2 from "@/assets/hoverline/hoverline_2.png";
import hoverline3 from "@/assets/hoverline/hoverline_3.png";

export default function Hoverline() {
  const media = [hoverline1, hoverline2, hoverline3];

  const tech = [
    "Unity Engine",
    "C#",
    "OpenAI LLM API",
    "JoyShockLibrary [JSL]",
    "UniSense [DualSense Haptics]",
    "Scriptable Objects",
  ];

  const features = [
    "Implemented a modular gameplay architecture in which core systems such as flight control, wind simulation, adherence evaluation, adaptive difficulty, and haptics were developed as independent modules with clearly defined responsibilities.",
    "Established a data-driven configuration pipeline using Scriptable Objects to store wind presets, mission definitions, aerodynamics profiles, controller settings, and runtime modifiers.",
    "Implemented a layered wind simulation system combining global wind, altitude-based shear, procedural turbulence (Perlin noise), and stochastic gust events, exposed through a unified sampling API.",
    "Developed an LLM-driven adaptive difficulty pipeline where structured player performance metrics were evaluated externally and applied via bounded parameter updates.",
    "Extended helicopter physics by coupling environmental wind forces into aerodynamic drag and torque calculations while isolating base flight behaviour behind preset-driven response profiles.",
    "Implemented mission progression, path adherence scoring, and difficulty feedback using event-driven communication instead of per-frame polling.",
    "Abstracted motion-based controller input and DualSense haptic feedback into dedicated systems that translate telemetry and environmental data into physical feedback.",
  ];

  const team = [
    { name: "Francis Obiokala", role: "Gameplay Systems Programmer" },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") setSelectedIndex(null);

      if (e.key === "ArrowRight") {
        setDirection("next");
        setSelectedIndex((selectedIndex + 1) % media.length);
      }

      if (e.key === "ArrowLeft") {
        setDirection("prev");
        setSelectedIndex((selectedIndex - 1 + media.length) % media.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="min-h-screen bg-dark-space text-foreground">
      <Navigation />

      <div className="container mx-auto px-6 py-20 animate-fade-in">
        {/* Back */}
        <Link to="/portfolio/games">
          <Button
            variant="outline"
            className="mb-8 hover:bg-secondary/100 hover:border-secondary glow-blue hover-scale font-heading px-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Game Portfolio
          </Button>
        </Link>

        {/* Title */}
        <h1 className="font-heading text-5xl md:text-6xl font-black text-neon-green mb-6">
          HOVERLINE
        </h1>

        {/* Description */}
        <div className="text-muted-foreground mb-12 max-w-full space-y-4">
          <p>
            Hoverline is a focused helicopter flight prototype centred on maintaining
            stability while navigating checkpoints under dynamically changing
            environmental conditions. The experience emphasises close-range
            manoeuvring, precision control, and continuous adaptation to wind forces
            that evolve in response to player performance.
          </p>

          <p>
            Wind conditions are generated procedurally using layered noise, altitude-based
            shear, and stochastic gust events, with an LLM-driven adaptive difficulty
            system evaluating player telemetry to adjust environmental pressure
            dynamically. DualSense haptic feedback translates aerodynamic forces and
            environmental data into physical sensation, deepening the sense of physical
            weight and resistance.
          </p>
        </div>

        {/* Project Context */}
        <div className="mb-12 space-y-4">
          <p className="text-base font-heading text-foreground">
            <span className="font-medium">Role:</span>{" "}
            <span className="text-neon-green">Gameplay Systems Programmer</span>
          </p>

          <p className="text-base font-heading text-foreground">
            <span className="font-medium">Development Status:</span>{" "}
            <span className="text-neon-green">Prototype</span>
          </p>

          <p className="text-base font-heading text-foreground">
            <span className="font-medium">Platform:</span>{" "}
            <span className="text-neon-green">PC (Windows)</span>
          </p>
        </div>

        {/* Media Section */}
        <div className="mb-16">
          <h2 className="font-heading text-2xl mb-6">Gameplay</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* Screenshot Grid — LEFT */}
            <div className="grid grid-cols-2 gap-4">
              {media.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Hoverline screenshot ${index + 1}`}
                  onClick={() => {
                    setDirection("next");
                    setSelectedIndex(index);
                  }}
                  className="w-full rounded-lg hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer"
                />
              ))}
            </div>

            {/* Video Placeholder — RIGHT */}
            <div>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-border glow-blue flex items-center justify-center bg-dark-surface">
                <div className="text-center space-y-2 px-6">
                  <p className="font-heading text-lg text-muted-foreground">Video Coming Soon</p>
                  <p className="text-sm text-muted-foreground/60">Gameplay footage will be available here.</p>
                </div>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                Gameplay video is currently in production and will be added shortly.
              </p>
            </div>

          </div>
        </div>

        {/* Modal */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="relative flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  setDirection("prev");
                  setSelectedIndex((selectedIndex - 1 + media.length) % media.length);
                }}
                className="absolute left-[-3rem] text-white text-4xl hover:scale-110 transition"
              >
                ‹
              </button>

              <img
                key={selectedIndex}
                src={media[selectedIndex]}
                alt={`Screenshot ${selectedIndex + 1}`}
                className={`max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg transition-all duration-300 ${
                  direction === "next" ? "animate-slide-left" : "animate-slide-right"
                }`}
              />

              <button
                onClick={() => {
                  setDirection("next");
                  setSelectedIndex((selectedIndex + 1) % media.length);
                }}
                className="absolute right-[-3rem] text-white text-4xl hover:scale-110 transition"
              >
                ›
              </button>

              <div className="absolute bottom-[-2rem] text-sm text-muted-foreground">
                {selectedIndex + 1} / {media.length}
              </div>

              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-3 right-3 text-white text-2xl bg-black/60 hover:bg-black/80 rounded-full px-3 py-1"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <h2 className="font-heading text-2xl mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {tech.map((t) => (
            <span
              key={t}
              className="px-4 py-2 bg-dark-surface border border-border rounded-md text-primary font-heading text-sm hover:border-primary hover-scale"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Features */}
        <h2 className="font-heading text-2xl mb-4">Key Features</h2>
        <ul className="space-y-3 mb-12">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <span className="text-neon-green text-xl">▹</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* Team */}
        <h2 className="font-heading text-2xl mb-4">Development Team</h2>
        <ul className="space-y-3 mb-12">
          {team.map((member, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <span className="text-neon-green text-xl">▹</span>
              <span>
                <strong>{member.name}</strong> — {member.role}
              </span>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-6 mt-8">
          <Button
            className="bg-secondary text-secondary-foreground hover:bg-secondary/50 glow-blue hover-scale font-heading px-6"
            onClick={(e) => e.preventDefault()}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Download for Windows
          </Button>
        </div>
      </div>
    </div>
  );
}
