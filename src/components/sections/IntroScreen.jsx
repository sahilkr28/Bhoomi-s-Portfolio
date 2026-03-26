import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mouse } from 'lucide-react';

export default function IntroScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2500; // 2.5 seconds loading
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoaded(true), 500); // Wait bit after reaching 100
          setTimeout(onComplete, 1200); // Transition out
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-theme-bg overflow-hidden"
          exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Animated Flowing Light Trails (Background) */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
            <motion.div
              className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-theme-pink/30 rounded-full blur-[100px]"
              animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-theme-orange/30 rounded-full blur-[120px]"
              animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-theme-orange/20 rounded-full blur-[80px]"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Main Content */}
          <div className="z-10 flex flex-col items-center justify-center gap-6 w-full max-w-2xl px-6">

            {/* Centered Loading Info */}
            <div className="flex flex-col items-center tracking-wide text-center">
              <motion.h1
                className="text-4xl md:text-6xl font-display font-bold text-theme-text mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Bhoomi Sunil Jain
              </motion.h1>
              {/* <motion.p
                className="text-theme-orange uppercase tracking-widest text-sm mb-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Initializing Environment...
              </motion.p> */}

              {/* Progress Bar Container */}
              <motion.div
                className="w-full max-w-sm h-1 bg-theme-text/10 rounded-full overflow-hidden mt-6"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-theme-pink to-theme-orange"
                  style={{ width: `${Math.min(100, progress)}%` }}
                />
              </motion.div>
              <div className="mt-2 text-center w-full max-w-sm text-xs font-mono text-theme-text/50">
                {Math.round(progress)}%
              </div>
            </div>
          </div>

          {/* Bottom Scroll Indicator (Only shows when almost ready) */}
          <motion.div
            className="absolute bottom-10 flex flex-col items-center opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: progress > 80 ? 0.8 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Mouse size={24} className="text-theme-text mb-2" />
            <motion.div
              className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
