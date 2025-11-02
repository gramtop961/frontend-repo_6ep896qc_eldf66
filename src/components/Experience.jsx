import React from 'react';
import { Award, Briefcase, GraduationCap, Mail, Download } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const timeline = [
  {
    role: 'Backend Software Developer Intern',
    org: 'Arkleap',
    time: 'Jul 2024 – Sep 2024',
    points: [
      'Built hotel reservation system with Django + PostgreSQL',
      'Optimized endpoints; 25% backend performance gain',
    ],
  },
  {
    role: 'AI & Robotics Instructor (International Program)',
    org: 'UAE Ministry of Education & AAST RIC',
    time: 'Jun 2025 – Jul 2025',
    points: [
      'Designed curriculum: robotics, pathfinding, computer vision',
      'Improved competitive performance by 25%',
    ],
  },
  {
    role: 'Course Instructor',
    org: 'ZHub',
    time: 'Feb 2024 – Present',
    points: [
      'Built data-driven teaching framework for robotics & AI',
      '+25% comprehension, +15% engagement',
    ],
  },
  {
    role: 'Tech Lead',
    org: 'GDG AAST',
    time: 'Oct 2024 – Present',
    points: [
      'Led student developers, workshops, and hackathons',
      'Boosted local collaboration and learning culture',
    ],
  },
];

const Experience = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="experience" className="relative w-full bg-black py-20 text-white md:py-24">
      {/* Clear backdrop to keep content crisp */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[linear-gradient(180deg,rgba(34,211,238,0.10),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
          className="bg-gradient-to-r from-indigo-200 via-violet-300 to-cyan-200 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
        >
          Experience & Achievements
        </motion.h2>
        <p className="mt-3 max-w-2xl text-white/75">
          Teaching, building, and leading at the intersection of AI, robotics, and software engineering.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div>
            <div className="space-y-5">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : idx * 0.04 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm text-white/60">{item.time}</div>
                      <div className="mt-1 text-lg font-semibold">{item.role}</div>
                      <div className="text-white/70">{item.org}</div>
                    </div>
                    <Briefcase className="text-purple-300" size={20} />
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/78">
                    {item.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <Award className="text-amber-200" />
                <h3 className="text-xl font-semibold">Achievements Snapshot</h3>
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-white/70">
                    <span>Backend Performance Improvements</span>
                    <span>+25%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-amber-300 via-violet-400 to-cyan-400" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-white/70">
                    <span>Students' Competitive Performance</span>
                    <span>+25%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-indigo-300 via-violet-400 to-cyan-400" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-white/70">
                    <span>Engagement in Courses</span>
                    <span>+15%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-1/2 rounded-full bg-gradient-to-r from-indigo-300 via-cyan-300 to-amber-300" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <GraduationCap className="text-cyan-200" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="mt-3 text-white/85">
                B.Sc. in Computer Science — Top 3 of 300+ peers. GPA 3.95/4.0.
              </p>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-xl font-semibold">Let’s collaborate</h3>
              <p className="mt-2 text-white/85">
                Interested in AI/ML, robotics, or backend engineering projects? Reach out — I’d love to help build.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="mailto:alysoffar06@gmail.com"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white"
                >
                  <Mail size={16} /> Email Aly
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const resume = `Aly Soffar\nCS Undergraduate (GPA 3.95)\n\nExperience\n- Backend Intern — Arkleap (Jul 2024 – Sep 2024): Django, PostgreSQL; +25% performance\n- AI & Robotics Instructor — UAE MoE & AAST RIC (Jun 2025 – Jul 2025)\n- Course Instructor — ZHub (Feb 2024 – Present)\n- Tech Lead — GDG AAST (Oct 2024 – Present)\n\nProjects\n- GitClone Dashboard (PHP, MySQL, GitHub API)\n- LangGraph Learning Guide (Python, Agents, RAG)\n\nSkills\nPython, Django, REST, PostgreSQL, MySQL, AWS, ROS, CV, NLP, Agents`;
                    const blob = new Blob([resume], { type: 'text/plain;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'Aly_Soffar_Resume.txt';
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    URL.revokeObjectURL(url);
                  }}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur hover:bg-white/10"
                >
                  <Download size={16} /> Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
