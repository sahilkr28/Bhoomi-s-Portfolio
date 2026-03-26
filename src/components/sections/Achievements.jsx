import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Target, Zap, Medal } from 'lucide-react';

const achievements = [
  {
    title: "O Grade in DSA",
    category: "Academic Excellence",
    description: "Secured top marks globally. Dedication to algorithmic efficiency and perfect problem solving.",
    icon: Star,
    glow: "rgba(251,191,36,0.6)", // Gold Glow
    ringGradient: "from-amber-300 via-yellow-500 to-amber-700",
    iconColor: "text-amber-400",
  },
  {
    title: "18th Rank Hack Quest CTF",
    category: "Cybersecurity Competition",
    description: "Secured 18th position in a 24-hour Capture The Flag (CTF) challenge under Concotion 2024, demonstrating strong problem-solving and cybersecurity skills.",
    icon: Target,
    glow: "rgba(192,38,211,0.6)", // Iridescent Glow
    ringGradient: "from-fuchsia-500 via-cyan-400 to-purple-600",
    iconColor: "text-cyan-300",
  },
  {
    title: "2nd Pos. Aptitude",
    category: "Competitive Events",
    description: "Outperformed 500+ participants in analytical reasoning and fast-paced logical abstract challenges.",
    icon: Trophy,
    glow: "rgba(148,163,184,0.5)", // Silver Glow
    ringGradient: "from-slate-300 via-gray-100 to-slate-500",
    iconColor: "text-slate-200",
  },
  {
    title: "Cybersecurity Event Organizer",
    category: "Leadership & Volunteering",
    description: "Received a certificate of appreciation for successfully organizing a Cyber-Security event on campus, showcasing leadership and coordination skills.",
    icon: Zap,
    glow: "rgba(56,189,248,0.6)", // Blue Glow
    ringGradient: "from-sky-400 via-blue-300 to-indigo-600",
    iconColor: "text-sky-300",
  },
  {
    title: "Top 15 HackWithVertos",
    category: "Hackathon",
    description: "Secured a position among the top 15 teams in a 24-hour HackWithVertos hackathon, competing against 200+ groups and demonstrating strong innovation and teamwork.",
    icon: Medal,
    glow: "rgba(244,114,182,0.6)", // Pink Glow
    ringGradient: "from-pink-400 via-rose-300 to-red-500",
    iconColor: "text-pink-300",
  }
];

export default function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x < -threshold && currentIndex < achievements.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getCardStyle = (index) => {
    const diff = index - currentIndex;

    // We base the design on 3-card visibility
    if (diff === 0) {
      return {
        x: "0%",
        scale: 1,
        opacity: 1,
        zIndex: 20,
        filter: "blur(0px) brightness(1)",
      };
    } else if (diff === 1) {
      return {
        x: "65%",
        scale: 0.85,
        opacity: 0.7,
        zIndex: 10,
        filter: "blur(1px) brightness(0.6)",
      };
    } else if (diff === -1) {
      return {
        x: "-65%",
        scale: 0.85,
        opacity: 0.7,
        zIndex: 10,
        filter: "blur(1px) brightness(0.6)",
      };
    } else {
      return {
        x: diff > 0 ? "100%" : "-100%",
        scale: 0.7,
        opacity: 0,
        zIndex: 0,
        filter: "blur(4px)",
      };
    }
  };

  return (
    <section id="achievements" className="py-24 md:py-32 relative bg-theme-bg overflow-hidden flex flex-col items-center">
      {/* Subtle Noise Texture for premium feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-theme-text mb-6"
          >
            Milestones &amp; <span className="text-gradient">Achievements</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-theme-text/60 max-w-2xl mx-auto text-lg"
          >
            Swipe left and right to explore my technical accolades and competitive milestones.
          </motion.p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative w-full max-w-lg mx-auto h-[480px] md:h-[550px] perspective-1000 flex justify-center items-center">
          <AnimatePresence initial={false}>
            {achievements.map((item, index) => {
              const isCenter = index === currentIndex;

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={getCardStyle(index)}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  /* Only allow drag on the central active card */
                  drag={isCenter ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  // Let side cards be clicked to navigate
                  onClick={() => {
                    if (index === currentIndex - 1) setCurrentIndex(index);
                    if (index === currentIndex + 1) setCurrentIndex(index);
                  }}
                  className={`absolute w-full px-6 md:px-10 py-10 md:py-12 rounded-[2.5rem] bg-[#1a1b1f] border border-white/5 flex flex-col items-center justify-start text-center shadow-2xl ${isCenter ? 'cursor-grab active:cursor-grabbing interactive' : 'cursor-pointer'}`}
                  style={{
                    boxShadow: isCenter ? `0 20px 40px -10px rgba(0,0,0,0.5), 0 0 80px -20px ${item.glow}` : '0 20px 40px -10px rgba(0,0,0,0.5)',
                  }}
                >
                  {/* Glowing 3D Icon Ring */}
                  <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center mb-8">
                    {/* Ring Gradient Border */}
                    <div className={`absolute inset-0 rounded-full p-[3px] bg-gradient-to-tr ${item.ringGradient}`}>
                      <div className="w-full h-full bg-[#1a1b1f] rounded-full" />
                    </div>
                    {/* Deep shadow inside ring */}
                    <div className="absolute inset-[6px] rounded-full bg-gradient-to-b from-[#24252a] to-[#121316] shadow-inner" />
                    {/* Glow behind icon */}
                    <div
                      className="absolute inset-[20px] rounded-full mix-blend-screen blur-xl"
                      style={{ backgroundColor: item.glow }}
                    />
                    {/* The Icon */}
                    <item.icon size={56} className={`relative z-10 ${item.iconColor} drop-shadow-[0_0_15px_currentColor]`} strokeWidth={1.5} />
                  </div>

                  {/* Indicator Pill */}
                  <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-semibold tracking-widest mb-6">
                    {index + 1} / {achievements.length}
                  </div>

                  {/* Text Content */}
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 drop-shadow-md">
                    {item.title}
                  </h3>

                  <p className="text-white/50 text-sm md:text-base leading-relaxed px-2">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Optional Mobile Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {achievements.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-theme-orange w-8' : 'bg-theme-text/20 hover:bg-theme-text/40'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
