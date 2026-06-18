"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiments = [
  { name: "Snake Game", tech: "JavaScript" },
  { name: "Ping Pong Game", tech: "JavaScript" },
  { name: "Stopwatch App", tech: "Flutter" },
  { name: "Rock Paper Scissors", tech: "JavaScript" },
  { name: "JavaScript Course Projects", tech: "JavaScript" },
  { name: "Flutter Exercises", tech: "Flutter" },
];

export default function Experiments() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm text-red-light tracking-widest uppercase mb-4 font-medium">
            Learning & Practice
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Experiments & Learning Projects
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Smaller projects that showcase my learning journey and continuous practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiments.map((exp, index) => (
            <motion.div
              key={exp.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group p-5 bg-card border border-border rounded-xl hover:border-red/30 hover:bg-card-hover transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-sm font-medium text-white group-hover:text-red-light transition-colors">
                  {exp.name}
                </h3>
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="text-xs text-red-light bg-red-muted/20 px-2 py-1 rounded-md">
                {exp.tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
