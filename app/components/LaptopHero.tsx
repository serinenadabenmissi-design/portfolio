"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LaptopHero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScreen, setShowScreen] = useState(false);

  useEffect(() => {
    // Open laptop after 500ms
    const timer1 = setTimeout(() => setIsOpen(true), 500);
    // Show screen content after laptop opens
    const timer2 = setTimeout(() => setShowScreen(true), 1500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto perspective-1000">
      <div className="relative flex flex-col items-center">
        {/* Laptop Screen (Lid) */}
        <motion.div
          initial={{ rotateX: -90, transformOrigin: "bottom" }}
          animate={{ rotateX: isOpen ? 0 : -90 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-[320px] md:w-[500px] h-[200px] md:h-[320px] bg-zinc-900 rounded-t-xl border-2 border-zinc-700 shadow-2xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Screen Bezel */}
          <div className="absolute inset-2 bg-black rounded-lg overflow-hidden">
            {/* Screen Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showScreen ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-full w-full flex flex-col items-center justify-center p-4 md:p-8"
            >
              {/* Terminal-style header */}
              <div className="w-full flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-zinc-500 ml-2 font-mono">serine@portfolio:~</span>
              </div>

              {/* Main Content */}
              <div className="text-center space-y-3">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: showScreen ? 1 : 0, y: showScreen ? 0 : 10 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-red-400 text-xs md:text-sm font-mono tracking-wider"
                >
                  $ whoami
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: showScreen ? 1 : 0, y: showScreen ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-2xl md:text-4xl font-bold text-white tracking-tight"
                >
                  Serine Benmissi
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: showScreen ? 1 : 0, y: showScreen ? 0 : 10 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="flex items-center justify-center gap-2"
                >
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-red-400 text-sm md:text-base font-mono">
                    Software Engineering Student
                  </span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showScreen ? 1 : 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="text-zinc-500 text-xs md:text-sm font-mono"
                >
                  Flutter • Web • AI • IoT
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showScreen ? 1 : 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  className="pt-2"
                >
                  <span className="text-zinc-600 text-xs font-mono animate-pulse">_</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Webcam */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 rounded-full border border-zinc-600">
            <div className="w-1 h-1 bg-zinc-900 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </motion.div>

        {/* Laptop Base (Keyboard area) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-[340px] md:w-[540px] h-[20px] md:h-[28px] bg-zinc-800 rounded-b-lg shadow-2xl"
        >
          {/* Trackpad area */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[80px] md:w-[120px] h-[12px] md:h-[16px] bg-zinc-700/50 rounded-b-md" />
        </motion.div>

        {/* Shadow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-[300px] md:w-[480px] h-[20px] bg-black blur-xl rounded-full mt-2"
        />
      </div>
    </div>
  );
}
