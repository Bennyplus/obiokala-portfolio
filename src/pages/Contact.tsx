import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-dark-space flex items-center justify-center">
      <Navigation />
      
      <div className="container mx-auto px-6">
        <div className="text-center animate-fade-in">
          <h1 className="font-heading text-6xl md:text-7xl font-black text-foreground mb-4">
            Contact
          </h1>
          <p className="text-xl text-neon-green">
            Coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
