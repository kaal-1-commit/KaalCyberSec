import React, {
  useEffect,
  useRef,
} from "react";

import * as THREE from "three";

import NET from "vanta/dist/vanta.net.min";

export default function CyberScene() {

  const vantaRef = useRef(null);

  useEffect(() => {

    let vantaEffect;

    if (!vantaEffect) {

      vantaEffect = NET({

        el: vantaRef.current,

        THREE,

        mouseControls: true,

        touchControls: true,

        gyroControls: false,

        minHeight: 200,

        minWidth: 200,

        scale: 1,

        scaleMobile: 1,

        color: 0x00ff88,

        backgroundColor: 0x000000,

        points:
          window.innerWidth < 768 ? 8 : 12,

        maxDistance:
          window.innerWidth < 768 ? 18 : 24,

        spacing:
          window.innerWidth < 768 ? 16 : 20,

        showDots: true,
      });
    }

    return () => {

      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };

  }, []);

  return (

    <div
      ref={vantaRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        overflow: "hidden",
      }}
    >

      {/* DARK CYBER OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,

          background: `
            radial-gradient(
              circle at center,
              rgba(0,0,0,0.18),
              rgba(0,0,0,0.82)
            )
          `,

          zIndex: 1,

          pointerEvents: "none",
        }}
      />

      {/* SCAN LINES */}
      <div
        style={{
          position: "absolute",
          inset: 0,

          background: `
            repeating-linear-gradient(
              to bottom,
              rgba(255,255,255,0.02),
              rgba(255,255,255,0.02) 1px,
              transparent 1px,
              transparent 3px
            )
          `,

          opacity: 0.12,

          zIndex: 2,

          pointerEvents: "none",
        }}
      />

    </div>
  );
}