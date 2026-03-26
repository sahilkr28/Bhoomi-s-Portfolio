import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Box, Server, Database, Cloud, Terminal, Code2, FileCode, Layout, FileCode2 as Github, Briefcase as Linkedin } from 'lucide-react';

const roles = ["AI Enthusiast", "Full Stack Developer", "Cloud Learner"];

const floatingSkills = [
  { icon: Box, name: "React", size: 60, x: 5, y: 10, duration: 4.5, delay: 0 },
  { icon: Server, name: "Node.js", size: 50, x: 85, y: 5, duration: 5.2, delay: 1 },
  { icon: Database, name: "MongoDB", size: 70, x: 45, y: 60, duration: 6, delay: 0.5 },
  { icon: Cloud, name: "AWS", size: 45, x: 20, y: 75, duration: 4.8, delay: 2 },
  { icon: Terminal, name: "Python", size: 65, x: 90, y: 65, duration: 5.5, delay: 0.2 },
  { icon: Code2, name: "C++", size: 55, x: 10, y: 50, duration: 4.2, delay: 1.5 },
  { icon: FileCode, name: "JavaScript", size: 40, x: 35, y: 15, duration: 3.8, delay: 0.8 },
  { icon: Layout, name: "Tailwind", size: 50, x: 70, y: 80, duration: 5.8, delay: 1.2 },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 min-h-screen flex items-center">
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-theme-pink/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-theme-orange/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-start">

        {/* Left Side Content */}
        <div className="flex flex-col items-start z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-theme-text/10 shadow-[0_4px_15px_rgba(248,200,220,0.1)]"
          >
            <span className="w-2 h-2 rounded-full bg-theme-orange animate-pulse" />
            <span className="text-sm font-medium text-theme-text/90">Hello, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-theme-text mb-4 tracking-tight leading-tight"
          >
            <span className="text-gradient">Bhoomi Jain</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-8 md:h-12 mb-6 flex items-center"
          >
            <span className="text-xl md:text-3xl text-theme-text/80 font-medium">
              &gt; {displayText}
              <span className="animate-pulse inline-block w-[2px] h-6 md:h-8 bg-theme-orange ml-1 align-middle" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-theme-text/60 text-base md:text-lg max-w-2xl mb-10 leading-relaxed space-y-4"
          >
            <span className="block">A CSE student who didn't choose tech for the hype, but stayed for the craft of building things people actually use. I work across the full stack and I'm increasingly invested in DevOps — because I've realized that shipping something clean, fast, and reliable is just as important as building it well.</span>
            
            <span className="block">I care about the whole arc: how it looks, how it works, how it lands in the real world and stays there. What sets my approach apart is simple — I build with intention. Not just to make things functional, but to make them feel right to the person on the other side.</span>
            
            <span className="block">CSE gave me the foundation. Curiosity, a few humbling projects, and a stubborn need to understand things end to end did the rest. I'm still early in the journey — but I'm already thinking like someone who's in it for the long run.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="interactive group relative px-8 py-4 bg-theme-text text-theme-bg font-semibold rounded-full overflow-hidden flex items-center gap-2 transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-theme-pink to-theme-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <span className="relative z-10 group-hover:text-theme-bg transition-colors">View Projects</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://github.com/bhoomiijain"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive w-14 h-14 rounded-full glass flex items-center justify-center text-theme-text hover:bg-theme-text/10 transition-colors border border-theme-text/20 hover:border-theme-orange/50 group"
            >
              <Github size={22} className="group-hover:text-theme-orange group-hover:-translate-y-1 transition-all" />
            </a>

            <a
              href="https://www.linkedin.com/in/bhoomii/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive w-14 h-14 rounded-full glass flex items-center justify-center text-theme-text hover:bg-theme-text/10 transition-colors border border-theme-text/20 hover:border-theme-orange/50 group"
            >
              <Linkedin size={22} className="group-hover:text-theme-orange group-hover:-translate-y-1 transition-all" />
            </a>
          </motion.div>

          {/* Floating Bubble Skills Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="w-full relative h-[180px] mt-10 md:mt-16 overflow-visible hidden sm:block"
          >
            {floatingSkills.map((skill, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -15, 0, 15, 0],
                  x: [0, 10, 0, -10, 0]
                }}
                transition={{
                  duration: skill.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: skill.delay
                }}
                className="absolute flex items-center justify-center rounded-full glass border border-theme-text/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.4),0_8px_20px_rgba(0,0,0,0.08)] backdrop-blur-md text-theme-text hover:scale-110 transition-transform cursor-pointer overflow-hidden group"
                style={{
                  left: `${skill.x}%`,
                  top: `${skill.y}%`,
                  width: skill.size,
                  height: skill.size
                }}
                title={skill.name}
              >
                {/* Iridescent bubble effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-theme-pink/30 via-transparent to-theme-orange/30 opacity-60 mix-blend-overlay group-hover:opacity-100 transition-opacity" />
                <skill.icon size={skill.size * 0.45} strokeWidth={1.5} className="relative z-10" />
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Right Side Image/Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 flex justify-center mt-12 lg:mt-0 sticky top-24"
        >
          {/* Decorative Ring */}
          <div className="absolute inset-0 border border-theme-pink/30 rounded-[3rem] rotate-6 scale-[1.05] -z-10 transition-transform duration-700 hover:rotate-12" />

          <div className="relative w-full max-w-md aspect-[3/4] rounded-[3rem] p-4 glass overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-white/5 to-white/0 border-t-white/20 border-l-white/20">
            {/* The actual image placeholder mimicking user's uploaded image style */}
            <div className="w-full h-full rounded-[2.5rem] bg-card-bg overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-theme-bg/80 via-transparent to-transparent z-10" />
              <img
                src="/profilepic.png"
                alt="Bhoomi Jain"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
              />

              {/* Floating Tags */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-6 px-4 py-2 glass rounded-full text-xs font-medium border border-theme-text/20 z-20 text-theme-text shadow-lg backdrop-blur-xl"
              >
                React • Node • AI
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-6 px-4 py-2 bg-gradient-to-r from-theme-orange/20 to-theme-pink/20 backdrop-blur-md rounded-full text-xs font-semibold border border-theme-orange/30 z-20 text-theme-text shadow-[0_0_15px_rgba(255,214,165,0.3)]"
              >
                3+ Built Projects
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-10 left-10 px-4 py-2 glass rounded-full text-xs font-medium border border-theme-orange/30 z-20 text-theme-orange bg-theme-orange/5 backdrop-blur-xl"
              >
                ● Open to Opportunities
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
