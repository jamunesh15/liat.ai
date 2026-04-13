import SectionWrapper from '../components/common/SectionWrapper';
import CTAButton from '../components/common/CTAButton';

const TIERS = [
  {
    title: 'Signature Partner',
    detail: 'Category exclusivity, high-frequency placements, and tentpole event integration.',
  },
  {
    title: 'Performance Partner',
    detail: 'Multi-touch campaign modules optimized around measurable awareness and conversion.',
  },
  {
    title: 'Emerging Partner',
    detail: 'Agile placements for challenger brands entering high-volume physical environments.',
  },
];

const CHANNELS = [
  'In-property digital media network',
  'Event and attraction integrations',
  'Wayfinding and experiential touchpoints',
  'Audience segment aligned activation zones',
];

const KPI_BLOCKS = [
  { title: 'Awareness', body: 'Impression share across high-traffic zones and media surfaces.' },
  { title: 'Engagement', body: 'Interaction metrics from activations, events, and branded touchpoints.' },
  { title: 'Conversion', body: 'Trackable downstream actions tied to campaigns and promotional mechanics.' },
];

const PARTNER_OBJECTIVES = [
  'Launch new products with destination-scale visibility and social amplification.',
  'Strengthen category authority through recurring high-quality brand presence.',
  'Drive measurable lead capture and conversion from experiential campaigns.',
  'Align media, on-ground activation, and seasonal programming into one commercial narrative.',
];

const Sponsorship = () => {
  return (
    <>
      <SectionWrapper
        id="sponsorship-page"
        title="Sponsorship & Brand Partnerships"
        subtitle="Build branded presence across a destination with proven audience density and campaign continuity."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {TIERS.map((tier) => (
            <article key={tier.title} className="rounded-2xl border border-amber-300/20 bg-zinc-900/50 p-6">
              <h3 className="font-display text-3xl text-amber-200">{tier.title}</h3>
              <p className="mt-3 text-zinc-400">{tier.detail}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="sponsorship-channels"
        title="Activation Channels"
        subtitle="Mix channels by objective: awareness, engagement, trial, or conversion."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <ul className="space-y-3">
            {CHANNELS.map((channel) => (
              <li key={channel} className="rounded-xl border border-amber-300/20 bg-black/20 p-4 text-zinc-300">
                {channel}
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-amber-300/25 bg-gradient-to-br from-amber-300/10 to-transparent p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Measurement</p>
            <h3 className="mt-3 font-display text-3xl text-zinc-100">Campaign Intelligence</h3>
            <p className="mt-3 text-zinc-300">
              Sponsorship performance is tracked across impressions, dwell interaction, and conversion-oriented actions
              so your partnership evolves with data.
            </p>
            <div className="mt-6">
              <CTAButton label="Discuss Sponsorship" to="/contact" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="sponsorship-kpi"
        title="Measurement Framework"
        subtitle="Every partnership includes objective-specific KPIs and optimization checkpoints."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {KPI_BLOCKS.map((item) => (
            <article key={item.title} className="rounded-2xl border border-amber-300/20 bg-black/25 p-6">
              <h3 className="font-display text-3xl text-zinc-100">{item.title}</h3>
              <p className="mt-3 text-zinc-400">{item.body}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="sponsorship-objectives"
        title="Strategic Partner Objectives"
        subtitle="Partnerships are designed around business outcomes, not only media exposure."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {PARTNER_OBJECTIVES.map((item) => (
            <div key={item} className="rounded-xl border border-amber-300/20 bg-zinc-900/45 p-5 text-zinc-300">
              {item}
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Sponsorship;
