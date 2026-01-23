import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

// Import assets
import project2 from "@/assets/project2.png";
import project2_2 from "@/assets/project2-2.png";
import project2_3 from "@/assets/project2-3.png";
import project2_video from "@/assets/project2-4.mp4";

type MediaItem =
  | { type: "image"; src: string }
  | { type: "video"; src: string; thumbnail: string };

export default function FaceOfTheFuture() {
  const media: MediaItem[] = [
    { type: "image", src: project2 },
    { type: "image", src: project2_2 },
    { type: "image", src: project2_3 },
    { type: "video", src: project2_video, thumbnail: project2_3 },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const selectedMedia =
    selectedIndex !== null ? media[selectedIndex] : null;

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") setSelectedIndex(null);

      // Slide ONLY for images
      if (selectedMedia?.type === "image") {
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
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, selectedMedia]);

  const tech = ["Unity", "C#"];
  const features = [
    "Surveillance Gameplay: Scan a crowded map, identify suspects by matching physical traits.",
    "Automation Trade-offs: Purchase drones to assist, but at the cost of increasing interface clutter.",
    "Round-based Progression: Difficulty escalates with larger wanted lists and higher quotas.",
    "Consequences: Correct arrests earn money; mistakes cost money and can cause failure.",
    "Narrative Twist: Automated systems can turn against the player."
  ];

  const team = [
    { name: "Dave Murray", role: "Game Programmer" },
    { name: "Francis Obiokala", role: "Game Programmer" },
    { name: "Ash Methven", role: "Game Programmer" },
    { name: "Leo", role: "Game Programmer" },
  ];

  return (
    <div className="min-h-screen bg-dark-space text-foreground relative">
      <Navigation />

      <div className="container mx-auto px-6 py-20 animate-fade-in">
        <Link to="/portfolio">
          <Button variant="outline" className="mb-8 hover:border-primary hover:text-primary hover-scale">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Button>
        </Link>

        <h1 className="font-heading text-5xl md:text-6xl font-black text-neon-green mb-6">
          FACE OF THE FUTURE
        </h1>

        <p className="text-muted-foreground mb-12 max-w-3xl">
          An award-winning surveillance strategy game developed for the
          Kingston University Game Jam 2025, exploring automation,
          ethics, and control.
        </p>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {media.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden cursor-pointer"
              onClick={() => {
                setDirection("next");
                setSelectedIndex(index);
              }}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Screenshot ${index + 1}`}
                  className="rounded-lg hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <>
                  <img
                    src={item.thumbnail}
                    alt={`Video Thumbnail ${index + 1}`}
                    className="rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-10 h-10 text-white fill-white" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedIndex !== null && selectedMedia && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-fade-in"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="relative flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Arrows only for images */}
              {selectedMedia.type === "image" && (
                <>
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

                  <button
                    onClick={() => {
                      setDirection("next");
                      setSelectedIndex(
                        (selectedIndex + 1) % media.length
                      );
                    }}
                    className="absolute right-[-3rem] text-white text-4xl hover:scale-110 transition"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Media */}
              {selectedMedia.type === "image" ? (
                <img
                  key={selectedIndex}
                  src={selectedMedia.src}
                  alt="Selected"
                  className={`rounded-lg max-h-[85vh] mx-auto transition-all duration-300
                    ${
                      direction === "next"
                        ? "animate-slide-left"
                        : "animate-slide-right"
                    }`}
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="rounded-lg max-h-[85vh] mx-auto"
                />
              )}

              {/* Counter (images only) */}
              {selectedMedia.type === "image" && (
                <div className="absolute bottom-[-2rem] text-sm text-muted-foreground">
                  {selectedIndex + 1} / {media.length}
                </div>
              )}

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
          href="https://dave-murray.itch.io/face-of-the-future"
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
