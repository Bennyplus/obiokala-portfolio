import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

// Import assets
import project2 from "@/assets/FaceoftheFuture/FrontPage.png";
import project2_2 from "@/assets/FaceoftheFuture/view1.png";
import project2_3 from "@/assets/FaceoftheFuture/view2.png";
import project2_4 from "@/assets/FaceoftheFuture/view3.png";
import project2_5 from "@/assets/FaceoftheFuture/view4.png";

type MediaItem = {
  type: "image";
  src: string;
};

export default function FaceOfTheFuture() {
  const media: MediaItem[] = [
    { type: "image", src: project2 },
    { type: "image", src: project2_2 },
    { type: "image", src: project2_3 },
    { type: "image", src: project2_4 },
    { type: "image", src: project2_5 },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  // Keyboard navigation (images only)
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
        setSelectedIndex(
          (selectedIndex - 1 + media.length) % media.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, media.length]);

  const tech = ["Unity", "C#"];
  const features = [
    "Event-Driven Architecture: Core systems (rounds, drones, economy, UI, audio) communicate via events, keeping gameplay logic decoupled and scalable.",
    "Modular Manager System: Separate managers for rounds, drones, wanted list, economy, feedback, UI, and audio, each owning a single responsibility.",
    "Data Driven NPC & Wanted List System: NPC identities and classifications implemented using ScriptableObjects; wanted lists are generated dynamically per round and scale with difficulty.",
    "Asynchronous Gameplay Flow: Coroutines manage timers, drone scan intervals, delayed consequences, UI transitions, and music intensity changes.",
    "Animation-Safe UI State Handling:UI elements (wanted entries, warnings) are removed via animation callbacks, preventing logic/UI desynchronisation.",
    "Reusable UI Interaction & Juice Components: Built reusable hover, click, drag, and appear effects using DOTween instead of hard-coded UI animations.",
    "Dynamic Audio & Music Intensity System: Layered music tracks smoothly transition between intensity levels based on game state and player pressure.",
    "Robust Reset & Failure Handling: Clean state resets for round transitions, game over conditions, and full restarts without scene reloads.",
  ];

  const team = [
    { name: "Dave Murray", role: "Lead Desinger/Programmer" },
    { name: "Francis Obiokala", role: "Gameplay Programmer" },
    { name: "Ash Methven", role: "UI/Game Programmer" },
    { name: "Leo", role: "Gameplay Programmer" },
  ];

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
          FACE OF THE FUTURE
        </h1>

        {/* Description */}
        <div className="text-muted-foreground mb-12 space-y-4 max-w-full">
          <p>
            Face of the Future is a surveillance-driven management game where you
            oversee an automated policing system rather than directly controlling
            a character. Drones scan a dense city environment and flag potential
            suspects from a growing wanted list.
          </p>

          <p>
            Each alert forces a decision: confirm an arrest, deny it, or allow the
            system to proceed autonomously. Correct choices earn money and advance
            progression, while mistakes incur penalties and systemic consequences.
          </p>

          <p>
            As rounds progress, surveillance accuracy degrades, pressure increases,
            and automation begins to challenge player authority, highlighting the
            tension between efficiency and accountability.
          </p>
        </div>

       
        {/* Project Context */}
        <div className="mb-12 space-y-4">
          <p className="text-base  font-heading text-forground">
            <span className="font-medium">Role:</span>{" "}
            <span className="text-neon-green">
            Gameplay Programmer
            </span>
          </p>

          <p className="text-base  font-heading text-forground">
            <span className="font-medium">Developement Status:</span>{" "}
            <span className="text-neon-green">
             Released
            </span>
          </p>

          <p className="text-base  font-heading text-forground">
            <span className="font-medium">Platform:</span>{" "}
            <span className="text-neon-green">
            PC (Windows) & Web (WebGL)
            </span>
          </p>
        </div>


        {/* Media Section */}
        <div className="mb-16">
          <h2 className="font-heading text-2xl mb-6">Gameplay</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Screenshots */}
            <div className="grid grid-cols-2 gap-4">
              {media.map((item, index) => (
                <img
                  key={index}
                  src={item.src}
                  alt={`Face of the Future screenshot ${index + 1}`}
                  onClick={() => {
                    setDirection("next");
                    setSelectedIndex(index);
                  }}
                  className="w-full rounded-lg hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer"
                />
              ))}
            </div>

            {/* YouTube Gameplay Video */}
            <div>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-border glow-blue">
                <iframe
                  src="https://www.youtube.com/embed/FJQBWcBJXUk"
                  title="Face of the Future Gameplay"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                Gameplay footage captured by a team member to demonstrate core systems.
              </p>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="relative flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev */}
              <button
                onClick={() => {
                  setDirection("prev");
                  setSelectedIndex(
                    (selectedIndex - 1 + media.length) % media.length
                  );
                }}
                className="absolute left-[-3rem] text-white text-4xl hover:scale-110 transition"
              >
                ‹
              </button>

              {/* Image */}
              <img
                src={media[selectedIndex].src}
                alt="Selected"
                className={`max-h-[85vh] max-w-[90vw] rounded-lg shadow-lg transition-all duration-300 ${
                  direction === "next"
                    ? "animate-slide-left"
                    : "animate-slide-right"
                }`}
              />

              {/* Next */}
              <button
                onClick={() => {
                  setDirection("next");
                  setSelectedIndex((selectedIndex + 1) % media.length);
                }}
                className="absolute right-[-3rem] text-white text-4xl hover:scale-110 transition"
              >
                ›
              </button>

              {/* Counter */}
              <div className="absolute bottom-[-2rem] text-sm text-muted-foreground">
                {selectedIndex + 1} / {media.length}
              </div>

              {/* Close */}
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
        <div className="flex flex-wrap items-center gap-6 mt-5">
          <a
            href="https://github.com/Fryo21/NPC-s-GAME_JAM/releases/download/v1.0.0-release/Face.of.the.Future.Build.zip"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Button className="bg-secondary text-secondary-foreground border hover:bg-secondary/50 hover:border-secondary glow-blue hover-scale font-heading px-6">
            <ExternalLink className="w-4 h-4 mr-2" />
            Download for Windows
          </Button>
          </a>

          <a
            href="https://dave-murray.itch.io/face-of-the-future"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="bg-secondary text-secondary-foreground border hover:bg-secondary/50 hover:border-secondary glow-blue hover-scale font-heading px-6">
              <ExternalLink className="w-4 h-4 mr-2" /> 
              Play Now!
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
