import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Work from "@/components/Work";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="w-full min-h-screen selection:bg-brand-teal/30 selection:text-white">
      <ThemeToggle />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Education />
      <Work />
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center px-4">
        <p className="text-foreground/50 text-sm font-mono uppercase tracking-widest">
          &copy; {new Date().getFullYear()} / Full Stack Engineer / Handcrafted with Next.js & Three.js
        </p>
      </footer>
    </main>
  );
}
