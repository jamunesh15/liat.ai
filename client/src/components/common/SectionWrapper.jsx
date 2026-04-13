import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const SectionWrapper = ({ id, title, subtitle, children, className = '' }) => {
  const { ref, isVisible } = useIntersectionObserver();
  const { fadeUp } = useScrollAnimation();

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`mx-auto w-[min(1200px,92vw)] py-16 md:py-24 ${className}`}
      variants={fadeUp}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      {(title || subtitle) && (
        <header className="mb-9 md:mb-12">
          {title && <h2 className="font-display text-4xl text-zinc-100 md:text-6xl">{title}</h2>}
          {subtitle && <p className="mt-3 max-w-3xl text-lg text-zinc-400 md:text-xl">{subtitle}</p>}
        </header>
      )}
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
