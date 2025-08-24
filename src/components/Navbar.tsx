"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-sky-500 text-white sticky top-0 z-50">
      {/* Kiri - Brand (klik balik ke home, TANPA underline) */}
      <div className="flex items-center gap-2">
        <Link href="/" className="text-xl font-bold no-underline hover:no-underline hover:opacity-90 transition">
          🎮 Havena Store
        </Link>
      </div>

      {/* Tengah - Menu Game (tanpa underline juga) */}
      <nav className="hidden md:flex gap-6 text-sm font-medium">
        <Link href="/genshin" className="no-underline hover:no-underline hover:opacity-90 transition">
          Genshin
        </Link>
        <Link href="/wuwa" className="no-underline hover:no-underline hover:opacity-90 transition">
          Wuwa
        </Link>
        <Link href="/zzz" className="no-underline hover:no-underline hover:opacity-90 transition">
          ZZZ
        </Link>
        <Link href="/hsr" className="no-underline hover:no-underline hover:opacity-90 transition">
          HSR
        </Link>
      </nav>

      {/* Kanan - Tombol Cek Pesanan + Toggle Theme */}
      <div className="flex items-center gap-4">
        <Link
          href="/tracker"
          className="px-4 py-2 rounded-lg font-semibold transition bg-white/20 hover:bg-white/30 text-white no-underline hover:no-underline"
        >
          Cek Pesanan
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
