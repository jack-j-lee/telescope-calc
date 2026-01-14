export default function About() {
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
        About
      </h1>
      <p style={{
        color: "#b0b0b0",
        fontSize: "1.1rem",
        marginBottom: "2rem",
        textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)"
      }}>
        Telescope Optical Calculator
      </p>

      <div style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        padding: "2rem",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        maxWidth: 800,
        margin: "0 auto"
      }}>
        <h2 style={{
          marginTop: 0,
          color: "#00d4ff",
          fontSize: "1.5rem",
          marginBottom: "1rem"
        }}>
          What is this?
        </h2>
        <p style={{
          color: "#d0d0d0",
          lineHeight: "1.6",
          marginBottom: "1.5rem"
        }}>
          Telescope Optical Calculator is a web application for calculating various optical parameters 
          for telescope setups. It helps astronomers and telescope enthusiasts compute important values 
          like Airy disk diameter, field of view, and more.
        </p>

        <h2 style={{
          color: "#00d4ff",
          fontSize: "1.5rem",
          marginBottom: "1rem"
        }}>
          Available Calculators
        </h2>
        <ul style={{
          color: "#d0d0d0",
          lineHeight: "1.8",
          paddingLeft: "1.5rem"
        }}>
          <li><strong style={{ color: "#00d4ff" }}>Airy Disk Calculator:</strong> Calculate the Airy disk diameter from F/# and wavelength.</li>
          <li><strong style={{ color: "#ff00ff" }}>Field of View Calculator:</strong> Calculate FOV from sensor dimensions, pixel counts, and focal length.</li>
        </ul>

        <h2 style={{
          color: "#00d4ff",
          fontSize: "1.5rem",
          marginTop: "2rem",
          marginBottom: "1rem"
        }}>
          How it works
        </h2>
        <p style={{
          color: "#d0d0d0",
          lineHeight: "1.6"
        }}>
          The calculator uses standard optical formulas to compute results. All calculations are performed 
          on the backend using FastAPI, ensuring accurate and reliable results.
        </p>
      </div>
    </main>
  );
}
