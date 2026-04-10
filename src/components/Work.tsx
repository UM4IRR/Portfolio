"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "UI/UX Analyzer",
    tags: ["Next.js", "Redis", "PostgreSQL", "Puppeteer"],
    description: "AI-powered UI/UX evaluation platform that captures web screenshots, runs heuristic analysis, and returns structured insights.",
    color: "from-blue-600 to-indigo-900",
    link: "https://ui-analyzer-6tut.vercel.app"
  },
  {
    id: 2,
    title: "AI Resume Analyzer",
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    description:
      "An AI-powered platform that analyzes resumes, scores profiles, highlights missing keywords, and provides personalized job recommendations.",
    color: "from-emerald-600 to-cyan-900",
    link: "https://resume-analyzer-psi-lilac.vercel.app/"
  },
  {
    id: 3,
    title: "DigiKhata",
    tags: ["Next.js", "Express", "React Query", "Shadcn UI"],
    description:
      "Digital Khata Pakistan is an offline-first web app for managing customer credit (udhaar) and tracking payments, replacing traditional paper-based ledger systems.",
    color: "from-amber-500 to-orange-900",
    link: "https://digi-khata-clk1.vercel.app/"
  }
];

export default function Work() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work" className="py-32 min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="px-4 md:px-12 max-w-7xl mx-auto w-full mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm md:text-base text-brand-teal font-mono tracking-widest uppercase mb-4">Selected Projects</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight">Recent Work</h3>
        </motion.div>
      </div>

      <div ref={scrollRef} className="w-full overflow-hidden">
        <motion.div 
          className="flex gap-8 px-4 md:px-12 w-max pb-12"
          drag="x"
          dragConstraints={scrollRef}
          whileTap={{ cursor: "grabbing" }}
          style={{ cursor: "grab" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative w-75 sm:w-100 md:w-125 h-100 md:h-125 rounded-2xl overflow-hidden glass-card group shrink-0 cursor-pointer"
              onClick={() => project.link && window.open(project.link, "_blank")}
            >
              <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
              
              {/* Pattern overlay to simulate UI screenshot structure */}
              <div className="absolute inset-4 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm overflow-hidden flex flex-col">
                {/* Mock Browser Header */}
                <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                {/* Mock content area */}
                <div className="flex-1 p-6 flex flex-col justify-end bg-linear-to-t from-black/80 to-transparent">
                  <h4 className="text-2xl font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.title}
                  </h4>

                  <p className="text-sm text-white/70 mb-4 max-h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                    {project.description}
                  </p>
                  
                  {/* Floating Tags */}
                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white backdrop-blur-md shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="text-center mt-4">
        <span className="text-xs text-white/40 font-mono tracking-widest uppercase">
          &lt; Drag to explore &gt;
        </span>
      </div>
    </section>
  );
}
