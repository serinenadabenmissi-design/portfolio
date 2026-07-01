"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm text-red-light tracking-widest uppercase mb-4 font-medium">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Who I Am
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            I am a Full Stack Developer & AI Engineer and a Software Engineering student passionate about building impactful digital solutions.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            My interests include mobile development, backend engineering, artificial intelligence, and IoT systems. I enjoy transforming ideas into functional products while continuously learning new technologies.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional. Every project is an opportunity to push boundaries and explore new possibilities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
