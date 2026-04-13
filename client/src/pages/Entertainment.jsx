import SectionWrapper from '../components/common/SectionWrapper';
import CTAButton from '../components/common/CTAButton';

const ATTRACTIONS = [
  {
    title: 'Nickelodeon Universe',
    detail: 'Anchor attraction driving family frequency and high dwell-time commerce around core corridors.',
  },
  {
    title: 'SEA LIFE Aquarium',
    detail: 'Immersive destination that strengthens educational and multi-generation visit behavior.',
  },
  {
    title: 'Live Experience Zones',
    detail: 'Flexible spaces for rotating cultural programming, music, and branded showcases.',
  },
  {
    title: 'Family Discovery Formats',
    detail: 'Interactive attractions that extend length-of-stay and increase cross-category transactions.',
  },
];

const ENTERTAINMENT_VALUE = [
  'Increases repeat visitation through always-on experiential programming',
  'Boosts cross-spend between attractions, dining, and retail stores',
  'Creates media-ready moments for social and digital amplification',
  'Unlocks branded activations with naturally high engagement behavior',
];

const AUDIENCE_BEHAVIOR = [
  { metric: 'Longer Dwell Time', insight: 'Experience zones keep visitors on-property longer, increasing cross-category spend.' },
  { metric: 'Family Repeat Visits', insight: 'Multi-age attractions improve revisit cadence and stabilize weekly traffic patterns.' },
  { metric: 'Social Amplification', insight: 'Visually engaging attractions generate shareable content and earned reach lift.' },
  { metric: 'Retail Halo Effect', insight: 'Attraction exits and pathways create high-conversion moments for nearby stores.' },
];

const Entertainment = () => {
  return (
    <>
      <SectionWrapper
        id="entertainment-page"
        title="Entertainment & Attractions"
        subtitle="Experience-led traffic generation that creates durable commercial outcomes for partners and tenants."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {ATTRACTIONS.map((item) => (
            <article key={item.title} className="rounded-2xl border border-amber-300/20 bg-zinc-900/55 p-6">
              <h3 className="font-display text-3xl text-zinc-100">{item.title}</h3>
              <p className="mt-3 text-zinc-400">{item.detail}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="entertainment-impact"
        title="Commercial Impact"
        subtitle="Attractions are not standalone amenities. They operate as demand engines for the entire property."
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <ul className="space-y-3">
            {ENTERTAINMENT_VALUE.map((point) => (
              <li key={point} className="rounded-xl border border-amber-300/20 bg-black/20 p-4 text-zinc-300">
                {point}
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-amber-300/25 bg-gradient-to-br from-amber-300/10 to-transparent p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Activation Ready</p>
            <h3 className="mt-3 font-display text-3xl text-zinc-100">Plan an Entertainment Collaboration</h3>
            <p className="mt-3 text-zinc-300">
              Collaborate on experience-led programs that combine audience engagement, media visibility, and measurable
              commercial lift.
            </p>
            <div className="mt-6">
              <CTAButton label="Start Collaboration" to="/contact" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="entertainment-behavior"
        title="Audience Behavior Insights"
        subtitle="Entertainment data informs how we place retail, dining, and sponsor activations for better yield."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {AUDIENCE_BEHAVIOR.map((item) => (
            <article key={item.metric} className="rounded-2xl border border-amber-300/20 bg-zinc-900/45 p-6">
              <h3 className="font-display text-2xl text-amber-200">{item.metric}</h3>
              <p className="mt-2 text-zinc-300">{item.insight}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Entertainment;
