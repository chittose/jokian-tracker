"use client"

import { useState, Fragment } from "react"
import Image from "next/image"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon, ShoppingCartIcon } from "@heroicons/react/24/solid"

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
    img: "/wuwa.webp",
    options: [
      { label: "Huanglong", price: "Rp 100.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Tethys' Deep", price: "Rp 25.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Rinascita Map", price: "Rp 1000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Vault Underground", price: "Rp 125.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Beohr Waters", price: "Rp 25.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Avinoleum", price: "Rp 1.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Septimont", price: "Rp 150.000", description: ["Sudah termasuk Culus ✅","Sudah termasuk Quest ✅","Tracking Real-Time ✅","100% Human ✅"] },
    ],
  },
  {
    name: "Konten End Game",
    img: "/wuwa.webp",
    options: [
      { label: "Tower Of Adversity", price: "Rp 50.000", description: ["Fullstar (jika memenuhi syarat) ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Whimpering Wastes", price: "Rp 100.000", description: ["Fullstar (jika memenuhi syarat) ✅","Tracking Real-Time ✅","100% Human ✅"] },
    ],
  },
  {
    name: "Rawat Akun",
    img: "/wuwa.webp",
    options: [
      { label: "Daily - 1 Hari", price: "Rp 20.000", description: ["Burn WavePlate sesuai request ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Daily - 3 Hari", price: "Rp 50.000", description: ["Burn WavePlate sesuai request ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Daily - 7 Hari", price: "Rp 80.000", description: ["Burn WavePlate sesuai request ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Daily - 14 Hari", price: "Rp 120.000", description: ["Burn WavePlate sesuai request ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Daily - 1 Bulan", price: "Rp 200.000", description: ["Burn WavePlate sesuai request ✅","Tracking Real-Time ✅","100% Human ✅"] },
      { label: "Daily + Event", price: "Rp 250.000", description: ["Burn WavePlate sesuai request ✅","Tracking Real-Time ✅","100% Human ✅"] },
    ],
  },
]

export default function GenshinPage() {
  const [selectedOptions, setSelectedOptions] = useState<(JokiOption | null)[]>(jokiOptions.map(() => null))

  const handleSelectChange = (index: number, value: JokiOption | null) => {
    const newSelection = [...selectedOptions]
    newSelection[index] = value
    setSelectedOptions(newSelection)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 p-6">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 drop-shadow-lg">
        🎮 Joki Genshin Impact
      </h1>

      {/* Grid Card Paket — dinaikin layer-nya */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {jokiOptions.map((item, idx) => {
          const selected = selectedOptions[idx]

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

                {/* Dropdown */}
                <Listbox
                  value={selected}
                  onChange={(value: JokiOption | null) => handleSelectChange(idx, value)}
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
                      {/* Options: z super tinggi supaya pasti di atas */}
                      <Listbox.Options className="absolute z-[9999] mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white dark:bg-gray-700 py-1 text-base shadow-lg ring-1 ring-black/10 focus:outline-none sm:text-sm">
                        {item.options.map((opt, optIdx) => (
                          <Listbox.Option
                            key={optIdx}
                            className={({ active }) =>
                              `${active ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-white" : "text-gray-900 dark:text-gray-100"} 
                              cursor-pointer select-none relative py-2 pl-10 pr-4`
                            }
                            value={opt}
                          >
                            {({ selected }) => (
                              <>
                                <span className={`${selected ? "font-semibold" : "font-normal"} block truncate`}>
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

                {/* Detail pilihan */}
                {selected && (
                  <>
                    <ul className="mb-4 mt-4 text-left list-disc list-inside text-gray-700 dark:text-gray-300">
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
                    href={`/payment?game=${encodeURIComponent(item.name)}&paket=${encodeURIComponent(selected.label)}&harga=${encodeURIComponent(selected.price)}&desc=${encodeURIComponent(selected.description.join("|"))}`}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl transition font-semibold mt-4 shadow-md hover:shadow-lg"
                  >
                    <ShoppingCartIcon className="w-5 h-5" />
                    Pesan Sekarang
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Feature Highlights — dibikin layer bawah */}
      <div className="relative z-0 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        {[
          { icon: "🚀", title: "Cepat & Efisien", text: "Proses joki instan dengan sistem tracking real-time." },
          { icon: "🔒", title: "Aman & Terpercaya", text: "Privasi dan keamanan akun kamu adalah prioritas utama kami." },
          { icon: "💸", title: "Murah & Transparan", text: "Harga jelas tanpa biaya tersembunyi, semua bisa joki!" },
        ].map((f, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl hover:shadow-indigo-400/20 transition transform hover:-translate-y-1"
          >
            <span className="text-3xl">{f.icon}</span>
            <h3 className="font-bold text-lg mt-2 text-indigo-600 dark:text-indigo-400">{f.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
