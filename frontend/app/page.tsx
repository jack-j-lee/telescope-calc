"use client";

import { useState } from "react";
import { computeAiryDisk } from "../lib/api";

export default function Page() {
  const [fNumber, setFNumber] = useState("10");
  const [wavelengthNm, setWavelengthNm] = useState("550");
  const [resultUm, setResultUm] = useState<number | null>(null);
  const [formula, setFormula] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function onCompute() {
    setError("");
    setResultUm(null);

    const f = Number(fNumber);
    const nm = Number(wavelengthNm);

    if (!Number.isFinite(f) || f <= 0) return setError("F/# must be a positive number.");
    if (!Number.isFinite(nm) || nm <= 0) return setError("Wavelength must be a positive number.");

    try {
      const wavelength_m = nm * 1e-9;
      const out = await computeAiryDisk({ f_number: f, wavelength_m });
      setResultUm(out.diameter_um);
      setFormula(out.formula);
    } catch (e: any) {
      setError(e?.message ?? "Unknown error");
    }
  }

  return (
    <main>
      <h1 style={{ marginTop: 0 }}>Telescope Optical Calculator</h1>
      <p>Airy disk diameter in the focal plane from F/# and wavelength.</p>

      <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
        <label>
          F/# (dimensionless)
          <input
            value={fNumber}
            onChange={(e) => setFNumber(e.target.value)}
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </label>

        <label>
          Wavelength (nm)
          <input
            value={wavelengthNm}
            onChange={(e) => setWavelengthNm(e.target.value)}
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </label>

        <button
          onClick={onCompute}
          style={{ padding: 10, cursor: "pointer" }}
        >
          Compute
        </button>

        {error && <div style={{ color: "crimson" }}>{error}</div>}

        {resultUm !== null && (
          <div style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
            <div><b>Airy disk diameter:</b> {resultUm.toFixed(3)} µm</div>
            <div style={{ marginTop: 6, color: "#444" }}>{formula}</div>
          </div>
        )}
      </div>
    </main>
  );
}