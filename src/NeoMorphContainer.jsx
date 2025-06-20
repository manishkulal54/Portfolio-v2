import React, { useEffect, useRef, useState } from "react";
import FloatingOrb from "./components/FloatingOrb";

export default function NeoMorphContainer({ children, setIsLoaded }) {
  const mousePositionRef = useRef({ x: 0, y: 0 });
  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      const trail = document.getElementById("cursor-trail");
      if (trail) {
        trail.style.left = `${e.clientX - 12}px`;
        trail.style.top = `${e.clientY - 12}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div className="relative bg-black text-white min-h-screen font-sans overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <FloatingOrb
          size="300px"
          color="#3B82F6"
          duration="8s"
          delay="0s"
          x="10%"
          y="20%"
        />
        <FloatingOrb
          size="200px"
          color="#8B5CF6"
          duration="12s"
          delay="2s"
          x="80%"
          y="60%"
        />
        <FloatingOrb
          size="250px"
          color="#10B981"
          duration="10s"
          delay="4s"
          x="60%"
          y="10%"
        />
        <FloatingOrb
          size="250px"
          color="#005f71"
          duration="10s"
          delay="4s"
          x="10%"
          y="70%"
        />
        <div
          className="absolute w-10 h-10 bg-blue-500/30 rounded-full blur-sm pointer-events-none z-10"
          id="cursor-trail"
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
