import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient aura overlays - non-blocking for interaction */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(99,102,241,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_70%,rgba(34,197,94,0),rgba(56,189,248,0.12)_30%,transparent_60%)]" />
        {/* subtle grain */}
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '3px 3px',
        }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 md:pt-36 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest backdrop-blur">
          <Rocket size={14} className="text-cyan-300" />
          Building AI-first experiences
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 bg-gradient-to-r from-indigo-200 via-violet-300 to-cyan-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl"
        >
          Aly Soffar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base text-white/80 md:text-lg"
        >
          Computer Science undergraduate (GPA 3.95) specializing in AI/ML, Robotics, and Full‑Stack Development. I craft performant backends, intelligent agents, and delightful developer experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(99,102,241,0.35)] transition-transform hover:scale-[1.03]"
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
        </motion.div>
      </div>

      {/* bottom glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
