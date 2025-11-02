import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [readyToMount, setReadyToMount] = useState(false);

  // Defer heavy Spline mount until in view and idle
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

    // idle hint
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
      {/* Spline 3D scene (only renders when visible + idle) */}
      <div className="absolute inset-0">
        {visible && readyToMount ? (
          <Spline
            scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_50%_40%,rgba(99,102,241,0.10),transparent_60%)]" />
        )}
      </div>

      {/* Lightweight, non-blocking ambient overlay */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(99,102,241,0.18),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <motion.span
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest backdrop-blur"
        >
          <Rocket size={14} className="text-cyan-300" />
          Building AI-first experiences
        </motion.span>

        <motion.h1
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.02 }}
          className="mt-6 bg-gradient-to-r from-indigo-200 via-violet-300 to-cyan-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl"
        >
          Aly Soffar
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.06 }}
          className="mt-4 max-w-2xl text-base text-white/80 md:text-lg"
        >
          Computer Science undergraduate (GPA 3.95) specializing in AI/ML, Robotics, and Full‑Stack Development. I craft performant backends, intelligent agents, and delightful developer experiences.
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
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
