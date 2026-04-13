import CTAButton from '../common/CTAButton';

const TIERS = [
  { name: 'Signature', desc: 'Category exclusivity, high-frequency visibility, and tentpole event alignment.' },
  { name: 'Performance', desc: 'Data-backed campaign modules with flexible seasonal rollouts.' },
  { name: 'Emerging', desc: 'Agile entry tier for challenger brands to activate with measurable impact.' },
];

const SponsorshipModule = () => {
  return (
    <div className="feature-grid">
      {TIERS.map((tier) => (
        <article key={tier.name} className="feature-card">
          <h3>{tier.name}</h3>
          <p>{tier.desc}</p>
        </article>
      ))}
      <CTAButton label="Discuss Sponsorship" to="/contact" className="feature-cta" />
    </div>
  );
};

export default SponsorshipModule;
