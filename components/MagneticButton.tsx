"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCallback } from "react";

type Props<E extends React.ElementType> = React.ComponentPropsWithoutRef<E> & {
  children: React.ReactNode;
  className?: string;
  as?: E;
};

export default function MagneticButton<E extends React.ElementType = "button">(
  { children, className = "", as, ...rest }: Props<E>
) {
  const Comp = (as || "button") as React.ElementType;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(x, { stiffness: 120, damping: 12, mass: 0.2 });
  const ry = useSpring(y, { stiffness: 120, damping: 12, mass: 0.2 });

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const mx = e.clientX - rect.left - rect.width / 2;
      const my = e.clientY - rect.top - rect.height / 2;
      x.set(mx * 0.25);
      y.set(my * 0.25);
    },
    [x, y]
  );

  return (
    <Comp
      onMouseLeave={reset}
      onMouseMove={onMove}
      className={`group relative inline-flex select-none items-center justify-center overflow-hidden rounded-xl border border-[var(--accent)] px-5 py-2 text-sm text-[var(--accent-ink)] transition will-change-transform hover:shadow-[0_8px_24px_rgba(0,0,0,.08)] ${className}`}
      {...(rest as any)}
    >
      <motion.span style={{ x: rx, y: ry }} className="relative z-10">
        {children}
      </motion.span>
      <span className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(120px_120px_at_var(--mx,50%)_var(--my,50%),color-mix(in_hsl,var(--accent)_30%,transparent),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Comp>
  );
}
