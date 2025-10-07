"use client";

export default function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] opacity-[.07] mix-blend-multiply"
      style={{
        backgroundImage:
          "radial-gradient(2px 2px at 20% 30%, rgba(0,0,0,.5) 0, transparent 50%)," +
          "radial-gradient(2px 2px at 80% 60%, rgba(0,0,0,.5) 0, transparent 50%)," +
          "radial-gradient(1.5px 1.5px at 40% 70%, rgba(0,0,0,.5) 0, transparent 50%)",
        backgroundRepeat: "repeat",
        backgroundSize: "120px 120px, 160px 160px, 140px 140px",
      }}
    />
  );
}

