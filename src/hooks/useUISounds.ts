import { useRef } from "react";

type UISoundType = "hover" | "click";

export function useUISound() {
  const hoverSound = useRef<HTMLAudioElement | null>(null);
  const clickSound = useRef<HTMLAudioElement | null>(null);

  if (!hoverSound.current) {
    hoverSound.current = new Audio("/sfx/hover.mp3");
    hoverSound.current.volume = 0.2;
    hoverSound.current.preload = "auto";
  }

  if (!clickSound.current) {
    clickSound.current = new Audio("/sfx/click.mp3");
    clickSound.current.volume = 0.15;
    hoverSound.current.preload = "auto";
  }

  const play = (type: UISoundType) => {
    const sound =
      type === "hover" ? hoverSound.current : clickSound.current;

    if (!sound) return;

    sound.currentTime = 0;

    sound.play().catch(() => {
      /* ignore autoplay restrictions */
    });
  };

  return { play };
}
