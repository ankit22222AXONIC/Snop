import React, { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { cn } from "@/lib/utils";

export interface NavItem {
    label: string;
    href: string;
}

export interface SpotlightNavbarProps {
    items?: NavItem[];
    className?: string;
    onItemClick?: (item: NavItem, index: number) => void;
    defaultActiveIndex?: number;
}

export function SpotlightNavbar({
    items = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
    ],
    className,
    onItemClick,
    defaultActiveIndex = 0,
}: SpotlightNavbarProps) {
    const navRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
    const [hoverX, setHoverX] = useState<number | null>(null);

    // Refs for the "light" positions so we can animate them imperatively
    const spotlightX = useRef(0);
    const ambienceX = useRef(0);

    useEffect(() => {
        if (!navRef.current) return;
        const nav = navRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = nav.getBoundingClientRect();
            const x = e.clientX - rect.left;
            setHoverX(x);
            // Direct update for immediate feedback (no spring for the mouse itself, feels snappier)
            spotlightX.current = x;
            nav.style.setProperty("--spotlight-x", `${x}px`);
        };

        const handleMouseLeave = () => {
            setHoverX(null);
            // When mouse leaves, spring the spotlight back to the active item
            const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);
            if (activeItem) {
                const navRect = nav.getBoundingClientRect();
                const itemRect = activeItem.getBoundingClientRect();
                const targetX = itemRect.left - navRect.left + itemRect.width / 2;

                animate(spotlightX.current, targetX, {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    onUpdate: (v) => {
                        spotlightX.current = v;
                        nav.style.setProperty("--spotlight-x", `${v}px`);
                    }
                });
            }
        };

        nav.addEventListener("mousemove", handleMouseMove);
        nav.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            nav.removeEventListener("mousemove", handleMouseMove);
            nav.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [activeIndex]);

    // Handle the "Ambience" (Active Item) Movement
    useEffect(() => {
        if (!navRef.current) return;
        const nav = navRef.current;
        const updateAmbience = () => {
            const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);
            if (activeItem) {
                const navRect = nav.getBoundingClientRect();
                const itemRect = activeItem.getBoundingClientRect();
                const targetX = itemRect.left - navRect.left + itemRect.width / 2;

                animate(ambienceX.current, targetX, {
                    type: "spring",
                    stiffness: 220,
                    damping: 24,
                    onUpdate: (v) => {
                        ambienceX.current = v;
                        nav.style.setProperty("--ambience-x", `${v}px`);
                    },
                });
            }
        };

        updateAmbience();
        const timer = setTimeout(updateAmbience, 150);
        return () => clearTimeout(timer);
    }, [activeIndex]);

    // Scroll Spy: track active section based on scroll position
    useEffect(() => {
        let isManualClick = false;
        let clickTimer: ReturnType<typeof setTimeout>;

        const handleScroll = () => {
            if (isManualClick) return;

            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            // Bottom of page check -> Contact
            if (scrollY + viewportHeight >= docHeight - 80) {
                const contactIdx = items.findIndex((it) => it.href === "#contact");
                if (contactIdx !== -1) {
                    setActiveIndex(contactIdx);
                    return;
                }
            }

            // Find current section in view
            const scrollMiddle = scrollY + viewportHeight * 0.35;
            let currentIdx = 0;

            for (let i = items.length - 1; i >= 0; i--) {
                const href = items[i].href;
                if (href?.startsWith("#")) {
                    const el = document.querySelector(href);
                    if (el) {
                        const top = el.getBoundingClientRect().top + scrollY;
                        if (scrollMiddle >= top - 60) {
                            currentIdx = i;
                            break;
                        }
                    }
                }
            }

            setActiveIndex((prev) => (prev !== currentIdx ? currentIdx : prev));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(clickTimer);
        };
    }, [items]);

    const handleItemClick = (item: NavItem, index: number) => {
        setActiveIndex(index);
        onItemClick?.(item, index);
        if (item.href?.startsWith('#')) {
            const el = document.querySelector(item.href);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className={cn("relative flex justify-center pt-3 sm:pt-10 px-2 sm:px-0", className)}>
            <nav
                ref={navRef}
                className={cn(
                    "spotlight-nav spotlight-nav-bg glass-border spotlight-nav-shadow",
                    "relative h-10 sm:h-[50px] max-w-[96vw] px-1 sm:px-2 rounded-full transition-all duration-300 overflow-hidden"
                )}
            >
                {/* Content */}
                <ul className="relative flex items-center h-full px-1 sm:px-1.5 gap-0 sm:gap-1 z-[10]">
                    {items.map((item, idx) => (
                        <li key={idx} className="relative h-full flex items-center justify-center">
                            <a
                                href={item.href}
                                data-index={idx}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleItemClick(item, idx);
                                }}
                                className={cn(
                                    "px-2.5 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-[15px] font-medium tracking-tight sm:tracking-normal transition-colors duration-200 rounded-full whitespace-nowrap",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-white/30",
                                    // Active vs Inactive Text
                                    activeIndex === idx
                                        ? "text-black dark:text-white"
                                        : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                                )}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* LIGHTING LAYERS 
                   We use CSS variables --spotlight-x and --ambience-x updated by JS
                */}

                {/* 1. The Moving Spotlight (Follows Mouse) */}
                <div
                    className="pointer-events-none absolute bottom-0 left-0 w-full h-full z-[1] opacity-0 transition-opacity duration-300"
                    style={{
                        opacity: hoverX !== null ? 1 : 0,
                        background: `
              radial-gradient(
                135px circle at var(--spotlight-x) 100%, 
                var(--spotlight-color, rgba(0,0,0,0.1)) 0%, 
                transparent 50%
              )
            `
                    }}
                />

                {/* 2. The Active State Ambience (Stays on Active & Glows Upward) */}
                <div
                    className="pointer-events-none absolute bottom-0 left-0 w-full h-full z-[2]"
                    style={{
                        background: `
                  radial-gradient(
                    90px 38px at var(--ambience-x) 100%, 
                    var(--ambience-color, rgba(255,255,255,0.22)) 0%, 
                    transparent 100%
                  ),
                  radial-gradient(
                    50px 3px at var(--ambience-x) 100%, 
                    var(--ambience-color, rgba(255,255,255,1)) 0%, 
                    transparent 100%
                  )
                `
                    }}
                />
            </nav>
        </div>
    );
}

export default SpotlightNavbar;
