import profileImage from "@/assets/profile.jpg";

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
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-md opacity-75 group-hover:opacity-100 transition-opacity animate-glow-pulse"></div>
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/50 hover-scale">
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-neon-green">
                About Me
              </h2>
              <div className="space-y-4 text-light-text text-lg leading-relaxed">
                <p>
                  I’m a Game Developer with a B.Eng in Electrical & Electronic Engineering, currently pursuing an MSc in Game Development (Programming) at Kingston University (2025). What excites me most is transforming raw ideas into polished, interactive experiences that immerse players fully.
                </p>
                <p>
                  I primarily work in C# and C++, with experience building scalable, well-structured systems that balance performance and flexibility. My strengths lie in connecting all aspects of a game, from mechanics and input to animation, VFX, and sound into a seamless player experience.
                  I’m eager to contribute to teams that push the boundaries of gameplay, crafting digital experiences that are both enjoyable and impactful.
                </p>
                <p className="font-heading text-xl text-primary">
                  Let's create worlds that players will never forget.
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
