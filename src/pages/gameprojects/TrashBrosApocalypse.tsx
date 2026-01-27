import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import ImageSliderModal from "@/components/ImageSliderModal";

// Import images
import img1 from "@/assets/TrashBrosApocalypse/TrashBros_1.png";
import img2 from "@/assets/TrashBrosApocalypse/TrashBros_2.png";
import img3 from "@/assets/TrashBrosApocalypse/TrashBros_3.png";

export default function TrashBrosApocalypse() {
  // Media
  const media = [img1, img2, img3];

  // Content
  const tech = [
    "Unreal Engine",
    "C++",
    "Blueprints",
    "DataAssets",
  ];

  const features = [
    "Modular, event-driven gameplay architecture with loose coupling between quests, inventory, dialogue, tools, and world progression systems.",
    "Data-driven quest system implemented using DataAssets, allowing designers to author quest logic, requirements, and rewards without modifying code.",
    "NPC-authoritative quest progression enforced via UQuestGiverComponent, ensuring clear ownership of quest state and preventing UI-driven corruption.",
    "Component-based inventory system supporting item validation, consumption, and reuse across quests, tools, and environment interactions.",
    "Dialogue system with input gating and state isolation, preventing gameplay actions during narrative interaction while preserving clean control flow.",
    "Global environment progression system broadcasting world-state updates to trigger debris removal, path unlocking, and visual feedback.",
    "Tool-based capability progression enabling passive gameplay unlocks without additional UI complexity.",
  ];

  const team = [
    { name: "Francis Obiokala", role: "Gameplay Programmer" },
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
          Trash Bros: Apocalypse
        </h1>

        {/* Description */}
        <p className="text-muted-foreground mb-6 max-w-full">
          Trash Bros: Apocalypse is a third-person, quest-driven platformer set in
          a post-apocalyptic city, where player progression is driven by
          environmental cleanup and sustainable interaction. The game was
          developed as a vertical slice with a strong emphasis on modular gameplay
          systems and event-driven architecture.
        </p>

        <p className="font-medium mb-10">
          Role: Gameplay Programmer
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
