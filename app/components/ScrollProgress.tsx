"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-red-muted/20 z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    >
      <div className="h-full bg-red" />
    </motion.div>
  );
}
