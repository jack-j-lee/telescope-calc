"use client";

import { useState } from "react";
import { computeAiryDisk, computeFOV } from "../lib/api";

export default function Page() {
  // Airy Disk states
  const [fNumber, setFNumber] = useState("10");
  const [wavelengthNm, setWavelengthNm] = useState("550");
  const [resultUm, setResultUm] = useState<number | null>(null);
  const [formula, setFormula] = useState<string>("");
  const [error, setError] = useState<string>("");

  // FOV states
  const [sensorWidthMm, setSensorWidthMm] = useState("23.5");
  const [sensorHeightMm, setSensorHeightMm] = useState("15.6");
  const [pixelsWidth, setPixelsWidth] = useState("6000");
  const [pixelsHeight, setPixelsHeight] = useState("4000");
  const [focalLengthMm, setFocalLengthMm] = useState("2000");
  const [fovResult, setFovResult] = useState<any | null>(null);
  const [fovError, setFovError] = useState<string>("");
  const [fovFormula, setFovFormula] = useState<string>("");

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

  async function onComputeFOV() {
    setFovError("");
    setFovResult(null);

    const sw = Number(sensorWidthMm);
    const sh = Number(sensorHeightMm);
    const pw = Number(pixelsWidth);
    const ph = Number(pixelsHeight);
    const fl = Number(focalLengthMm);

    if (!Number.isFinite(sw) || sw <= 0) return setFovError("Sensor width must be a positive number.");
    if (!Number.isFinite(sh) || sh <= 0) return setFovError("Sensor height must be a positive number.");
    if (!Number.isFinite(pw) || pw <= 0 || !Number.isInteger(pw)) return setFovError("Pixels width must be a positive integer.");
    if (!Number.isFinite(ph) || ph <= 0 || !Number.isInteger(ph)) return setFovError("Pixels height must be a positive integer.");
    if (!Number.isFinite(fl) || fl <= 0) return setFovError("Focal length must be a positive number.");

    try {
      const out = await computeFOV({
        sensor_width_mm: sw,
        sensor_height_mm: sh,
        pixels_width: Math.round(pw),
        pixels_height: Math.round(ph),
        focal_length_mm: fl,
      });
      setFovResult(out);
      setFovFormula(out.formula);
    } catch (e: any) {
      setFovError(e?.message ?? "Unknown error");
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
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset"
  } as React.CSSProperties;

  return (
    <main style={{
      color: "#e0e0e0",
      minHeight: "100vh",
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
        Telescope Optical Calculator
      </h1>
      <p style={{
        color: "#b0b0b0",
        fontSize: "1.1rem",
        marginBottom: "2rem",
        textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)"
      }}>
        Calculate optical parameters for your telescope setup.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 450px), 1fr))",
        gap: "2rem",
        marginBottom: "2rem"
      }}>

        {/* Airy Disk Calculator Card */}
        <div style={cardStyle}>
          <h2 style={{
            marginTop: 0,
            marginBottom: "1rem",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#00d4ff",
            textShadow: "0 0 10px rgba(0, 212, 255, 0.5)"
          }}>
            Airy Disk Calculator
          </h2>
          <p style={{
            color: "#b0b0b0",
            fontSize: "0.9rem",
            marginBottom: "1rem"
          }}>
            Calculate the Airy disk diameter from F/# and wavelength.
          </p>

          <label style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            color: "#d0d0d0",
            fontSize: "0.95rem",
            fontWeight: 500
          }}>
            F/# (dimensionless)
            <input
              value={fNumber}
              onChange={(e) => setFNumber(e.target.value)}
              style={inputStyle}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder="Enter F/#"
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
            Wavelength (nm)
            <input
              value={wavelengthNm}
              onChange={(e) => setWavelengthNm(e.target.value)}
              style={inputStyle}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder="Enter wavelength"
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

          {resultUm !== null && (
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
                }}>Airy disk diameter:</span>{" "}
                <span style={{
                  color: "#00d4ff",
                  textShadow: "0 0 10px rgba(0, 212, 255, 0.5)"
                }}>
                  {resultUm.toFixed(3)} µm
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

        {/* Field of View Calculator Card */}
        <div style={cardStyle}>
          <h2 style={{
            marginTop: 0,
            marginBottom: "1rem",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#ff00ff",
            textShadow: "0 0 10px rgba(255, 0, 255, 0.5)"
          }}>
            Field of View Calculator
          </h2>
          <p style={{
            color: "#b0b0b0",
            fontSize: "0.9rem",
            marginBottom: "1rem"
          }}>
            Calculate FOV from sensor dimensions and focal length.
          </p>

          <label style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            color: "#d0d0d0",
            fontSize: "0.95rem",
            fontWeight: 500
          }}>
            Sensor Width (mm)
            <input
              value={sensorWidthMm}
              onChange={(e) => setSensorWidthMm(e.target.value)}
              style={inputStyle}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder="Enter sensor width"
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
            Sensor Height (mm)
            <input
              value={sensorHeightMm}
              onChange={(e) => setSensorHeightMm(e.target.value)}
              style={inputStyle}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder="Enter sensor height"
            />
          </label>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <label style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              color: "#d0d0d0",
              fontSize: "0.95rem",
              fontWeight: 500
            }}>
              Pixels Width
              <input
                value={pixelsWidth}
                onChange={(e) => setPixelsWidth(e.target.value)}
                style={inputStyle}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder="Width pixels"
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
              Pixels Height
              <input
                value={pixelsHeight}
                onChange={(e) => setPixelsHeight(e.target.value)}
                style={inputStyle}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder="Height pixels"
              />
            </label>
          </div>

          <label style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            color: "#d0d0d0",
            fontSize: "0.95rem",
            fontWeight: 500
          }}>
            Focal Length (mm)
            <input
              value={focalLengthMm}
              onChange={(e) => setFocalLengthMm(e.target.value)}
              style={inputStyle}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder="Enter focal length"
            />
          </label>

          <button
            onClick={onComputeFOV}
            style={{ 
              padding: "14px 24px", 
              cursor: "pointer",
              backgroundColor: "rgba(255, 0, 255, 0.2)",
              border: "2px solid #ff00ff",
              borderRadius: "10px",
              color: "#ff00ff",
              fontSize: "1.1rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              transition: "all 0.3s ease",
              boxShadow: "0 0 20px rgba(255, 0, 255, 0.3), 0 4px 15px rgba(0, 0, 0, 0.2)",
              textShadow: "0 0 10px rgba(255, 0, 255, 0.5)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 0, 255, 0.3)";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(255, 0, 255, 0.5), 0 6px 20px rgba(0, 0, 0, 0.3)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 0, 255, 0.2)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 0, 255, 0.3), 0 4px 15px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Compute FOV
          </button>

          {fovError && (
            <div style={{ 
              color: "#ff6b6b", 
              padding: "12px 16px",
              backgroundColor: "rgba(255, 107, 107, 0.1)",
              border: "1px solid rgba(255, 107, 107, 0.3)",
              borderRadius: "8px",
              boxShadow: "0 0 15px rgba(255, 107, 107, 0.2)"
            }}>
              {fovError}
            </div>
          )}

          {fovResult && (
            <div style={{ 
              padding: "20px", 
              border: "1px solid rgba(255, 0, 255, 0.4)", 
              borderRadius: "12px",
              backgroundColor: "rgba(255, 0, 255, 0.1)",
              boxShadow: "0 0 25px rgba(255, 0, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset",
              backdropFilter: "blur(5px)"
            }}>
              <div style={{
                fontSize: "1.1rem",
                marginBottom: "12px",
                color: "#fff",
                fontWeight: 600
              }}>
                <div style={{ marginBottom: "8px" }}>
                  <span style={{
                    color: "#ff00ff",
                    textShadow: "0 0 10px rgba(255, 0, 255, 0.5)"
                  }}>FOV Width:</span>{" "}
                  <span style={{
                    color: "#00d4ff",
                    textShadow: "0 0 10px rgba(0, 212, 255, 0.5)"
                  }}>
                    {fovResult.fov_width_deg.toFixed(4)}°
                  </span>
                </div>
                <div>
                  <span style={{
                    color: "#ff00ff",
                    textShadow: "0 0 10px rgba(255, 0, 255, 0.5)"
                  }}>FOV Height:</span>{" "}
                  <span style={{
                    color: "#00d4ff",
                    textShadow: "0 0 10px rgba(0, 212, 255, 0.5)"
                  }}>
                    {fovResult.fov_height_deg.toFixed(4)}°
                  </span>
                </div>
              </div>
              <div style={{
                fontSize: "0.95rem",
                marginTop: "12px",
                padding: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                borderRadius: "6px",
                border: "1px solid rgba(255, 255, 255, 0.05)"
              }}>
                <div style={{ marginBottom: "6px", color: "#b0b0b0" }}>
                  <strong style={{ color: "#d0d0d0" }}>Angular Resolution:</strong>
                </div>
                <div style={{ color: "#b0b0b0", fontFamily: "monospace", fontSize: "0.9rem" }}>
                  Width: {fovResult.angular_resolution_width_arcsec_per_pixel.toFixed(3)} arcsec/pixel
                </div>
                <div style={{ color: "#b0b0b0", fontFamily: "monospace", fontSize: "0.9rem" }}>
                  Height: {fovResult.angular_resolution_height_arcsec_per_pixel.toFixed(3)} arcsec/pixel
                </div>
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
                {fovFormula}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}