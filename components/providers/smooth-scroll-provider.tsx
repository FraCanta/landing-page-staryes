"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function LenisGsapSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const update = (time: number) => lenis.raf(time * 1000);
    const unsubscribe = lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
      unsubscribe();
    };
  }, [lenis]);

  return null;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [smoothScrollEnabled, setSmoothScrollEnabled] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setSmoothScrollEnabled(!preference.matches);

    updatePreference();
    preference.addEventListener("change", updatePreference);

    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  if (!smoothScrollEnabled) return children;

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        anchors: true,
        lerp: 0.1,
        smoothWheel: true,
        syncTouch: false,
      }}
    >
      <LenisGsapSync />
      {children}
    </ReactLenis>
  );
}
