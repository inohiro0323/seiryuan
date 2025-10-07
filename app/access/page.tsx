export default function AccessPage() {
  return (
    <main className="py-14">
      <h1 className="text-3xl font-semibold text-[var(--accent-ink)]">アクセス</h1>
      <p className="mt-2 opacity-80">最寄り駅・お車でのご来館、いずれも便利な立地です。</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[color-mix(in_hsl,white_10%,transparent)] bg-[color-mix(in_hsl,white_4%,transparent)] p-6 backdrop-blur-md">
          <h2 className="text-lg font-medium">電車</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 opacity-90">
            <li>〇〇線「静流」駅よりタクシーで10分</li>
            <li>新幹線「△△」駅より在来線で30分</li>
          </ul>
          <h2 className="mt-6 text-lg font-medium">お車</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 opacity-90">
            <li>〇〇ICより県道××号経由で約25分</li>
            <li>駐車場 20台（無料）</li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[color-mix(in_hsl,white_10%,transparent)]">
          <iframe
            title="map"
            className="h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Tokyo&t=&z=12&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </div>
    </main>
  );
}
