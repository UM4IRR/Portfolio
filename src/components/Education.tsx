"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "BS Software Engineering",
    school: "National University of Science and Technology (NUST)",
    location: "Islamabad",
    duration: "2022 - Present",
    details: "Currently pursuing a degree in Software Engineering with focus on full-stack development, system design, and modern web technologies."
  },
  {
    degree: "HSSC (Intermediate)",
    school: "Punjab College For Boys",
    location: "Sahiwal",
    duration: "2019 - 2021",
    details: "Pre-Engineering studies with a focus on Mathematics, Physics, and Chemistry."
  },
  {
    degree: "SSC (Matriculation)",
    school: "Garrison Academy Senior Campus",
    location: "GWA Cantt",
    duration: "2017 - 2019",
    details: "Science group studies with a focus on foundational engineering concepts."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-32 px-4 md:px-12 max-w-5xl mx-auto min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-sm md:text-base text-brand-teal font-mono tracking-widest uppercase mb-4">Academic Background</h2>
        <h3 className="text-4xl md:text-5xl font-black tracking-tight">Education</h3>
      </motion.div>

      <div className="space-y-12">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="glass-card rounded-2xl p-8 border border-white/10 relative overflow-hidden group hover:bg-white/5 transition-colors duration-500"
          >
            {/* Subtle hover gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-brand-teal/0 to-brand-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-4">
                <div className="bg-black/40 w-16 h-16 rounded-xl flex items-center justify-center border border-white/5 shrink-0 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                  <GraduationCap className="w-8 h-8 text-brand-teal" />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-1">{edu.degree}</h4>
                  <h5 className="text-lg text-brand-teal font-medium mb-1">{edu.school}</h5>
                  <p className="text-white/50">{edu.location}</p>
                </div>
              </div>
              
              <div className="mb-6 ml-24">
                <span className="text-brand-teal font-mono text-sm tracking-wider">{edu.duration}</span>
              </div>
              
              <p className="text-foreground/70 leading-relaxed font-light max-w-3xl ml-24">
                {edu.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
