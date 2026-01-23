import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

// Import images
import project1 from "@/assets/project1.png";
import project1_2 from "@/assets/project1-2.png";
import project1_3 from "@/assets/project1-3.png";
import project1_4 from "@/assets/project1-4.png";
import project1_5 from "@/assets/project1-5.png";
import project1_6 from "@/assets/project1-6.png";
import project1_7 from "@/assets/project1-7.png";
import project1_8 from "@/assets/project1-8.png";
import project1_9 from "@/assets/project1-9.png";
import project1_10 from "@/assets/project1-10.png";
import project1_11 from "@/assets/project1-11.png";

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

  const tech = ["Unity", "C#", "PHP", "AWS", "MySQL", "Photon"];

  const features = [
    "Networked Multiplayer: Real-time 2v2 battles powered by Photon PUN.",
    "Objective-Based Scoring: Crown capture, kills, and base destruction.",
    "Elemental Combat System: Fire, Water, Air with synergy effects.",
    "Game Management Systems: Event-driven scoring and victory checks.",
    "Lobby and Matchmaking: Photon-powered room and team system.",
    "Backend Integration: PHP/MySQL on AWS.",
    "Offline Mode: Photon Offline Mode for local testing."
  ];

  const team = [
    { name: "Runcheng Luo", role: "Game Designer" },
    { name: "Zikang Han", role: "Game Designer" },
    { name: "Zixin Zhang", role: "Game Designer" },
    { name: "Francis Obiokala", role: "Game Programmer" },
    { name: "Manan Gandhi", role: "Game Programmer" },
  ];

  // 🔹 Slider state
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  // 🔹 Keyboard navigation
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
        <Link to="/portfolio">
          <Button variant="outline" className="mb-8 hover:border-primary hover:text-primary hover-scale">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Button>
        </Link>

        <h1 className="font-heading text-5xl md:text-6xl font-black text-neon-green mb-6">
          ELEMENTAL ECHO
        </h1>

        <p className="text-muted-foreground mb-12 max-w-full">
          Elemental Echo is a competitive 2v2 third-person multiplayer arena battler
          built in Unity with Photon PUN, focused on elemental synergy, objective
          control, and team coordination.
        </p>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {media.map((img, index) => (
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
                key={selectedIndex}
                src={media[selectedIndex]}
                alt={`Screenshot ${selectedIndex + 1}`}
                className={`max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg transition-all duration-300
                  ${
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
              className="px-4 py-2 bg-dark-surface border border-border rounded-md text-primary font-heading text-sm"
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

        {/* Download */}
        <a
          href="https://manan2k.itch.io/elemental-echo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-blue hover-scale font-heading mt-5">
            <ExternalLink className="w-4 h-4 mr-2" /> Download for Windows
          </Button>
        </a>
      </div>
    </div>
  );
}
