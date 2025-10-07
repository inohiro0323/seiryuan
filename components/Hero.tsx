"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import AccentOrbs from "@/components/AccentOrbs";
import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";

export function Hero() {
  return (
    <section className="relative mx-auto mt-6 max-w-screen-xl overflow-hidden rounded-3xl">
      {/* 背景（木目＋和紙光）。画像があれば /public/images/hero-wood.jpg に置く */}
      <div
        className="h-[72vh] w-full bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(10,10,10,.35), rgba(10,10,10,.45)),
            url('/images/hero-wood.jpg')
          `,
        }}
      />
      <AccentOrbs />

      {/* タイトルボード（和紙の光＋木枠） */}
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <TiltCard className="max-w-3xl">
          <div className="panel text-center shadow-lantern">
          <h1 className="text-balance font-serif text-4xl md:text-6xl">
            山の静寂に、心をゆだねて。
          </h1>
          <p className="mt-3 opacity-85">
            格子の陰影、畳の香り、灯籠の灯。和の呼吸が満ちる時間へ。
          </p>
          <div className="mt-6">
            <MagneticButton as={Link} href="/plans" className="btn-primary">
              宿泊プランを見る
            </MagneticButton>
          </div>
          </div>
        </TiltCard>
      </motion.div>
    </section>
  );
}
