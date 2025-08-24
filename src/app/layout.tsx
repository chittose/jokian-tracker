"use client";

import "./../styles/globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Navbar fixed di atas */}
          <Navbar />

          {/* kasih padding-top biar konten nggak ketiban Navbar */}
          <main className="flex-1 p-6 pt-20">{children}</main>

          {/* Footer */}
          <footer className="p-4 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
            © {new Date().getFullYear()} Havena Store. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
