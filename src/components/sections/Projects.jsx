import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { FileCode2 as Github, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "SmartLearn",
    description: "Smart Education Platform leveraging modern web tech to deliver interactive, personalized learning experiences with real-time analytics.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://smart-learn01.vercel.app/",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Tagtopia",
    description: "An innovative E-library Management System designed to streamline book tracking, lending processes, and user management through intuitive labeling.",
    stack: ["React", "Tailwind", "MySQL", "PHP"],
    github: "https://github.com/bhoomiijain/E-Library-Management-System",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Airport Lounge Finder",
    description: "AI-powered chatbot assisting travelers in discovering airport lounges, providing real-time amenitity details and navigational help.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "PostCSS"],
    github: "https://github.com/bhoomiijain/Airport-Lounge-Finder-Bot",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Cloud Usage Tracker",
    description: "A centralized dashboard to monitor cloud resource allocation, analyze billing usage, and generate optimization alerts to streamline cloud spending.",
    stack: ["Java"],
    github: "https://github.com/bhoomiijain/CloudUsageTracker",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "SmartCart - Mini E-Commerce System",
    description: "A seamless mini e-commerce platform offering stateful cart management, responsive product browsing, and an intuitive simulated checkout flow.",
    stack: ["PHP", "Tailwind"],
    github: "https://github.com/bhoomiijain/SmartCart---Mini-E-Commerce-System-with-Core-Data-Structures",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Injenious Blog Website",
    description: "A fast, modern blogging platform featuring dynamic content creation, intuitive category tagging, and a smooth reading experience.",
    stack: ["HTML/CSS"],
    github: "https://github.com/bhoomiijain/injenious-blog-website",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: true
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);

    // Auto scroll logic (slow swipe right->left)
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 4000);

    return () => clearInterval(autoplay);
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-theme-bg overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-card-bg to-transparent -z-10" />
      <div className="absolute -left-40 top-40 w-80 h-80 bg-theme-orange/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 mb-12 flex items-end justify-between">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-theme-text mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-theme-text/60 max-w-xl text-lg"
          >
            A selection of my recent works involving AI, full-stack technologies, and cloud integrations.
          </motion.p>
        </div>

        {/* Navigation Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={scrollPrev}
            className="interactive p-4 rounded-full glass border-theme-text/10 hover:border-theme-pink hover:bg-theme-text/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} className="text-theme-text" />
          </button>
          <button
            onClick={scrollNext}
            className="interactive p-4 rounded-full glass border-theme-text/10 hover:border-theme-orange hover:bg-theme-text/5 transition-colors"
          >
            <ChevronRight size={24} className="text-theme-text" />
          </button>
        </div>
      </div>

      {/* Embla Carousel */}
      <div className="overflow-hidden py-10" ref={emblaRef}>
        <div className="flex touch-pan-y" style={{ backfaceVisibility: 'hidden' }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative flex-none w-[85vw] md:w-[60vw] lg:w-[45vw] pl-6 md:pl-12"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative h-[450px] md:h-[550px] w-full rounded-[2.5rem] overflow-hidden border border-theme-text/10 shadow-2xl"
              >
                {/* Parallax Image Background using static scale transition on hover */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-card-bg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-theme-bg/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-theme-text/10 text-theme-text backdrop-blur-md border border-theme-text/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-display font-bold text-theme-text mb-4 group-hover:text-theme-pink transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-theme-text/70 text-lg mb-8 line-clamp-2 md:line-clamp-none max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.description}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="interactive flex items-center gap-2 px-6 py-3 rounded-full bg-theme-text text-theme-bg font-semibold hover:bg-theme-orange transition-colors"
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </a>
                      <button className="interactive w-12 h-12 rounded-full glass flex items-center justify-center border-theme-text/20 hover:bg-theme-text/10 transition-colors text-theme-text">
                        <ExternalLink size={20} />
                      </button>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
