import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, Wrench, ArrowRight, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full max-w-5xl mx-auto px-4 py-20 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="flex flex-col space-y-8"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-neutral-400 font-mono">
            // Personal Introduction
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-neutral-200 to-neutral-500 rounded-full mt-1" />
        </div>

        {/* Narrative Card */}
        <div className="rounded-3xl border border-white/10 bg-neutral-900/60 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
          <div className="space-y-6 text-neutral-300 font-light text-base sm:text-lg leading-relaxed">
            <p className="text-lg sm:text-xl text-white font-normal leading-relaxed">
              I&apos;m a student and aspiring agentic programmer who enjoys exploring AI, programming, experimenting with new technologies, and turning ideas into real projects.
            </p>
            <p>
              I&apos;m still learning, building, making mistakes, and improving with every experiment. Rather than waiting until I have every concept mastered, I jump right into the code—testing hypotheses, debugging errors, and discovering how complex systems interact under the hood.
            </p>
          </div>

          {/* Core Mindset Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors">
              <div className="p-2.5 rounded-xl bg-white/5 text-neutral-200">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Curiosity Driven</h3>
                <p className="text-xs text-neutral-400 font-light mt-1 leading-relaxed">
                  Always asking how things work under the hood instead of treating code as a black box.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors">
              <div className="p-2.5 rounded-xl bg-white/5 text-neutral-200">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Trial &amp; Error</h3>
                <p className="text-xs text-neutral-400 font-light mt-1 leading-relaxed">
                  Embracing mistakes and debugging sessions as the fastest way to truly learn engineering.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors">
              <div className="p-2.5 rounded-xl bg-white/5 text-neutral-200">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Active Builder</h3>
                <p className="text-xs text-neutral-400 font-light mt-1 leading-relaxed">
                  Building functional projects, from desktop agents to game logic and local AI scripts.
                </p>
              </div>
            </div>
          </div>

          {/* Button to Visit About Page / Details */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Independent &bull; Student &bull; Builder</span>
            </div>

            <a
              href="#about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white text-white hover:text-black font-medium text-sm transition-all duration-200 shadow-sm"
            >
              <span>Explore My Background</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
