import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function StatsSlide({ data }) {
  return (
    <div className="slide">
      <div className="slide-content" style={{ maxWidth: '1000px' }}>
        <motion.h2 
          className="slide-headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ marginBottom: '20px' }}
        >
          {data.headline}
        </motion.h2>
        
        <motion.div 
          className="stats-grid"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {data.stats.map((stat, idx) => (
            <motion.div key={idx} className="stat-item" variants={item}>
              <div className="stat-value">{stat.display}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}