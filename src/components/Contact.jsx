import React, { useMemo } from 'react';
import { Mail, Github, Linkedin, FileDown, Send } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Let's Build Something Intelligent");
    const body = encodeURIComponent(
      "Hi Aly,\n\nI came across your portfolio and would love to discuss a project/opportunity.\n\n— Your Name\nCompany / Role\nWhat you'd like to build"
    );
    return `mailto:alysoffar06@gmail.com?subject=${subject}&body=${body}`;
  }, []);

  const handleDownload = () => {
    const resume = `Aly Soffar\nAI & Software Developer — Cairo, Egypt\nEmail: alysoffar06@gmail.com\nGitHub: https://github.com/Alysoffar\nLinkedIn: https://www.linkedin.com/in/aly-soffar-4a7317295\n\nExperience\n- Backend Software Developer Intern — Arkleap (Jul–Sep 2024): Django/PostgreSQL, +25% performance\n- AI & Robotics Instructor — UAE MoE & AAST RIC (Jun–Jul 2025): CV/Robotics, +25% competitive performance\n- Course Instructor — ZHub (Feb 2024–Present): Robotics & AI curriculum, +15% engagement\n- Tech Lead — GDG AAST (Oct 2024–Present): Events, hackathons, community projects\n- Volunteer — IEEE AAST Student Branch (Jan 2024–Present): Robotics & embedded events\n\nProjects\n- GitClone Dashboard: Full‑stack GitHub‑like portal (PHP/MySQL + GitHub API)\n- LangGraph Learning Guide: Agents, RAG, Python\n- Quantum AI Hackathon: QNN hybrid model, +15% site selection accuracy\n\nSkills\nPython, Django, REST Framework, PostgreSQL, AWS, AI/ML, Computer Vision, NLP, Robotics, Quantum Computing\n`;
    const blob = new Blob([resume], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Aly_Soffar_Resume.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(56,189,248,0.10),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
          className="bg-gradient-to-r from-indigo-200 via-violet-300 to-cyan-200 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
        >
          Let's Build Something Intelligent
        </motion.h2>
        <p className="mt-3 max-w-2xl text-white/75">
          Reach out for collaborations in AI, robotics, and backend engineering. I reply fast.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-[2fr,1fr]">
          <motion.form
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
            action={mailtoHref}
            method="post"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            onSubmit={(e) => {
              // allow default mail client to handle
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 text-xs uppercase tracking-wide text-white/60">Name</label>
                <input id="name" name="name" required className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-0 placeholder:text-white/40 focus:border-cyan-400/40" placeholder="Your name" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-xs uppercase tracking-wide text-white/60">Email</label>
                <input id="email" name="email" type="email" required className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-0 placeholder:text-white/40 focus:border-cyan-400/40" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4 flex flex-col">
              <label htmlFor="message" className="mb-1 text-xs uppercase tracking-wide text-white/60">Message</label>
              <textarea id="message" name="message" rows={5} required className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-0 placeholder:text-white/40 focus:border-cyan-400/40" placeholder="Tell me about your project or idea..." />
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(99,102,241,0.28)]">
                <Send size={16} /> Send Message
              </button>
              <button type="button" onClick={handleDownload} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 backdrop-blur hover:bg-white/10">
                <FileDown size={16} /> Download Resume
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: shouldReduceMotion ? 0 : 0.04 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="text-sm text-white/70">Connect</div>
            <div className="mt-3 flex items-center gap-3">
              <a href="https://github.com/Alysoffar" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2 transition hover:border-cyan-300/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)]">
                <Github className="text-white/80 transition group-hover:text-cyan-300" />
                <span className="text-sm text-white/80 group-hover:text-white">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/aly-soffar-4a7317295" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2 transition hover:border-fuchsia-300/40 hover:shadow-[0_0_24px_rgba(217,70,239,0.25)]">
                <Linkedin className="text-white/80 transition group-hover:text-fuchsia-300" />
                <span className="text-sm text-white/80 group-hover:text-white">LinkedIn</span>
              </a>
              <a href={mailtoHref} className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2 transition hover:border-indigo-300/40 hover:shadow-[0_0_24px_rgba(99,102,241,0.25)]">
                <Mail className="text-white/80 transition group-hover:text-indigo-300" />
                <span className="text-sm text-white/80 group-hover:text-white">Email</span>
              </a>
            </div>
            <div className="mt-6 text-xs text-white/50">
              I respect your time — no spam, no fluff. If you prefer, reach me directly at alysoffar06@gmail.com.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
