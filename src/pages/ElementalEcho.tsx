import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

// Import images
import project1 from "@/assets/ElementalEcho/project1.png";
import project1_2 from "@/assets/ElementalEcho/project1-2.png";
import project1_3 from "@/assets/ElementalEcho/project1-3.png";
import project1_4 from "@/assets/ElementalEcho/project1-4.png";
import project1_5 from "@/assets/ElementalEcho/project1-5.png";
import project1_6 from "@/assets/ElementalEcho/project1-6.png";
import project1_7 from "@/assets/ElementalEcho/project1-7.png";
import project1_8 from "@/assets/ElementalEcho/Front Page.png";
import project1_9 from "@/assets/ElementalEcho/project1-9.png";
import project1_10 from "@/assets/ElementalEcho/project1-10.png";
import project1_11 from "@/assets/ElementalEcho/project1-11.png";

export default function ElementalEcho() {
  const media = [
    project1_5,
    project1_6,
    project1_2,
    project1_11,
    project1_3,
    project1_8,
    project1_4,
    project1_7,
    project1_10,
    project1_9,
    project1,
  ];

  const tech = ["Unity", "C#", "Photon PUN", "AWS", "PHP", "MySQL"];

  const features = [
    "Real-time multiplayer gameplay is synchronized using Photon RPCs, with sensitive actions validated by the Master Client to prevent desynchronization and cheating.",
    "A central objective system manages pickup, drop, zone validation, and score accumulation across all clients, ensuring consistent state updates when players enter or exit control zones, are eliminated, or intentionally drop the objective.",
    "Each team’s base acts as both a respawn hub and strategic objective. Base health, destruction, and respawn eligibility are synchronized across the network, dynamically altering match flow when a base is destroyed.",
    "A dedicated GameMode manager coordinates match state, win conditions, respawns, spectator mode, and endgame transitions, handling both score-based and sudden-death outcomes.",
    "Event-driven scoring and statistics tracking.",
    "Persistent player data is managed using a custom backend hosted on AWS, with PHP APIs deployed on EC2 and a MySQL database hosted on Amazon RDS.",
    "Player registration, login, lifetime statistics, match results, and progression data are stored server-side and retrieved securely by the Unity client via HTTP requests",
    "Post-match data is recorded through dedicated API endpoints, updating per-match statistics, lifetime player stats, and recalculating leaderboard rankings dynamically.",
    "Unity communicates with the backend through structured JSON payloads, ensuring clear separation between gameplay logic, persistence, and presentation.",
  ];

  const team = [
    { name: "Runcheng Luo", role: "Game Designer" },
    { name: "Zikang Han", role: "Game Designer" },
    { name: "Zixin Zhang", role: "Game Designer" },
    { name: "Francis Obiokala", role: "Programmer" },
    { name: "Manan Gandhi", role: "Programmer" },
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
        setSelectedIndex(
          (selectedIndex - 1 + media.length) % media.length
        );
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
          ELEMENTAL ECHO
        </h1>

        <div className="text-muted-foreground mb-12 max-w-full space-y-4">
        <p>
          Elemental Echo is a competitive 2v2 multiplayer arena game where two teams
          compete to control a central objective (“the Crown”) within a designated
          zone. Teams score points over time by maintaining control, and the first
          team to reach the target score wins the match.
        </p>

        <p>
          Players choose between three elemental classes "Fire", "Water", and "Wind" each
          offering distinct abilities designed for combat, control, and team
          synergy. Abilities can be combined for coordinated team plays, encouraging
          strategy and cooperation over solo performance.
        </p>

        <p>
          Matches are driven by high-risk decisions. Players respawn at their team’s
          base when eliminated, but once a base is destroyed, that team permanently
          loses the ability to respawn. This creates a dynamic shift in match pacing,
          transforming late-game scenarios into high-pressure, tactical endgames.
        </p>
      </div>

        {/* Project Context */}
        <div className="mb-12 space-y-4">
          <p className="text-base  font-heading text-forground">
            <span className="font-medium">Role:</span>{" "}
            <span className="text-neon-green">
            Gameplay & Backend Programmer
            </span>
          </p>

          <p className="text-base  font-heading text-forground">
            <span className="font-medium">Developement Status:</span>{" "}
            <span className="text-neon-green">
            Beta Completed
            </span>
          </p>

          <p className="text-base  font-heading text-forground">
            <span className="font-medium">Platform:</span>{" "}
            <span className="text-neon-green">
            PC (Windows)
            </span>
          </p>
        </div>


        {/* Media Section */}
        <div className="mb-16">
          <h2 className="font-heading text-2xl mb-6">Gameplay</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Screenshot Grid — LEFT */}
            <div className="grid grid-cols-2 gap-4">
              {media.slice(0, 6).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Elemental Echo screenshot ${index + 1}`}
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
                  src="https://www.youtube.com/embed/Y0AZiRkz9NU"
                  title="Elemental Echo Gameplay"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
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
                  setSelectedIndex(
                    (selectedIndex - 1 + media.length) % media.length
                  );
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
                  direction === "next"
                    ? "animate-slide-left"
                    : "animate-slide-right"
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
          <a
            href="https://github.com/MananREPO/ElementalEchoREPO/releases/download/v1.0.0-prototype/BUILD.-.Elemental.Echo.zip"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/50 glow-blue hover-scale font-heading px-6">
              <ExternalLink className="w-4 h-4 mr-2" />
              Download for Windows
            </Button>
          </a>

          <a
            href="https://francisobiokala.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="bg-secondary text-secondary-foreground border hover:bg-secondary/50 hover:border-secondary glow-blue hover-scale font-heading px-6">
              <ExternalLink className="w-4 h-4 mr-2" />
              Development Blog
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
