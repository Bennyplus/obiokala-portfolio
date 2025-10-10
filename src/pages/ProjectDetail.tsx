import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.jpg";

type TeamMember = {
  name: string;
  role: string;
};

type Project = {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tech: string[];
  features: string[];
  team: TeamMember[];
  downloadLink: string;
};

const projectsData: Record<string, Project> = {
  "project-1": {
    title: "ELEMENTAL ECHO",
    description:
      "The game’s world is rooted in lore about resisting the Great Stillness, with battles serving as echoes of elemental energy that keep the world alive.",
    fullDescription:
      "Elemental Echo is a fast-paced 2v2 third-person shooter where players take on the roles of elemental mages (Fire, Water, or Wind) and battle to control The Crown, a powerful object at the center of the arena. Matches blend combat, strategy, and teamwork as players must balance between holding the Crown for points, defending their base, and outmaneuvering opponents with unique elemental abilities.",
    image: project1,
    tech: ["Unity", "C#", "PHP", "AWS", "MySQL", "Photon"],
    features: [
      "Dynamic open-world with real-time city simulation and reactive NPCs",
      "Deep branching narrative with multiple endings based on player choices",
      "Revolutionary combat system combining melee, ranged, and cybernetic abilities",
      "Fully customizable character progression with hundreds of upgrades",
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
    description:
      "Face of the Future is a top-down 2D pixel art surveillance game created for a game jam around the theme “Automation Anxiety.” The player takes the role of a surveillance operator, scanning a busy urban area through a movable overhead camera to identify wanted suspects",
    fullDescription:
      "At first, the player relies on direct observation—matching suspects by clothing, accessories, and descriptions. As the wanted list grows across rounds, players can purchase automated drones to assist. However, each drone adds a permanent pop-up to the HUD, cluttering the screen and creating pressure to trust automation. Drones make identifications with a short timer, defaulting to arrests if the player doesn’t ",
    image: project2,
    tech: ["Unity", "C#", "Procedural Gen", "Multiplayer"],
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
          <p className="text-xl text-muted-foreground mb-8">
            {project.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-space/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-blue hover-scale font-heading mt-5 ">
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
