"use client";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

export default function TiltProvider() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".tilt-card"));
    if (!elements.length) return;

    VanillaTilt.init(elements, {
      max: 12,
      speed: 500,
      glare: true,
      "max-glare": 0.18,
      scale: 1.02,
    });

    return () => {
      elements.forEach((el) => (el as any).vanillaTilt?.destroy());
    };
  }, []);

  return null;
}
