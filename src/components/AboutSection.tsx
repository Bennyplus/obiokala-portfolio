

const AboutSection = () => {
  return (
    <section className="py-24 bg-dark-surface relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center">
          
            

            {/* Bio Text */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-neon-green">
                About Me
              </h2>
              <div className="space-y-4 text-light-text text-lg leading-relaxed">
                <p>
                  I am a Game Development (Programming) graduate from Kingston University London with a strong interest in technology, software development, and interactive digital experiences, with technical experience in programming languages such as C#, C++, and Python. I build systems that bring gameplay, mechanics, and technical design together in ways that feel responsive and scalable.
                </p>
                <p>
                  Through developing a range of projects, I have strengthened my understanding of gameplay architecture, modular system design, client-server architecture, data-driven systems, gameplay programming, multiplayer networking, AI systems, object-oriented programming, debugging, optimisation, and maintainable software development practices.
                </p>
                <p>
                  I have experience working with engines and tools such as Unity, Unreal Engine, Photon PUN, ML-Agents, MySQL, and AWS. Across my projects, I focus on writing clean, structured code and building systems that are adaptable, efficient, and designed with scalability in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
