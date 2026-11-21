import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';
import { ElasticStack, ElasticStackItem } from './ui/elastic-stack';

const stackItems: ElasticStackItem[] = [
  { id: 1, name: 'AI', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&h=100&fit=crop' },
  { id: 2, name: 'Agents', image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=100&h=100&fit=crop' },
  { id: 3, name: 'Python', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=100&h=100&fit=crop' },
  { id: 4, name: 'Chess', image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=100&h=100&fit=crop' },
  { id: 5, name: 'Space', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop' },
];

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-4 pt-20 pb-28 sm:pb-24 w-full overflow-hidden"
    >
      {/* Background Video (Only Home Page) */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[#0C0C0C] -z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-85"
          src="./motionsites-background-home.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/50 via-transparent to-[#0C0C0C] pointer-events-none" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center w-full max-w-5xl space-y-5 sm:space-y-8 my-auto"
      >
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] sm:leading-[1] drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)] bg-gradient-to-b from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent select-none">
          Hey, I&apos;m Snop.
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-2xl md:text-3xl font-light text-neutral-200 tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] max-w-2xl px-2">
          I build things with curiosity.
        </p>

        {/* Personal & Natural Subtitle */}
        <p className="text-sm sm:text-lg md:text-xl font-light text-neutral-300/90 max-w-2xl leading-relaxed tracking-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] px-3">
          I&apos;m a student fascinated by AI, programming, and how software works under the hood. Constantly learning, experimenting with agentic ideas, and building practical technology.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black font-medium text-sm sm:text-base hover:bg-neutral-200 transition-all duration-200 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore My Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#about"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/15 bg-white/[0.05] hover:bg-white/[0.1] text-white font-medium text-sm sm:text-base transition-all duration-200 hover:border-white/30 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <User className="w-4 h-4" />
            <span>About Me</span>
          </a>
        </div>
      </motion.div>

      {/* Bottom Left Corner: Elastic Stack */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.4, duration: 0.8 }}
        className="absolute bottom-4 sm:bottom-8 left-3 sm:left-8 z-30 pointer-events-auto flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2.5 rounded-2xl glass-border bg-neutral-950/80 backdrop-blur-md shadow-xl"
      >
        <ElasticStack items={stackItems} itemSize={34} overlap={13} pushForce={9} />
        <div className="text-left hidden sm:block pr-2">
          <p className="text-xs font-semibold text-white leading-tight">Focus Stack</p>
          <p className="text-[10px] text-neutral-400 font-mono">Interactive</p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
