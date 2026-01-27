import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const aiProjects = [
  {
    id: "pet-breed-classification",
    title: "Pet Breed Image Classification",
    subtitle: "(Deep Learning)",
    description:
      "Built and evaluated multiple deep learning models for fine-grained pet breed classification using the Oxford-IIIT Pet Dataset, comparing custom CNN architectures with transfer-learning approaches.",
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNNs",
    ],
  },
];

export default function AIProjects() {
  return (
    <div className="min-h-screen bg-dark-space text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="font-heading text-6xl md:text-7xl font-black mb-6">
              AI Projects
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Applied machine learning and deep learning projects focused on
              real-world datasets, rigorous evaluation, and reproducible
              experimentation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {aiProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-dark-surface border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 hover-scale animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Title */}
                <h2 className="font-heading text-3xl font-bold text-neon-green mb-1">
                  {project.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-light-text leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-heading tracking-wider bg-muted/50 text-foreground border border-border rounded-md hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link to={`/ai-projects/${project.id}`}>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground glow-blue font-heading">
                    View Project
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
