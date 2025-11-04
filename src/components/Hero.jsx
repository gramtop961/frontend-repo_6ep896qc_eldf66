import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [readyToMount, setReadyToMount] = useState(false);

  // Defer Spline mount until in view and idle
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { root: null, threshold: 0.25 }
    );
    observer.observe(el);

    const idle = (cb) => {
      if ('requestIdleCallback' in window) {
        // @ts-ignore
        window.requestIdleCallback(cb, { timeout: 1500 });
      } else {
        setTimeout(cb, 400);
      }
    };
    idle(() => setReadyToMount(true));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white" ref={containerRef}>
      {/* 3D scene area */}
      <div className="absolute inset-0">
        {visible && readyToMount ? (
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          // Clean fallback, no dots/noise
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_50%_40%,rgba(139,92,246,0.14),transparent_60%)]" />
        )}
      </div>

      {/* Subtle ORV-inspired corner glows without blend modes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[-12%] h-72 w-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle at center, rgba(168,85,247,0.18), rgba(0,0,0,0))' }} />
        <div className="absolute bottom-[-10%] left-[-8%] h-72 w-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle at center, rgba(34,211,238,0.16), rgba(0,0,0,0))' }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <motion.span
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest backdrop-blur"
        >
          <Rocket size={14} className="text-cyan-300" /> From Cairo to the Cosmos
        </motion.span>

        <motion.h1
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.02 }}
          className="mt-6 bg-gradient-to-r from-indigo-200 via-fuchsia-300 to-cyan-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl"
        >
          Hello, I’m Aly Soffar
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.06 }}
          className="mt-4 max-w-2xl text-base text-white/85 md:text-lg"
        >
          AI & Software Developer crafting intelligent systems that bridge code, data, and creativity. 
          I build ML agents, robotics pipelines, and high‑performance backends.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(99,102,241,0.28)] transition-transform will-change-transform hover:scale-[1.02]"
          >
            Explore My Work
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

      {/* bottom gradient to ensure readable contrast */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
