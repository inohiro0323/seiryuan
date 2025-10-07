"use client";

import { useState } from "react";
import MagneticButton from "@/components/MagneticButton";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // 実運用では API 経由で送信
    await new Promise((r) => setTimeout(r, 600));
    setSent(true);
  }

  return (
    <main className="py-14">
      <h1 className="text-3xl font-semibold text-[var(--accent-ink)]">お問い合わせ</h1>
      <p className="mt-2 opacity-80">ご予約・下見・取材のご相談など、お気軽に。</p>

      {!sent ? (
        <form
          onSubmit={onSubmit}
          className="mt-8 max-w-xl space-y-4 rounded-2xl border border-[color-mix(in_hsl,white_10%,transparent)] bg-[color-mix(in_hsl,white_4%,transparent)] p-6 backdrop-blur-md"
        >
          <Field label="お名前" name="name" type="text" required />
          <Field label="メールアドレス" name="email" type="email" required />
          <Field label="メッセージ" name="message" textarea required />
          <MagneticButton className="w-full justify-center">
            送信する
          </MagneticButton>
        </form>
      ) : (
        <div className="mt-10 flex max-w-xl items-center gap-3 rounded-2xl border border-[color-mix(in_hsl,white_10%,transparent)] bg-[color-mix(in_hsl,white_4%,transparent)] p-6">
          <div className="size-6 animate-pulse rounded-full bg-[var(--accent)]" />
          <div>
            <p className="font-medium text-[var(--accent-ink)]">ありがとうございます。</p>
            <p className="text-sm opacity-80">担当より折り返しご連絡いたします。</p>
          </div>
        </div>
      )}
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm opacity-90">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          className="mt-1 w-full rounded-xl bg-[color-mix(in_hsl,white_6%,transparent)] p-3 outline-none"
          rows={5}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className="mt-1 w-full rounded-xl bg-[color-mix(in_hsl,white_6%,transparent)] p-3 outline-none"
        />
      )}
    </label>
  );
}
