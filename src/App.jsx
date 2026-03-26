import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';

import IntroScreen from './components/sections/IntroScreen';
import Navbar from './components/layout/Navbar';

import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Achievements from './components/sections/Achievements';
import CV from './components/sections/CV';
import Contact from './components/sections/Contact';

function App() {
  const [isDesktop, setIsDesktop] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Check if we previously visited to skip intro locally (optional), but we will play it every time for now.
    
    // Lenis Smooth Scrolling Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      lenis.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full selection:bg-theme-pink selection:text-theme-bg">
      {!loadingComplete && (
        <IntroScreen onComplete={() => setLoadingComplete(true)} />
      )}

      {/* The main content only renders or becomes visible after loading. 
          To prevent scroll issues during load we can conditionally hide it or just keep it there. */}
      <div className={loadingComplete ? "opacity-100 transition-opacity duration-1000" : "opacity-0 h-screen overflow-hidden"}>
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Certifications />
          <Achievements />
          <CV />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
