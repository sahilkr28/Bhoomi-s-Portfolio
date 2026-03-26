import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'CV', href: '#cv' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Theme setup
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300 pointer-events-auto",
        scrolled ? "py-4 bg-theme-bg/80 backdrop-blur-md border-b border-glass-border shadow-lg" : "py-6 bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo/Brand */}
        <a href="#home" className="text-xl font-display font-bold text-theme-text group interactive">
          BS<span className="text-theme-pink">.</span>J
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-theme-text/70">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="interactive relative hover:text-theme-text transition-colors group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-theme-pink to-theme-orange transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="interactive p-2 rounded-full bg-glass-bg border border-glass-border text-theme-text hover:text-theme-pink transition-colors shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(248,200,220,0.2)]"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="#contact"
              className="interactive px-5 py-2.5 rounded-full bg-glass-bg border border-glass-border text-sm font-semibold text-theme-text hover:bg-theme-text/10 hover:border-theme-pink/50 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(248,200,220,0.2)]"
            >
              Get in Touch
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme} 
            className="interactive p-2 text-theme-text hover:text-theme-pink transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="text-theme-text interactive p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-card-bg border-b border-glass-border shadow-xl md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col py-4 px-6 gap-4">
              {navItems.map((item) => (
                <motion.li 
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <a 
                    href={item.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-theme-text/80 hover:text-theme-pink interactive"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="pt-4 border-t border-glass-border"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex interactive items-center justify-center w-full px-5 py-3 rounded-xl bg-gradient-to-r from-theme-pink to-theme-orange text-theme-bg font-semibold shadow-[0_4px_20px_rgba(255,214,165,0.5)]"
                >
                  Get in Touch
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
