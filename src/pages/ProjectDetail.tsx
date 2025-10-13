import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, X, Play } from "lucide-react";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project1_2 from "@/assets/project1-2.png";
import project1_3 from "@/assets/project1-3.png";
import project1_4 from "@/assets/project1-4.png";
import project2_2 from "@/assets/project2-2.png";
import project2_3 from "@/assets/project2-3.png";
import project2_video from "@/assets/project2-4.mp4"; // Import the video file

type TeamMember = {
  name: string;
  role: string;
};

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  thumbnail?: string; // Optional thumbnail for videos
};

type Project = {
  title: string;
  fullDescription: string;
  image: string;
  media: MediaItem[]; // Updated to support mixed media
  tech: string[];
  features: string[];
  team: TeamMember[];
  downloadLink: string;
};

const projectsData: Record<string, Project> = {
  "project-1": {
    title: "ELEMENTAL ECHO",
    fullDescription:
      "Elemental Echo is a fast-paced 2v2 third-person shooter where players take on the roles of elemental mages (Fire, Water, or Wind) and battle to control The Crown, a powerful object at the center of the arena. Matches blend combat, strategy, and teamwork as players must balance between holding the Crown for points, defending their base, and outmaneuvering opponents with unique elemental abilities.",
    image: project1,
    media: [
      { type: 'image', src: project1 },
      { type: 'image', src: project1_2 },
      { type: 'image', src: project1_3 },
      { type: 'image', src: project1_4 }
    ],
    tech: ["Unity", "C#", "PHP", "AWS", "MySQL", "Photon"],
    features: [
      "Built with event-driven systems and manager singletons (Round, Drone, Money, Feedback) enabling clean separation between gameplay logic, UI, and audio for scalable iteration.",
      "NPCs and drones navigate dynamically using the A* Pathfinding Project, selecting valid graph nodes and verifying reachability with runtime path validation for believable movement.",
      "Character and round data are generated from ScriptableObjects and LINQ-driven randomization, allowing fully procedural wanted lists and adaptive round difficulty.",
      "Event-based UI updates synchronize game state, DOTween-animated feedback, and a custom animated cursor system for responsive and  tactile interactions.",
      "Each drone’s scanning accuracy decays with usage, creating emergent difficulty, later repurposed to target the player, showcasing systemic design reuse in narrative progression."
    ],
    team: [
      { name: "Runcheng Luo ", role: "Game Designer" },
      { name: "Zikang Han ", role: "Game Designer" },
      { name: "Zixin Zhang ", role: "Game Designer" },
      { name: "Francis Obiokala ", role: "Game Programmer" },
      { name: "Manan Gandhi ", role: "Game Programmer" },
    ],
    downloadLink: "https://manan2k.itch.io/elemental-echo",
  },
  "project-2": {
    title: "FACE OF THE FUTURE (Kingston University Game Jam Winner 2025)",
    fullDescription:
      "At first, the player relies on direct observation—matching suspects by clothing, accessories, and descriptions. As the wanted list grows across rounds, players can purchase automated drones to assist. However, each drone adds a permanent pop-up to the HUD, cluttering the screen and creating pressure to trust automation. Drones make identifications with a short timer, defaulting to arrests if the player doesn't ",
    image: project2,
    media: [
      { type: 'image', src: project2 },
      { type: 'image', src: project2_2 },
      { type: 'image', src: project2_3 },
      { type: 'video', src: project2_video, thumbnail: project2_3 } // Use last image as video thumbnail
    ],
    tech: ["Unity", "C#"],
    features: [
      "Surveillance Gameplay: Scan a crowded map, identify suspects by matching physical traits.",
      "Automation Trade-offs: Purchase drones to assist, but at the cost of increasing interface clutter and risk of misidentification.",
      "Round-based Progression: Difficulty escalates with larger wanted lists and higher quotas.",
      "Consequences: Correct arrests earn money; mistakes cost money and can cause failure.",
      "Narrative Twist: At the end, automated systems can turn against the player, highlighting the dangers of over-dependence."
    ],
    team: [
      { name: "Runcheng Luo ", role: "Game Designer" },
      { name: "Zikang Han ", role: "Game Designer" },
      { name: "Zixin Zhang ", role: "Game Designer" },
      { name: "Francis Obiokala ", role: "Game Programmer" },
      { name: "Manan Gandhi ", role: "Game Programmer" },
    ],
    downloadLink: "https://dave-murray.itch.io/face-of-the-future",
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId
    ? projectsData[projectId as keyof typeof projectsData]
    : null;
  
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-space flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <h1 className="font-heading text-4xl text-foreground mb-4">
            Project Not Found
          </h1>
          <Link to="/portfolio">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-neon">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-space">
      <Navigation />

      {/* Media Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-7xl max-h-full w-full">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-white hover:text-neon-green transition-colors duration-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.src}
                alt="Project screenshot"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            ) : (
              <video
                controls
                autoPlay
                className="max-w-full max-h-[90vh] rounded-lg"
              >
                <source src={selectedMedia.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 py-20">
        <Link to="/portfolio">
          <Button
            variant="outline"
            className="mb-8 hover:border-primary hover:text-primary hover-scale"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>

        <div className="animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl font-black text-neon-green mb-4">
            {project.title}
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Project Media Grid */}
            <div className="space-y-4">
              <h2 className="font-heading text-2xl text-foreground mb-4">
                Project Media
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {project.media.map((media, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-lg cursor-pointer aspect-square"
                    onClick={() => setSelectedMedia(media)}
                  >
                    {media.type === 'image' ? (
                      <img
                        src={media.src}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <>
                        {/* Video thumbnail with play button overlay */}
                        <img
                          src={media.thumbnail || media.src}
                          alt={`${project.title} video thumbnail`}
                          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex flex-col items-center">
                            <Play className="w-8 h-8 mb-2 fill-white" />
                            <span className="text-lg font-bold">Play Video</span>
                          </div>
                        </div>
                        {/* Always show play icon on video thumbnails */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black/50 rounded-full p-3">
                            <Play className="w-6 h-6 text-white fill-white" />
                          </div>
                        </div>
                      </>
                    )}
                    
                    {/* Overlay for both images and videos */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-bold">
                        {media.type === 'image' ? 'View Fullscreen' : 'Play Video'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-dark-surface border border-border rounded-md text-primary font-heading text-sm hover:border-primary hover-scale transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h2 className="font-heading text-2xl text-foreground mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-neon-green text-xl">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-dark-surface pl-8 pb-8 rounded-lg space-y-5 border border-border">
            <h2 className="font-heading text-2xl text-foreground mt-10 mb-4">
              Development Team
            </h2>
            <ul className="space-y-3">
              {project.team.map((member, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="text-neon-green text-xl">▹</span>
                  <span>
                    <strong>{member.name}</strong> — {member.role}
                  </span>
                </li>
              ))}
            </ul>
            <h2 className="font-heading text-2xl text-foreground mb-4">
              About This Project
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.fullDescription}
            </p>

            <a
              href={project.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-blue hover-scale font-heading mt-5">
                <ExternalLink className="w-4 h-4 mr-2" />
                Download for Windows
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;