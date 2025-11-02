import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { Github, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white/90">Aly Soffar</a>
          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
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
          © {new Date().getFullYear()} Aly Soffar • Built with React • Inspired by AI‑native design
        </div>
      </footer>
    </div>
  );
}

export default App;
