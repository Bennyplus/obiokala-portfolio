import { useEffect, useState } from "react";

const LoadingSpinner = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-space">
      <div className="relative">
        {/* Cube Container */}
        <div className="cube-container" style={{ perspective: "1000px" }}>
          <div 
            className="cube relative w-24 h-24 animate-cube-spin"
            style={{ 
              transformStyle: "preserve-3d",
            }}
          >
            {/* Cube Faces */}
            <div className="cube-face front absolute w-24 h-24 bg-dark-surface border-2 border-primary" 
                 style={{ transform: "translateZ(48px)" }}>
              <div className="w-full h-full glow-neon opacity-50"></div>
            </div>
            <div className="cube-face back absolute w-24 h-24 bg-dark-surface border-2 border-secondary" 
                 style={{ transform: "rotateY(180deg) translateZ(48px)" }}>
              <div className="w-full h-full glow-blue opacity-50"></div>
            </div>
            <div className="cube-face right absolute w-24 h-24 bg-dark-surface border-2 border-primary" 
                 style={{ transform: "rotateY(90deg) translateZ(48px)" }}>
              <div className="w-full h-full glow-neon opacity-50"></div>
            </div>
            <div className="cube-face left absolute w-24 h-24 bg-dark-surface border-2 border-secondary" 
                 style={{ transform: "rotateY(-90deg) translateZ(48px)" }}>
              <div className="w-full h-full glow-blue opacity-50"></div>
            </div>
            <div className="cube-face top absolute w-24 h-24 bg-dark-surface border-2 border-primary" 
                 style={{ transform: "rotateX(90deg) translateZ(48px)" }}>
              <div className="w-full h-full glow-neon opacity-50"></div>
            </div>
            <div className="cube-face bottom absolute w-24 h-24 bg-dark-surface border-2 border-secondary" 
                 style={{ transform: "rotateX(-90deg) translateZ(48px)" }}>
              <div className="w-full h-full glow-blue opacity-50"></div>
            </div>
          </div>
        </div>
        
        {/* Loading Text */}
        <p className="mt-12 text-center font-heading text-primary text-lg tracking-wider">
          LOADING...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
