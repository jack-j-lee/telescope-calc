import { AstraUserGuide } from "../../user-guide/UserGuide";
import { HardwareSetupGuide } from "../../user-guide/HardwareSetupGuide";
import TelescopeRequirementsPanel from "../components/TelescopeRequirementsPanel";

/** Screenshots and hardware photos live in `public/astrauserguidephotos/`. */
const USER_GUIDE_IMAGE_BASE = "/astrauserguidephotos";

export default function UserGuidePage() {
  return (
    <main
      style={{
        color: "#e0e0e0",
        minHeight: "calc(100vh - 100px)",
        paddingTop: "0.5rem",
        paddingBottom: "2rem",
      }}
    >
      <h1
        style={{
          marginTop: 0,
          marginBottom: "0.5rem",
          fontSize: "2.5rem",
          fontWeight: 700,
          background:
            "linear-gradient(135deg, #00d4ff 0%, #8a2be2 50%, #ff00ff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-0.02em",
        }}
      >
        User Guide
      </h1>
      <p
        style={{
          color: "#b0b0b0",
          fontSize: "1.1rem",
          marginBottom: "2rem",
          lineHeight: 1.5,
        }}
      >
        Hardware first, then the ASTRA desktop app, then optical limits for your telescope.
      </p>

      <div
        style={{
          display: "grid",
          gap: "1rem",
          maxWidth: 900,
        }}
      >
        <details className="userguide-details" open>
          <summary>Hardware setup</summary>
          <div className="userguide-details__inner userguide-details__inner--hardware">
            <HardwareSetupGuide
              colorScheme="dark"
              imageBase={USER_GUIDE_IMAGE_BASE}
            />
          </div>
        </details>

        <details className="userguide-details">
          <summary>Software</summary>
          <div className="userguide-details__inner userguide-details__inner--software">
            <AstraUserGuide
              colorScheme="dark"
              imageBase={USER_GUIDE_IMAGE_BASE}
            />
          </div>
        </details>

        <details className="userguide-details">
          <summary>Telescope requirements</summary>
          <div className="userguide-details__inner">
            <TelescopeRequirementsPanel />
          </div>
        </details>
      </div>
    </main>
  );
}
