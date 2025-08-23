"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: (value: string) => void;
}) {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-14 h-8 flex items-center rounded-full bg-gray-400 dark:bg-gray-600 p-1 transition-colors"
    >
      <div
        className={`w-6 h-6 flex items-center justify-center rounded-full bg-white text-black dark:bg-black dark:text-white transform transition-transform ${
          theme === "dark" ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? (
          <Moon size={14} />
        ) : (
          <Sun size={14} />
        )}
      </div>
    </button>
  );
}
