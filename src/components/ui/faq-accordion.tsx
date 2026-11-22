"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

export interface FaqAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: FaqItem[];
  title?: string;
}

export function FaqAccordion({
  items = [],
  title,
  className,
  ...props
}: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={cn("w-full max-w-4xl mx-auto py-2 relative font-kanit", className)} {...props}>
      {title && (
        <h2 className="text-center font-bold text-2xl md:text-3xl mb-8 text-white">
          {title}
        </h2>
      )}

      <ul className="w-full mx-auto list-none p-0 flex flex-col space-y-3">
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <li
              key={index}
              className={cn(
                "w-full relative transition-all duration-300 rounded-2xl overflow-hidden border backdrop-blur-md",
                isActive
                  ? "border-white/25 bg-black/75 shadow-[0_12px_35px_rgba(0,0,0,0.7)]"
                  : "border-white/10 bg-black/40 hover:bg-black/60 hover:border-white/20"
              )}
            >
              <button
                className={cn(
                  "flex flex-row items-center justify-between w-full min-h-[58px] py-4 px-5 sm:px-6 cursor-pointer",
                  "border-l-4 transition-all duration-200 text-left outline-none text-base sm:text-lg font-medium",
                  isActive
                    ? "border-l-white text-white"
                    : "border-l-transparent text-neutral-300 hover:text-white"
                )}
                onClick={() => toggleItem(index)}
                aria-expanded={isActive}
              >
                <div className="flex items-center gap-3 sm:gap-4 pr-4">
                  <span
                    className={cn(
                      "flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border text-xs sm:text-sm font-mono shrink-0 transition-colors",
                      isActive
                        ? "border-white bg-white text-black font-semibold"
                        : "border-white/20 text-neutral-400 bg-white/[0.03]"
                    )}
                  >
                    0{index + 1}
                  </span>
                  <span className="leading-snug">{item.question}</span>
                </div>

                {/* Animated Toggle Symbol */}
                <span
                  className={cn(
                    "w-7 h-7 rounded-full border flex items-center justify-center text-sm shrink-0 transition-all duration-300",
                    isActive
                      ? "border-white/30 bg-white/10 text-white rotate-180"
                      : "border-white/10 bg-white/[0.02] text-neutral-400 rotate-0"
                  )}
                >
                  {isActive ? "−" : "+"}
                </span>
              </button>

              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out w-full",
                  isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base font-light text-neutral-300 leading-relaxed pl-14 sm:pl-16 border-t border-white/5">
                    <p className="opacity-95">{item.answer}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FaqAccordion;
