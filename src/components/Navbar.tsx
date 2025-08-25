"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Search } from "lucide-react"; // Import icon search

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-extrabold text-indigo-600 dark:text-indigo-400 no-underline hover:opacity-80 transition-colors duration-300"
          >
            🎮 Havena Store
          </Link>
        </div>

        {/* Menu Tengah */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/genshin" className="nav-link">Genshin</Link>
          <Link href="/wuwa" className="nav-link">Wuwa</Link>
          <Link href="/zzz" className="nav-link">ZZZ</Link>
          <Link href="/hsr" className="nav-link">HSR</Link>
        </nav>

        {/* Kanan */}
        <div className="flex items-center gap-4">
          <Link
            href="/tracker"
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors duration-300 bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm"
          >
            <Search size={18} /> {/* Icon search */}
            <span>Cek Pesanan</span>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
