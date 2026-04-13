import CTAButton from '../common/CTAButton';

const CARDS = [
  'Nickelodeon Universe',
  'SEA LIFE Aquarium',
  'Live performance programming',
  'Family attractions and experiential zones',
];

const EntertainmentGrid = () => {
  return (
    <div className="feature-grid">
      {CARDS.map((item) => (
        <article key={item} className="feature-card">
          <h3>{item}</h3>
          <p>Immersive experiences that drive repeat visits and cross-category spending.</p>
        </article>
      ))}
      <CTAButton label="Book an Activation" to="/events" className="feature-cta" />
    </div>
  );
};

export default EntertainmentGrid;
