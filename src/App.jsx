import React, { Suspense, lazy } from 'react';
import { Github, Linkedin } from 'lucide-react';

// Code-split heavy sections to improve first paint
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));

function Skeleton({ className = '' }) {
  return <div className={`animate-pulse rounded-2xl bg-white/5 ${className}`} />;
}

function App() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      {/* Global ambient gradient (very light for performance) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-56 w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/15 via-violet-500/15 to-cyan-500/15 blur-3xl" />
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
        <Suspense fallback={<Skeleton className="m-6 h-[60vh]" />}> 
          <Hero />
        </Suspense>
        <Suspense fallback={<Skeleton className="mx-6 my-12 h-80" />}> 
          <About />
        </Suspense>
        <Suspense fallback={<Skeleton className="mx-6 my-12 h-[28rem]" />}> 
          <Projects />
        </Suspense>
        <Suspense fallback={<Skeleton className="mx-6 my-12 h-[28rem]" />}> 
          <Experience />
        </Suspense>
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
