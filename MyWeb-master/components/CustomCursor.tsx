"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(supportsFinePointer);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const body = document.body;
    const cursor = document.querySelector<HTMLElement>(".cursor");
    const dot = document.querySelector<HTMLElement>(".cursor-dot");
    if (!cursor || !dot) return;

    const onMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
      dot.style.left = `${clientX}px`;
      dot.style.top = `${clientY}px`;
    };

    const onEnter = () => body.classList.remove("cursor-hidden");
    const onLeave = () => body.classList.add("cursor-hidden");

    body.classList.add("cursor-hidden");
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);

    const magnets = Array.from(document.querySelectorAll<HTMLElement>(".magnetic"));
    const onMagnetMove = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      target.style.transform = `translate(${dx * 0.2}px, ${dy * 0.2}px)`;
    };
    const onMagnetLeave = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      target.style.transform = "translate(0px, 0px)";
    };

    magnets.forEach((el) => {
      el.addEventListener("mousemove", onMagnetMove);
      el.addEventListener("mouseleave", onMagnetLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      magnets.forEach((el) => {
        el.removeEventListener("mousemove", onMagnetMove);
        el.removeEventListener("mouseleave", onMagnetLeave);
        el.style.transform = "translate(0px, 0px)";
      });
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div className="cursor" />
      <div className="cursor-dot" />
    </>
  );
}
