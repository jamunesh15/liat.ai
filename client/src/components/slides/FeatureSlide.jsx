import { motion } from 'framer-motion';

export default function FeatureSlide({ data }) {
  const isRight = data.imagePosition === 'right';

  return (
    <div className="slide">
      <div className="feature-slide-grid">
        {/* Left Side */}
        {isRight ? (
          <ContentSide data={data} delay={0.2} />
        ) : (
          <ImageSide data={data} />
        )}

        {/* Right Side */}
        {isRight ? (
          <ImageSide data={data} />
        ) : (
          <ContentSide data={data} delay={0.2} />
        )}
      </div>
    </div>
  );
}

function ImageSide({ data }) {
  return (
    <motion.div 
      className="feature-slide-image"
      style={{
        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(201,164,72,${data.imageGlow ?? 0.16}), transparent 45%), linear-gradient(135deg, rgba(8,8,8,${data.imageDarkStart ?? 0.7}), rgba(12,12,12,${data.imageDarkEnd ?? 0.45})), url(${data.bgImage})`,
        backgroundBlendMode: 'screen, normal, normal',
        filter: `brightness(${data.imageBrightness ?? 1}) contrast(${data.imageContrast ?? 1.05}) saturate(${data.imageSaturation ?? 1.05})`,
        '--feature-vignette-opacity': data.vignetteOpacity ?? 0.55
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}

function ContentSide({ data, delay }) {
  return (
    <motion.div 
      className="feature-slide-content"
      initial={{ opacity: 0, x: data.imagePosition === 'right' ? -40 : 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="slide-eyebrow" style={{ marginBottom: '12px' }}>{data.eyebrow}</p>
      <h2 className="slide-headline" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '16px' }}>
        {data.headline}
      </h2>
      <p className="slide-subheadline" style={{ fontSize: '1.1rem', marginBottom: '24px' }}>
        {data.body}
      </p>
      
      {data.points && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {data.points.map((point, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay + 0.3 + (index * 0.1) }}
              style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '10px' }}
            >
              <div style={{ color: 'var(--accent-gold)', marginTop: '2px' }}>•</div>
              {point}
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}