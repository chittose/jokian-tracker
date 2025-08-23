"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [orderId, setOrderId] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!orderId) return;
    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await fetch(`/api/search/game?order_id=${orderId}`);

      // kalau server balikin status bukan 200
      if (!res.ok) {
        throw new Error("⚠️ Orderan Tidak Di Temukan !!!");
      }

      const result = await res.json();

      if (result.error) {
        setError(result.error);
      } else {
        setData(result);
      }
    } catch (err: any) {
      // biar kalau error lebih rapih
      setError(err.message || "Terjadi kesalahan tak terduga.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center py-12 px-4">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
          🎮 Havena Tracker
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base max-w-lg mx-auto">
          Cek status pesanan joki kamu dengan mudah dan real-time 🚀
        </p>
      </header>

      {/* Search Box */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-10 bg-gray-100 dark:bg-gray-800 p-5 rounded-2xl shadow-xl w-full max-w-xl border border-gray-300 dark:border-gray-700">
        <input
          type="text"
          placeholder="Masukkan Order ID..."
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-white"
        >
          {loading ? "🔎 Loading..." : "Cari"}
        </button>
      </div>

      {/* Error */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="w-full max-w-xl mb-6"
        >
          <div className="text-red-700 dark:text-red-300 font-medium bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 px-4 py-3 rounded-lg shadow flex items-center gap-2">
            ❌ {error}
          </div>
        </motion.div>
      )}

      {/* Tabel Hasil dengan animasi */}
      <AnimatePresence>
        {data && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="overflow-x-auto w-full max-w-5xl"
          >
            <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl overflow-hidden">
              <table className="w-full text-sm sm:text-base">
                <thead className="bg-gradient-to-r from-cyan-600 to-blue-700 dark:from-gray-700 dark:to-gray-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">ORDER ID</th>
                    <th className="px-4 py-3 text-left">PENJOKI</th>
                    <th className="px-4 py-3 text-left">GAME</th>
                    <th className="px-4 py-3 text-left">TIPE JOKI</th>
                    <th className="px-4 py-3 text-left">PROGRESS</th>
                    <th className="px-4 py-3 text-left">ETA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                    <td className="px-4 py-3 font-mono text-black dark:text-white">
                      {data.order_id}
                    </td>
                    <td className="px-4 py-3 text-black dark:text-white">
                      {data.penjoki}
                    </td>
                    <td className="px-4 py-3 text-black dark:text-white">
                      {data.game}
                    </td>
                    <td className="px-4 py-3 text-black dark:text-white">
                      {data.tipe_joki}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                          data.progress.toLowerCase().includes("done")
                            ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                            : data.progress.toLowerCase().includes("progress")
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                            : "bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300"
                        }`}
                      >
                        {data.progress}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-black dark:text-white">
                      {data.eta}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
