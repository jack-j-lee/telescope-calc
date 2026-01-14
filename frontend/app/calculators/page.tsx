"use client";

import Link from "next/link";

export default function CalculatorsHub() {
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
        Calculators
      </h1>
      <p style={{
        color: "#b0b0b0",
        fontSize: "1.1rem",
        marginBottom: "3rem",
        textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)"
      }}>
        Choose a calculator to get started.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem"
      }}>
        <Link href="/calculators/airy" style={{
          textDecoration: "none",
          display: "block"
        }}>
          <div style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            padding: "2.5rem",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            transition: "all 0.3s ease",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 212, 255, 0.4)";
            e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
          }}
          >
            <h2 style={{
              marginTop: 0,
              marginBottom: "0.5rem",
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#00d4ff",
              textShadow: "0 0 10px rgba(0, 212, 255, 0.5)"
            }}>
              Airy Disk Calculator
            </h2>
            <p style={{
              color: "#b0b0b0",
              fontSize: "0.95rem",
              marginBottom: "1rem"
            }}>
              Calculate the Airy disk diameter in the focal plane from F/# and wavelength.
            </p>
            <div style={{
              color: "#00d4ff",
              fontSize: "0.9rem",
              fontWeight: 500
            }}>
              Calculate →
            </div>
          </div>
        </Link>

        <Link href="/calculators/fov" style={{
          textDecoration: "none",
          display: "block"
        }}>
          <div style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            padding: "2.5rem",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            transition: "all 0.3s ease",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(255, 0, 255, 0.4)";
            e.currentTarget.style.borderColor = "rgba(255, 0, 255, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
          }}
          >
            <h2 style={{
              marginTop: 0,
              marginBottom: "0.5rem",
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#ff00ff",
              textShadow: "0 0 10px rgba(255, 0, 255, 0.5)"
            }}>
              Field of View Calculator
            </h2>
            <p style={{
              color: "#b0b0b0",
              fontSize: "0.95rem",
              marginBottom: "1rem"
            }}>
              Calculate FOV from sensor dimensions, pixel counts, and focal length.
            </p>
            <div style={{
              color: "#ff00ff",
              fontSize: "0.9rem",
              fontWeight: 500
            }}>
              Calculate →
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
