import { motion } from 'framer-motion';
import HeroSection from '../components/hero/HeroSection';
import SectionWrapper from '../components/common/SectionWrapper';
import StatsGrid from '../components/stats/StatsGrid';
import CTAButton from '../components/common/CTAButton';

const WHY_MOA_POINTS = [
  'Located in Bloomington with direct airport and highway access to national and international travelers.',
  'A mixed visitor profile spanning family leisure, destination tourism, and intent-driven lifestyle shopping.',
  'All-season, weather-proof environment that sustains demand throughout the year.',
];

const RETAIL_HIGHLIGHTS = [
  'Luxury and flagship-ready store formats in high-visibility corridors',
  'Pop-up and campaign spaces for rapid market testing',
  'Cross-traffic flows from attractions and dining into retail zones',
];

const DINING_HIGHLIGHTS = [
  'Broad daypart coverage from quick service to premium dining',
  'High dwell-time behavior that supports elevated average order values',
  'Food-led programming opportunities during events and seasonal peaks',
];

const ENTERTAINMENT_HIGHLIGHTS = [
  'Nickelodeon Universe and SEA LIFE as long-term demand anchors',
  'Experience-led attractions that increase repeat visitation',
  'Entertainment loops that amplify spend across retail and dining',
];

const EVENTS_HIGHLIGHTS = [
  'Venue formats for launches, conventions, concerts, and fan gatherings',
  'Production and logistics support for partner activations',
  'Campaign-ready event surfaces with measurable audience engagement',
];

const ctaCards = [
  { title: 'Lease Space', body: 'Secure the right format for your retail, F&B, or flagship concept.', to: '/leasing' },
  { title: 'Become a Sponsor', body: 'Activate your brand across high-density audience touchpoints.', to: '/sponsorship' },
  { title: 'Book a Venue', body: 'Launch destination-scale events with integrated on-site support.', to: '/events' },
];

const Home = () => {
  return (
    <>
      <HeroSection />

      <SectionWrapper
        id="stats"
        title="Proof of Scale"
        subtitle="520+ stores. 40M+ annual visitors. 5.6M sq ft of high-performance destination commerce."
      >
        <StatsGrid />
        <div className="mt-7">
          <CTAButton label="View Leasing Paths" to="/leasing" variant="secondary" />
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="why-moa"
        title="Why MOA"
        subtitle="Scale, accessibility, and audience depth converge into one operating platform."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {WHY_MOA_POINTS.map((point, idx) => (
            <motion.article
              key={point}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-2xl border border-amber-300/20 bg-zinc-900/60 p-6 text-zinc-300"
            >
              {point}
            </motion.article>
          ))}
        </div>
        <div className="mt-7">
          <CTAButton label="Start a Conversation" to="/contact" />
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="retail"
        title="Retail Opportunity"
        subtitle="From global flagships to agile pop-ups, retail pathways are designed for measurable conversion."
      >
        <ul className="grid gap-4 md:grid-cols-3">
          {RETAIL_HIGHLIGHTS.map((item) => (
            <li key={item} className="rounded-xl border border-amber-300/20 bg-black/30 p-5 text-zinc-300">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <CTAButton label="Explore Retail Module" to="/retail" />
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="dining"
        title="Dining Opportunity"
        subtitle="Dining at MOA functions as a demand engine and spend multiplier across the property."
      >
        <ul className="grid gap-4 md:grid-cols-3">
          {DINING_HIGHLIGHTS.map((item) => (
            <li key={item} className="rounded-xl border border-amber-300/20 bg-black/30 p-5 text-zinc-300">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <CTAButton label="Discuss F&B Leasing" to="/leasing" variant="secondary" />
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="entertainment"
        title="Entertainment Opportunity"
        subtitle="Attractions generate repeat traffic and unlock deeper, longer customer journeys."
      >
        <ul className="grid gap-4 md:grid-cols-3">
          {ENTERTAINMENT_HIGHLIGHTS.map((item) => (
            <li key={item} className="rounded-xl border border-amber-300/20 bg-black/30 p-5 text-zinc-300">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <CTAButton label="Explore Entertainment" to="/entertainment" />
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="events"
        title="Events Opportunity"
        subtitle="A flexible event platform for launches, cultural moments, and large-format brand experiences."
      >
        <ul className="grid gap-4 md:grid-cols-3">
          {EVENTS_HIGHLIGHTS.map((item) => (
            <li key={item} className="rounded-xl border border-amber-300/20 bg-black/30 p-5 text-zinc-300">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <CTAButton label="View Events Module" to="/events" />
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="cta"
        title="Your Place Here"
        subtitle="Choose your growth path and move from interest to execution quickly."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {ctaCards.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-2xl border border-amber-300/25 bg-gradient-to-br from-amber-100/5 to-transparent p-6"
            >
              <h3 className="font-display text-3xl text-zinc-100">{card.title}</h3>
              <p className="mt-3 text-zinc-300">{card.body}</p>
              <div className="mt-6">
                <CTAButton label={card.title} to={card.to} />
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Home;
