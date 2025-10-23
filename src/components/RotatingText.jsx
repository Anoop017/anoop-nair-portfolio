import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const easing = [0.4, 0, 0.2, 1];

const RotatingText = ({
  texts = [],
  interval = 3000,
  mainClassName = '',
  splitLevelClassName = '',
  staggerFrom = 'first',
  staggerDuration = 0.03
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <motion.div
      layout
      layoutRoot
      className={`
        inline-flex items-center justify-center 
        px-4 py-2 rounded-xl 
        text-black text-xl sm:text-2xl md:text-3xl font-semibold 
        shadow-[0_4px_20px_rgba(0,255,255,0.4)] 
        border border-cyan-400 
        bg-cyan-200/30 backdrop-blur-md 
        transition-all duration-700 ease-in-out 
        hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] 
        hover:scale-[1.03] 
        ${mainClassName}
      `}
      transition={{ layout: { duration: 0.8, ease: easing } }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={texts[index]}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: easing }}
          className="inline-flex flex-wrap justify-center"
        >
          {texts[index].split(' ').map((word, i) => (
            <span key={i} className="mr-2 inline-flex">
              {word.split('').map((char, j) => (
                <motion.span
                  key={j}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    delay:
                      staggerFrom === 'first'
                        ? j * staggerDuration
                        : (word.length - j) * staggerDuration,
                    ease: easing,
                  }}
                  className={splitLevelClassName}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default RotatingText;
