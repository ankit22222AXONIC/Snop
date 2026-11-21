import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, FileText, Swords, Cpu, Github, ExternalLink, Terminal, Sparkles, Layers, ChevronDown, CheckCircle2 } from 'lucide-react';

interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  filterType: 'ai' | 'web' | 'systems';
  status: string;
  statusColor: string;
  description: string;
  image: string;
  tags: string[];
  specs: {
    runtime: string;
    architecture: string;
    highlight: string;
  };
  githubUrl: string;
}

const GITHUB_PROFILE = 'https://github.com/ankit22222AXONIC';

const PROJECTS: ProjectItem[] = [
  {
    id: '01',
    name: 'Axonic',
    tagline: 'Autonomous AI Desktop Agent & Workflow Engine',
    category: 'Autonomous Agents',
    filterType: 'ai',
    status: 'Active Build',
    statusColor: 'text-violet-300 bg-violet-500/20 border-violet-500/30',
    description: 'An autonomous agent framework exploring multi-step goal decomposition, shell tool invocation, and dynamic context caching for desktop tasks.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=700&auto=format&fit=crop&q=80',
    tags: ['Autonomous Agent', 'Python', 'LLM Planning', 'Automation', 'CLI Integration'],
    specs: {
      runtime: 'Python 3.11 + AsyncIO',
      architecture: 'Perception-Action Loop',
      highlight: 'Zero-cloud local tool execution',
    },
    githubUrl: GITHUB_PROFILE,
  },
  {
    id: '02',
    name: 'FormPilot AI',
    tagline: 'Client-Side Intelligent Form Automation',
    category: 'Privacy & Productivity',
    filterType: 'systems',
    status: 'v1.2 Released',
    statusColor: 'text-cyan-300 bg-cyan-500/20 border-cyan-500/30',
    description: 'A privacy-first intelligent assistant that streamlines multi-page form filling, data transformation, and field mapping without sending credentials to third parties.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&auto=format&fit=crop&q=80',
    tags: ['Privacy-First', 'TypeScript', 'Client Storage', 'DOM Automation', 'Security'],
    specs: {
      runtime: 'TypeScript + WebExtensions',
      architecture: 'Local State Machine',
      highlight: '100% offline sensitive field parsing',
    },
    githubUrl: GITHUB_PROFILE,
  },
  {
    id: '03',
    name: 'CHESS',
    tagline: 'Interactive Web Chess Engine & Tactics Analyzer',
    category: 'Game Logic & Web App',
    filterType: 'web',
    status: 'Interactive',
    statusColor: 'text-rose-300 bg-rose-500/20 border-rose-500/30',
    description: 'A fast browser-based chess engine engineered with real-time move validation, board state rendering, algebraic notation export, and puzzle evaluation.',
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=700&auto=format&fit=crop&q=80',
    tags: ['TypeScript', 'Game Logic', 'State Trees', 'Responsive UI', 'Tactics'],
    specs: {
      runtime: 'TypeScript + React',
      architecture: 'Bitboard-Inspired Logic',
      highlight: 'Zero-latency instant move validation',
    },
    githubUrl: GITHUB_PROFILE,
  },
  {
    id: '04',
    name: 'ATOM AI',
    tagline: 'Private Offline Model Inference Laboratory',
    category: 'Machine Learning',
    filterType: 'ai',
    status: 'Research Lab',
    statusColor: 'text-emerald-300 bg-emerald-500/20 border-emerald-500/30',
    description: 'A hands-on testbed investigating quantized local model execution, token latency optimization, RAM footprint control, and sandboxed prompt chaining.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=700&auto=format&fit=crop&q=80',
    tags: ['Local LLMs', 'Quantization', 'Private Compute', 'Benchmarking', 'Python'],
    specs: {
      runtime: 'GGUF / Llama-cpp + Python',
      architecture: 'Sandboxed Inference Pipe',
      highlight: 'Fully air-gapped confidential AI',
    },
    githubUrl: GITHUB_PROFILE,
  },
];

const FILTERS = [
  { key: 'all', label: 'All Projects' },
  { key: 'ai', label: 'AI & Agents' },
  { key: 'web', label: 'Web Applications' },
  { key: 'systems', label: 'Privacy & Systems' },
] as const;

export const FeaturedProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.filterType === activeFilter);

  const toggleSpecs = (id: string) => {
    setExpandedProjectId(prev => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="relative w-full max-w-6xl mx-auto px-4 py-20 sm:py-28 scroll-mt-24">
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
            <span>// Builds &amp; Experiments</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white select-none">
            Featured Projects
          </h2>

          <p className="text-neutral-300 font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            Selected software, agent architectures, and tools I have conceptualized, designed, and engineered.
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-neutral-200 via-white to-neutral-500 rounded-full mt-2" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl border border-white/10 bg-neutral-950/70 backdrop-blur-xl max-w-lg mx-auto">
          {FILTERS.map((f) => {
            const isActive = activeFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 select-none ${
                  isActive
                    ? 'text-white'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectFilter"
                    className="absolute inset-0 rounded-xl bg-white/15 border border-white/20 shadow-sm"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            );
          })}
        </div>

        {/* 2x2 Grid of Enhanced Visual Project Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((proj, idx) => {
              const isExpanded = expandedProjectId === proj.id;

              return (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="group relative rounded-3xl border border-white/10 bg-neutral-900/60 hover:bg-neutral-900/85 hover:border-white/25 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_12px_36px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-1.5"
                >
                  {/* Top Image Preview Banner */}
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-neutral-950">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider text-white bg-black/60 backdrop-blur-md border border-white/15 shadow-md">
                        <Layers className="w-3.5 h-3.5 text-neutral-300" />
                        <span>{proj.category}</span>
                      </span>

                      <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border backdrop-blur-md ${proj.statusColor}`}>
                        {proj.status}
                      </span>
                    </div>

                    {/* Number and Name Overlay */}
                    <div className="absolute bottom-3 left-5 right-5 z-10 flex items-end justify-between">
                      <div>
                        <span className="text-[11px] font-mono text-neutral-400">PROJECT {proj.id}</span>
                        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-md">
                          {proj.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-2.5">
                      <p className="text-sm sm:text-base font-medium text-white/95 leading-snug">
                        {proj.tagline}
                      </p>
                      <p className="text-sm text-neutral-300 font-light leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    {/* Tags List */}
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] group-hover:bg-white/[0.08] text-neutral-200 border border-white/10 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Specs Drawer */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="rounded-2xl border border-white/10 bg-neutral-950/70 p-4 space-y-2 text-xs font-mono"
                      >
                        <div className="flex items-center justify-between text-neutral-300 border-b border-white/5 pb-1.5">
                          <span className="text-neutral-400">Runtime:</span>
                          <span className="text-white font-medium">{proj.specs.runtime}</span>
                        </div>
                        <div className="flex items-center justify-between text-neutral-300 border-b border-white/5 pb-1.5">
                          <span className="text-neutral-400">Architecture:</span>
                          <span className="text-white font-medium">{proj.specs.architecture}</span>
                        </div>
                        <div className="flex items-center justify-between text-neutral-300">
                          <span className="text-neutral-400">Core Highlight:</span>
                          <span className="text-emerald-400 font-medium">{proj.specs.highlight}</span>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Card Bottom Bar with Interactive Buttons */}
                  <div className="px-6 sm:px-8 py-4 bg-neutral-950/40 border-t border-white/10 flex items-center justify-between gap-2">
                    <button
                      onClick={() => toggleSpecs(proj.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white transition-colors py-1 px-2.5 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10"
                    >
                      <Terminal className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{isExpanded ? 'Hide Specs' : 'Inspect Specs'}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white transition-colors py-1 px-3 rounded-lg bg-white/[0.04] hover:bg-white/10 border border-white/10"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                      <ExternalLink className="w-3 h-3 opacity-60 ml-0.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturedProjectsSection;
