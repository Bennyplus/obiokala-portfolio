import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useUISound } from "@/hooks/useUISounds";
import Navigation from "@/components/Navigation";
import project1 from "@/assets/ElementalEcho/Front Page.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/hoverline/hoverline_1.png";
import project4 from "@/assets/Extraction Protocol/Extraction Protocol_1.png";
import project5 from "@/assets/TrashBrosApocalypse/TrashBros_1.png"
import project6 from "@/assets/Premuim Service/ChatGPT Image Jan 25, 2026, 10_18_10 PM.png"
import { Mail, Github, Linkedin } from "lucide-react";
import { Description } from "@radix-ui/react-toast";


const projects = [
  {
    id: "elemental-echo",
    title: "ELEMENTAL ECHO",
    description: "Elemental Echo is a fast-paced 2v2 multiplayer game where teams compete to control a central objective while attacking enemy bases and coordinating elemental abilities. The project showcases real-time multiplayer gameplay built with Photon Networking and a custom backend system for player accounts, statistics, and leaderboards.",
    image: project1,
    techStack: ["Unity", "C#", "Photon PUN", "PHP", "AWS", "MySQL"],
  },
  {
    id: "face-of-the-future",
    title: "FACE OF THE FUTURE (Kingston University Game Jam Winner 2025)",
    description: "Face of the Future is a top-down 2D pixel art surveillance game created for a game jam around the theme “Automation Anxiety.” The player takes the role of a surveillance operator, scanning a busy urban area through a movable overhead camera to identify wanted suspects.",
    image: project2,
    techStack: ["Unity", "C#"],
  },
  {
  id: "hoverline",
  title: "HOVERLINE",
  description: "Hoverline is a helicopter flight prototype focused on precision control under dynamically evolving wind conditions, featuring adaptive difficulty, physics-driven flight, and DualSense haptics.",
  image: project3,
  techStack: ["Unity", "C#", "Gameplay Systems", "Physics", "Haptics"],
  },
  {
    id: "extraction-protocol",
    title: "Extraction Protocol",
    description: "A 3D tactical shooter prototype focused on adaptive enemy AI behaviour, integrating deep reinforcement learning with traditional game AI systems to enable interpretable, emergent decision-making at runtime.",
    image: project4,
    techStack: ["Unity", "C#", "ML-Agents", "Behaviour Trees", "Reinforcement Learning"],
  },
  {
    id: "trash-bros-apocalypse",
    title: "TRASH BROS: APOCALYPSE",
    description:
      "A third-person, quest-driven platformer vertical slice built in Unreal Engine, focusing on modular gameplay systems, event-driven architecture, and data-driven quest progression.",
    image: project5, 
    techStack: ["Unreal Engine", "C++", "Blueprints", "Gameplay Systems"],
  },
  {
    id: "premium-service",
    title: "Premium Service (In Developement)",
    description:
      "A management simulation prototype focused on operational decision-making within a live event hospitality environment. The project explores order prioritisation, staff allocation, inventory management, and service efficiency under dynamic demand conditions.",
    image: project6, 
    techStack: ["Unity", "C#", "Simulation"],
  },
  
];

const Portfolio = () => {
  const { play } = useUISound();

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
              Game Portfolio
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
                onMouseEnter={() => play("hover")}
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
                    <Link to={`/projects/${project.id}`}>
                      <Button 
                        onClick={() => play("click")}
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
      <div className="container mx-auto px-6 mt-16 relative z-10">
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Fryo21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/francis-obiokala-8604b329b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            {/* Copyright */}
            <p className="text-muted-foreground text-sm order-first md:order-none">
              © 2025 Francis Obiokala. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
