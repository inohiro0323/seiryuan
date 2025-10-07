"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 24,
    mass: 0.2,
  });

  return (
    <motion.div
      role="progressbar"
      aria-label="Scroll progress"
      className="fixed left-0 top-0 z-[70] h-[3px] w-full origin-left bg-[var(--accent)]"
      style={{ scaleX }}
    />
  );
}

