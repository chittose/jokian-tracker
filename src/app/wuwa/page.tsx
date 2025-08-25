"use client"

import Link from "next/link"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 p-6 text-center">
      
      <h1 className="text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-6 drop-shadow-md">
        Coming Soon! ⏳
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mb-6">
        Layanan untuk game ini masih dalam pengembangan. <br/>
        Jangan khawatir, worker untuk game ini akan segera hadir!
      </p>

      <Link
        href="/"
        className="px-6 py-3 rounded-xl font-semibold bg-indigo-500 hover:bg-indigo-600 text-white shadow transition"
      >
        Kembali ke Homepage
      </Link>

      <p className="text-gray-500 dark:text-gray-400 mt-6">
        Tetap pantau Havena Store untuk update terbaru!
      </p>
    </div>
  )
}
