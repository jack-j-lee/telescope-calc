"use client";

import { useState } from "react";
import { computeMagnification } from "../../../lib/api";

export default function MagnificationCalculator() {
  const [telescopeFocalLength, setTelescopeFocalLength] = useState("2032");
  const [eyepieceFocalLength, setEyepieceFocalLength] = useState("25");
  const [result, setResult] = useState<number | null>(null);
  const [formula, setFormula] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function onCompute() {
    setError("");
    setResult(null);

    const telescopeFl = Number(telescopeFocalLength);
    const eyepieceFl = Number(eyepieceFocalLength);

    if (!Number.isFinite(telescopeFl) || telescopeFl <= 0) return setError("Telescope focal length must be a positive number.");
    if (!Number.isFinite(eyepieceFl) || eyepieceFl <= 0) return setError("Eyepiece focal length must be a positive number.");

    try {
      const out = await computeMagnification({ 
        telescope_focal_length_mm: telescopeFl, 
        eyepiece_focal_length_mm: eyepieceFl 
      });
      setResult(out.magnification);
      setFormula(out.formula);
    } catch (e: any) {
      setError(e?.message ?? "Unknown error");
    }
  }

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    marginTop: 4,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    border: "1px solid rgba(0, 212, 255, 0.3)",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 0 0 0 rgba(0, 212, 255, 0.4)"
  } as React.CSSProperties;

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = "#00d4ff";
    e.target.style.boxShadow = "0 0 0 3px rgba(0, 212, 255, 0.2), 0 0 20px rgba(0, 212, 255, 0.3)";
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = "rgba(0, 212, 255, 0.3)";
    e.target.style.boxShadow = "0 0 0 0 rgba(0, 212, 255, 0.4)";
  };

  const cardStyle = {
    display: "grid",
    gap: 20,
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: "2rem",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset",
    maxWidth: 600,
    margin: "0 auto"
  } as React.CSSProperties;

  return (
    <main style={{
      color: "#e0e0e0",
      minHeight: "calc(100vh - 100px)",
      paddingTop: "2rem"
    }}>
      <h1 style={{ 
        marginTop: 0, 
        marginBottom: "0.5rem",
        fontSize: "2.5rem",
        fontWeight: 700,
        background: "linear-gradient(135deg, #00d4ff 0%, #8a2be2 50%, #ff00ff 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textShadow: "0 0 30px rgba(0, 212, 255, 0.3)",
        letterSpacing: "-0.02em"
      }}>
        Magnification Calculator
      </h1>
      <p style={{
        color: "#b0b0b0",
        fontSize: "1.1rem",
        marginBottom: "2rem",
        textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)"
      }}>
        Calculate magnification from telescope and eyepiece focal lengths.
      </p>

      <div style={cardStyle}>
        <label style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          color: "#d0d0d0",
          fontSize: "0.95rem",
          fontWeight: 500
        }}>
          Telescope Focal Length (mm)
          <input
            value={telescopeFocalLength}
            onChange={(e) => setTelescopeFocalLength(e.target.value)}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Enter telescope focal length"
          />
        </label>

        <label style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          color: "#d0d0d0",
          fontSize: "0.95rem",
          fontWeight: 500
        }}>
          Eyepiece Focal Length (mm)
          <input
            value={eyepieceFocalLength}
            onChange={(e) => setEyepieceFocalLength(e.target.value)}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Enter eyepiece focal length"
          />
        </label>

        <button
          onClick={onCompute}
          style={{ 
            padding: "14px 24px", 
            cursor: "pointer",
            backgroundColor: "rgba(0, 212, 255, 0.2)",
            border: "2px solid #00d4ff",
            borderRadius: "10px",
            color: "#00d4ff",
            fontSize: "1.1rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            transition: "all 0.3s ease",
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.3), 0 4px 15px rgba(0, 0, 0, 0.2)",
            textShadow: "0 0 10px rgba(0, 212, 255, 0.5)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 212, 255, 0.3)";
            e.currentTarget.style.boxShadow = "0 0 30px rgba(0, 212, 255, 0.5), 0 6px 20px rgba(0, 0, 0, 0.3)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 212, 255, 0.2)";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 212, 255, 0.3), 0 4px 15px rgba(0, 0, 0, 0.2)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Compute
        </button>

        {error && (
          <div style={{ 
            color: "#ff6b6b", 
            padding: "12px 16px",
            backgroundColor: "rgba(255, 107, 107, 0.1)",
            border: "1px solid rgba(255, 107, 107, 0.3)",
            borderRadius: "8px",
            boxShadow: "0 0 15px rgba(255, 107, 107, 0.2)"
          }}>
            {error}
          </div>
        )}

        {result !== null && (
          <div style={{ 
            padding: "20px", 
            border: "1px solid rgba(138, 43, 226, 0.4)", 
            borderRadius: "12px",
            backgroundColor: "rgba(138, 43, 226, 0.1)",
            boxShadow: "0 0 25px rgba(138, 43, 226, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset",
            backdropFilter: "blur(5px)"
          }}>
            <div style={{
              fontSize: "1.2rem",
              marginBottom: "10px",
              color: "#fff",
              fontWeight: 600
            }}>
              <span style={{
                color: "#8a2be2",
                textShadow: "0 0 10px rgba(138, 43, 226, 0.5)"
              }}>Magnification:</span>{" "}
              <span style={{
                color: "#00d4ff",
                textShadow: "0 0 10px rgba(0, 212, 255, 0.5)"
              }}>
                {result.toFixed(2)}x
              </span>
            </div>
            <div style={{ 
              marginTop: 12, 
              color: "#b0b0b0",
              fontSize: "0.9rem",
              fontFamily: "monospace",
              padding: "10px",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              borderRadius: "6px",
              border: "1px solid rgba(255, 255, 255, 0.05)"
            }}>
              {formula}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
