import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import ImageSliderModal from "@/components/ImageSliderModal";

// Import images
import hoverline1 from "@/assets/hoverline/hoverline_1.png";
import hoverline2 from "@/assets/hoverline/hoverline_2.png";
import hoverline3 from "@/assets/hoverline/hoverline_3.png";

export default function Hoverline() {
  // Media
  const media = [hoverline1, hoverline2, hoverline3];

  // Content
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

  // Slider state
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");

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
            Back to  Game Portfolio
          </Button>
        </Link>

        {/* Title */}
        <h1 className="font-heading text-5xl md:text-6xl font-black text-neon-green mb-6">
          HOVERLINE
        </h1>

        {/* Description */}
        <p className="text-muted-foreground mb-6 max-w-full">
          Hoverline is a focused helicopter flight prototype centred on maintaining
          stability while navigating checkpoints under dynamically changing
          environmental conditions. The experience emphasises close-range
          manoeuvring, precision control, and continuous adaptation to wind forces
          that evolve in response to player performance.
        </p>

        <p className="font-medium mb-10">
          Role: Gameplay Programmer / Systems Programmer
        </p>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {media.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hoverline screenshot ${index + 1}`}
              onClick={() => {
                setDirection("next");
                setSelectedIndex(index);
              }}
              className="cursor-pointer rounded-lg shadow-lg hover:scale-105 transition"
            />
          ))}
        </div>

        {/* Reusable Image Slider Modal */}
        <ImageSliderModal
          images={media}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          direction={direction}
          setDirection={setDirection}
        />

        {/* Tech Stack */}
        <h2 className="font-heading text-2xl mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-3 mb-10">
          {tech.map((t) => (
            <span
              key={t}
              className="px-4 py-2 bg-dark-surface border border-border rounded-md text-primary font-heading text-sm hover:border-primary hover-scale"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Key Features */}
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

        {/* Download (placeholder) */}
        <Button
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-blue hover-scale font-heading"
          onClick={(e) => e.preventDefault()}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Download for Windows
        </Button>


      </div>
    </div>
  );
}
