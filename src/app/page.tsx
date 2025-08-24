"use client";

import Link from "next/link";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4 drop-shadow-md">
          Havena Store
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-8">
          Your Gaming Haven 🎮 – Surga bagi para gamer untuk layanan joki yang{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            Cepat 🚀, Aman 🔒, dan Murah 💸
          </span>.
        </p>

        <div className="flex gap-4">
          <Link
            href="/tracker"
            className="px-6 py-3 rounded-xl font-semibold bg-indigo-500 hover:bg-indigo-600 text-white shadow transition"
          >
            Cek Pesanan
          </Link>
          {/* Scroll ke #games */}
          <a
            href="#games"
            className="px-6 py-3 rounded-xl font-semibold border border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition"
          >
            Pilih Game
          </a>
        </div>
      </section>

      {/* Game Categories */}
      <section
        id="games"
        className="max-w-5xl mx-auto py-16 px-6 text-center scroll-mt-24"
      >
        <h2 className="text-3xl font-bold mb-8">Pilih Game Favoritmu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Genshin */}
          <Link
            href="/genshin"
            className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition block"
          >
            <Image
              src="/genshin.webp"
              alt="Genshin Impact"
              width={300}
              height={200}
              className="rounded-xl mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg group-hover:text-indigo-600">
              Genshin Impact
            </h3>
          </Link>

          {/* Wuthering Waves */}
          <Link
            href="/wuwa"
            className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition block"
          >
            <Image
              src="/wuwa.webp"
              alt="Wuthering Waves"
              width={300}
              height={200}
              className="rounded-xl mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg group-hover:text-indigo-600">
              Wuthering Waves
            </h3>
          </Link>

          {/* Honkai: Star Rail */}
          <Link
            href="/hsr"
            className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition block"
          >
            <Image
              src="/hsr.webp"
              alt="Honkai: Star Rail"
              width={300}
              height={200}
              className="rounded-xl mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg group-hover:text-indigo-600">
              Honkai: Star Rail
            </h3>
          </Link>

          {/* Zenless Zone Zero */}
          <Link
            href="/zzz"
            className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition block"
          >
            <Image
              src="/zzz.webp"
              alt="Zenless Zone Zero"
              width={300}
              height={200}
              className="rounded-xl mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg group-hover:text-indigo-600">
              Zenless Zone Zero
            </h3>
          </Link>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto py-16 px-6">
        <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 text-center">
          <span className="text-4xl">🚀</span>
          <h3 className="font-bold text-xl mt-2 mb-2">Cepat & Efisien</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Proses joki instan dengan sistem tracking real-time.
          </p>
        </div>
        <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 text-center">
          <span className="text-4xl">🔒</span>
          <h3 className="font-bold text-xl mt-2 mb-2">Aman & Terpercaya</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Privasi dan keamanan akun kamu adalah prioritas utama kami.
          </p>
        </div>
        <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 text-center">
          <span className="text-4xl">💸</span>
          <h3 className="font-bold text-xl mt-2 mb-2">Murah & Transparan</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Harga jelas tanpa biaya tersembunyi, semua bisa joki!
          </p>
        </div>
      </section>

      {/* CTA Akhir - FULL WIDTH */}
      <section className="w-full bg-indigo-100 dark:bg-gray-900 py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-400">
            Gabung dengan Komunitas Havena Store 💬
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Dapatkan info terbaru, event seru, dan ngobrol langsung dengan komunitas gamer lainnya.
          </p>
          <a
            href="https://discord.gg/tpGEj4fhkh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow transition"
          >
            <FaDiscord className="text-xl" />
            Join Discord
          </a>
        </div>
      </section>
    </div>
  );
}
