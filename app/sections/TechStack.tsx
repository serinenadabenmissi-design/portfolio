"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Flutter", icon: "📱" },
  { name: "Dart", icon: "🎯" },
  { name: "PHP", icon: "🐘" },
  { name: "Laravel", icon: "🚀" },
  { name: "MySQL", icon: "🗄️" },
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "⚡" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "Git", icon: "📦" },
  { name: "GitHub", icon: "🐙" },
  { name: "Arduino", icon: "🔌" },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm text-red-light tracking-widest uppercase mb-4 font-medium">
            Technologies
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Tools I Work With
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group flex items-center gap-3 px-5 py-3 bg-card border border-border rounded-xl hover:border-red/30 hover:bg-card-hover transition-all duration-300 cursor-default"
            >
              <span className="text-xl">{tech.icon}</span>
              <span className="text-sm font-medium text-white group-hover:text-red-light transition-colors">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
