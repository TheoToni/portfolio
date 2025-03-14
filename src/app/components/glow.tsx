import React from "react";

type GlowProps = {
  color: string;
  position?: string;
  animate?: boolean;
};

export default function Glow({
  color,
  position = "right-96",
  animate = false,
}: GlowProps) {
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const rgbaColor = color.startsWith("#") ? hexToRgba(color, 0.15) : color;

  return (
    <div
      className={`absolute ${position} ${animate ? "animate-pulse" : ""}`}
      style={{
        boxShadow: `60px 60px 150px 100px ${rgbaColor}, 0 0 200px 120px ${rgbaColor}, 0 0 250px 150px ${rgbaColor}`,
      }}
    ></div>
  );
}
