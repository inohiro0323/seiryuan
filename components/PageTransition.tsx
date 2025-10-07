"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showCurtain, setShowCurtain] = useState(false);

  // When route changes, briefly cover and reveal with a curtain.
  useEffect(() => {
    setShowCurtain(true);
    const t1 = setTimeout(() => setShowCurtain(false), 650);
    return () => clearTimeout(t1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -8, filter: "blur(3px)" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>

      {showCurtain && (
        <motion.div
          key={`curtain-${pathname}`}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
          className="pointer-events-none fixed inset-0 z-[80] origin-bottom"
          style={{
            background:
              "radial-gradient(1200px 400px at 50% 0%, color-mix(in hsl, var(--accent) 18%, transparent), transparent), var(--accent)",
          }}
        />
      )}
    </AnimatePresence>
  );
}
