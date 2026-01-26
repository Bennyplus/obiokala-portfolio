import project1 from "@/assets/ElementalEcho/Front Page.png";
import project2 from "@/assets/project2.png";

const projects = [
  {
    id: 1,
    title: "ELEMENTAL ECHO",
    description: "Elemental Echo is a competitive 2v2 third-person multiplayer arena battler where players harness the powers of elemental mages of different abilities (Fire, Water and Wind), to outmaneuver opponents, defend their base, and compete for dominance through strategic team play. Built in Unity with Photon PUN, the game challenges players to accumulate points through combat and objective control before the match timer runs out.  Each match revolves around the pursuit of the Crown, a central objective that grants continuous score points to the team that holds it. Players must work together to capture and protect the Crown while fending off enemy assaults and defending their home base. Points are earned through kills, assists, base destruction, and elemental synergy attacks, where combining abilities such as Fire and water triggers high-impact damage that can change the tide of battle. The match concludes when the timer expires, and victory is awarded to the team with the highest score.   Designed around coordination, timing, and tactical decision-making, Elemental Echo blends fast-paced combat with objective-based gameplay, rewarding both individual skill and team strategy. It is a fully networked architecture that supports real-time synchronization, persistent player data, and backend integration through PHP, MySQL, and AWS.",
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
