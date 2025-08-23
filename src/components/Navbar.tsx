"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar({ theme, setTheme }: any) {
  return (
    <header className="flex items-center justify-between p-4 shadow-md">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🎮</span>
        <h1 className="text-xl font-bold text-indigo-500 dark:text-indigo-400">
          Havena Store
        </h1>
      </div>
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </header>
  );
}
