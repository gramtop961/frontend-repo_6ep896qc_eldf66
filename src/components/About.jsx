import React from 'react';
import { Brain, Cpu, Bot, Code, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { icon: Brain, label: 'AI/ML' },
  { icon: Cpu, label: 'Computer Vision' },
  { icon: Bot, label: 'Agents & RAG' },
  { icon: Code, label: 'Django & REST' },
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/10 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-indigo-200 via-violet-300 to-cyan-200 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
        >
          About Aly
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-3xl text-white/80"
        >
          CS undergraduate ranked top 3/300+ (GPA 3.95). I specialize in AI, Machine Learning, Robotics, and Full‑Stack development. I’ve built production APIs with Django & PostgreSQL, designed RAG/agent systems, and led robotics programs and developer communities.
        </motion.p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {skills.map(({ icon: Icon, label }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-br from-indigo-500/30 via-violet-500/30 to-cyan-500/30 p-2">
                  <Icon className="text-cyan-300" size={22} />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="mb-2 text-xl font-semibold">Education & Leadership</h3>
            <p className="text-white/80">
              Tech Lead at GDG AAST; active in IEEE AAST. I mentor builders, organize hackathons, and teach practical AI & robotics to drive impact.
            </p>
            <div className="mt-4 h-2 w-full rounded-full bg-white/10">
              <div className="h-2 w-5/6 rounded-full bg-gradient-to-r from-indigo-400 via-violet-500 to-cyan-400" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="mb-2 text-xl font-semibold">Notable Achievements</h3>
            <p className="text-white/80">
              Led AI & robotics programs for national competitors (UAE MoE & AAST RIC). Built high‑impact backends at Arkleap with measurable performance gains.
            </p>
            <div className="mt-4 flex items-center gap-3 text-amber-200">
              <Award size={18} />
              <span className="text-sm">Multiple national & international competition wins</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
