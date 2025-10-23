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
import project1_5 from "@/assets/project1-5.png"
import project1_6 from "@/assets/project1-6.png"
import project1_7 from "@/assets/project1-7.png"
import project1_8 from "@/assets/project1-8.png"
import project1_9 from "@/assets/project1-9.png"
import project1_10 from "@/assets/project1-10.png"
import project1_11 from "@/assets/project1-11.png"




export default function ElementalEcho() {
  const media = [project1, project1_2, project1_3, project1_4, project1_5, project1_6,project1_7,project1_8, project1_9, project1_10, project1_11];
  const tech = ["Unity", "C#", "PHP", "AWS", "MySQL", "Photon"];
  const features = [
    "Built with event-driven systems and manager singletons (Round, Drone, Money, Feedback) enabling clean separation between gameplay logic, UI, and audio for scalable iteration.",
    "NPCs and drones navigate dynamically using the A* Pathfinding Project, selecting valid graph nodes and verifying reachability with runtime path validation for believable movement.",
    "Character and round data are generated from ScriptableObjects and LINQ-driven randomization, allowing fully procedural wanted lists and adaptive round difficulty.",
    "Event-based UI updates synchronize game state, DOTween-animated feedback, and a custom animated cursor system for responsive and tactile interactions.",
    "Each drone’s scanning accuracy decays with usage, creating emergent difficulty, later repurposed to target the player, showcasing systemic design reuse in narrative progression."
  ];
  const team = [
    { name: "Runcheng Luo", role: "Game Designer" },
    { name: "Zikang Han", role: "Game Designer" },
    { name: "Zixin Zhang", role: "Game Designer" },
    { name: "Francis Obiokala", role: "Game Programmer" },
    { name: "Manan Gandhi", role: "Game Programmer" },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

useEffect(() => {
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") setSelectedImage(null);
  };
  window.addEventListener("keydown", handleEsc);
  return () => window.removeEventListener("keydown", handleEsc);
}, []);

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
        <p className="text-muted-foreground mb-12 max-w-3xl">
          Elemental Echo is a fast-paced 2v2 third-person shooter where players take on the roles of elemental mages (Fire, Water, or Wind) and battle to control The Crown. Matches blend combat, strategy, and teamwork as players must balance between holding the Crown for points, defending their base, and outmaneuvering opponents with unique elemental abilities.
        </p>

        {/* Masonry-Style Media Gallery */}
<div className="columns-2 sm:columns-3 lg:columns-4 gap-4 mb-12">
  {media.map((img, index) => (
    <img
      key={index}
      onClick={() => setSelectedImage(img)}
      src={img}
      alt={`Elemental Echo screenshot ${index + 1}`}
      className="w-full mb-4 rounded-lg break-inside-avoid hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer"
    />
  ))}
</div>
{/* Image Modal */}
{selectedImage && (
  <div
    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 animate-fade-in"
    onClick={() => setSelectedImage(null)} // close when clicking outside
  >
    <div
      className="relative"
      onClick={(e) => e.stopPropagation()} // prevent closing when clicking the image
    >
      <img
        src={selectedImage}
        alt="Full view"
        className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg transition-transform duration-300 transform scale-100 hover:scale-105"
      />
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-3 right-3 text-white text-2xl bg-black/60 hover:bg-black/80 rounded-full px-3 py-1"
      >
        ✕
      </button>
    </div>
  </div>
)}




        {/* Tech Stack */}
        <h2 className="font-heading text-2xl text-foreground mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {tech.map((t) => (
            <span key={t} className="px-4 py-2 bg-dark-surface border border-border rounded-md text-primary font-heading text-sm hover:border-primary hover-scale">
              {t}
            </span>
          ))}
        </div>

        {/* Key Features */}
        <h2 className="font-heading text-2xl text-foreground mb-4">Key Features</h2>
        <ul className="space-y-3 mb-12">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <span className="text-neon-green text-xl">▹</span> <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* Development Team */}
        <h2 className="font-heading text-2xl text-foreground mb-4">Development Team</h2>
        <ul className="space-y-3 mb-12">
          {team.map((member, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <span className="text-neon-green text-xl">▹</span>
              <span><strong>{member.name}</strong> — {member.role}</span>
            </li>
          ))}
        </ul>

        {/* Download Link */}
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
