import CTAButton from '../common/CTAButton';

const RETAIL_ZONES = [
  'Luxury destination wing for flagship experiences',
  'High-flow retail corridors with year-round demand',
  'Flexible pop-up programs for rapid go-to-market testing',
];

const RetailShowcase = () => {
  return (
    <div className="feature-grid two-col">
      <div>
        <h3>Retail That Converts Traffic Into Revenue</h3>
        <p>
          MOA gives brands an unmatched launch platform: destination shoppers, tourism demand,
          and a built-in entertainment funnel that keeps dwell time high.
        </p>
        <CTAButton label="Explore Leasing Paths" to="/leasing" />
      </div>
      <ul className="feature-list">
        {RETAIL_ZONES.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RetailShowcase;
