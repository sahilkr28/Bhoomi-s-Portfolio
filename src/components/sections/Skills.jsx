import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2, Terminal, Coffee,
  Database, Brain, Cloud, Globe, Layout, Monitor,
  GitBranch, FileCode, PenTool, Server, Box,
  Lightbulb, Users, RefreshCw, Cpu
} from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    color: "#ff8c5a",
    skills: [
      { name: "C++",        icon: Code2 },
      { name: "JavaScript", icon: FileCode },
      { name: "C",          icon: Terminal },
      { name: "PHP",        icon: Globe },
      { name: "Java",       icon: Coffee },
      { name: "Python",     icon: Cpu },
    ]
  },
  {
    title: "Frameworks",
    color: "#ff8c5a",
    skills: [
      { name: "HTML",        icon: Layout },
      { name: "CSS",         icon: Monitor },
      { name: "Bootstrap",   icon: Layout },
      { name: "Node.js",     icon: Server },
      { name: "React.js",    icon: Box },
      { name: "Express.js",  icon: Server },
      { name: "Tailwind CSS",icon: PenTool },
    ]
  },
  {
    title: "Tools/Platforms",
    color: "#ff8c5a",
    skills: [
      { name: "MySQL",   icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "AWS",     icon: Cloud },
      { name: "Git",     icon: GitBranch },
      { name: "GitHub",  icon: GitBranch },
      { name: "VS Code", icon: Code2 },
      { name: "Canva",   icon: PenTool },
    ]
  },
  {
    title: "Soft Skills",
    color: "#ff8c5a",
    skills: [
      { name: "Problem-Solving",     icon: Brain },
      { name: "Team Collaboration",   icon: Users },
      { name: "Adaptability",         icon: RefreshCw },
      { name: "Leadership",           icon: Lightbulb },
    ]
  }
];

function SkillColumn({ category, colIndex }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: colIndex * 0.12, ease: 'easeOut' }}
      className="flex flex-col min-w-0"
    >
      {/* Column header */}
      <h3
        className="text-base font-bold mb-8 tracking-wider uppercase"
        style={{ color: category.color, textShadow: `0 0 12px ${category.color}66` }}
      >
        {category.title}
      </h3>

      {/* Timeline */}
      <div className="relative pl-7 flex flex-col gap-[18px]">

        {/* Animated vertical glow line */}
        <div
          className="absolute left-[3px] top-2 bottom-2 w-[2px] rounded-full overflow-hidden"
          style={{ background: 'rgba(255,140,90,0.15)' }}
        >
          <motion.div
            className="w-full rounded-full"
            style={{ background: `linear-gradient(to bottom, transparent, ${category.color}, transparent)` }}
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'linear', repeatDelay: 0.4 }}
          />
        </div>

        {category.skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -14 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: colIndex * 0.12 + i * 0.07 + 0.2 }}
              className="relative flex items-center group"
            >
              {/* Node dot on the line */}
              <div
                className="absolute -left-7 top-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full border-2 transition-all duration-300 group-hover:scale-150"
                style={{
                  borderColor: category.color,
                  background: '#0d0d0d',
                  boxShadow: `0 0 6px ${category.color}99`,
                }}
              />

              {/* Horizontal connector */}
              <div
                className="absolute -left-[19px] top-1/2 -translate-y-1/2 h-[1px] w-[16px] transition-all duration-300 group-hover:opacity-100 opacity-40"
                style={{ background: category.color }}
              />

              {/* Skill pill card */}
              <div
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl w-full cursor-default transition-all duration-300 group-hover:scale-[1.03]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,140,90,0.12)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,140,90,0.10)';
                  e.currentTarget.style.border = '1px solid rgba(255,140,90,0.45)';
                  e.currentTarget.style.boxShadow = `0 0 18px rgba(255,140,90,0.18), 0 2px 12px rgba(0,0,0,0.4)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.border = '1px solid rgba(255,140,90,0.12)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.3)';
                }}
              >
                <div
                  className="flex items-center justify-center w-[28px] h-[28px] rounded-lg shrink-0"
                  style={{ background: 'rgba(255,140,90,0.10)' }}
                >
                  <Icon size={14} style={{ color: category.color }} />
                </div>
                <span className="text-[13px] font-semibold text-white/80 tracking-wide leading-none">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* Ambient background glows */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,140,90,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,140,90,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center relative z-10">

        {/* Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 tracking-tight">
            Skills
          </h2>
          <div
            className="mx-auto h-[3px] w-14 rounded-full"
            style={{ background: '#ff8c5a', boxShadow: '0 0 14px rgba(255,140,90,0.7)' }}
          />
        </motion.div>

        {/* Card container */}
        <div
          className="w-full max-w-6xl rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-14"
          style={{
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,140,90,0.10)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 8px 60px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.03)',
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            {skillCategories.map((category, idx) => (
              <SkillColumn key={category.title} category={category} colIndex={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
