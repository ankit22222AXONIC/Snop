import React, { useState } from 'react';
import { Copy, Check, Monitor, Eye } from 'lucide-react';

export const MobileBlocker: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (dismissed) {
    return null;
  }

  return (
    <aside
      aria-label="Mobile screen restriction notice"
      className="fixed inset-0 z-[99999] bg-[#0C0C0C]/98 backdrop-blur-2xl flex flex-col items-center justify-center p-4 sm:p-6 text-center select-none overflow-y-auto md:hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container Card */}
      <div className="relative z-10 w-full max-w-sm rounded-3xl border border-white/15 bg-neutral-900/90 backdrop-blur-2xl p-6 sm:p-7 flex flex-col items-center space-y-5 shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
        
        {/* Holographic 3D Image Banner */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black">
          <img
            src="./desktop-only-preview.jpg"
            alt="Desktop Display Only"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/30 pointer-events-none" />

          {/* Hologram Badge */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Display Notice</span>
          </div>
        </div>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-mono uppercase tracking-widest text-neutral-300">
          <Monitor className="w-3.5 h-3.5 text-neutral-200" />
          <span>Desktop Experience Only</span>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase leading-snug">
            Not Built For Phone Screens
          </h1>
          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed px-1">
            Please access this website on a larger display like a laptop or PC to view the full interactive experience.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col space-y-2.5 pt-1">
          {/* Copy Link Button */}
          <button
            onClick={handleCopy}
            className="w-full py-3 px-4 rounded-xl font-medium text-xs sm:text-sm bg-white text-black hover:bg-neutral-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Link Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Link for Laptop / PC</span>
              </>
            )}
          </button>

          {/* Dismiss / View Anyway Button */}
          <button
            onClick={() => setDismissed(true)}
            className="w-full py-2.5 px-4 rounded-xl font-light text-xs text-neutral-400 hover:text-white hover:bg-white/[0.05] border border-white/5 transition-all flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Preview anyway (not optimized)</span>
          </button>
        </div>

        {/* Recommended Spec */}
        <div className="w-full pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
          <span>Required Display:</span>
          <span className="text-neutral-200">Laptop / PC (768px+)</span>
        </div>
      </div>
    </aside>
  );
};

export default MobileBlocker;
