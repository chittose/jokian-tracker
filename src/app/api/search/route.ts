// app/api/search/route.ts
import { google } from "googleapis";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // <<< tambahkan ini

export async function GET(req: Request) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT,
        private_key: process.env.GOOGLE_PRIVATE?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get("order_id");

    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: "Sheet1!A2:F",
    });

    const rows = res.data.values || [];

    if (orderId) {
      const order = rows.find((row) => row[0] === orderId);

      if (!order) {
        return NextResponse.json({ error: "Order not found" }, { status: 404 });
      }

      return NextResponse.json({
        order_id: order[0],
        buyer: order[1],
        game: order[2],
        tipe_joki: order[3],
        progress: order[4],
        eta: order[5],
      });
    }

    const allOrders = rows.map((row) => ({
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
    let message = "Unknown error";
    if (err instanceof Error) message = err.message;

    return NextResponse.json(
      { error: "Internal Server Error", details: message },
      { status: 500 }
    );
  }
}
