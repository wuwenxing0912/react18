import { RefObject, useEffect, useRef, useState } from "react";

interface Config {
  onTouchStart?: (e: TouchEvent) => void;
  onTouchMove?: (e: TouchEvent) => void;
  onTouchEnd?: (e: TouchEvent) => void;
}
export const useSwipe = (
  elementRef: RefObject<HTMLElement> | null,
  config?: Config
) => {
  const [direction, setDirection] = useState<"" | "left" | "right">("");
  const x = useRef(-1);
  const touchStart = (e: TouchEvent) => {
    config?.onTouchStart?.(e);
    x.current = e.touches[0].clientX;
  };
  const touchMove = (e: TouchEvent) => {
    config?.onTouchMove?.(e);
    const newX = e.touches[0].clientX;
    const distance = newX - x.current;
    if (Math.abs(distance) < 3) {
      setDirection("");
    } else if (distance > 0) {
      setDirection("right");
    } else {
      setDirection("left");
    }
  };
  const touchEnd = (e: TouchEvent) => {
    config?.onTouchEnd?.(e);
    setDirection("");
  };
  useEffect(() => {
    if (!elementRef) return;
    elementRef.current?.addEventListener("touchstart", touchStart);
    elementRef.current?.addEventListener("touchmove", touchMove);
    elementRef.current?.addEventListener("touchend", touchEnd);
    return () => {
      if (!elementRef) return;
      elementRef.current?.removeEventListener("touchstart", touchStart);
      elementRef.current?.removeEventListener("touchmove", touchMove);
      elementRef.current?.removeEventListener("touchend", touchEnd);
    };
  }, []);

  return { direction };
};
