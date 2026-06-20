"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code2, FileText } from "lucide-react";
import LaptopHero from "../components/LaptopHero";
import DuckIcon from "../components/DuckIcon";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(230, 57, 70, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(230, 57, 70, 0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating red shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-red/5 border border-red/10"
            style={{
              width: 150 + i * 50,
              height: 150 + i * 50,
              left: `${10 + i * 18}%`,
              top: `${15 + i * 12}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6 + i * 2,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Laptop Animation */}
      <div className="relative z-10 pt-20">
        <LaptopHero />
      </div>

      {/* Buttons below laptop */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
      >
        <a
          href="#projects"
          className="group flex items-center gap-2 px-8 py-3 bg-red text-white rounded-full font-medium text-sm hover:bg-red-light transition-all duration-200"
        >
          View Projects
          <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
        </a>
        <a
          href="https://github.com/serinenadabenmissi-design/serine-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-3 border border-red-muted rounded-full font-medium text-sm text-white hover:bg-red-muted/20 transition-all duration-200"
        >
          <Code2 size={16} />
          GitHub
        </a>
        <a
          href="mailto:benmissi.dev@gmail.com"
          className="flex items-center gap-2 px-8 py-3 border border-red-muted rounded-full font-medium text-sm text-white hover:bg-red-muted/20 transition-all duration-200"
        >
          <FileText size={16} />
          Gmail
        </a>
      </motion.div>

      {/* Duck Icon Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer flex flex-col items-center gap-2"
          title="Scroll down"
        >
          <DuckIcon size={28} className="text-red-light" />
          <span className="text-xs text-red-muted font-mono">scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
