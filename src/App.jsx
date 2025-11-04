import React, { Suspense, lazy } from 'react';
import { Github, Linkedin } from 'lucide-react';

// Lazy-load sections for a lighter first paint
const Hero = lazy(() => import('./components/Hero'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

function Skeleton({ className = '' }) {
  return <div className={`animate-pulse rounded-2xl bg-white/5 ${className}`} />;
}

function App() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      {/* Clean, subtle background wash (no grain/noise) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,15,20,0)_0%,rgba(139,92,246,0.08)_18%,rgba(34,211,238,0.08)_55%,rgba(0,0,0,0)_100%)]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white/90">Aly Soffar</a>
          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
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
        <Suspense fallback={<Skeleton className="mx-6 my-12 h-[28rem]" />}> 
          <Projects />
        </Suspense>
        <Suspense fallback={<Skeleton className="mx-6 my-12 h-[28rem]" />}> 
          <Experience />
        </Suspense>
        <Suspense fallback={<Skeleton className="mx-6 my-12 h-96" />}> 
          <Contact />
        </Suspense>
      </main>

      <footer className="border-t border-white/10 bg-black/70 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Aly Soffar
        </div>
      </footer>
    </div>
  );
}

export default App;
