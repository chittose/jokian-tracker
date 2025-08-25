"use client";

import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { Listbox, Transition, Dialog } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

interface JokiOption {
  label: string;
  price: string;
  description: string[];
}

interface JokiCategory {
  name: string;
  img: string;
  options: JokiOption[];
}

const jokiOptions: JokiCategory[] = [
  {
    name: "Eksplore",
    img: "/genshin.webp",
    options: [
      { label: "Mondo - All Region", price: "Rp 100.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Mondo - Perwilayah", price: "Rp 25.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Mondo - PerPersen(Minimal 90%)", price: "Rp 1000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Liyue - All Region", price: "Rp 125.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Liyue - Perwilayah", price: "Rp 25.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Liyue - PerPersen(Minimal 90%)", price: "Rp 1.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Inazuma - All Region", price: "Rp 150.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Inazuma - Perwilayah", price: "Rp 30.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Inazuma - PerPersen(Minimal 90%)", price: "Rp 1.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Fontaine - All Region", price: "Rp 250.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Fontaine - Perwilayah", price: "Rp 50.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Fontaine - PerPersen(Minimal 90%)", price: "Rp 1.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Natlan - All Region", price: "Rp 520.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Natlan - Map 5.0-5.1", price: "Rp 150.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Natlan - Map 5.2-5.4", price: "Rp 190.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Natlan - Map 5.5", price: "Rp 180.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Natlan - PerPersen(Minimal 90%)", price: "Rp 1.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
    ],
  },
  {
    name: "Konten End Game",
    img: "/genshin.webp",
    options: [
      { label: "Spiral Abyss", price: "Rp 50.000", description: ["Fullstar (jika memenuhi syarat) ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Imaginarium Theater", price: "Rp 100.000", description: ["Fullstar (jika memenuhi syarat) ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Stygian Onslaught", price: "Rp 90.000", description: ["Fullstar (jika memenuhi syarat) ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Paket Lengkap", price: "Rp 200.000", description: ["Fullstar (jika memenuhi syarat) ✅","Tracking Real-Time ✅","100% Human ✅"] },
    ],
  },
  {
    name: "Rawat Akun",
    img: "/genshin.webp",
    options: [
      { label: "Daily - 1 Hari", price: "Rp 20.000", description: ["Burn Resin sesuai request ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Daily - 3 Hari", price: "Rp 50.000", description: ["Burn Resin sesuai request ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Daily - 7 Hari", price: "Rp 80.000", description: ["Burn Resin sesuai request ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Daily - 14 Hari", price: "Rp 120.000", description: ["Burn Resin sesuai request ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Daily - 1 Bulan", price: "Rp 200.000", description: ["Burn Resin sesuai request ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Daily + Event", price: "Rp 250.000", description: ["Burn Resin sesuai request ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Event - Story", price: "Rp 20.000", description: ["Burn Resin sesuai request ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Event - Non Story", price: "Rp 10.000", description: ["Burn Resin sesuai request ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Joki Mancing", price: "Rp 45.000", description: ["Burn Resin sesuai request ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Joki Story - Archon Quest PerAct", price: "Rp 20.000", description: ["Burn Resin sesuai request ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Joki Story - Story Quest Character", price: "Rp 15.000", description: ["Burn Resin sesuai request ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Joki Story - Hangout Event", price: "Rp 10.000", description: ["Burn Resin sesuai request ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Joki Material Per 80pcs", price: "Rp 5.000", description: ["Burn Resin sesuai request ✅","Tracking Real-Time ✅","100% Human ✅"] },
    ],
  },
];

export default function GenshinPage() {
  const [selectedOptions, setSelectedOptions] = useState<(JokiOption | null)[]>(jokiOptions.map(() => null));
  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIdx, setModalIdx] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSelectChange = (index: number, value: JokiOption | null) => {
    const newSelection = [...selectedOptions];
    newSelection[index] = value;
    setSelectedOptions(newSelection);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 p-6">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 drop-shadow-lg">
        🎮 Joki Genshin Impact
      </h1>

      {/* Grid Card Paket */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {jokiOptions.map((item, idx) => {
          const selected = selectedOptions[idx];

          return (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-indigo-400/20 transition transform hover:-translate-y-2 flex flex-col"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-t-2xl"
              />

              <div className="p-5 flex flex-col flex-1 relative">
                <h2 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400 text-center">
                  {item.name}
                </h2>

                {/* Desktop → Listbox, Mobile → Modal */}
                {!isMobile ? (
                  <Listbox
                    value={selected}
                    onChange={(value: JokiOption | null) =>
                      handleSelectChange(idx, value)
                    }
                  >
                    <div className="relative w-full">
                      <Listbox.Button className="relative w-full cursor-pointer rounded-xl bg-gray-100 dark:bg-gray-700 border border-indigo-300 dark:border-gray-600 py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:text-sm">
                        <span className="block truncate text-gray-900 dark:text-gray-100">
                          {selected ? selected.label : "Pilih paket..."}
                        </span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon className="h-5 w-5 text-indigo-500" />
                        </span>
                      </Listbox.Button>

                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white dark:bg-gray-700 py-1 text-base shadow-lg ring-1 ring-black/10 focus:outline-none sm:text-sm">
                          {item.options.map((opt, optIdx) => (
                            <Listbox.Option
                              key={optIdx}
                              className={({ active }) =>
                                `${
                                  active
                                    ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-white"
                                    : "text-gray-900 dark:text-gray-100"
                                } 
                                cursor-pointer select-none relative py-2 pl-10 pr-4`
                              }
                              value={opt}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`${
                                      selected
                                        ? "font-semibold"
                                        : "font-normal"
                                    } block truncate`}
                                  >
                                    {opt.label}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-500 dark:text-indigo-400">
                                      <CheckIcon className="h-5 w-5" />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                ) : (
                  <button
                    onClick={() => {
                      setModalIdx(idx);
                      setModalOpen(true);
                    }}
                    className="w-full cursor-pointer rounded-xl bg-gray-100 dark:bg-gray-700 border border-indigo-300 dark:border-gray-600 py-2 px-3 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:text-sm"
                  >
                    <span className="block truncate text-gray-900 dark:text-gray-100">
                      {selected ? selected.label : "Pilih paket..."}
                    </span>
                  </button>
                )}

                {/* Detail pilihan */}
                {selected && (
                  <>
                    <ul className="mb-4 mt-4 text-left list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
                      {selected.description.map((desc, dIdx) => (
                        <li key={dIdx}>{desc}</li>
                      ))}
                    </ul>
                    <p className="text-indigo-600 dark:text-indigo-400 font-bold text-lg mb-4">
                      {selected.price}
                    </p>
                  </>
                )}

                <div className="flex-1" />

                {/* Tombol hanya muncul kalau sudah pilih paket */}
                {selected && (
                  <a
                    href={`/payment?game=${encodeURIComponent(
                      item.name
                    )}&paket=${encodeURIComponent(
                      selected.label
                    )}&harga=${encodeURIComponent(
                      selected.price
                    )}&desc=${encodeURIComponent(
                      selected.description.join("|")
                    )}`}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl transition font-semibold mt-4 shadow-md hover:shadow-lg"
                  >
                    <ShoppingCartIcon className="w-5 h-5" />
                    Pesan Sekarang
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL Mobile */}
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        className="relative z-[9999]"
      >
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-end justify-center">
          <Dialog.Panel
            className="w-full max-w-md rounded-t-2xl bg-white dark:bg-gray-800 
                       shadow-xl animate-slide-up h-[70vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
              <Dialog.Title className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                Pilih Paket
              </Dialog.Title>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <XMarkIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            {/* Isi Scrollable */}
            <div className="p-4 flex flex-col gap-2">
              {modalIdx !== null &&
                jokiOptions[modalIdx].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      handleSelectChange(modalIdx, opt);
                      setModalOpen(false);
                    }}
                    className="text-left w-full px-4 py-3 rounded-lg hover:bg-indigo-100 
                               dark:hover:bg-indigo-900 text-gray-900 dark:text-gray-100 
                               border transition"
                  >
                    {opt.label}
                    <span className="text-indigo-600 font-semibold ml-2">
                      {opt.price}
                    </span>
                  </button>
                ))}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
