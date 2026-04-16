import { motion } from 'framer-motion';

// Internal animation variants — stagger children in
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSlide({ data }) {
  return (
    // RULE: Every slide is 100vw × 100vh. No overflow. No scroll.
    <div
      className="slide"
      style={{
        backgroundImage: `url(${data.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="slide-overlay" />

      {/* Content */}
      <motion.div
        className="slide-content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="slide-eyebrow">{data.eyebrow}</motion.p>
        <motion.h1 variants={item} className="slide-headline">{data.headline}</motion.h1>
        <motion.p variants={item} className="slide-subheadline">{data.subheadline}</motion.p>
        <motion.div variants={item}>
          <button className="cta-btn-primary">{data.cta}</button>
        </motion.div>
      </motion.div>
    </div>
  );
}