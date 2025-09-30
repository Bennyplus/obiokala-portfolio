import { useRouteLoading } from "@/hooks/useRouteLoading";

const GlobalLoadingSpinner = () => {
  const isLoading = useRouteLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-space/95 backdrop-blur-sm">
      <div className="relative">
        <div className="cube-container" style={{ perspective: "1000px" }}>
          <div 
            className="cube relative w-20 h-20 animate-cube-spin"
            style={{ 
              transformStyle: "preserve-3d",
            }}
          >
            <div className="cube-face front absolute w-20 h-20 bg-dark-surface border-2 border-primary" 
                 style={{ transform: "translateZ(40px)" }}>
              <div className="w-full h-full glow-neon opacity-50"></div>
            </div>
            <div className="cube-face back absolute w-20 h-20 bg-dark-surface border-2 border-secondary" 
                 style={{ transform: "rotateY(180deg) translateZ(40px)" }}>
              <div className="w-full h-full glow-blue opacity-50"></div>
            </div>
            <div className="cube-face right absolute w-20 h-20 bg-dark-surface border-2 border-primary" 
                 style={{ transform: "rotateY(90deg) translateZ(40px)" }}>
              <div className="w-full h-full glow-neon opacity-50"></div>
            </div>
            <div className="cube-face left absolute w-20 h-20 bg-dark-surface border-2 border-secondary" 
                 style={{ transform: "rotateY(-90deg) translateZ(40px)" }}>
              <div className="w-full h-full glow-blue opacity-50"></div>
            </div>
            <div className="cube-face top absolute w-20 h-20 bg-dark-surface border-2 border-primary" 
                 style={{ transform: "rotateX(90deg) translateZ(40px)" }}>
              <div className="w-full h-full glow-neon opacity-50"></div>
            </div>
            <div className="cube-face bottom absolute w-20 h-20 bg-dark-surface border-2 border-secondary" 
                 style={{ transform: "rotateX(-90deg) translateZ(40px)" }}>
              <div className="w-full h-full glow-blue opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalLoadingSpinner;
