import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const GITHUB_URL = 'https://github.com/ankit22222AXONIC';
const X_TWITTER_URL = 'https://x.com/Snopoxb';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full max-w-6xl mx-auto px-3 sm:px-4 pt-16 sm:pt-20 pb-20 sm:pb-32 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-2xl sm:rounded-3xl border border-white/20 overflow-hidden min-h-[520px] sm:min-h-[660px] flex flex-col justify-between p-6 sm:p-16 md:p-20 text-center shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
      >
        {/* Background Video (Only Contact Section - Vivid & Sharp) */}
        <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90 scale-100"
            src="./motionsites-background-d38a1a89.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/70 pointer-events-none" />
        </div>

        {/* Top spacer */}
        <div className="hidden sm:block" />

        {/* Exact Content from User Mockup */}
        <div className="relative z-10 my-auto py-6 sm:py-12 space-y-5 sm:space-y-8 drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
          {/* Heading */}
          <h2 className="text-3xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white select-none">
            Let&apos;s Connect
          </h2>

          {/* Subtitle */}
          <p className="text-neutral-200 font-light text-sm sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed px-2">
            I&apos;m always open to new projects, collaborative opportunities, or just a friendly chat about the future of AI.
          </p>

          {/* Email Link in Coral/Orange */}
          <div className="pt-1 sm:pt-2">
            <a
              href="mailto:snopn88@gmail.com"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-lg sm:text-2xl md:text-3xl font-semibold text-[#FF5733] hover:text-[#ff7253] transition-all hover:scale-105 active:scale-95 drop-shadow-[0_2px_10px_rgba(255,87,51,0.3)] break-all sm:break-normal"
            >
              <span>snopn88@gmail.com</span>
              <span className="font-light text-base sm:text-2xl">@</span>
            </a>
          </div>

          {/* Social Buttons */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 pt-2 sm:pt-4">
            <a
              href={X_TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (formerly Twitter)"
              className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white text-base sm:text-xl transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg backdrop-blur-sm"
            >
              <FaXTwitter />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white text-base sm:text-xl transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg backdrop-blur-sm"
            >
              <FaInstagram />
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white text-base sm:text-xl transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg backdrop-blur-sm"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white text-base sm:text-xl transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg backdrop-blur-sm"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-white/70 gap-3 pt-5 border-t border-white/10 drop-shadow">
          <p className="font-light">
            Built with curiosity using React, TypeScript &amp; Tailwind CSS
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
