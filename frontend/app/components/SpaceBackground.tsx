"use client";

import { useEffect, useState } from "react";

export default function SpaceBackground() {
  const [stars, setStars] = useState<Array<{
    id: number;
    size: number;
    left: number;
    top: number;
    opacity: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    // Generate stars on client side to avoid hydration mismatch
    const generatedStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 0.5,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.8 + 0.2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
      overflow: "hidden",
      pointerEvents: "none"
    }}>
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: "absolute",
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: "#fff",
            borderRadius: "50%",
            left: `${star.left}%`,
            top: `${star.top}%`,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s infinite`,
            animationDelay: `${star.delay}s`,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.8)"
          }}
        />
      ))}
      {/* Nebula-like gradients */}
      <div style={{
        position: "absolute",
        top: "20%",
        right: "10%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(60px)",
        animation: "float 20s ease-in-out infinite"
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        left: "15%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(0, 191, 255, 0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(50px)",
        animation: "float 15s ease-in-out infinite reverse"
      }} />
    </div>
  );
}

