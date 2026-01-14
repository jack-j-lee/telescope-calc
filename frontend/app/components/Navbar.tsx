"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (isActive: boolean) => ({
    color: isActive ? "#00d4ff" : "#d0d0d0",
    textDecoration: "none",
    transition: "color 0.2s",
    borderBottom: isActive ? "2px solid #00d4ff" : "2px solid transparent",
    paddingBottom: "0.25rem"
  } as React.CSSProperties);

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      backdropFilter: "blur(10px)",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      padding: "1rem 0"
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 24px",
        display: "flex",
        gap: "2rem",
        alignItems: "center"
      }}>
        <Link href="/" style={{
          color: "#00d4ff",
          textDecoration: "none",
          fontSize: "1.2rem",
          fontWeight: 600,
          textShadow: "0 0 10px rgba(0, 212, 255, 0.5)"
        }}>
          Telescope Calc
        </Link>
        <Link 
          href="/" 
          style={linkStyle(pathname === "/")}
          onMouseEnter={(e) => {
            if (pathname !== "/") {
              e.currentTarget.style.color = "#00d4ff";
            }
          }}
          onMouseLeave={(e) => {
            if (pathname !== "/") {
              e.currentTarget.style.color = "#d0d0d0";
            }
          }}
        >
          Home
        </Link>
        <Link 
          href="/calculators" 
          style={linkStyle(pathname.startsWith("/calculators"))}
          onMouseEnter={(e) => {
            if (!pathname.startsWith("/calculators")) {
              e.currentTarget.style.color = "#00d4ff";
            }
          }}
          onMouseLeave={(e) => {
            if (!pathname.startsWith("/calculators")) {
              e.currentTarget.style.color = "#d0d0d0";
            }
          }}
        >
          Calculators
        </Link>
        <Link 
          href="/about" 
          style={linkStyle(pathname === "/about")}
          onMouseEnter={(e) => {
            if (pathname !== "/about") {
              e.currentTarget.style.color = "#00d4ff";
            }
          }}
          onMouseLeave={(e) => {
            if (pathname !== "/about") {
              e.currentTarget.style.color = "#d0d0d0";
            }
          }}
        >
          About
        </Link>
      </div>
    </nav>
  );
}
