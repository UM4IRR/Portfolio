"use client";

import { motion } from "framer-motion";

const skills = ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB", "MySQL", "Git"];

export default function About() {
  return (
    <section id="about" className="py-32 px-4 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen">
      <div className="w-full flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          <h2 className="text-sm md:text-base text-brand-teal font-mono tracking-widest uppercase">About Me</h2>
          
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            I craft digital experiences with <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-teal to-blue-500">
              precision &amp; passion.
            </span>
          </h3>
          
          <p className="text-foreground/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            Motivated Full Stack Developer with hands-on experience in building scalable web applications using modern frontend and backend technologies. Strong problem-solving skills and a continuous learning mindset to deliver high-quality, impactful software solutions.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full space-y-12"
        >
          <div className="flex flex-col gap-2">
            <span className="text-7xl font-black text-brand-teal leading-none drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]">
              3+
            </span>
            <span className="text-xl font-medium tracking-wide">Years of Learning</span>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold tracking-wide border-b border-white/10 pb-4">Core Stack</h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="px-4 py-2 border border-brand-teal/20 rounded-full text-sm font-medium bg-brand-teal/5 text-brand-teal backdrop-blur-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
