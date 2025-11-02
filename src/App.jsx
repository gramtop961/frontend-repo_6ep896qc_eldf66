import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { Github, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      {/* Global ambient gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white/90">Aly Soffar</a>
          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#about" className="relative hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-to-r after:from-indigo-400 after:via-violet-400 after:to-cyan-400 after:transition-[width] hover:after:w-full">About</a>
            <a href="#projects" className="relative hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-to-r after:from-indigo-400 after:via-violet-400 after:to-cyan-400 after:transition-[width] hover:after:w-full">Projects</a>
            <a href="#experience" className="relative hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-to-r after:from-indigo-400 after:via-violet-400 after:to-cyan-400 after:transition-[width] hover:after:w-full">Experience</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://github.com/Alysoffar" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/aly-soffar-4a7317295" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>

      <footer className="border-t border-white/10 bg-black/60 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Aly Soffar • Built with React • Futuristic, omniscient‑inspired aesthetic
        </div>
      </footer>
    </div>
  );
}

export default App;
