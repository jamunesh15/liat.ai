import SectionWrapper from '../components/common/SectionWrapper';
import CTAButton from '../components/common/CTAButton';

const EVENT_TYPES = [
  {
    title: 'Concerts & Live Shows',
    body: 'High-energy public programming with production infrastructure designed for fast setup and scale.',
  },
  {
    title: 'Brand Launches',
    body: 'Immersive product reveals with integrated social content zones and premium audience targeting.',
  },
  {
    title: 'Conventions & Expos',
    body: 'Multi-format floor plans for trade gatherings, fan communities, and corporate showcases.',
  },
  {
    title: 'Seasonal Festivals',
    body: 'Calendar-based campaigns that align with peak footfall windows and shopping demand.',
  },
];

const PRODUCTION_STACK = [
  'Venue planning with crowd-flow and safety design',
  'Digital amplification support for pre and post-event momentum',
  'Vendor and operations coordination through a single point of contact',
  'Performance reporting on attendance, engagement, and conversion impact',
];

const EVENT_WINDOWS = [
  { season: 'Q1 Momentum', note: 'Indoor headline events tuned for post-holiday traffic reacceleration.' },
  { season: 'Q2 Launch Cycle', note: 'Brand and product showcases aligned to spring buying intent.' },
  { season: 'Q3 Family Peak', note: 'Experience-heavy programming for high-volume family visitation periods.' },
  { season: 'Q4 Holiday Scale', note: 'Large-footfall festivals and premium sponsor-integrated showcases.' },
];

const Events = () => {
  return (
    <>
      <SectionWrapper
        id="events-page"
        title="Events & Venue Platform"
        subtitle="Design and deliver destination-scale events with a partner that understands both audience and operations."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {EVENT_TYPES.map((event) => (
            <article key={event.title} className="rounded-2xl border border-amber-300/20 bg-zinc-900/55 p-6">
              <h3 className="font-display text-3xl text-zinc-100">{event.title}</h3>
              <p className="mt-3 text-zinc-400">{event.body}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="events-ops"
        title="Production & Operations"
        subtitle="A dedicated execution layer that reduces risk and accelerates delivery."
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <ul className="space-y-3">
            {PRODUCTION_STACK.map((item) => (
              <li key={item} className="rounded-xl border border-amber-300/20 bg-black/20 p-4 text-zinc-300">
                {item}
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-amber-300/25 bg-gradient-to-br from-amber-200/10 to-transparent p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Need Availability?</p>
            <h3 className="mt-3 font-display text-3xl text-zinc-100">Book Your Date Window</h3>
            <p className="mt-3 text-zinc-300">
              Share your target timeline and event format. Our team will propose venue options, capacity fit, and an
              activation roadmap.
            </p>
            <div className="mt-6">
              <CTAButton label="Start Event Inquiry" to="/contact" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="events-calendar"
        title="Programming Calendar"
        subtitle="Plan your event against high-opportunity audience windows for stronger attendance and sponsor value."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {EVENT_WINDOWS.map((window) => (
            <article key={window.season} className="rounded-xl border border-amber-300/20 bg-zinc-900/45 p-5">
              <h3 className="font-display text-2xl text-amber-200">{window.season}</h3>
              <p className="mt-2 text-zinc-300">{window.note}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Events;
