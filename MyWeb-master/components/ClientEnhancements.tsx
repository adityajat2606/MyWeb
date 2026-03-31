"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("./CustomCursor"), { ssr: false });
const ScrollEffects = dynamic(() => import("./ScrollEffects"), { ssr: false });
const TiltProvider = dynamic(() => import("./TiltProvider"), { ssr: false });

export default function ClientEnhancements() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const largeScreen = window.matchMedia("(min-width: 1024px)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;

    setEnabled(!prefersReduced && finePointer && largeScreen && !saveData);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <CustomCursor />
      <ScrollEffects />
      <TiltProvider />
    </>
  );
}
