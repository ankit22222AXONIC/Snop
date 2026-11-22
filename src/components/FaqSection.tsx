import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Sparkles } from 'lucide-react';
import { FaqAccordion, FaqItem } from './ui/faq-accordion';

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Who is Snop?",
    answer: "I'm a student and aspiring Agentic Programmer interested in AI, software development, and technology. I enjoy experimenting with ideas, learning new things, and building projects of my own.",
  },
  {
    question: "What do you build?",
    answer: "I build experimental projects involving AI, automation, software, and other technologies. Most of my projects are driven by curiosity and the desire to turn an idea into something real.",
  },
  {
    question: "What technologies are you learning?",
    answer: "I'm exploring Python, AI models, AI agents, software development, automation, and various tools that help me build and experiment with technology.",
  },
  {
    question: "Are you open to collaborating on projects?",
    answer: "Yes! I'm open to interesting ideas, experiments, and collaborations where I can learn something new, solve problems, and build cool things together.",
  },
  {
    question: "Where can I see your projects and code?",
    answer: "You can explore my projects on this portfolio and check out my GitHub to see the code, experiments, and things I'm working on.",
  },
];

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="relative w-full py-20 sm:py-28 scroll-mt-24 overflow-hidden">
      {/* Background Video (FAQ Section) */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[#0C0C0C] -z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-85"
          src="./motionsites-background-dcf72378.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C] via-[#0C0C0C]/40 to-[#0C0C0C] pointer-events-none" />
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-4">
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
              <HelpCircle className="w-3.5 h-3.5 text-neutral-300" />
              <span>// Common Inquiries</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white select-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Frequently Asked Questions
            </h2>

            <p className="text-neutral-200 font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Answers to common questions about my background, current tech stack, and collaborative experiments.
            </p>

            <div className="w-16 h-1 bg-gradient-to-r from-neutral-200 via-white to-neutral-500 rounded-full mt-2" />
          </div>

          {/* FAQ Accordion Component */}
          <FaqAccordion items={FAQ_ITEMS} />
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
