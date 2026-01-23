import { useEffect } from "react";

type ImageSliderModalProps = {
  images: string[];
  selectedIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
  direction: "next" | "prev";
  setDirection: (dir: "next" | "prev") => void;
};

export default function ImageSliderModal({
  images,
  selectedIndex,
  setSelectedIndex,
  direction,
  setDirection,
}: ImageSliderModalProps) {

  // ✅ HOOKS FIRST — ALWAYS
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  // ✅ SAFE EARLY RETURN AFTER HOOKS
  if (selectedIndex === null) return null;

  const nextImage = () => {
    setDirection("next");
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const prevImage = () => {
    setDirection("prev");
    setSelectedIndex(
      (selectedIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
      onClick={() => setSelectedIndex(null)}
    >
      <div
        className="relative flex items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={prevImage}
          className="absolute left-[-3rem] text-white text-4xl hover:scale-110 transition"
        >
          ‹
        </button>

        <img
          key={selectedIndex}
          src={images[selectedIndex]}
          alt={`Project screenshot ${selectedIndex + 1}`}
          className={`max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg transition-all duration-300
            ${
              direction === "next"
                ? "animate-slide-left"
                : "animate-slide-right"
            }`}
        />

        <button
          onClick={nextImage}
          className="absolute right-[-3rem] text-white text-4xl hover:scale-110 transition"
        >
          ›
        </button>

        <div className="absolute bottom-[-2rem] text-sm text-muted-foreground">
          {selectedIndex + 1} / {images.length}
        </div>

        <button
          onClick={() => setSelectedIndex(null)}
          className="absolute top-3 right-3 text-white text-2xl bg-black/60 hover:bg-black/80 rounded-full px-3 py-1"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
