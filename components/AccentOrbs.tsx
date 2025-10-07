"use client";

import { motion } from "framer-motion";

export default function AccentOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute left-[-10%] top-[-10%] h-[50vh] w-[50vh] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, color-mix(in hsl, var(--accent) 35%, transparent), transparent)" }}
        animate={{ y: [0, 20, -10, 0], x: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[-8%] bottom-[-8%] h-[40vh] w-[40vh] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, color-mix(in hsl, var(--accent) 22%, transparent), transparent)" }}
        animate={{ y: [0, -15, 5, 0], x: [0, -10, 5, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      />
    </div>
  );
}

