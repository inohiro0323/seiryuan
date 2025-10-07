import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import Grain from "@/components/Grain";

export const metadata: Metadata = {
  title: "静流庵 | 和モダン旅館",
  description: "木造旅館の情緒と現代の快適を調和させた和モダン宿『静流庵』のデモサイト。",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="body-paper">
        {/* Lenis（滑らかスクロール） */}
        <SmoothScroll />
        <ScrollProgress />
        <Grain />

        <div className="mx-auto max-w-screen-xl px-4">
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </div>
      </body>
    </html>
  );
}
