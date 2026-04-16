import { motion } from 'framer-motion';

export default function CTASlide({ data }) {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div
      className="slide"
      style={{
        backgroundImage: `url(${data.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="slide-overlay" style={{ background: 'rgba(0,0,0,0.85)' }} />

      <div className="slide-content" style={{ maxWidth: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.h1 
          className="slide-headline"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ marginBottom: '24px' }}
        >
          {data.headline}
        </motion.h1>

        <motion.p 
          className="slide-subheadline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ marginBottom: '60px', color: 'var(--text-primary)', fontSize: '1.2rem' }}
        >
          {data.subheadline}
        </motion.p>

        <motion.div 
          style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {data.actions.map((action, idx) => (
            <motion.div key={idx} variants={item}>
              <button 
                className="cta-btn-primary" 
                style={{
                  padding: '24px 48px',
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  borderRadius: '40px',
                  width: '300px',
                  justifyContent: 'center',
                  boxShadow: '0 10px 30px rgba(201,168,76,0.15)'
                }}
              >
                {action.label}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}