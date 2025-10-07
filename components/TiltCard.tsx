"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useCallback, useRef, useState } from "react";

export default function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spx = useSpring(px, { stiffness: 150, damping: 20, mass: 0.2 });
  const spy = useSpring(py, { stiffness: 150, damping: 20, mass: 0.2 });
  const rotateX = useTransform(spy, [0, 1], [10, -10]);
  const rotateY = useTransform(spx, [0, 1], [-10, 10]);
  const [hover, setHover] = useState(false);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    px.set(Math.max(0, Math.min(1, x)));
    py.set(Math.max(0, Math.min(1, y)));
  }, [px, py]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ rotateX, rotateY, perspective: 1000, transformStyle: "preserve-3d" as any }}
      className={`relative will-change-transform ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(400px_400px_at_calc(100%_*_var(--x,0.5))_calc(100%_*_var(--y,0.5)),rgba(255,255,255,.25),transparent_60%)]" style={{
        // map motion to css vars for the radial glare center
        // @ts-ignore
        "--x": spx as unknown as string,
        // @ts-ignore
        "--y": spy as unknown as string,
        opacity: hover ? 1 : 0,
        transition: "opacity .2s ease",
      }} />
      {children}
    </motion.div>
  );
}

