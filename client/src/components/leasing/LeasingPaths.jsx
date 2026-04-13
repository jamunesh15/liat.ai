import CTAButton from '../common/CTAButton';

const PATHS = [
  { title: 'Luxury', body: 'Flagship-ready locations with premium brand adjacency.' },
  { title: 'Retail Core', body: 'High-velocity corridors for scale-focused operators.' },
  { title: 'F&B', body: 'Dining placements designed around daypart conversion.' },
  { title: 'Pop-Up', body: 'Short-cycle modules for campaign-led retail and testing.' },
];

const LeasingPaths = () => {
  return (
    <div className="feature-grid">
      {PATHS.map((path) => (
        <article key={path.title} className="feature-card">
          <h3>{path.title}</h3>
          <p>{path.body}</p>
        </article>
      ))}
      <CTAButton label="Request Leasing Pack" to="/contact" className="feature-cta" />
    </div>
  );
};

export default LeasingPaths;
