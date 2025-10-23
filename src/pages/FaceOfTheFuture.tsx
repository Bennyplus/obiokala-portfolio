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

export default function FaceOfTheFuture() {
  const media = [
    { type: "image", src: project2 },
    { type: "image", src: project2_2 },
    { type: "image", src: project2_3 },
    { type: "video", src: project2_video, thumbnail: project2_3 },
  ];

  const [selectedMedia, setSelectedMedia] = useState<{ type: string; src: string } | null>(null);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMedia(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const tech = ["Unity", "C#"];
  const features = [
    "Surveillance Gameplay: Scan a crowded map, identify suspects by matching physical traits.",
    "Automation Trade-offs: Purchase drones to assist, but at the cost of increasing interface clutter and risk of misidentification.",
    "Round-based Progression: Difficulty escalates with larger wanted lists and higher quotas.",
    "Consequences: Correct arrests earn money; mistakes cost money and can cause failure.",
    "Narrative Twist: At the end, automated systems can turn against the player, highlighting the dangers of over-dependence."
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
        {/* Back Button */}
        <Link to="/portfolio">
          <Button variant="outline" className="mb-8 hover:border-primary hover:text-primary hover-scale">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Button>
        </Link>

        {/* Title + Description */}
        <h1 className="font-heading text-5xl md:text-6xl font-black text-neon-green mb-6">
          FACE OF THE FUTURE
        </h1>
        <p className="text-muted-foreground mb-12 max-w-3xl">
          "Face of the Future" is an award-winning surveillance strategy game developed for the Kingston University Game Jam 2025. 
          Players balance observation, automation, and ethics in identifying suspects through drones and AI systems — 
          exploring the tension between control and chaos.
        </p>

        {/* Media Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {media.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedMedia({ type: item.type, src: item.src })}
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

        {/* Tech Stack */}
        <h2 className="font-heading text-2xl text-foreground mb-4">Tech Stack</h2>
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
        <h2 className="font-heading text-2xl text-foreground mb-4">Key Features</h2>
        <ul className="space-y-3 mb-12">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <span className="text-neon-green text-xl">▹</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* Team */}
        <h2 className="font-heading text-2xl text-foreground mb-4">Development Team</h2>
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

        {/* Download Link */}
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

      {/* Modal Section */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedMedia(null);
          }}
        >
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-6 right-6 text-white hover:text-neon-green transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="max-w-5xl max-h-[90vh] transition-all duration-300 transform scale-100 opacity-100">
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                alt="Selected"
                className="rounded-lg max-h-[85vh] mx-auto"
              />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="rounded-lg max-h-[85vh] mx-auto"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
