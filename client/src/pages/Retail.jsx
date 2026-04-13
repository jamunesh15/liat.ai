import SectionWrapper from '../components/common/SectionWrapper';
import CTAButton from '../components/common/CTAButton';
import { motion } from 'framer-motion';

const RETAIL_FORMATS = [
  {
    title: 'Flagship Experiences',
    detail: 'Double-height storefronts with premium adjacency and high-intent shopper flow.',
  },
  {
    title: 'Growth Units',
    detail: 'Mid-size footprints for scaling brands seeking sustained conversion.',
  },
  {
    title: 'Launch Pop-Ups',
    detail: 'Fast deployment formats for campaign-led drops and pilot market tests.',
  },
  {
    title: 'Retail + Media',
    detail: 'On-site digital placements and wayfinding integrations around your store.',
  },
];

const RETAIL_PLAYBOOK = [
  'Customer journey mapping around daypart and entry corridors',
  'Window, event, and campaign cadence aligned to seasonal demand',
  'Monthly performance reviews covering traffic, basket size, and repeat rate',
  'On-site activation support for product launches and influencer events',
];

const CATEGORY_FIT = [
  { category: 'Luxury & Prestige', angle: 'High-visibility frontage and premium adjacency for flagship storytelling.' },
  { category: 'Performance Fashion', angle: 'Fast-cycle launches supported by campaign-ready display zones.' },
  { category: 'Beauty & Wellness', angle: 'Repeat-visit audience loops with discovery-led conversion behavior.' },
  { category: 'Technology', angle: 'Immersive demo opportunities tied to attractions and event moments.' },
];

const Retail = () => {
  return (
    <>
      <SectionWrapper
        id="retail-page"
        title="Retail Growth Engine"
        subtitle="MOA retail is designed to turn high-volume footfall into measurable conversion and long-term brand lift."
      >
        <div className="rounded-2xl border border-amber-300/20 bg-zinc-900/50 p-7">
          <p className="max-w-4xl text-lg text-zinc-300">
            From global flagships to fast-moving challenger brands, we build the right footprint, location strategy,
            and activation plan so your store performs as a high-output commercial unit, not just a presence play.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="retail-formats"
        title="Commercial Formats"
        subtitle="Choose the format that matches your growth stage and operating model."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {RETAIL_FORMATS.map((format, idx) => (
            <motion.article
              key={format.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-2xl border border-amber-300/20 bg-black/30 p-6"
            >
              <h3 className="font-display text-3xl text-amber-200">{format.title}</h3>
              <p className="mt-3 text-zinc-400">{format.detail}</p>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="retail-playbook"
        title="Execution Playbook"
        subtitle="Retail success is managed like an operating system, not a one-time opening."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <ul className="space-y-3 text-zinc-300">
            {RETAIL_PLAYBOOK.map((point) => (
              <li key={point} className="rounded-xl border border-amber-300/20 bg-zinc-900/50 p-4">
                {point}
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-amber-300/20 bg-gradient-to-br from-amber-300/10 to-transparent p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Outcome Focus</p>
            <h3 className="mt-3 font-display text-3xl text-zinc-100">From Visibility to Revenue</h3>
            <p className="mt-3 text-zinc-300">
              Every retail partnership is benchmarked against traffic quality, conversion behavior, and multi-visit loyalty
              so your footprint compounds value over time.
            </p>
            <div className="mt-6">
              <CTAButton label="Start Retail Inquiry" to="/contact" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="retail-fit"
        title="Category Fit Matrix"
        subtitle="We map your category to placement strategy, audience behavior, and campaign rhythm."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {CATEGORY_FIT.map((row) => (
            <article key={row.category} className="rounded-xl border border-amber-300/20 bg-black/25 p-5">
              <h3 className="font-display text-2xl text-zinc-100">{row.category}</h3>
              <p className="mt-2 text-zinc-400">{row.angle}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Retail;
