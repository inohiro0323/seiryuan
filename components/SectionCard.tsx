"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";

export function SectionCard({
  title,
  description,
  href,
  tag,
}: {
  title: string;
  description: string;
  href: string;
  tag?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <TiltCard className="rounded-2xl border border-[color-mix(in_hsl,white_10%,transparent)] bg-[color-mix(in_hsl,white_4%,transparent)] p-5 backdrop-blur-md">
        {tag && (
          <span className="rounded-full border border-[var(--accent)] px-2 py-0.5 text-xs text-[var(--accent-ink)]">
            {tag}
          </span>
        )}
        <h3 className="mt-3 text-lg font-medium">{title}</h3>
        <p className="mt-1 text-sm opacity-85">{description}</p>
        <Link
          href={href}
          className="mt-4 inline-block text-sm text-[var(--accent-ink)] opacity-95 underline-offset-4 hover:underline"
        >
          くわしく見る
        </Link>
        <div className="mt-5 h-28 rounded-xl bg-[color-mix(in_hsl,white_6%,transparent)] transition-transform duration-300 group-hover:scale-[1.02]" />
      </TiltCard>
    </motion.article>
  );
}
