import { motion } from 'framer-motion';

const HeroOverlay = () => {
  return (
    <div className="relative z-10 mx-auto flex min-h-[70vh] w-[min(1200px,92vw)] flex-col items-center justify-center gap-6 text-center">
      <motion.p
        className="text-sm uppercase tracking-[0.28em] text-amber-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Mall of America
      </motion.p>
      <motion.h1
        className="font-display text-5xl leading-[0.95] text-zinc-100 md:text-8xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        The Center of Everything.
      </motion.h1>
      <motion.h3
        className="max-w-2xl text-lg font-medium text-zinc-300 md:text-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        40 million visitors. 520 stores. One address.
      </motion.h3>
    </div>
  );
};

export default HeroOverlay;
