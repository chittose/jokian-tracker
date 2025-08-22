import "./globals.css";
import ThemeToggle from "../components/ThemeToggle";

export const metadata = {
  title: "Joki Tracker",
  description: "Lacak progress joki Anda dengan mudah",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}>
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
