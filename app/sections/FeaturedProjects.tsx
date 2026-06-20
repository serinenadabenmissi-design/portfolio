"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Dietary Platform",
    description:
      "An AI-powered dietary consultation platform featuring calorie tracking, personalized nutrition guidance, and intelligent recommendations.",
    technologies: ["Django", "Python", "Deep Learning", "NLP"],
    github: "https://github.com/serinenadabenmissi-design/AI_nutritionist.git",
    demo: "https://ai-nutritionist-lsha.onrender.com",
    image: "/projects/ai-nutritionist.png",
    featured: true,
  },
  {
    id: 2,
    title: "Smart Pen",
    description:
      "An educational smart pen designed to enhance student learning through digital note interaction and intelligent features.",
    technologies: ["Arduino", "C++", "Sensors", "Embedded Systems"],
    github: "https://github.com/serinenadabenmissi-design/smart-pen-.git",
    demo: null,
    featured: false,
  },
  {
    id: 3,
    title: "SoCode",
    description:
      "A collaborative coding and learning platform built for students and developers.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/serinenadabenmissi-design/SoCode.git",
    demo: null,
    featured: false,
  },
  {
    id: 4,
    title: "Secure Vault",
    description:
      "A secure Flutter application implementing authentication, profile management, and state management using the BLoC architecture.",
    technologies: ["Flutter", "Dart", "BLoC"],
    github: "https://github.com/serinenadabenmissi-design/secure-vault-app-flutter.git",
    demo: null,
    featured: false,
  },
  {
    id: 5,
    title: "Fake News Detection",
    description:
      "A machine learning project designed to identify and classify fake news articles using natural language processing techniques.",
    technologies: ["Python", "Machine Learning", "NLP"],
    github: "https://github.com/serinenadabenmissi-design/machine-learning-fake-news-detection.git",
    demo: "",
    featured: false,
  },
  {
    id: 6,
    title: "Smart Home App",
    description:
      "A Flutter-based smart home dashboard for monitoring and controlling connected devices.",
    technologies: ["Flutter", "Dart", "IoT"],
    github: "https://github.com/serinenadabenmissi-design/smart-home-flutter.git",
    demo: null,
    featured: false,
  },
  {
    id: 7,
    title: "Smart Door",
    description:
      "An IoT-based smart door system that allows users to control access and monitor entry points remotely.",
    technologies: ["Arduino", "IoT"],
    github: "https://github.com/serinenadabenmissi-design/ardouino-projects.git/concour_smart_door.ino",
    demo: null,
    featured: false,
  },
];

// Emoji mapping for non-featured projects
const getEmoji = (title: string) => {
  if (title.includes("Smart Pen")) return "✏️";
  if (title.includes("SoCode")) return "💻";
  if (title.includes("Secure")) return "🔐";
  if (title.includes("Fake")) return "📰";
  if (title.includes("Smart Home")) return "🏠";
  if (title.includes("Smart Door")) return "🚪";
  return "🚀";
};

export default function FeaturedProjects() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm text-red-light tracking-widest uppercase mb-4 font-medium">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Selected Projects
          </h2>
        </motion.div>

        {/* Featured Project - WITH IMAGE */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20"
          >
            <div className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-red/30 transition-all duration-500">
              {/* IMAGE for featured project */}
              <div className="aspect-[16/9] relative overflow-hidden bg-gradient-to-br from-red-muted/20 to-background">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-red text-white rounded-full">
                    Featured Project
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-red-light transition-colors">
                  {featuredProject.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm text-red-light bg-red-muted/20 rounded-lg border border-red-muted/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={featuredProject.github}
                    className="flex items-center gap-2 text-sm text-red-light hover:text-red transition-colors"
                  >
                    <Code2 size={18} />
                    Source Code
                  </a>
                  {featuredProject.demo && (
                    <a
                      href={featuredProject.demo}
                      className="flex items-center gap-2 text-sm text-red-light hover:text-red transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects - WITH EMOJIS (no images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-red/30 transition-all duration-300"
            >
              {/* EMOJI for non-featured projects (original style) */}
              <div className="aspect-[16/10] relative bg-gradient-to-br from-red-muted/20 to-background flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-red/10 border border-red/20 flex items-center justify-center">
                    <span className="text-2xl">{getEmoji(project.title)}</span>
                  </div>
                  <p className="text-muted-foreground text-xs">Add screenshot</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-light transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </h3>
                <p className="text-sm text-muted-foreground mb-4 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs text-red-light bg-red-muted/20 rounded-md border border-red-muted/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-sm text-muted-foreground hover:text-red-light transition-colors flex items-center gap-1.5"
                  >
                    <Code2 size={14} />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="text-sm text-muted-foreground hover:text-red-light transition-colors flex items-center gap-1.5"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}