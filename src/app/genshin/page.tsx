"use client"

import { useState, Fragment } from "react"
import Image from "next/image"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid"

interface JokiOption {
  label: string
  price: string
  description: string[]
}

interface JokiCategory {
  name: string
  img: string
  options: JokiOption[]
}

const jokiOptions: JokiCategory[] = [
  {
    name: "Eksplore",
    img: "/genshin.webp",
    options: [
      { label: "Map 5.5", price: "Rp 70.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest yang bersangkutan ✅","Bisa di track secara Real-Time ✅","Proses joki tidak menggunakan Bot/Cheat, 100% Human ✅"] },
      { label: "Map 5.6", price: "Rp 75.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest yang bersangkutan ✅","Bisa di track secara Real-Time ✅","Proses joki tidak menggunakan Bot/Cheat, 100% Human ✅"] },
      { label: "Map 5.7", price: "Rp 80.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest yang bersangkutan ✅","Bisa di track secara Real-Time ✅","Proses joki tidak menggunakan Bot/Cheat, 100% Human ✅"] },
      { label: "Map 5.8", price: "Rp 85.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest yang bersangkutan ✅","Bisa di track secara Real-Time ✅","Proses joki tidak menggunakan Bot/Cheat, 100% Human ✅"] },
    ],
  },
  {
    name: "Konten End Game",
    img: "/genshin.webp",
    options: [
      { label: "Spiral Abyss", price: "Rp 50.000", description: ["Di jamin fullstar (Jika akun memenuhi kriteria) ✅","Bisa di track secara Real-Time ✅","Proses joki tidak menggunakan Bot/Cheat, 100% Human ✅"] },
      { label: "Imaginarium Theater", price: "Rp 100.000", description: ["Di jamin fullstar (Jika akun memenuhi kriteria) ✅","Bisa di track secara Real-Time ✅","Proses joki tidak menggunakan Bot/Cheat, 100% Human ✅"] },
      { label: "Stygian Onslaught", price: "Rp 90.000", description: ["Di jamin fullstar (Jika akun memenuhi kriteria) ✅","Bisa di track secara Real-Time ✅","Proses joki tidak menggunakan Bot/Cheat, 100% Human ✅"] },
      { label: "Paket Bundle Lengkap", price: "Rp 200.000", description: ["Di jamin fullstar (Jika akun memenuhi kriteria) ✅","Bisa di track secara Real-Time ✅","Proses joki tidak menggunakan Bot/Cheat, 100% Human ✅"] },
    ],
  },
  {
    name: "Rawat Akun",
    img: "/genshin.webp",
    options: [
      { label: "Daily - 1 Hari", price: "Rp 20.000", description: ["Sudah termasuk Burn Resin (Bisa request mau di pakai untuk apa) ✅","Bisa di track secara Real-Time ✅","Proses joki tidak menggunakan Bot/Cheat, 100% Human ✅"] },
      { label: "Daily - 3 Hari", price: "Rp 50.000", description: ["Sudah termasuk Burn Resin (Bisa request mau di pakai untuk apa) ✅","Bisa di track secara Real-Time ✅","Proses joki tidak menggunakan Bot/Cheat, 100% Human ✅"] },
      { label: "Daily - 7 Hari", price: "Rp 80.000", description: ["Sudah termasuk Burn Resin (Bisa request mau di pakai untuk apa) ✅","Bisa di track secara Real-Time ✅","Proses joki tidak menggunakan Bot/Cheat, 100% Human ✅"] },
      { label: "Daily - 14 Hari", price: "Rp 120.000", description: ["Sudah termasuk Burn Resin (Bisa request mau di pakai untuk apa) ✅","Bisa di track secara Real-Time ✅","Proses joki tidak menggunakan Bot/Cheat, 100% Human ✅"] },
      { label: "Daily - 1 Bulan", price: "Rp 200.000", description: ["Sudah termasuk Burn Resin (Bisa request mau di pakai untuk apa) ✅","Bisa di track secara Real-Time ✅","Proses joki tidak menggunakan Bot/Cheat, 100% Human ✅"] },
      { label: "Daily - 1 Bulan + Event", price: "Rp 250.000", description: ["Sudah termasuk Burn Resin (Bisa request mau di pakai untuk apa) ✅","Bisa di track secara Real-Time ✅","Proses joki tidak menggunakan Bot/Cheat, 100% Human ✅"] },
      { label: "Event", price: "Rp 40.000", description: ["Sudah termasuk Burn Resin (Bisa request mau di pakai untuk apa) ✅","Bisa di track secara Real-Time ✅","Proses joki tidak menggunakan Bot/Cheat, 100% Human ✅"] },
    ],
  },
]

export default function GenshinPage() {
  const [selectedOptions, setSelectedOptions] = useState<(JokiOption | null)[]>(
    jokiOptions.map(() => null)
  )

  const handleSelectChange = (index: number, value: JokiOption | null) => {
    if (!value) return
    const newSelection = [...selectedOptions]
    newSelection[index] = value
    setSelectedOptions(newSelection)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
        Daftar Joki Genshin Impact
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {jokiOptions.map((item, idx) => {
          const selected = selectedOptions[idx]

          return (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-visible flex flex-col items-center"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-t-2xl"
              />

              <div className="p-4 flex flex-col items-center w-full relative">
                <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {item.name}
                </h2>

                <Listbox
                  value={selected}
                  onChange={(value: JokiOption | null) =>
                    handleSelectChange(idx, value)
                  }
                >
                  <div className="relative w-full">
                    <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm">
                      <span className="block truncate text-gray-900 dark:text-gray-100">
                        {selected ? selected.label : "Pilih..."}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {item.options.map((opt, optIdx) => (
                          <Listbox.Option
                            key={optIdx}
                            className={({ active }) =>
                              `${
                                active
                                  ? "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-white"
                                  : "text-gray-900 dark:text-gray-100"
                              } cursor-pointer select-none relative py-2 pl-10 pr-4`
                            }
                            value={opt}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`${
                                    selected ? "font-semibold" : "font-normal"
                                  } block truncate`}
                                >
                                  {opt.label}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600 dark:text-blue-400">
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

                {selected && (
                  <>
                    <ul className="mb-4 mt-4 text-left list-disc list-inside text-gray-700 dark:text-gray-300">
                      {selected.description.map((desc, dIdx) => (
                        <li key={dIdx}>{desc}</li>
                      ))}
                    </ul>
                    <p className="text-blue-600 dark:text-blue-400 font-bold mb-4">
                      {selected.price}
                    </p>
                    <a
                      href="https://discord.gg/tpGEj4fhkh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
                    >
                      Pesan Sekarang
                    </a>
                  </>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Highlights ala homepage */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto py-16 px-6 mt-16">
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
    </div>
  )
}
