import { AnimatePresence, motion } from 'framer-motion';
import { useDeck } from '../../context/DeckContext';

// Slide transition variants
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SlideRenderer() {
  const { currentSlide, slides } = useDeck();
  const slide = slides[currentSlide];
  const SlideComponent = slide.component;

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <AnimatePresence mode="wait" custom={1}>
        <motion.div
          key={currentSlide}
          custom={1}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ position: 'absolute', inset: 0 }}
        >
          <SlideComponent data={slide.data} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}