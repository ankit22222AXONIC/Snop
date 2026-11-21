import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Code2, Zap, ShieldCheck, Palette, Cpu, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';

interface SkillCard {
  id: string;
  title: string;
  category: 'ai' | 'fullstack' | 'systems' | 'creative';
  categoryLabel: string;
  tag: string;
  description: string;
  image: string;
  technologies: string[];
  metrics: { label: string; value: string };
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const SKILLS: SkillCard[] = [
  {
    id: 'ai-agents',
    title: 'Autonomous AI & Agents',
    category: 'ai',
    categoryLabel: 'Artificial Intelligence',
    tag: 'Primary Focus',
    description: 'Engineering multi-step agent reasoning loops, tool-calling workflows, contextual memory pipelines, and autonomous task automation.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=80',
    technologies: ['Agentic Reasoning', 'Python', 'LLM APIs', 'Vector Store', 'Tool Invocation'],
    metrics: { label: 'Approach', value: 'Autonomous Loops' },
    icon: Bot,
    accentColor: 'from-violet-500/20 to-indigo-500/0',
  },
  {
    id: 'fullstack-dev',
    title: 'Modern Full-Stack Engineering',
    category: 'fullstack',
    categoryLabel: 'Frontend & API',
    tag: 'Daily Driver',
    description: 'Crafting responsive, zero-bloat web apps with strict TypeScript typings, component isolation, fast load times, and fluid micro-interactions.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'REST & GraphQL'],
    metrics: { label: 'Architecture', value: 'Type-Safe Modular' },
    icon: Code2,
    accentColor: 'from-cyan-500/20 to-blue-500/0',
  },
  {
    id: 'automation-scripting',
    title: 'Workflow Automation & Scripting',
    category: 'systems',
    categoryLabel: 'Workflows & CLI',
    tag: 'High Impact',
    description: 'Eliminating repetitive manual friction through robust headless scripts, background schedulers, system integration, and rapid CLI tools.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80',
    technologies: ['Python Scripts', 'PowerShell', 'Task Queues', 'DevOps Automations', 'API Connectors'],
    metrics: { label: 'Efficiency', value: 'Headless / Scheduled' },
    icon: Zap,
    accentColor: 'from-amber-500/20 to-orange-500/0',
  },
  {
    id: 'systems-security',
    title: 'Security, Privacy & Architecture',
    category: 'systems',
    categoryLabel: 'System Integrity',
    tag: 'Research Area',
    description: 'Implementing defensive programming practices, local confidential computing models, encrypted state persistence, and privacy-first designs.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80',
    technologies: ['Local Models', 'Zero-Trust Storage', 'Authentication', 'Linux', 'Sandbox Security'],
    metrics: { label: 'Philosophy', value: 'Privacy by Design' },
    icon: ShieldCheck,
    accentColor: 'from-emerald-500/20 to-teal-500/0',
  },
  {
    id: 'ui-creative',
    title: 'Interactive UI & Motion Graphics',
    category: 'creative',
    categoryLabel: 'Creative Design',
    tag: 'User Experience',
    description: 'Designing memorable digital interfaces featuring spring physics, subtle particle lighting, glassmorphism, and responsive layouts.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    technologies: ['Framer Motion', 'Canvas API', 'Glassmorphism', 'Responsive UX', 'Tailwind'],
    metrics: { label: 'Motion', value: 'Spring Physics' },
    icon: Palette,
    accentColor: 'from-pink-500/20 to-rose-500/0',
  },
  {
    id: 'algorithmic-logic',
    title: 'Algorithmic Problem Solving',
    category: 'ai',
    categoryLabel: 'Logic & Computation',
    tag: 'Analytical Core',
    description: 'Deep diving into state evaluation, decision trees, chess game logic validation, heuristic search spaces, and computational complexity.',
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&auto=format&fit=crop&q=80',
    technologies: ['State Trees', 'Chess Engines', 'Heuristics', 'Data Structures', 'Validation Logic'],
    metrics: { label: 'Discipline', value: 'Deep Calculation' },
    icon: Cpu,
    accentColor: 'from-purple-500/20 to-indigo-500/0',
  },
];

const CATEGORIES = [
  { key: 'all', label: 'All Capabilities' },
  { key: 'ai', label: 'AI & Autonomous' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'systems', label: 'Systems & Scripts' },
  { key: 'creative', label: 'Interactive UI' },
] as const;

export const InterestsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const filteredSkills = selectedCategory === 'all'
    ? SKILLS
    : SKILLS.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="relative w-full max-w-6xl mx-auto px-4 py-20 sm:py-28 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="flex flex-col space-y-12"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-xs font-mono uppercase tracking-widest text-neutral-400 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
            <span>// Technical Toolkit &amp; Focus</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white select-none">
            Skills &amp; Capabilities
          </h2>

          <p className="text-neutral-300 font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            A look into the technologies, architectures, and problem-solving disciplines I actively explore and build with.
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-neutral-200 via-white to-neutral-500 rounded-full mt-2" />
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl border border-white/10 bg-neutral-950/70 backdrop-blur-xl max-w-xl mx-auto">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 select-none ${
                  isActive
                    ? 'text-white'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillCategory"
                    className="absolute inset-0 rounded-xl bg-white/15 border border-white/20 shadow-sm"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Visual Skills Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => {
              const Icon = skill.icon;
              const isHovered = hoveredCardId === skill.id;

              return (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  onMouseEnter={() => setHoveredCardId(skill.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  className="group relative rounded-3xl border border-white/10 bg-neutral-900/60 hover:border-white/25 hover:bg-neutral-900/90 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_12px_36px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-1.5"
                >
                  {/* Top Image Preview Banner with Gradient Overlay */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-neutral-950">
                    <img
                      src={skill.image}
                      alt={skill.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

                    {/* Category & Status Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider text-white bg-black/60 backdrop-blur-md border border-white/15 shadow-md">
                        <Icon className="w-3.5 h-3.5" />
                        <span>{skill.categoryLabel}</span>
                      </span>

                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                        {skill.tag}
                      </span>
                    </div>

                    {/* Metric indicator badge */}
                    <div className="absolute bottom-3 left-4 z-10 flex items-center gap-2">
                      <span className="text-[11px] font-mono text-neutral-300 bg-neutral-950/70 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-white/10">
                        {skill.metrics.label}: <span className="text-white font-semibold">{skill.metrics.value}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-2.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-neutral-100 transition-colors leading-tight">
                        {skill.title}
                      </h3>

                      <p className="text-sm text-neutral-300 font-light leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    {/* Technologies Tags List */}
                    <div className="space-y-3 pt-2">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                        Core Toolset:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {skill.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] group-hover:bg-white/[0.08] text-neutral-200 border border-white/10 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Bar */}
                  <div className="px-6 py-3.5 bg-neutral-950/40 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                    <span className="font-mono text-neutral-400">#0{idx + 1}</span>
                    <span className="inline-flex items-center gap-1.5 text-neutral-300 group-hover:text-white transition-colors">
                      <span className="text-xs font-medium">Explore Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Global Tech Strip */}
        <div className="rounded-2xl border border-white/10 bg-neutral-950/60 backdrop-blur-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-semibold text-white flex items-center justify-center md:justify-start gap-2">
              <Terminal className="w-4 h-4 text-neutral-300" />
              <span>Continuous Evolution</span>
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              Always evaluating emerging libraries, runtime architectures, and open-source models.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {['Python', 'TypeScript', 'React', 'Node.js', 'Tailwind', 'LLMs', 'Git', 'Linux', 'Vite'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.03] text-xs font-mono text-neutral-300 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InterestsSection;
