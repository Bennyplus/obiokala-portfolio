import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

const projectsData = {
  "project-1": {
    title: "NEON DYSTOPIA",
    description: "An open-world cyberpunk adventure featuring dynamic combat systems, branching narratives, and a living, breathing city that reacts to your choices.",
    fullDescription: "NEON DYSTOPIA is a groundbreaking open-world cyberpunk RPG that pushes the boundaries of player choice and narrative consequences. Set in a dystopian megacity where corporations rule and technology has become both salvation and curse, players navigate a morally complex world where every decision ripples through the fabric of society. The game features a revolutionary dynamic combat system that adapts to your playstyle, a branching narrative with multiple endings, and a living city that responds to your actions in real-time.",
    image: project1,
    tech: ["Unreal Engine", "C++", "Blueprint", "AI"],
    features: [
      "Dynamic open-world with real-time city simulation and reactive NPCs",
      "Deep branching narrative with multiple endings based on player choices",
      "Revolutionary combat system combining melee, ranged, and cybernetic abilities",
      "Fully customizable character progression with hundreds of upgrades"
    ]
  },
  "project-2": {
    title: "STELLAR FRONTIER",
    description: "Explore the vast expanse of space in this sci-fi epic. Command your fleet, discover alien civilizations, and uncover the mysteries of the cosmos.",
    fullDescription: "STELLAR FRONTIER is an ambitious space exploration game that offers players an entire procedurally generated universe to discover. Command your own fleet of customizable spacecraft, establish diplomatic relations or wage war with alien civilizations, and uncover the ancient mysteries that lie at the heart of the cosmos. The game combines deep strategic fleet management with intense real-time space combat and rich exploration gameplay.",
    image: project2,
    tech: ["Unity", "C#", "Procedural Gen", "Multiplayer"],
    features: [
      "Procedurally generated universe with billions of star systems to explore",
      "Complex diplomacy system with multiple alien factions and alliances",
      "Real-time multiplayer battles with up to 64 players",
      "Deep economy and trading systems with player-driven markets"
    ]
  },
  "project-3": {
    title: "LEGENDS OF AETHERIA",
    description: "A third-person action RPG set in a rich fantasy world. Master magical abilities, forge legendary weapons, and lead your party through epic boss battles.",
    fullDescription: "LEGENDS OF AETHERIA is a stunning third-person action RPG that brings classic fantasy storytelling to life with modern gameplay mechanics. Set in the mystical realm of Aetheria, players embark on an epic quest to save their world from an ancient evil. The game features a deep magic system with over 100 unique spells, an innovative weapon crafting system that lets you forge legendary equipment, and challenging boss battles that test your skills and strategy.",
    image: project3,
    tech: ["Unreal Engine", "Python", "Animation", "UI/UX"],
    features: [
      "Over 100 unique magical abilities across 6 distinct schools of magic",
      "Advanced weapon crafting system with elemental infusions and enchantments",
      "Epic boss battles featuring multi-phase encounters and unique mechanics",
      "Rich fantasy world with branching quest lines and memorable characters"
    ]
  },
  "project-4": {
    title: "VELOCITY STRIKE",
    description: "Fast-paced competitive FPS with tactical gameplay. Dominate the arena with precision shooting, strategic team play, and intense multiplayer action.",
    fullDescription: "VELOCITY STRIKE is a competitive first-person shooter that emphasizes tactical teamwork and precision gunplay. Built on a custom game engine optimized for competitive play, the game offers razor-sharp controls, balanced weapon mechanics, and maps designed for strategic depth. With both ranked competitive modes and casual play options, VELOCITY STRIKE caters to both hardcore esports enthusiasts and players looking for intense tactical action.",
    image: project4,
    tech: ["Custom Engine", "Netcode", "Physics", "Audio"],
    features: [
      "Lightning-fast netcode ensuring minimal latency for competitive play",
      "15+ weapons with unique handling and strategic roles",
      "Ranked competitive mode with seasonal ladders and tournaments",
      "10 meticulously designed maps optimized for competitive play"
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-space flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <h1 className="font-heading text-4xl text-foreground mb-4">Project Not Found</h1>
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
              <h2 className="font-heading text-2xl text-foreground mb-4">Tech Stack</h2>
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

              <h2 className="font-heading text-2xl text-foreground mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-neon-green text-xl">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-dark-surface p-8 rounded-lg border border-border">
            <h2 className="font-heading text-2xl text-foreground mb-4">About This Project</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.fullDescription}
            </p>
            
            <Button 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-blue hover-scale font-heading"
            >
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
