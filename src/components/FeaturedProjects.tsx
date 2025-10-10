import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.jpg";

const projects = [
  {
    id: 1,
    title: "ELEMENTAL ECHO",
    description: "Elemental Echo is a fast-paced 2v2 third-person shooter where players take on the roles of elemental mages (Fire, Water, or Wind) and battle to control The Crown, a powerful object at the center of the arena.",
    image: project1,
  },
  {
    id: 2,
    title: "FACE OF THE FUTURE (Kingston University Game Jam Winner 2025)",
    description: "Face of the Future is a top-down 2D pixel art surveillance game created for a game jam around the theme “Automation Anxiety.” ",
    image: project2,
  },
];

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="py-24 bg-dark-space relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-dark-surface rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 hover-scale animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="font-heading text-2xl font-bold text-neon-green group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-light-text leading-relaxed">
                  {project.description}
                </p>
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
  );
};

export default FeaturedProjects;
