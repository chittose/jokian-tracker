import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const orderId = searchParams.get("order_id")

  if (!orderId) {
    return NextResponse.json({ error: "order_id wajib diisi" }, { status: 400 })
  }

  // Mapping prefix ke game
  const prefix = orderId.charAt(0).toUpperCase()
  const prefixToGame: Record<string, string> = {
    G: "Genshin",
    H: "HSR",
    Z: "ZZZ",
    W: "WuWa",
  }

  const game = prefixToGame[prefix]
  if (!game) {
    return NextResponse.json(
      { error: "Prefix tidak valid. Gunakan G/H/Z/W" },
      { status: 400 }
    )
  }

  try {
    const sheetId = process.env.SHEET_ID
    const apiKey = process.env.GOOGLE_API_KEY

    // fetch 4 tab sekaligus
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values:batchGet?ranges=Genshin!A:F&ranges=HSR!A:F&ranges=ZZZ!A:F&ranges=WuWa!A:F&key=${apiKey}`
    const res = await fetch(url)
    const data = await res.json()

    if (!data.valueRanges) {
      return NextResponse.json({ error: "Data sheet kosong" }, { status: 404 })
    }

    // gabung semua tab jadi satu array
    const allRows: string[][] = []
    data.valueRanges.forEach((range: any) => {
      if (range.values) {
        allRows.push(...range.values.slice(1)) // skip header
      }
    })

    // cari orderId di semua tab
    const found = allRows.find((row: string[]) => row[0] === orderId)

    if (!found) {
      return NextResponse.json(
        { error: "Order ID tidak ditemukan" },
        { status: 404 }
      )
    }

    // mapping sesuai kolom A–F
    const [id, penjoki, gameCol, tipeJoki, progress, eta] = found

    return NextResponse.json({
      order_id: id,
      penjoki,
      game: gameCol || game, // fallback ke prefix
      tipe_joki: tipeJoki,
      progress,
      eta,
    })
  } catch (error) {
    console.error("Error fetch sheet:", error)
    return NextResponse.json(
      { error: "Gagal ambil data dari Google Sheets" },
      { status: 500 }
    )
  }
}
