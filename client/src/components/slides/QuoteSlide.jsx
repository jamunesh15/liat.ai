import { motion } from 'framer-motion';

export default function QuoteSlide({ data }) {
  return (
    <div
      className="slide"
      style={{
        backgroundImage: `url(${data.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="slide-overlay" style={{ background: 'rgba(0, 0, 0, 0.7)' }} />

      <motion.div
        className="slide-content"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ maxWidth: '800px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.h2 
            style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(5rem, 12vw, 10rem)', 
              color: 'var(--accent-gold)', 
              lineHeight: 1, 
              margin: 0 
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {data.stat}
          </motion.h2>
          <motion.p 
            style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '1.2rem', 
              color: 'var(--text-secondary)', 
              letterSpacing: '0.1em', 
              textTransform: 'uppercase', 
              marginTop: '10px' 
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {data.statLabel}
          </motion.p>
        </div>

        <motion.blockquote 
          style={{ 
            fontFamily: 'var(--font-display)', 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            lineHeight: 1.3, 
            color: 'white', 
            fontStyle: 'italic', 
            position: 'relative' 
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          "{data.quote}"
        </motion.blockquote>

        {data.cta && (
          <motion.div style={{ marginTop: '50px' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }}>
            <button className="cta-btn-gold">{data.cta}</button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}