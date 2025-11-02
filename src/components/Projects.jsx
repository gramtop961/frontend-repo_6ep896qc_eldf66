import React, { useEffect, useRef, useState } from 'react';
import { Star, GitFork, Eye, ExternalLink } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const username = 'Alysoffar';

const ProjectCard = ({ repo }) => {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
    >
      <div className="flex items-start justify-between">
        <h4 className="text-lg font-semibold text-white/90 group-hover:text-white">
          {repo.name}
        </h4>
        <ExternalLink size={16} className="text-white/50" />
      </div>
      {repo.description && (
        <p className="mt-2 line-clamp-2 text-sm text-white/70">{repo.description}</p>
      )}
      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/70">
        {repo.language && (
          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">{repo.language}</span>
        )}
        <span className="inline-flex items-center gap-1">
          <Star size={14} className="text-amber-300" /> {repo.stargazers_count}
        </span>
        <span className="inline-flex items-center gap-1">
          <GitFork size={14} className="text-cyan-300" /> {repo.forks_count}
        </span>
        <span className="inline-flex items-center gap-1">
          <Eye size={14} className="text-purple-300" /> {repo.watchers_count}
        </span>
      </div>
    </motion.a>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2, once: true });
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!inView) return;
    const controller = new AbortController();
    const load = async () => {
      try {
        setLoading(true);
        setError('');
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=12&sort=updated`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error('Failed to fetch repositories');
        const data = await res.json();
        const filtered = data.filter((r) => !r.fork).slice(0, 6);
        setRepos(filtered);
      } catch (e) {
        if (e.name !== 'AbortError') setError('Unable to load GitHub projects right now.');
      } finally {
        setLoading(false);
      }
    };
    load();
    return () => controller.abort();
  }, [inView]);

  return (
    <section id="projects" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.06),transparent_60%)]" />
      </div>
      <div ref={ref} className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-gradient-to-r from-indigo-200 via-violet-300 to-cyan-200 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
        >
          Featured Projects
        </motion.h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Live stats via GitHub API. Highlights include GitClone Dashboard, LangGraph Learning Guide, and more.
        </p>

        {loading && (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-40 animate-pulse rounded-2xl border border-white/10 bg-white/5" />
            ))}
          </div>
        )}
        {error && (
          <div className="mt-10 text-red-300">{error}</div>
        )}

        {!loading && !error && (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
