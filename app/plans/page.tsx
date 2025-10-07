"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";

const plans = [
  {
    title: "月影 - 露天付き特別室",
    price: "¥48,000〜 / 名",
    description: "露天風呂付き・夕朝食付き・レイトチェックアウト",
  },
  {
    title: "風音 - 標準和室",
    price: "¥28,000〜 / 名",
    description: "夕朝食付き・貸切風呂45分・ウェルカム茶",
  },
  {
    title: "宵灯 - 平日限定",
    price: "¥22,000〜 / 名",
    description: "朝食付き・チェックイン後ドリンクサービス",
  },
  {
    title: "早霜 - 連泊割",
    price: "¥39,000〜 / 名",
    description: "二泊以上・夕朝食付き・館内利用券2,000円",
  },
];

export default function PlansPage() {
  return (
    <main className="py-14">
      <h1 className="text-balance text-3xl font-semibold tracking-wide text-[var(--accent-ink)]">
        宿泊プラン
      </h1>
      <p className="mt-2 opacity-80">
        季節とともに変わる静けさを、最適なプランで。
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {plans.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className=""
          >
            <TiltCard className="rounded-2xl border border-[color-mix(in_hsl,white_10%,transparent)] bg-[color-mix(in_hsl,white_4%,transparent)] p-6 backdrop-blur-md">
              <h3 className="text-xl font-medium">{p.title}</h3>
              <p className="mt-1 text-sm opacity-80">{p.description}</p>
              <div className="mt-4 text-lg text-[var(--accent-ink)]">{p.price}</div>
              <MagneticButton as={Link} href="/contact" className="mt-5">
                このプランで問い合わせる
              </MagneticButton>
            </TiltCard>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
