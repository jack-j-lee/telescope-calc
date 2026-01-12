import "./globals.css";
import SpaceBackground from "./components/SpaceBackground";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body style={{ 
          fontFamily: "system-ui, -apple-system, sans-serif", 
          margin: 0,
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #16213e 100%)",
          backgroundAttachment: "fixed",
          position: "relative",
          overflowX: "hidden"
        }}>
          <SpaceBackground />
          
          <div style={{ 
            maxWidth: 1200, 
            margin: "0 auto", 
            padding: 24,
            position: "relative",
            zIndex: 1
          }}>
            {children}
          </div>
        </body>
      </html>
    );
  }