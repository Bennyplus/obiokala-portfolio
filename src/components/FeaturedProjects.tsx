import project1 from "@/assets/ElementalEcho/Front Page.png";
import project2 from "@/assets/FaceoftheFuture/FrontPage.png";

const projects = [
  {
    id: 1,
    title: "ELEMENTAL ECHO",
    description: "A competitive 2v2 multiplayer arena built in Unity with Photon PUN, elemental class abilities, real-time networking, and a persistent player backend on AWS.",
    image: project1,
  },
  {
    id: 2,
    title: "FACE OF THE FUTURE",
    description: "Kingston University Game Jam Winner 2025. A surveillance-driven management game where automation challenges player authority as pressure mounts each round.",
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
              className="group relative h-[520px] rounded-lg overflow-hidden border border-border/40 hover:border-primary/30 transition-colors duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Artwork — fills card, subtle zoom on hover */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />

              {/* Always-on bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Cinematic overlay — fades in on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Text — slides up from below on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <h3 className="font-heading text-2xl font-black text-neon-green mb-3">
                  {project.title}
                </h3>
                <p className="text-light-text leading-relaxed text-sm max-w-sm">
                  {project.description}
                </p>
              </div>

              {/* Glow on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 glow-neon transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
