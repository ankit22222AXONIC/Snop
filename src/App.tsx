import React from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { SpotlightNavbar } from './components/SpotlightNavbar';
import { SocialFlipButton } from './components/ui/social-flip-button';
import { MobileBlocker } from './components/MobileBlocker';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { InterestsSection } from './components/InterestsSection';
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection';
import { ExploringSection } from './components/ExploringSection';
import { CreativeSideSection } from './components/CreativeSideSection';
import { GithubSection } from './components/GithubSection';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';

export const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] overflow-x-hidden font-kanit">
      {/* Mobile Screen Blocker (Active only on screens < 768px) */}
      <MobileBlocker />

      {/* 4-second animated flower loading screen */}
      <LoadingScreen duration={4000} />

      {/* Top Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 pointer-events-auto">
        <SpotlightNavbar />
      </header>

      {/* Top-Right Social Flip Button */}
      <div className="fixed top-6 sm:top-8 right-4 sm:right-8 z-40 pointer-events-auto hidden lg:block">
        <SocialFlipButton />
      </div>

      {/* Main Content Stream with all 8 requested sections */}
      <main className="relative z-10 w-full flex flex-col items-center">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. About Me Preview */}
        <AboutSection />

        {/* 3. Featured Projects */}
        <FeaturedProjectsSection />

        {/* 4. What I'm Interested In (Skills) */}
        <InterestsSection />

        {/* 5. Currently Exploring (Interactive Hub) */}
        <ExploringSection />

        {/* 6. My Creative Side */}
        <CreativeSideSection />

        {/* 7. GitHub Call-To-Action */}
        <GithubSection />

        {/* 8. Frequently Asked Questions (FAQ) */}
        <FaqSection />

        {/* 9. Contact / Footer */}
        <FooterSection />
      </main>

      {/* Background Ambience (Video for all sections/tabs that don't have their own background) */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
          src="./motionsites-background-general.mp4"
        />
        <div className="absolute inset-0 bg-[#0C0C0C]/50 pointer-events-none" />
      </div>
    </div>
  );
};

export default App;
