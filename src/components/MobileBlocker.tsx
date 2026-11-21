import React from 'react';
import { Monitor, Smartphone, Sparkles } from 'lucide-react';

export const MobileBlocker: React.FC = () => {
  return (
    <aside
      aria-label="Mobile screen restriction notice"
      className="fixed inset-0 z-[99999] bg-[#0C0C0C] flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden md:hidden"
    >
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-violet-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-600/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Main Blocker Card */}
      <div className="relative z-10 w-full max-w-sm rounded-3xl border border-white/15 bg-neutral-900/80 backdrop-blur-2xl p-8 flex flex-col items-center space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
        {/* Animated Device Icons */}
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white shadow-inner">
            <Monitor className="w-10 h-10 text-neutral-200" />
          </div>
          <div className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-neutral-950 border border-white/15 text-rose-400 shadow-md">
            <Smartphone className="w-4 h-4 opacity-75" />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono uppercase tracking-wider text-neutral-300">
          <Sparkles className="w-3 h-3 text-violet-400" />
          <span>Desktop Experience Only</span>
        </div>

        {/* Heading & Notice */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Please Switch to a Laptop or PC
          </h1>
          <p className="text-xs sm:text-sm text-neutral-300/90 font-light leading-relaxed">
            This portfolio was engineered with high-performance 3D visual canvas simulations, interactive code drawers, and desktop agent architectures that require a larger display.
          </p>
        </div>

        {/* Visual Requirement Pill */}
        <div className="w-full py-2.5 px-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-between text-xs font-mono text-neutral-400">
          <span>Required Display:</span>
          <span className="text-white font-medium">Laptop / Desktop (768px+)</span>
        </div>

        <p className="text-[11px] text-neutral-400 font-light">
          Open this link on your computer to explore the full portfolio.
        </p>
      </div>
    </aside>
  );
};

export default MobileBlocker;
