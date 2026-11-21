import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Bot, Cpu, Layers, Zap, Lightbulb, CheckCircle2 } from 'lucide-react';

interface Topic {
  id: string;
  name: string;
  short: string;
  icon: React.ComponentType<{ className?: string }>;
  status: string;
  focus: string;
  summary: string;
  items: string[];
}

const TOPICS: Topic[] = [
  {
    id: 'ai-agents',
    name: 'AI Agents',
    short: 'Agents',
    icon: Bot,
    status: 'Core Focus',
    focus: 'Autonomous loops, decision trees & tool execution',
    summary: 'Diving deep into how agents break down goals, plan multi-step actions, and call real-world functions autonomously.',
    items: ['Tool calling mechanisms', 'Planning & reflection loops', 'Short & long-term memory retrieval'],
  },
  {
    id: 'python',
    name: 'Python',
    short: 'Python',
    icon: Terminal,
    status: 'Daily Practice',
    focus: 'Idiomatic patterns, async scripting & API layers',
    summary: 'Writing cleaner, more asynchronous Python code to handle AI model pipelines, data flows, and desktop automation.',
    items: ['AsyncIO concurrency', 'FastAPI & API integration', 'CLI utilities & automation scripts'],
  },
  {
    id: 'llms',
    name: 'LLMs',
    short: 'LLMs',
    icon: Cpu,
    status: 'Active Experiments',
    focus: 'Context window utilization & local quantization',
    summary: 'Exploring how large language models generate tokens, evaluate prompts, and run within local resource constraints.',
    items: ['Local model inference', 'Structured output prompting', 'Embedding search & RAG workflows'],
  },
  {
    id: 'software-eng',
    name: 'Software Engineering',
    short: 'Software Eng',
    icon: Layers,
    status: 'Foundation',
    focus: 'Architecture, modularity & type safety',
    summary: 'Focusing on building structured, readable codebases with TypeScript and modern development patterns.',
    items: ['Component-driven architecture', 'TypeScript strict mode', 'Error boundaries & defensive design'],
  },
  {
    id: 'automation',
    name: 'Computer Automation',
    short: 'Automation',
    icon: Zap,
    status: 'Hands-on',
    focus: 'Desktop actions, file tasks & workflow optimization',
    summary: 'Connecting developer tools and scripts to turn hours of manual computer clicking into single automated runs.',
    items: ['OS file system operations', 'Headless automation scripts', 'Cross-tool workflow pipelines'],
  },
  {
    id: 'new-tech',
    name: 'New Ideas in Tech',
    short: 'Frontiers',
    icon: Lightbulb,
    status: 'Curiosity',
    focus: 'Emerging architectures & futuristic computing',
    summary: 'Reading about the latest research papers, open-source AI repos, and innovative developer tools entering the ecosystem.',
    items: ['Multimodal architectures', 'Agent-first operating systems', 'Zero-latency local models'],
  },
];

export const ExploringSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('ai-agents');
  const activeTopic = TOPICS.find((t) => t.id === selectedId) || TOPICS[0];
  const ActiveIcon = activeTopic.icon;

  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 py-20 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="flex flex-col space-y-10"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-neutral-400 font-mono">
            // Learning In Public
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            Currently Exploring
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-neutral-200 to-neutral-500 rounded-full mt-1" />
        </div>

        {/* Interactive Exploration Hub */}
        <div className="rounded-3xl border border-white/10 bg-neutral-900/60 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          {/* Interactive Tag Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3 pb-6 border-b border-white/10">
            {TOPICS.map((topic) => {
              const isSelected = topic.id === selectedId;
              const Icon = topic.icon;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedId(topic.id)}
                  className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isSelected
                      ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.25)] scale-[1.02]'
                      : 'border border-white/10 bg-white/[0.03] text-neutral-300 hover:bg-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{topic.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Topic Detail Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTopic.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-white/[0.08] border border-white/15 text-white">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {activeTopic.name}
                    </h3>
                    <span className="text-xs font-mono text-neutral-400">
                      {activeTopic.focus}
                    </span>
                  </div>
                </div>

                <p className="text-neutral-300 font-light text-base leading-relaxed pt-2">
                  {activeTopic.summary}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
                    What I&apos;m focused on right now:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeTopic.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300 bg-white/[0.02] border border-white/5 px-3 py-2 rounded-xl"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Status Box */}
              <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-black/40 p-5 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-neutral-400">// EXPLORATION STATUS</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px]">
                    {activeTopic.status}
                  </span>
                </div>

                <div className="space-y-2 text-neutral-400 font-light">
                  <p className="text-neutral-300">
                    &gt; topic: <span className="text-white font-medium">&quot;{activeTopic.name}&quot;</span>
                  </p>
                  <p>
                    &gt; approach: <span className="text-neutral-200">&quot;Hands-on experimentation &amp; debugging&quot;</span>
                  </p>
                  <p>
                    &gt; mindset: <span className="text-neutral-200">&quot;Build small, test often, iterate daily&quot;</span>
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 text-[11px] text-neutral-400 flex items-center justify-between">
                  <span>Interactive learning log</span>
                  <span className="text-neutral-300 font-mono">active</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default ExploringSection;
