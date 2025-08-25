"use client";

import Link from "next/link";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 via-white to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 min-h-screen transition-colors duration-500 relative overflow-hidden">
      {/* Decorative Cloud Glow */}
      <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-200/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-blue-200/40 rounded-full blur-3xl animate-pulse delay-300" />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-12 sm:py-24 px-4 sm:px-6 relative z-10">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_70%)] pointer-events-none"></div>

        <h1 className="text-3xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 mb-4 sm:mb-6 drop-shadow-lg animate-fade-in">
          Havena Store
        </h1>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 max-w-md sm:max-w-3xl mb-6 sm:mb-8 leading-relaxed transition-colors">
          Selamat datang di Havena Store, tempat aman sekaligus nyaman untuk para gamer sibuk. <br />
          Kami tahu kerja, kuliah, atau sekolah sering bikin waktu main jadi terbatas. <br />
          Tenang, biarkan kami yang mengurus akunmu — dari grinding, event, hingga progress harian. <br />
          Kamu tetap fokus pada dunia nyata, biarkan kami yang menjaga dunia gamemu. 🚀
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/tracker"
            className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 shadow-lg shadow-indigo-500/30 text-white transition transform hover:scale-105 w-full sm:w-auto text-center"
          >
            Cek Pesanan
          </Link>
          <a
            href="#games"
            className="px-6 py-3 rounded-full font-semibold border border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition transform hover:scale-105 w-full sm:w-auto text-center"
          >
            Pilih Game
          </a>
        </div>
      </section>

      {/* Game Categories */}
      <section
        id="games"
        className="max-w-6xl mx-auto py-12 sm:py-20 px-4 sm:px-6 text-center scroll-mt-24 relative z-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-indigo-700 dark:text-indigo-300 transition-colors">
          Pilih Game Favoritmu
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {[
            { href: "/genshin", img: "/genshin.webp", title: "Genshin Impact" },
            { href: "/wuwa", img: "/wuwa.webp", title: "Wuthering Waves" },
            { href: "/hsr", img: "/hsr.webp", title: "Honkai: Star Rail" },
            { href: "/zzz", img: "/zzz.webp", title: "Zenless Zone Zero" },
          ].map((game, i) => (
            <Link
              key={i}
              href={game.href}
              className="group p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-2xl hover:shadow-indigo-500/30 transition transform hover:scale-105"
            >
              <Image
                src={game.img}
                alt={game.title}
                width={300}
                height={200}
                className="rounded-xl mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform"
              />
              <h3 className="font-semibold text-sm sm:text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {game.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto py-12 sm:py-20 px-4 sm:px-6 relative z-10">
        {[
          {
            icon: "🚀",
            title: "Cepat & Efisien",
            text: "Proses joki instan dengan sistem tracking real-time.",
          },
          {
            icon: "🔒",
            title: "Aman & Terpercaya",
            text: "Privasi dan keamanan akun kamu adalah prioritas utama kami.",
          },
          {
            icon: "💸",
            title: "Murah & Transparan",
            text: "Harga jelas tanpa biaya tersembunyi, semua bisa joki!",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-4 sm:p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 text-center hover:shadow-xl hover:shadow-indigo-500/30 transition transform hover:-translate-y-1"
          >
            <span className="text-3xl sm:text-4xl">{item.icon}</span>
            <h3 className="font-bold text-lg sm:text-xl mt-2 mb-2 dark:text-white transition-colors">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-colors">
              {item.text}
            </p>
          </div>
        ))}
      </section>

      {/* CTA Akhir */}
      <section className="w-full bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-12 sm:py-20 transition-colors relative z-10">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-700 dark:text-indigo-400 transition-colors">
            Gabung dengan Komunitas Havena Store 💬
          </h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 transition-colors">
            Dapatkan info terbaru, event seru, dan ngobrol langsung dengan komunitas gamer lainnya.
          </p>
          <a
            href="https://discord.gg/tpGEj4fhkh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/40 text-white transition transform hover:scale-105 w-full sm:w-auto"
          >
            <FaDiscord className="text-lg sm:text-xl" />
            Join Discord
          </a>
        </div>
      </section>
    </div>
  );
}
