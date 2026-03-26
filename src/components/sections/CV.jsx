import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, GraduationCap, Calendar, Star, Building2 } from 'lucide-react';

const educationTimeline = [
  {
    stage: "B.Tech CSE",
    institution: "Lovely Professional University (LPU)",
    score: "CGPA: 8.95",
    year: "2021 - Present",
    details: "Focusing on Full-Stack Web Development, Data Structures, and AI Applications. Successfully built multiple impactful projects and consistently maintained high academic performance.",
    color: "bg-theme-pink",
    pos: { x: 20, y: 20 },
    indexLabel: "3"
  },
  {
    stage: "Intermediate",
    institution: "Narayana College",
    score: "80%",
    year: "2019 - 2021",
    details: "Completed higher secondary education with a strong foundation in Mathematics, Physics, and Chemistry. Developed an early interest in algorithmic problem solving.",
    color: "bg-theme-orange",
    pos: { x: 80, y: 50 },
    indexLabel: "2"
  },
  {
    stage: "Matriculation",
    institution: "Matrix Academy",
    score: "92.2%",
    year: "2018 - 2019",
    details: "Built the foundation of my academic journey with excellence in science and analytical subjects.",
    color: "bg-theme-text", // Could be another theme color
    pos: { x: 20, y: 80 },
    indexLabel: "1"
  }
];

export default function CV() {
  const [activeStage, setActiveStage] = useState(0); // Default to Present (B.Tech)
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Automatically trigger glitch every 3 seconds
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 500); // 500ms glitch duration
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="cv" className="py-24 md:py-32 bg-card-bg relative overflow-hidden">

      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-theme-pink/10 to-transparent -z-10" />

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 lg:gap-8 items-start">

        {/* Left Side: Name Glitch & Actions */}
        <div className="flex flex-col items-start lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-theme-pink font-semibold tracking-widest uppercase mb-4 flex items-center gap-2">
              <FileText size={20} />
              Curriculum Vitae
            </h2>

            {/* Automatic Glitch Name Effect */}
            <div className="relative cursor-default">
              <h1 className={`text-5xl md:text-7xl font-display font-bold text-theme-text relative z-10 transition-opacity duration-100 ${isGlitching ? 'opacity-0' : 'opacity-100'}`}>
                Bhoomi CV
              </h1>
              {/* Glitch layers visible during interval */}
              <div className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-100 ${isGlitching ? 'opacity-100' : 'opacity-0'}`}>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-theme-pink absolute top-0 left-[2px] animate-[glitch_0.3s_linear_infinite]">
                  Bhoomi CV
                </h1>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-theme-orange absolute top-[2px] -left-[2px] animate-[glitch_0.4s_linear_infinite_reverse]">
                  Bhoomi CV
                </h1>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-theme-orange absolute -top-[1px] left-[1px] mix-blend-screen animate-[glitch_0.2s_linear_infinite]">
                  Bhoomi CV
                </h1>
              </div>
            </div>

            <p className="text-theme-text/60 text-lg mt-6 max-w-md">
              A comprehensive record of my academic history, professional skills, and qualifications. Download or view the full document below.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="https://drive.google.com/file/d/1ptHFS4EwZlDuf0B_8SJjTaAx2KXGPS6Z/view?usp=sharing"
              className="interactive px-8 py-4 bg-gradient-to-r from-theme-pink to-theme-orange text-theme-bg font-bold rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,214,165,0.3)]"
            >
              <FileText size={20} />
              View CV
            </a>
            <a
              href="https://drive.google.com/file/d/1ptHFS4EwZlDuf0B_8SJjTaAx2KXGPS6Z/view?usp=sharing"
              className="interactive px-8 py-4 glass text-theme-text font-bold rounded-full flex items-center gap-2 border-theme-text/20 hover:border-theme-orange hover:bg-theme-text/5 transition-all"
            >
              <Download size={20} />
              Download
            </a>
          </motion.div>

          {/* Details Card - Shows current active selection */}
          <div className="w-full">
            <h3 className="text-sm font-bold tracking-widest uppercase text-theme-text/40 mb-4 px-2">Selected Era Details</h3>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full glass rounded-[2rem] p-6 text-left border border-theme-text/10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] relative overflow-hidden"
              >
                {/* Subtle colored glow based on active item */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-20 blur-3xl ${educationTimeline[activeStage].color} z-0 pointer-events-none`} />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap size={28} className="text-theme-text" />
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-theme-text">
                      {educationTimeline[activeStage].stage}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3 text-theme-text/70 text-sm font-medium mb-6">
                    <span className="flex items-center gap-1.5 bg-theme-text/5 px-3 py-1.5 rounded-full shadow-inner"><Building2 size={14} /> {educationTimeline[activeStage].institution}</span>
                    <span className="flex items-center gap-1.5 bg-theme-orange/10 text-theme-orange px-3 py-1.5 rounded-full shadow-inner"><Star size={14} className="fill-theme-orange" /> {educationTimeline[activeStage].score}</span>
                    <span className="flex items-center gap-1.5 bg-theme-text/5 px-3 py-1.5 rounded-full shadow-inner"><Calendar size={14} /> {educationTimeline[activeStage].year}</span>
                  </div>

                  <p className="text-theme-text/70 leading-relaxed md:text-lg">
                    {educationTimeline[activeStage].details}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Interactive Winding Map */}
        <div className="relative w-full aspect-[4/5] max-h-[800px] flex items-center justify-center pt-8">

          <div className="relative w-full h-full max-w-md mx-auto">
            {/* SVG Winding Road Layer */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-lg" preserveAspectRatio="none">

              {/* Thick Road Base */}
              <motion.path
                d="M 20 80 C 60 80, 80 65, 80 50 C 80 35, 60 20, 20 20"
                fill="none"
                className="stroke-theme-text/10"
                strokeWidth="8"
                strokeLinecap="round"
              />

              {/* Thick Road Edges (border) */}
              <motion.path
                d="M 20 80 C 60 80, 80 65, 80 50 C 80 35, 60 20, 20 20"
                fill="none"
                className="stroke-card-bg"
                strokeWidth="6"
                strokeLinecap="round"
              />

              {/* Animated Inner Road Tracking Line */}
              <motion.path
                d="M 20 80 C 60 80, 80 65, 80 50 C 80 35, 60 20, 20 20"
                fill="none"
                className="stroke-theme-pink mix-blend-screen"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="3 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </svg>

            {/* Map Pins */}
            {educationTimeline.map((item, index) => {
              const active = activeStage === index;
              return (
                <motion.div
                  key={index}
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.4, type: 'spring', stiffness: 300, damping: 20 }}
                  className={`absolute z-20 cursor-pointer group flex flex-col items-center hover:scale-110 transition-transform duration-300 ${active ? 'scale-110 z-30' : ''}`}
                  // Translating -50% -100% places the absolute anchor exactly at the bottom tip of the pin
                  style={{ left: `${item.pos.x}%`, top: `${item.pos.y}%`, transform: 'translate(-50%, -100%)' }}
                  onClick={() => setActiveStage(index)}
                >
                  {/* Pin Body (Teardrop shape) */}
                  <div className={`relative w-12 h-12 md:w-16 md:h-16 rounded-[50%] rounded-br-none rotate-45 flex items-center justify-center shadow-xl transition-colors duration-500 ${active ? item.color : 'bg-card-bg border-[2px] border-theme-text/20'}`}>

                    {/* Number internally counter-rotated so it stands upright */}
                    <span className={`-rotate-45 font-display font-bold text-lg md:text-xl transition-colors duration-300 ${active ? 'text-theme-bg' : 'text-theme-text/50 group-hover:text-theme-text'}`}>
                      {item.indexLabel}
                    </span>

                    {/* Glowing highlight when active */}
                    {active && <div className="absolute inset-0 rounded-[50%] rounded-br-none mix-blend-screen bg-white/30 blur-sm pointer-events-none" />}
                  </div>

                  {/* Subtle Anchor Dot linking to the SVG road */}
                  <div className={`w-2.5 h-2.5 rounded-full absolute -bottom-1 transition-colors duration-300 shadow-sm ${active ? item.color : 'bg-theme-text/20'}`} />

                  {/* Title Hover Tooltip for Desktop */}
                  <div className={`absolute top-full mt-4 bg-glass border border-theme-text/10 px-3 py-1.5 rounded-lg text-theme-text text-xs whitespace-nowrap font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${active ? 'opacity-100' : ''}`}>
                    {item.stage}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Glitch keyframes added manually */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes glitch {
          0% { clip-path: inset(10% 0 10% 0); transform: translate(2px, -2px); }
          20% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 2px); }
          40% { clip-path: inset(40% 0 40% 0); transform: translate(2px, 2px); }
          60% { clip-path: inset(20% 0 60% 0); transform: translate(-2px, -2px); }
          80% { clip-path: inset(60% 0 20% 0); transform: translate(2px, -2px); }
          100% { clip-path: inset(10% 0 10% 0); transform: translate(-2px, 2px); }
        }
      `}} />
    </section>
  );
}
