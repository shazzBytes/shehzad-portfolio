"use client";

import { gsap, useGSAP } from "@/lib/animations";

export default function PortfolioAnimations() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      timeline.from(".hero-item", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
      });

      gsap.utils.toArray<HTMLElement>(".project-item").forEach((item) => {
        gsap.from(item, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".section-reveal").forEach((item) => {
        gsap.from(item, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            once: true,
          },
        });
      });
    });

    return () => mm.revert();
  });

  return null;
}