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
    "Networked Multiplayer: Real-time 2v2 battles powered by Photon PUN, synchronizing player actions, abilities, and scores across all clients through RPCs and master-client authority.",
    "Objective-Based Scoring: Players earn points by capturing the Crown, defeating opponents, and destroying bases; matches are timed, and the highest-scoring team at countdown wins.",
    "Elemental Combat System: Each class—Fire, Water, or Air—features distinct abilities and ultimates, with dynamic synergy effects triggered by combining different elemental attacks.",
    "Game Management Systems: Custom GameManager and ScoreManager scripts handle team scoring, player stats, and victory checks through event-driven RPC communication.",
    "Lobby and Matchmaking: Photon-powered Lobby Manager system enables room creation, team selection, and matchmaking with synchronized player properties.",
    "Base and Respawn Logic: Team bases serve as respawn anchors—once destroyed, players can’t respawn—implemented through BaseTakeDamage and PlayerRespawn scripts.",
    "Backend Integration: Persistent player data handled via PHP/MySQL backend on AWS, storing authentication, match results, and leaderboard rankings.",
    "Offline Mode: Photon Offline Mode enables local testing of networked features without an active internet connection."
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
        <p className="text-muted-foreground mb-12 max-w-full">
         Elemental Echo is a competitive 2v2 third-person multiplayer arena battler where players harness the powers of elemental mages of different abilities (Fire, Water and Wind), to outmaneuver opponents, defend their base, and compete for dominance through strategic team play. Built in Unity with Photon PUN, the game challenges players to accumulate points through combat and objective control before the match timer runs out.  
Each match revolves around the pursuit of the Crown, a central objective that grants continuous score points to the team that holds it. Players must work together to capture and protect the Crown while fending off enemy assaults and defending their home base. Points are earned through kills, assists, base destruction, and elemental synergy attacks, where combining abilities such as Fire and water triggers high-impact damage that can change the tide of battle. The match concludes when the timer expires, and victory is awarded to the team with the highest score.  
 Designed around coordination, timing, and tactical decision-making, Elemental Echo blends fast-paced combat with objective-based gameplay, rewarding both individual skill and team strategy. It is a fully networked architecture that supports real-time synchronization, persistent player data, and backend integration through PHP, MySQL, and AWS.
        </p>

        {/* Masonry-Style Media Gallery */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
  {media.map((img, index) => (
    <img
      key={index}
      onClick={() => setSelectedImage(img)}
      src={img}
      alt={`Elemental Echo screenshot ${index + 1}`}
      className="w-full rounded-lg hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer"
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
