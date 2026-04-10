"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "06/2025 - 08/2025",
    role: "AI/ML Intern",
    company: "ITSOLETRA Pvt. Ltd",
    description: "Worked on Legal AI Assistant, AI fashion design generation, and AR-based virtual try-on systems. Contributed to cutting-edge AI/ML projects in production environments.",
  },
  {
    year: "07/2023 - 09/2023",
    role: "Web Developer",
    company: "Disruptive AI",
    description: "Enhanced frontend development skills in HTML, CSS, JavaScript, and React.js, with experience in debugging, performance optimization, and project management.",
  },
  {
    year: "07/2023 - 08/2023",
    role: "Digital Marketing Intern",
    company: "SCO(AJ&K)",
    description: "Gained expertise in digital marketing, e-commerce strategies, and entrepreneurship, including campaign implementation, business modeling, customer engagement, and market analysis.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-4 md:px-12 max-w-5xl mx-auto min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-sm md:text-base text-brand-teal font-mono tracking-widest uppercase mb-4">My Journey</h2>
        <h3 className="text-4xl md:text-5xl font-black tracking-tight">Experience</h3>
      </motion.div>

      <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12 pb-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative pl-8 md:pl-16"
          >
            {/* Glowing dot indicator */}
            <div className="absolute -left-1.25 top-1.5 w-2.25 h-2.25 bg-brand-teal rounded-full shadow-[0_0_15px_rgba(20,184,166,0.8)]" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h4 className="text-2xl font-bold text-white mb-1 sm:mb-0">{exp.role}</h4>
              <span className="text-brand-teal font-mono text-sm tracking-wider">{exp.year}</span>
            </div>

            <h5 className="text-lg text-white/50 font-medium mb-4">{exp.company}</h5>
            <p className="text-foreground/70 font-light leading-relaxed max-w-3xl">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
