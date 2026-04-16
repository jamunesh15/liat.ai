import { motion } from 'framer-motion';

export default function GallerySlide({ data }) {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };
  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="slide">
      <div className="gallery-slide-shell">
        <motion.p className="slide-eyebrow gallery-eyebrow">{data.eyebrow}</motion.p>
        <motion.h2 className="gallery-headline">{data.headline}</motion.h2>

        <motion.div 
          className="gallery-grid"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {data.images.map((img, i) => (
            <motion.div 
              key={i} 
              variants={item} 
              className="gallery-card"
              whileHover={{ scale: 1.05, boxShadow: '0 30px 60px rgba(0,0,0,0.7)', transition: { duration: 0.3 } }}
            >
              <div className="gallery-media">
                <motion.img 
                  src={img.src} 
                  alt={img.label} 
                  className="gallery-image"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://picsum.photos/seed/fallback-${i + 1}/1200/900`;
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="gallery-caption">
                <p className="gallery-label">{img.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}