"use client";

import { motion } from "framer-motion";
import { Mail, Code2, Link, FileText } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    value: "benmissi.dev@gmail.com",
    icon: Mail,
    href: "mailto:benmissi.dev@gmail.com",
  },
  {
    name: "GitHub",
    value: "github.com/serinenadabenmissi-design",
    icon: Code2,
    href: "https://github.com/serinenadabenmissi-design",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/ben-missi",
    icon: Link,
    href: "https://www.linkedin.com/in/ben-missi-993269419/?locale=fr",
  },
  {
    name: "CV / Resume",
    value: "Download CV",
    icon: FileText,
    href: "/cv.pdf", 
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm text-red-light tracking-widest uppercase mb-4 font-medium">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Let&apos;s build something great together.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto"
        >
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-red/30 hover:bg-card-hover transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-red/10 flex items-center justify-center group-hover:bg-red/20 transition-colors">
                  <Icon size={18} className="text-red-light" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground mb-0.5">{link.name}</p>
                  <p className="text-sm font-medium text-white group-hover:text-red-light transition-colors">
                    {link.value}
                  </p>
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}