import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import ImageSliderModal from "@/components/ImageSliderModal";

// Import images
import img1 from "@/assets/Extraction Protocol/Extraction Protocol_1.png";
import img2 from "@/assets/Extraction Protocol/Extraction Protocol_2.png";
import img3 from "@/assets/Extraction Protocol/Extraction Protocol_3.png";

export default function ExtractionProtocol() {
  // Media
  const media = [img1, img2, img3];

  // Content
  const tech = [
    "Unity Engine",
    "C#",
    "ML-Agents",
    "Behaviour Trees",
  ];

  const features = [
    "Layered enemy AI architecture separating perception, decision making, execution, and evaluation, enabling modular experimentation and benchmarking.",
    "Hybrid AI decision system combining Behaviour Trees for deterministic action execution with reinforcement learning for high level intent selection.",
    "Reinforcement learning driven intent selection enabling enemies to dynamically balance player engagement and objective pressure at runtime.",
    "Unified decision interface routing heuristic, Behaviour Tree, and reinforcement learning decisions through identical execution paths for fair comparison.",
    "Abstract training environment mirroring live gameplay observations, enabling efficient policy training without physics or animation dependencies.",
    "Event based evaluation and metrics logging capturing intent switches, decision stability, and behaviour distribution for empirical analysis.",
  ];

  const team = [
    { name: "Francis Obiokala", role: "AI / Gameplay Systems Programmer" },
  ];

  // Slider state
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  return (
    <div className="min-h-screen bg-dark-space text-foreground">
      <Navigation />

      <div className="container mx-auto px-6 py-20 animate-fade-in">
        {/* Back */}
        <Link to="/portfolio">
          <Button
            variant="outline"
            className="mb-8 hover:border-primary hover:text-primary hover-scale"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Title */}
        <h1 className="font-heading text-5xl md:text-6xl font-black text-neon-green mb-6">
          Extraction Protocol
        </h1>

        {/* Description */}
        <p className="text-muted-foreground mb-6 max-w-full">
          This project explores adaptive enemy behaviour in a 3D tactical shooter
          prototype by integrating deep reinforcement learning into a traditional
          game AI architecture. Enemy agents dynamically select high-level intent—
          balancing player engagement and objective pressure—based on changing
          game state, while low-level actions are executed through deterministic
          Behaviour Trees. The system prioritises interpretability, stability, and
          designer control while enabling emergent behaviour during gameplay.
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
              alt={`Emergent NPC AI screenshot ${index + 1}`}
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
