// app/api/search/route.ts
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get("order_id");

    // API Key dari .env
    const apiKey = process.env.GOOGLE_API_KEY;
    const sheetId = process.env.SHEET_ID;

    // Fetch sheet data sebagai CSV / JSON
    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A2:F?key=${apiKey}`
    );
    const data = await res.json();
    const rows = data.values || [];

    if (orderId) {
      const order = rows.find((row: string[]) => row[0] === orderId);
      if (!order) return NextResponse.json({ error: "Order not found" }, { status: 404 });

      return NextResponse.json({
        order_id: order[0],
        buyer: order[1],
        game: order[2],
        tipe_joki: order[3],
        progress: order[4],
        eta: order[5],
      });
    }

    const allOrders = rows.map((row: string[]) => ({
      order_id: row[0],
      buyer: row[1],
      game: row[2],
      tipe_joki: row[3],
      progress: row[4],
      eta: row[5],
    }));

    return NextResponse.json(allOrders);
  } catch (err: unknown) {
    console.error("Google Sheets API Error:", err);
    let message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: "Internal Server Error", details: message }, { status: 500 });
  }
}
