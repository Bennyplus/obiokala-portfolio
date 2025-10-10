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
};

const projectsData: Record<string, Project> = {
  "project-1": {
    title: "ELEMENTAL ECHO",
    description:
      "The game’s world is rooted in lore about resisting the Great Stillness, with battles serving as echoes of elemental energy that keep the world alive.",
    fullDescription:
      "Elemental Echo is a fast-paced 2v2 third-person shooter where players take on the roles of elemental mages (Fire, Water, or Wind) and battle to control The Crown, a powerful object at the center of the arena. Matches blend combat, strategy, and teamwork as players must balance between holding the Crown for points, defending their base, and outmaneuvering opponents with unique elemental abilities.",
    image: project1,
    tech: ["Unreal Engine", "C++", "Blueprint", "AI"],
    features: [
      "Dynamic open-world with real-time city simulation and reactive NPCs",
      "Deep branching narrative with multiple endings based on player choices",
      "Revolutionary combat system combining melee, ranged, and cybernetic abilities",
      "Fully customizable character progression with hundreds of upgrades",
    ],
    team: [
      { name: "Rotimi-Dairo Benedict", role: "Frontend Developer" },
      { name: "Ngozi Eze", role: "Backend Engineer" },
      { name: "David John", role: "UI/UX Designer" },
    ],
  },
  "project-2": {
    title: "STELLAR FRONTIER",
    description:
      "Explore the vast expanse of space in this sci-fi epic. Command your fleet, discover alien civilizations, and uncover the mysteries of the cosmos.",
    fullDescription:
      "STELLAR FRONTIER is an ambitious space exploration game that offers players an entire procedurally generated universe to discover. Command your own fleet of customizable spacecraft, establish diplomatic relations or wage war with alien civilizations, and uncover the ancient mysteries that lie at the heart of the cosmos. The game combines deep strategic fleet management with intense real-time space combat and rich exploration gameplay.",
    image: project2,
    tech: ["Unity", "C#", "Procedural Gen", "Multiplayer"],
    features: [
      "Procedurally generated universe with billions of star systems to explore",
      "Complex diplomacy system with multiple alien factions and alliances",
      "Real-time multiplayer battles with up to 64 players",
      "Deep economy and trading systems with player-driven markets",
    ],
    team: [
      { name: "Rotimi-Dairo Benedict", role: "Frontend Developer" },
      { name: "Ngozi Eze", role: "Backend Engineer" },
      { name: "David John", role: "UI/UX Designer" },
    ],
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

            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-blue hover-scale font-heading">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live Demo
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
