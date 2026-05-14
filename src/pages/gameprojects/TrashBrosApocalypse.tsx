import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

// Import images
import img1 from "@/assets/TrashBrosApocalypse/TrashBros_1.png";
import img2 from "@/assets/TrashBrosApocalypse/TrashBros_2.png";
import img3 from "@/assets/TrashBrosApocalypse/TrashBros_3.png";

export default function TrashBrosApocalypse() {
  const media = [img1, img2, img3];

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
          TRASH BROS: APOCALYPSE
        </h1>

        {/* Description */}
        <div className="text-muted-foreground mb-12 max-w-full space-y-4">
          <p>
            Trash Bros: Apocalypse is a third-person, quest-driven platformer set in
            a post-apocalyptic city, where player progression is driven by
            environmental cleanup and sustainable interaction. Players take on the
            role of a scavenger navigating a ruined urban landscape, completing
            quests, collecting resources, and restoring paths through the world.
          </p>

          <p>
            The game was developed as a vertical slice with a strong emphasis on
            modular gameplay systems and event-driven architecture. Quests, inventory,
            dialogue, and world progression are handled through independent, loosely
            coupled systems authored with DataAssets, prioritising designer control
            and code maintainability.
          </p>
        </div>

        {/* Project Context */}
        <div className="mb-12 space-y-4">
          <p className="text-base font-heading text-foreground">
            <span className="font-medium">Role:</span>{" "}
            <span className="text-neon-green">Gameplay Programmer</span>
          </p>

          <p className="text-base font-heading text-foreground">
            <span className="font-medium">Development Status:</span>{" "}
            <span className="text-neon-green">Vertical Slice</span>
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
                  alt={`Trash Bros: Apocalypse screenshot ${index + 1}`}
                  onClick={() => {
                    setDirection("next");
                    setSelectedIndex(index);
                  }}
                  className="w-full rounded-lg hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer"
                />
              ))}
            </div>

            {/* Gameplay Video — RIGHT */}
            <div>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-border glow-blue">
                <iframe
                  src="https://www.youtube.com/embed/SD_j9kw5N6c"
                  title="Trash Bros: Apocalypse Gameplay"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                Gameplay footage captured by a team member. Used to demonstrate core
                gameplay systems.
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
