import { motion } from 'framer-motion';
import { Award, ShieldCheck, Code, Server, Network } from 'lucide-react';

const certs = [
  { name: "Cloud Computing", org: "NPTEL", icon: Server, color: "text-theme-orange", border: "border-theme-orange", link: "https://drive.google.com/file/d/1VhxZ-Qu2GHK0A4GOwlU3lKbOxIlk5Mcd/view" },
  { name: "Computer Networking", org: "Coursera", icon: Network, color: "text-theme-pink", border: "border-theme-pink", link: "https://www.coursera.org/account/accomplishments/verify/ALCGZOFLMQMS?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course" },
  { name: "DSA", org: "GeeksforGeeks", icon: Code, color: "text-theme-orange", border: "border-theme-orange", link: "https://drive.google.com/file/d/1dZM_NVboyZflmaoj_JpSq6eO4OJNc_gr/view" },
  { name: "Python Training", org: "Code Sprint", icon: Code, color: "text-theme-text", border: "border-theme-text/50", link: "https://drive.google.com/file/d/1PGwcIbK8uEE5whI9Vqu_u1sdK1fFkO_T/view" },
  { name: "Leadership & Teams", org: "Saylor", icon: ShieldCheck, color: "text-theme-orange", border: "border-theme-orange", link: "https://drive.google.com/file/d/1w2q_OgFWg3JWHTZcMm8UePAO_ro64EQP/view" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32 bg-card-bg overflow-hidden flex flex-col items-center">

      <div className="text-center mb-16 md:mb-24 z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold text-theme-text mb-6"
        >
          Featured <span className="text-gradient">Certifications</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-theme-text/60 max-w-xl mx-auto text-lg"
        >
          Continuous learning is the key to mastering new technologies. Here are my verified achievements and training badges.
        </motion.p>
      </div>

      {/* Orbit Container */}
      <div className="relative w-full max-w-3xl aspect-square md:aspect-[2/1] flex items-center justify-center min-h-[500px] md:min-h-[600px]">

        {/* Central Hub */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1 }}
          className="absolute z-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-theme-bg glass flex flex-col items-center justify-center border border-theme-text/20 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
        >
          <Award size={48} className="text-theme-pink mb-2 animate-pulse" />
          <span className="font-display font-bold text-theme-text tracking-widest text-sm uppercase">Certified</span>
        </motion.div>

        {/* Orbit Rings */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-dashed border-theme-text/30 rounded-full animate-[spin_40s_linear_infinite]" />
          <div className="absolute w-[450px] h-[450px] md:w-[650px] md:h-[650px] border border-dashed border-theme-orange/30 rounded-full animate-[spin_60s_linear_infinite_reverse]" />
        </div>

        {/* Orbiting Items */}
        {certs.map((cert, index) => {
          // Calculate positions along an ellipse/circle
          const angle = (index / certs.length) * (2 * Math.PI);
          // Standard distance from center
          const radiusXDesktop = 320;
          const radiusYDesktop = 280;
          const radiusXMobile = 180;
          const radiusYMobile = 180;

          return (
            <motion.a
              key={index}
              href={cert.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`interactive absolute z-30 group`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
            >
              <motion.div
                animate={{
                  x: [
                    Math.cos(angle) * radiusXMobile,
                    Math.cos(angle + Math.PI * 2) * radiusXMobile
                  ],
                  y: [
                    Math.sin(angle) * radiusYMobile,
                    Math.sin(angle + Math.PI * 2) * radiusYMobile
                  ],
                }}
                transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                className="md:hidden"
              >
                <div className={`p-4 rounded-2xl glass border ${cert.border} bg-theme-bg/80 backdrop-blur-xl hover:bg-theme-text/10 transition-colors flex flex-col items-center justify-center w-36 shadow-lg`}>
                  <cert.icon size={24} className={`mb-3 ${cert.color}`} />
                  <h4 className="text-theme-text font-semibold text-xs text-center leading-tight mb-1">{cert.name}</h4>
                  <span className="text-theme-text/50 text-[10px]">{cert.org}</span>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  x: [
                    Math.cos(angle) * radiusXDesktop,
                    Math.cos(angle + Math.PI * 2) * radiusXDesktop
                  ],
                  y: [
                    Math.sin(angle) * radiusYDesktop,
                    Math.sin(angle + Math.PI * 2) * radiusYDesktop
                  ],
                }}
                transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                className="hidden md:block"
              >
                <div className={`p-5 rounded-3xl glass border ${cert.border} bg-theme-bg/80 backdrop-blur-xl hover:scale-110 hover:bg-theme-text/10 transition-all duration-300 flex flex-col items-center justify-center w-48 shadow-[0_0_20px_rgba(255,255,255,0.05)]`}>
                  <cert.icon size={32} className={`mb-4 ${cert.color}`} />
                  <h4 className="text-theme-text font-bold text-sm text-center leading-tight mb-2">{cert.name}</h4>
                  <span className="text-theme-text/60 text-xs tracking-wider uppercase font-medium">{cert.org}</span>
                </div>
              </motion.div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
