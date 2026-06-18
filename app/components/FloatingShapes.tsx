"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  const shapes = [
    { size: 280, x: "8%", y: "15%", delay: 0, duration: 10, type: "square" },
    { size: 180, x: "75%", y: "55%", delay: 2, duration: 12, type: "circle" },
    { size: 120, x: "55%", y: "10%", delay: 1, duration: 8, type: "square" },
    { size: 220, x: "25%", y: "65%", delay: 3, duration: 11, type: "circle" },
    { size: 90, x: "82%", y: "25%", delay: 1.5, duration: 9, type: "square" },
    { size: 150, x: "45%", y: "75%", delay: 2.5, duration: 10, type: "circle" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.type === "square" ? "rounded-lg" : "rounded-full"} bg-red/5 border border-red/10`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, 12, 0],
            rotate: [0, shape.type === "square" ? 8 : 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid lines for computer/tech feel */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(230, 57, 70, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(230, 57, 70, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
    </div>
  );
}
