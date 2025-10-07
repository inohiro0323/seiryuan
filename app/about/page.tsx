"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="py-14">
      <h1 className="text-3xl font-semibold text-[var(--accent-ink)]">静流庵について</h1>
      <p className="mt-2 max-w-2xl opacity-80">
        静流庵（せいりゅうあん）は、山の静寂と日本の美意識を現代に調和させた和モダンの宿。
        木、紙、石、そして湯。必要なものだけを丁寧に配置し、光と影に余白を残しました。
      </p>

      <div id="spa" className="mt-12 grid gap-8 md:grid-cols-2">
        <ParallaxPanel
          title="湯 − SPA"
          text="露天から眺める山あい。季節の音を湯気がやわらげ、呼吸が深くなる。"
        />
        <ParallaxPanel
          title="食 − DINING"
          text="旬の小皿を重ねる静の時間。器、香り、温度。五感で味わう懐石。"
          id="dining"
        />
        <ParallaxPanel
          title="寛 − ROOMS"
          text="灯りが低く、時間がゆっくり。木の香りと和紙の陰影に包まれて。"
          id="rooms"
        />
        <ParallaxPanel
          title="庭 − GARDEN"
          text="朝霧と苔。水面のゆらぎ。歩くほどに静けさが深くなる中庭。"
        />
      </div>
    </main>
  );
}

function ParallaxPanel({
  title,
  text,
  id,
}: {
  title: string;
  text: string;
  id?: string;
}) {
  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl border border-[color-mix(in_hsl,white_10%,transparent)] bg-[color-mix(in_hsl,white_3%,transparent)] p-6 backdrop-blur-md"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_400px_at_50%_0%,color-mix(in_hsl,var(--accent)_8%,transparent),transparent)]" />
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="mt-2 opacity-80">{text}</p>
      <div className="mt-6 h-36 w-full rounded-xl bg-[color-mix(in_hsl,white_6%,transparent)]" />
    </motion.article>
  );
}
