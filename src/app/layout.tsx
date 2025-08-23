"use client";

import "./../styles/globals.css";
import { ReactNode, useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";
import Head from "next/head";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <html lang="en">
      <Head>
        <title>Havena Store</title>
        <meta
          name="description"
          content="Tracker Joki Game Havena Store 🚀 - Cek status pesanan joki dengan mudah dan real-time"
        />
      </Head>
      <body className="bg-background text-foreground min-h-screen flex flex-col transition-colors duration-300">
        {/* Navbar */}
        <header className="flex items-center justify-between p-4 shadow-md">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎮</span>
            <h1 className="text-xl font-bold text-indigo-500 dark:text-indigo-400">
              Havena Store
            </h1>
          </div>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </header>

        {/* Content */}
        <main className="flex-1 p-6">{children}</main>

        {/* Footer */}
        <footer className="p-4 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
          © {new Date().getFullYear()} Havena Store. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
