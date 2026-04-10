"use client";

import { motion } from "framer-motion";
import { Layout, Server, MonitorSmartphone, Database } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-8 h-8 text-brand-teal" />,
    description: "Building responsive user interfaces with smooth animations and robust state management utilizing modern tools like React, Next.js, and Tailwind CSS.",
    tools: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend Engineering",
    icon: <Server className="w-8 h-8 text-brand-teal" />,
    description: "Designing scalable, secure server-side architectures using Node.js and Express, with RESTful API design and database integrations at scale.",
    tools: ["Node.js", "Express.js", "REST API", "API Integration"],
  },
  {
    title: "Database Management",
    icon: <Database className="w-8 h-8 text-brand-teal" />,
    description: "Creating robust schemas and optimized queries for complex data relationships with both NoSQL and SQL databases.",
    tools: ["MongoDB", "MySQL", "Database Design", "Data Modeling"],
  },
  {
    title: "Version Control & DevOps",
    icon: <MonitorSmartphone className="w-8 h-8 text-brand-teal" />,
    description: "Managing code repositories, collaborating efficiently with teams, and ensuring smooth deployment workflows and version management.",
    tools: ["Git", "GitHub", "HTML", "CSS"],
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-4 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24 text-center md:text-left"
      >
        <h2 className="text-sm md:text-base text-brand-teal font-mono tracking-widest uppercase mb-4">What I Do</h2>
        <h3 className="text-4xl md:text-5xl font-black tracking-tight">Services</h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-2xl p-8 hover:bg-white/5 transition-colors duration-500 group relative overflow-hidden"
          >
            {/* Subtle hover gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-brand-teal/0 to-brand-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="bg-black/40 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-foreground/70 leading-relaxed font-light mb-8">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.tools.map(tool => (
                  <span key={tool} className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-md text-foreground/80">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
