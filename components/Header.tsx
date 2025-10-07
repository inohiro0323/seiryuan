"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const nav = [
  { href: "/", label: "静流庵 Seiryu-an" },
  { href: "/plans", label: "プラン" },
  { href: "/about", label: "お宿について" },
  { href: "/access", label: "アクセス" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-50">
      {/* 格子の横桟を感じるバー */}
      <div
        className="mx-auto max-w-screen-xl rounded-2xl border bg-white/70 backdrop-blur body-paper"
        style={{ borderColor: "color-mix(in hsl, black 10%, transparent)" }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="font-serif tracking-wide text-lg">
            静流庵 <span style={{ color: "var(--accent)" }}>Seiryu-an</span>
          </Link>

          <div className="flex items-center gap-3">
            <nav className="relative hidden gap-1 md:flex">
              {nav.map((n) => {
                const active = pathname === n.href;
                return (
                  <div key={n.href} className="relative">
                    <Link
                      href={n.href}
                      className={`relative rounded-xl px-3 py-1.5 text-sm transition ${
                        active ? "text-[var(--accent)]" : "opacity-80 hover:opacity-100"
                      }`}
                    >
                      {n.label}
                    </Link>
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-2 right-2 -bottom-[2px] h-[2px] rounded-full bg-[var(--accent)]"
                      />
                    )}
                  </div>
                );
              })}
            </nav>
            <ThemeToggle />
          </div>
        </div>
        {/* 下辺の細い木枠 */}
        <div className="h-1 w-full rounded-b-2xl" style={{ background: "var(--wood)" }} />
      </div>
    </header>
  );
}
