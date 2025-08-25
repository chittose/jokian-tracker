"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

type PaymentMethod = {
  name: string;
  number: string;
  bank: string;
  logo: string;
  holder: string;
};

type Step = {
  title: string;
  desc: ReactNode;
};

export default function PaymentPage() {
  const searchParams = useSearchParams();

  const game = searchParams.get("game") ?? "-";
  const paket = searchParams.get("paket") ?? "-";
  const harga = searchParams.get("harga") ?? "-";
  const desc = searchParams.get("desc");

  const descriptions =
    desc?.split("|").map((s) => s.trim()).filter(Boolean) ?? [];

  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [showNotif, setShowNotif] = useState(false);
  const [loading, setLoading] = useState(false);

  const paymentMethods: PaymentMethod[] = [
    {
      name: "Dana",
      number: "081234567890",
      bank: "DANA",
      logo: "/dana.webp",
      holder: "Havena Store",
    },
    {
      name: "OVO",
      number: "081298765432",
      bank: "OVO",
      logo: "/ovo.webp",
      holder: "Havena Store",
    },
    {
      name: "GoPay",
      number: "085612345678",
      bank: "GOPAY",
      logo: "/gopay.webp",
      holder: "Havena Store",
    },
  ];

  const steps: Step[] = [
    {
      title: "Hubungi Kami",
      desc: (
        <>
          Join server Discord kami lalu chat langsung dengan admin melalui{" "}
          <a
            href="https://discord.gg/tpGEj4fhkh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline font-semibold"
          >
            Discord
          </a>
          .
        </>
      ),
    },
    {
      title: "Diskusi",
      desc:
        "Diskusikan jenis jasa yang kamu butuhkan agar sesuai dengan kebutuhan akunmu.",
    },
    {
      title: "Pembayaran",
      desc:
        "Lakukan pembayaran melalui metode yang tersedia (Dana, OVO, GoPay).",
    },
    {
      title: "Mulai Pengerjaan",
      desc:
        "Setelah pembayaran terkonfirmasi, tim kami akan segera memulai pengerjaan dan memberikan update progress secara berkala.",
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleConfirmPayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowNotif(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center justify-start p-6">
      {/* --- Card utama pembayaran --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 w-full max-w-lg border border-gray-200 dark:border-gray-700"
      >
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-900 dark:text-white">
          💳 Halaman Pembayaran
        </h1>

        {/* Order Info */}
        <div className="mb-6 space-y-3">
          <p className="text-lg text-gray-800 dark:text-gray-200">
            <span className="font-semibold">🎮 Game:</span> {game}
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-200">
            <span className="font-semibold">📦 Paket:</span> {paket}
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <span className="font-semibold">💰 Harga:</span>
            <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 font-bold shadow-sm">
              {harga}
            </span>
          </p>

          {descriptions.length > 0 && (
            <ul className="mt-4 space-y-2">
              {descriptions.map((d, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle
                    size={18}
                    className="text-green-500 dark:text-green-400"
                  />
                  {d}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mb-6" />

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowPopup(true)}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl shadow-lg transition"
        >
          Bayar Sekarang
        </motion.button>
      </motion.div>

      {/* --- Cara Order Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-2xl mt-8 border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">
          ❓ Cara Order Jasa Joki
        </h2>

        {/* pakai ordered list + grid supaya bulatan rapih & sejajar */}
        <ol className="space-y-6">
          {steps.map((item, i) => (
            <li
              key={i}
              className="grid grid-cols-[2.5rem_1fr] gap-4 items-start relative"
            >
              {/* garis vertikal (opsional) */}
              {i < steps.length - 1 && (
                <span className="absolute left-5 top-10 bottom-[-1rem] w-px bg-indigo-200 dark:bg-indigo-800" />
              )}

              {/* angka step bulat fix */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white font-bold shadow-md">
                {i + 1}
              </div>

              {/* konten */}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </motion.div>

      {/* --- Popup Modal --- */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 w-full max-w-md relative border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-xl font-bold mb-5 text-gray-900 dark:text-white text-center">
                Pilih Metode Pembayaran
              </h2>

              <ul className="space-y-4">
                {paymentMethods.map((method, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition p-4 rounded-xl border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={method.logo}
                        alt={method.name}
                        className="w-12 h-12 rounded-lg shadow-sm"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {method.name} ({method.bank})
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 font-mono text-sm">
                          {method.number}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          A/N: {method.holder}
                        </p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => copyToClipboard(method.number)}
                      className={`flex items-center gap-1 ${
                        copied === method.number
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                      } text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-md`}
                    >
                      <Copy size={14} />
                      {copied === method.number ? "Tersalin" : "Salin"}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>

              {/* Tombol saya sudah bayar */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleConfirmPayment}
                disabled={loading}
                className="mt-6 w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 rounded-xl font-semibold shadow-md flex items-center justify-center gap-2 transition"
              >
                {loading ? (
                  <motion.div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <CheckCircle size={18} /> Saya sudah bayar
                  </>
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPopup(false)}
                className="mt-3 w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white py-2.5 rounded-xl font-medium shadow"
              >
                Tutup
              </motion.button>

              {/* Notifikasi hubungi admin */}
              <AnimatePresence>
                {showNotif && (
                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-5 flex flex-col gap-3 text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 px-4 py-3 rounded-xl border border-blue-300 dark:border-blue-700 text-sm shadow-md"
                  >
                    ✅ Terima kasih! <br />
                    Silakan hubungi admin di Discord untuk menyerahkan bukti transfer:
                    <a
                      href="https://discord.gg/tpGEj4fhkh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg text-center font-semibold shadow"
                    >
                      Hubungi Admin di Discord
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
