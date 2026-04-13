import SectionWrapper from '../components/common/SectionWrapper';
import CTAButton from '../components/common/CTAButton';

const PATHWAYS = [
  { title: 'Luxury Corridor', body: 'Premium placements with destination-brand adjacency and experiential frontage.' },
  { title: 'Retail Core', body: 'High-velocity zones for category leaders and expansion brands.' },
  { title: 'Dining & Lifestyle', body: 'Daypart-driven spaces built around dwell-time and repeat engagement.' },
  { title: 'Pop-Up Program', body: 'Short-cycle test environments with measurable launch performance.' },
];

const LEASING_PROCESS = [
  'Submit category profile, footprint target, and timeline',
  'Receive recommended zones with demand context and adjacency rationale',
  'Align lease model, marketing support, and launch schedule',
  'Activate and track operational performance post opening',
];

const SUPPORT_AREAS = [
  'Store planning and visibility strategy',
  'Launch calendar alignment with property campaigns',
  'On-site promotional integration and event tie-ins',
  'Ongoing performance review and optimization recommendations',
];

const TENANT_PROFILES = [
  {
    title: 'Scaling Digital-Native Brands',
    body: 'Move from online traction to physical market dominance with high-intent in-person traffic.',
  },
  {
    title: 'Global Flagship Entrants',
    body: 'Establish destination-level presence with strategic adjacency and premium visibility.',
  },
  {
    title: 'Campaign-Led Pop-Up Operators',
    body: 'Test new categories, products, and experiences with agile lease windows.',
  },
  {
    title: 'Experience-Centric Concepts',
    body: 'Pair commerce with entertainment and interaction to maximize dwell and repeat visits.',
  },
];

const Leasing = () => {
  return (
    <>
      <SectionWrapper
        id="leasing-page"
        title="Leasing Pathways"
        subtitle="Select a commercial model that fits your brand stage, footprint needs, and growth objective."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {PATHWAYS.map((path) => (
            <article key={path.title} className="rounded-2xl border border-amber-300/20 bg-zinc-900/50 p-6">
              <h3 className="font-display text-3xl text-zinc-100">{path.title}</h3>
              <p className="mt-3 text-zinc-400">{path.body}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="leasing-process"
        title="Leasing Process"
        subtitle="A clear operating flow from evaluation to launch."
      >
        <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          <ol className="space-y-3">
            {LEASING_PROCESS.map((step, index) => (
              <li key={step} className="rounded-xl border border-amber-300/20 bg-black/25 p-4 text-zinc-300">
                <span className="mr-2 text-amber-200">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>

          <div className="rounded-2xl border border-amber-300/25 bg-gradient-to-br from-amber-300/10 to-transparent p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Ready to Proceed?</p>
            <h3 className="mt-3 font-display text-3xl text-zinc-100">Request the Leasing Pack</h3>
            <p className="mt-3 text-zinc-300">
              We will share availability bands, fit guidelines, and next-step requirements based on your category.
            </p>
            <div className="mt-6">
              <CTAButton label="Request Leasing Pack" to="/contact" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="leasing-support"
        title="Partner Support"
        subtitle="Leasing is backed by operational collaboration before and after launch."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {SUPPORT_AREAS.map((item) => (
            <div key={item} className="rounded-xl border border-amber-300/20 bg-zinc-900/45 p-4 text-zinc-300">
              {item}
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="leasing-profiles"
        title="Ideal Tenant Profiles"
        subtitle="We actively support brands with clear growth intent and differentiated customer value."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {TENANT_PROFILES.map((profile) => (
            <article key={profile.title} className="rounded-2xl border border-amber-300/20 bg-black/25 p-6">
              <h3 className="font-display text-2xl text-zinc-100">{profile.title}</h3>
              <p className="mt-2 text-zinc-400">{profile.body}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Leasing;
