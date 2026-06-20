"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2023",
      title: "Started IoT Projects",
      description: "Dived into IoT with Arduino, creating smart devices and learning embedded programming.",
    },
    
  {
    year: "2024",
    title: "Started Web Development",
    description: "Began learning the fundamentals of web development and modern frontend technologies.",
  },
  {
    year: "2025",
    title: "Built SoCode",
    description: "Developed a collaborative coding platform for students and developers.",
  },
  {
    year: "2025",
    title: "Started AI Projects",
    description: "Explored AI concepts and built projects utilizing machine learning and natural language processing.",
  },
  {
    year: "2026",
    title: "AI Dietary Consultation Platform",
    description: "Developed an AI-powered platform for personalized nutrition guidance.",
  },

  {
    year: "2026",
    title: "Started Flutter Development",
    description: "Expanded into mobile development with Flutter and Dart.",
  },
  {
    year: "2026",
    title: "Built Smart Home App",
    description: "Created a Flutter-based dashboard for IoT device management.",
  },
  
];

export default function Journey() {
  return (
    <section id="journey" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm text-red-light tracking-widest uppercase mb-4 font-medium">
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Growth Timeline
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-red-muted/30" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year + milestone.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-2 md:left-6 top-1 w-4 h-4 rounded-full bg-red border-4 border-background" />

                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                  <span className="text-sm font-mono text-red-light md:w-16">
                    {milestone.year}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
