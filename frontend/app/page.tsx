"use client";

export default function Home() {
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
        A.S.T.R.A
      </h1>
      <p style={{
        color: "#b0b0b0",
        fontSize: "1.1rem",
        marginBottom: "0.5rem",
        textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)"
      }}>
        Autonomous Sky Tracking and Recon Apparatus
      </p>
      <p style={{
        color: "#8a8a8a",
        fontSize: "0.95rem",
        marginBottom: "2rem",
        fontStyle: "italic"
      }}>
        University of Arizona Senior Design Project
      </p>

      <div style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        padding: "2rem",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        marginBottom: "3rem",
        maxWidth: 900
      }}>
        <h2 style={{
          marginTop: 0,
          marginBottom: "1rem",
          fontSize: "1.5rem",
          fontWeight: 600,
          color: "#00d4ff",
          textShadow: "0 0 10px rgba(0, 212, 255, 0.5)"
        }}>
          Project Overview
        </h2>
        <p style={{
          color: "#d0d0d0",
          lineHeight: "1.7",
          marginBottom: "1rem",
          fontSize: "1rem"
        }}>
          A.S.T.R.A. (Autonomous Sky Tracking and Recon Apparatus) is an advanced telescope system 
          designed to autonomously track celestial objects and perform reconnaissance operations. This 
          project represents a comprehensive solution for automated astronomical observation, combining 
          precision optics, intelligent tracking algorithms, and real-time data acquisition.
        </p>
        <p style={{
          color: "#d0d0d0",
          lineHeight: "1.7",
          marginBottom: 0,
          fontSize: "1rem"
        }}>
          This web application provides optical calculation tools to support the design and operation 
          of the A.S.T.R.A. system, enabling precise calculations for telescope parameters including 
          Airy disk diameter, field of view, and other critical optical measurements.
        </p>
      </div>
    </main>
  );
}
