import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Swords, Orbit, Palette, Sparkles, Play, Pause, Compass, ArrowUpRight, Volume2 } from 'lucide-react';

export const CreativeSideSection: React.FC = () => {
  // Interactive state for Music soundwave animation
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  // Interactive state for Creative palette theme
  const [activePaletteIndex, setActivePaletteIndex] = useState(0);
  // Interactive state for chess puzzle reveal
  const [chessSolved, setChessSolved] = useState(false);

  const PALETTES = [
    { name: 'Obsidian Glow', primary: '#FFFFFF', accent: '#7C3AED', tag: 'Default' },
    { name: 'Cyber Cyan', primary: '#06B6D4', accent: '#3B82F6', tag: 'Neon' },
    { name: 'Solar Flare', primary: '#F59E0B', accent: '#EF4444', tag: 'Warm' },
    { name: 'Emerald Code', primary: '#10B981', accent: '#059669', tag: 'Matrix' },
  ];

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 py-20 sm:py-28 scroll-mt-24">
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
            <Compass className="w-3.5 h-3.5 text-neutral-300" />
            <span>// Beyond The Terminal</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white select-none">
            My Creative Side
          </h2>

          <p className="text-neutral-300 font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            The passions, mental models, and creative pursuits that recharge my curiosity and inspire the way I build software.
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-neutral-200 via-white to-neutral-500 rounded-full mt-2" />
        </div>

        {/* Bento Grid with Images & Interactive Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-7">
          {/* Card 1: Music & Flow (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 group relative rounded-3xl border border-white/10 bg-neutral-900/60 hover:border-white/25 hover:bg-neutral-900/90 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_12px_36px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-1.5"
          >
            {/* Image Header with Soundwave Badge */}
            <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-950">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80"
                alt="Music and Soundscapes"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider text-white bg-black/60 backdrop-blur-md border border-white/15 shadow-md">
                  <Music className="w-3.5 h-3.5 text-violet-400" />
                  <span>Acoustic Flow</span>
                </span>

                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  aria-label="Toggle Equalizer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/20 hover:bg-violet-500/30 text-violet-300 border border-violet-500/40 text-xs font-mono transition-all backdrop-blur-md active:scale-95"
                >
                  {isPlayingAudio ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  <span>{isPlayingAudio ? 'Pulse Active' : 'Sound Wave'}</span>
                </button>
              </div>

              {/* Animated Equalizer Waveform */}
              <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center gap-1.5">
                {[12, 24, 18, 30, 14, 28, 20, 16, 26, 12, 22, 16].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: isPlayingAudio ? [h * 0.4, h * 1.2, h * 0.6, h] : h * 0.5,
                      opacity: isPlayingAudio ? 1 : 0.4,
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.6 + (i % 3) * 0.2,
                      ease: 'easeInOut',
                    }}
                    className="w-1.5 bg-gradient-to-t from-violet-500 to-indigo-300 rounded-full"
                    style={{ height: `${h * 0.5}px` }}
                  />
                ))}
                <span className="text-[11px] font-mono text-neutral-300 ml-2">Lo-Fi &amp; Synthwave</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-neutral-100 transition-colors leading-tight">
                  Music &amp; Deep Focus
                </h3>
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  Atmospheric electronic tracks, synthwave rhythms, and ambient soundscapes fuel my longest coding sessions—transforming complex problem solving into a focused, rhythmic flow state.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {['Lo-Fi Beats', 'Electronic Ambient', 'Deep Work', 'Synth Harmonics'].map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-neutral-300 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-6 py-3.5 bg-neutral-950/40 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono text-neutral-400">#FocusVibe</span>
              <span className="text-violet-400 font-medium">BPM: 85 - 110</span>
            </div>
          </motion.div>

          {/* Card 2: Chess & Tactical Thinking (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-7 group relative rounded-3xl border border-white/10 bg-neutral-900/60 hover:border-white/25 hover:bg-neutral-900/90 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_12px_36px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-1.5"
          >
            {/* Image Header with Tactical Puzzle Overlay */}
            <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-950">
              <img
                src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=600&auto=format&fit=crop&q=80"
                alt="Chess and Strategic Calculation"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider text-white bg-black/60 backdrop-blur-md border border-white/15 shadow-md">
                  <Swords className="w-3.5 h-3.5 text-rose-400" />
                  <span>Strategic Calculation</span>
                </span>

                <button
                  onClick={() => setChessSolved(!chessSolved)}
                  className="px-3 py-1 rounded-full bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-mono transition-all backdrop-blur-md active:scale-95"
                >
                  {chessSolved ? 'Reset Move' : 'Reveal Tactic'}
                </button>
              </div>

              {/* Interactive Tactical Move Hint */}
              <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-neutral-200 bg-neutral-950/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                    Position: <span className="text-white font-semibold">{chessSolved ? '1. Nh6+ Kh8 2. Qg8# (Smothered)' : 'White to move & mate in 2'}</span>
                  </span>
                </div>
                <span className="text-[11px] font-mono text-rose-400 hidden sm:inline">ELO 1800+ Tactical Vision</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-neutral-100 transition-colors leading-tight">
                  Chess &amp; Tactical Mindset
                </h3>
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  Chess is mental weightlifting. Calculating deep decision trees, positional compensation, and counterplay under time pressure directly mirrors the rigorous engineering tradeoffs required in systems architecture.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {['Tactical Puzzles', 'Positional Play', 'Game Trees', 'Decision Architecture'].map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-neutral-300 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-6 py-3.5 bg-neutral-950/40 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono text-neutral-400">#CalculationDiscipline</span>
              <span className="text-rose-400 font-medium">Foresight &amp; Tradeoffs</span>
            </div>
          </motion.div>

          {/* Card 3: Space & Cosmic Curiosity (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-7 group relative rounded-3xl border border-white/10 bg-neutral-900/60 hover:border-white/25 hover:bg-neutral-900/90 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_12px_36px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-1.5"
          >
            {/* Image Header with Live Orbit Coordinates */}
            <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-950">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80"
                alt="Space, Physics & Exploration"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider text-white bg-black/60 backdrop-blur-md border border-white/15 shadow-md">
                  <Orbit className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Astrophysics &amp; Scale</span>
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                  Infinite Frontiers
                </span>
              </div>

              {/* Cosmic telemetry badge */}
              <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-neutral-300 bg-neutral-950/70 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-white/10">
                  Telemetry: <span className="text-cyan-300 font-semibold">James Webb / Orbital Mechanics</span>
                </span>
                <span className="text-[10px] font-mono text-neutral-400 hidden sm:inline">Scale &amp; Humility</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-neutral-100 transition-colors leading-tight">
                  Space Exploration &amp; Physics
                </h3>
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  Fascinated by rocketry engineering, gravitational lenses, and the sheer scale of the cosmos. Contemplating the universe keeps engineering challenges in perspective and inspires lifelong humility and curiosity.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {['Orbital Science', 'Rocket Propulsion', 'Cosmology', 'Relativity'].map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-neutral-300 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-6 py-3.5 bg-neutral-950/40 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono text-neutral-400">#EndlessCuriosity</span>
              <span className="text-cyan-400 font-medium">Cosmic Perspective</span>
            </div>
          </motion.div>

          {/* Card 4: Visual Ideas & Interactive UI (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 group relative rounded-3xl border border-white/10 bg-neutral-900/60 hover:border-white/25 hover:bg-neutral-900/90 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_12px_36px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-1.5"
          >
            {/* Image Header with Interactive Palette Switcher */}
            <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-950">
              <img
                src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&auto=format&fit=crop&q=80"
                alt="Visual Ideas and UI Experimentation"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider text-white bg-black/60 backdrop-blur-md border border-white/15 shadow-md">
                  <Palette className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Aesthetics &amp; UX</span>
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                  Living UI
                </span>
              </div>

              {/* Interactive Color Theme Swatch Pill */}
              <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 bg-neutral-950/80 backdrop-blur-md p-1 rounded-xl border border-white/15">
                  {PALETTES.map((p, idx) => (
                    <button
                      key={p.name}
                      onClick={() => setActivePaletteIndex(idx)}
                      title={p.name}
                      className={`w-4 h-4 rounded-full border transition-all ${activePaletteIndex === idx ? 'scale-125 border-white shadow-md' : 'border-white/30 opacity-70'}`}
                      style={{ backgroundColor: p.accent }}
                    />
                  ))}
                  <span className="text-[10px] font-mono text-neutral-300 ml-1 pr-1">
                    {PALETTES[activePaletteIndex].name}
                  </span>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-neutral-100 transition-colors leading-tight">
                  Visual Design &amp; Craft
                </h3>
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  Obsessed with typography weight harmony, dark ambient contrast, subtle blur backdrops, and spring physics. Code is the engine, but design is what makes people fall in love with software.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {['Glassmorphism', 'Micro-Interactions', 'Dark Mode UI', 'Typography'].map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-neutral-300 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-6 py-3.5 bg-neutral-950/40 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono text-neutral-400">#VisualCraft</span>
              <span className="text-emerald-400 font-medium">Living Interface</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CreativeSideSection;
