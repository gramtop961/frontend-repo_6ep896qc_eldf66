import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient aura overlay - non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.25),rgba(168,85,247,0.15)_40%,transparent_70%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 md:pt-36 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest backdrop-blur">
          <Rocket size={14} className="text-cyan-300" />
          Building AI-first experiences
        </span>
        <h1 className="mt-6 bg-gradient-to-r from-cyan-300 via-purple-300 to-amber-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl">
          Aly Soffar
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          Computer Science undergraduate (GPA 3.95) specializing in AI/ML, Robotics, and Full‑Stack Development. I craft performant backends, intelligent agents, and delightful developer experiences.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(56,189,248,0.35)] transition-transform hover:scale-[1.03]"
          >
            Explore Projects
          </a>
          <a
            href="https://github.com/Alysoffar"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <span className="inline-flex items-center gap-2"><Github size={18} /> GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aly-soffar-4a7317295"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <span className="inline-flex items-center gap-2"><Linkedin size={18} /> LinkedIn</span>
          </a>
          <a
            href="mailto:alysoffar06@gmail.com"
            className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-200 backdrop-blur transition hover:bg-cyan-400/20"
          >
            <span className="inline-flex items-center gap-2"><Mail size={18} /> Contact</span>
          </a>
        </div>
      </div>

      {/* bottom glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
