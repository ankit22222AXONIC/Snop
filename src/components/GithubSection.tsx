import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, GitBranch, Terminal, Code2 } from 'lucide-react';

const GITHUB_USERNAME = 'ankit22222AXONIC';
const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

export const GithubSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 py-20 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl border border-white/10 bg-neutral-900/70 backdrop-blur-xl p-8 sm:p-12 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left Side: Story & Callout */}
          <div className="max-w-xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-neutral-300">
              <GitBranch className="w-3.5 h-3.5 text-emerald-400" />
              <span>github.com/{GITHUB_USERNAME}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Explore The Code on GitHub
            </h2>

            <p className="text-neutral-300 font-light text-base sm:text-lg leading-relaxed">
              Every project I work on starts as an idea to test how something works. You can explore my open-source repositories, agent experiments, and scripts directly on my profile.
            </p>

            <div className="pt-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm sm:text-base hover:bg-neutral-200 transition-all duration-200 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <Github className="w-5 h-5" />
                <span>Visit @{GITHUB_USERNAME}</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
              </a>
            </div>
          </div>

          {/* Right Side: Interactive Terminal Snapshot */}
          <div className="w-full md:w-80 rounded-2xl border border-white/10 bg-black/60 p-5 font-mono text-xs text-neutral-300 space-y-3 shrink-0 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] text-neutral-500">bash &bull; snop-workspace</span>
            </div>

            <div className="space-y-2">
              <p className="text-neutral-400">
                <span className="text-emerald-400">snop@dev</span>:<span className="text-neutral-200">~</span>$ gh repo list
              </p>
              <div className="pl-2 space-y-1 text-[11px] text-neutral-300">
                <p>&bull; <span className="text-white font-semibold">Axonic</span> <span className="text-neutral-400 text-[10px]">(AI agent experiment)</span></p>
                <p>&bull; <span className="text-white font-semibold">FormPilot-AI</span> <span className="text-neutral-400 text-[10px]">(privacy form tool)</span></p>
                <p>&bull; <span className="text-white font-semibold">CHESS</span> <span className="text-neutral-400 text-[10px]">(browser game engine)</span></p>
                <p>&bull; <span className="text-white font-semibold">ATOM-AI</span> <span className="text-neutral-400 text-[10px]">(local inference lab)</span></p>
              </div>
              <p className="text-neutral-400 pt-1">
                <span className="text-emerald-400">snop@dev</span>:<span className="text-neutral-200">~</span>$ git status
              </p>
              <p className="text-emerald-300 text-[11px] pl-2">
                &gt; On branch main. Learning daily.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GithubSection;
