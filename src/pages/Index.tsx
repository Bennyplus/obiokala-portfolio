import { useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <LoadingSpinner onLoadComplete={() => setIsLoaded(true)} />
      {isLoaded && (
        <div className="min-h-screen bg-dark-space">
          <HeroSection />
          <AboutSection />
          <FeaturedProjects />
          <FooterCTA />
        </div>
      )}
    </>
  );
};

export default Index;
