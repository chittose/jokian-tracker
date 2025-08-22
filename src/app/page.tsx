"use client"

import { useState } from "react"

export default function Home() {
  const [order, setOrder] = useState("")
  const [result, setResult] = useState<any>(null)

  const handleSearch = async () => {
    if (!order) return
    try {
      const res = await fetch(`/api/search?order_id=${order}`)
      if (!res.ok) throw new Error("Error fetching data")
      const data = await res.json()
      setResult(data)
    } catch (err) {
      setResult({ error: "Order tidak ditemukan" })
    }
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Judul utama */}
      <h1 style={{ marginBottom: "16px", color: "#00d4ff" }}>
        NAMA JOKI
      </h1>

      {/* Search bar */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter Order ID"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #444",
            outline: "none",
            fontSize: "1rem",
            width: "220px",
            marginRight: "10px",
            background: "#2a2a3d",
            color: "#f5f5f5",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            background: "#00d4ff",
            color: "#000",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      {/* Instruksi - hanya tampil sebelum ada result */}
      {!result && (
        <p style={{ marginBottom: "30px", fontSize: "1rem", color: "#ccc" }}>
          Masukkan Order ID untuk mengetahui progress jokian Anda
        </p>
      )}

      {/* Result table */}
      {result && !result.error && (
        <div className="result-box" style={{ overflowX: "auto", marginTop: "20px" }}>
          <table
            style={{
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto",
              borderCollapse: "collapse",
              textAlign: "center",
              background: "#1b1b2e",
              border: "1px solid #555",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <thead>
              <tr style={{ background: "#2a2a3d" }}>
                <th style={{ border: "1px solid #555", padding: "10px" }}>Order ID</th>
                <th style={{ border: "1px solid #555", padding: "10px" }}>Buyer</th>
                <th style={{ border: "1px solid #555", padding: "10px" }}>Game</th>
                <th style={{ border: "1px solid #555", padding: "10px" }}>Tipe Joki</th>
                <th style={{ border: "1px solid #555", padding: "10px" }}>Progress</th>
                <th style={{ border: "1px solid #555", padding: "10px" }}>ETA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #555", padding: "10px" }}>{result.order_id}</td>
                <td style={{ border: "1px solid #555", padding: "10px" }}>{result.buyer}</td>
                <td style={{ border: "1px solid #555", padding: "10px" }}>{result.game}</td>
                <td style={{ border: "1px solid #555", padding: "10px" }}>
                  {result.tipe_joki ?? "-"}
                </td>
                <td style={{ border: "1px solid #555", padding: "10px" }}>{result.progress}</td>
                <td style={{ border: "1px solid #555", padding: "10px" }}>
                  {result.eta ?? "-"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Error message */}
      {result?.error && (
        <div className="result-box" style={{ marginTop: "20px" }}>
          <p>{result.error}</p>
        </div>
      )}
    </div>
  )
}
