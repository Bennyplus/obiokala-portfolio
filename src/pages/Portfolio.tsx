import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

const projects = [
  {
    id: 1,
    title: "NEON DYSTOPIA",
    description: "An open-world cyberpunk adventure featuring dynamic combat systems, branching narratives, and a living, breathing city that reacts to your choices. Experience the dark future where every decision matters.",
    image: project1,
    techStack: ["Unreal Engine", "C++", "Blueprint", "AI"],
  },
  {
    id: 2,
    title: "STELLAR FRONTIER",
    description: "Explore the vast expanse of space in this sci-fi epic. Command your fleet, discover alien civilizations, and uncover the mysteries of the cosmos in this procedurally generated universe.",
    image: project2,
    techStack: ["Unity", "C#", "Procedural Gen", "Multiplayer"],
  },
  {
    id: 3,
    title: "LEGENDS OF AETHERIA",
    description: "A third-person action RPG set in a rich fantasy world. Master magical abilities, forge legendary weapons, and lead your party through epic boss battles in this immersive adventure.",
    image: project3,
    techStack: ["Unreal Engine", "Python", "Animation", "UI/UX"],
  },
  {
    id: 4,
    title: "VELOCITY STRIKE",
    description: "Fast-paced competitive FPS with tactical gameplay. Dominate the arena with precision shooting, strategic team play, and intense multiplayer action. Ranked competitive and casual modes available.",
    image: project4,
    techStack: ["Custom Engine", "Netcode", "Physics", "Audio"],
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-dark-space">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-20"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-black text-foreground mb-6">
              Portfolio
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-xl text-light-text max-w-2xl mx-auto">
              A showcase of immersive worlds and unforgettable gaming experiences
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-dark-surface rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 hover-scale animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Project Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/60 to-transparent"></div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="font-heading text-3xl font-bold text-neon-green group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-light-text leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-heading tracking-wider bg-muted/50 text-foreground border border-border rounded-md hover:border-primary hover:text-primary hover:glow-neon transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <div className="pt-4">
                    <Link to="/">
                      <Button 
                        className="w-full group/btn font-heading bg-secondary hover:bg-secondary/90 text-secondary-foreground glow-blue transition-all duration-300"
                      >
                        View Project
                        <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 glow-neon rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 CLIENT NAME. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
