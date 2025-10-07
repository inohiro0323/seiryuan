import { Hero } from "@/components/Hero";
import SectionReveal from "@/components/SectionReveal";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="py-10">
      <Hero />

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "湯",
            desc: "露天で味わう山の気配。夜は星、朝は霧。心地よい静けさに包まれる。",
            href: "/about#spa",
          },
          {
            title: "食",
            desc: "旬の小皿を重ねる懐石。器、香り、温度。五感で味わう静の時間。",
            href: "/about#dining",
          },
          {
            title: "寛",
            desc: "木の香りと畳の柔らかさ。行灯の明かりに、時がゆっくり流れる。",
            href: "/about#rooms",
          },
        ].map((c) => (
          <SectionReveal key={c.title}>
            <article className="panel">
              <span className="rounded-full border px-2 py-0.5 text-xs" style={{borderColor:"var(--accent)", color:"var(--accent)"}}>
                {c.title}
              </span>
              <h3 className="mt-3 text-lg font-medium">{c.title}</h3>
              <p className="mt-1 text-sm opacity-85">{c.desc}</p>
              <Link href={c.href} className="mt-4 inline-block text-sm underline underline-offset-4" style={{color:"var(--accent)"}}>
                くわしく見る
              </Link>
            </article>
          </SectionReveal>
        ))}
      </section>

      <SectionReveal>
        <section className="panel mt-16">
          <h2 className="text-2xl font-serif">季（とき）を映すおもてなし</h2>
          <p className="mt-2 max-w-2xl">
            四季折々の食材と景観をしつらえに込めて。静かに流れる時間を、どうぞそのまま。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {["rooms.jpg", "kaiseki.jpg", "onsen.jpg"].map((img) => (
              <div key={img} className="h-40 rounded-xl bg-cover bg-center"
                   style={{ backgroundImage: `url('/images/${img}')`,
                            boxShadow: "0 8px 24px rgba(0,0,0,.08)" }} />
            ))}
          </div>
        </section>
      </SectionReveal>
    </main>
  );
}
