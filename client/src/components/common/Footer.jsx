import { Link } from 'react-router-dom';
import { Building2, CalendarDays, Handshake, Landmark, Mail, MapPin, Phone } from 'lucide-react';

const quickLinks = [
  { label: 'Overview', to: '/' },
  { label: 'Retail', to: '/retail' },
  { label: 'Entertainment', to: '/entertainment' },
  { label: 'Events', to: '/events' },
  { label: 'Sponsorship', to: '/sponsorship' },
  { label: 'Leasing', to: '/leasing' },
  { label: 'Contact', to: '/contact' },
];

const businessModules = [
  {
    icon: Building2,
    title: 'Retail Strategy',
    detail: 'Flagship, growth, and pop-up pathways built for conversion performance.',
  },
  {
    icon: CalendarDays,
    title: 'Events Platform',
    detail: 'Destination-scale planning, production support, and measurable outcomes.',
  },
  {
    icon: Handshake,
    title: 'Brand Partnerships',
    detail: 'Integrated sponsorship models aligned to awareness, engagement, and conversion.',
  },
  {
    icon: Landmark,
    title: 'Leasing Advisory',
    detail: 'Category-fit recommendations with launch support and optimization continuity.',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const onQuickLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 border-t border-amber-300/20 bg-zinc-950/95">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-amber-200/40 to-transparent" />

      <div className="mx-auto w-[min(1380px,95vw)] py-18">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr_1.25fr]">
          <section className="rounded-3xl border border-amber-300/20 bg-zinc-900/40 p-8 lg:p-9">
            <p className="text-xs uppercase tracking-[0.22em] text-amber-200">Mall of America</p>
            <h3 className="mt-3 font-display text-4xl text-zinc-100">Commercial Growth Platform</h3>
            <p className="mt-5 max-w-xl text-lg text-zinc-300">
              A premium destination ecosystem combining retail scale, entertainment demand engines, and high-value
              brand activation opportunities.
            </p>

            <div className="mt-8 space-y-4 text-base text-zinc-300">
              <p className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-amber-200" />
                <span>60 E Broadway, Bloomington, Minnesota, 55425, USA</span>
              </p>
              <p className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-amber-200" />
                <a href="mailto:partnerships@mallofamerica.com" className="hover:text-white">
                  partnerships@mallofamerica.com
                </a>
              </p>
              <p className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-amber-200" />
                <a href="tel:+19528838800" className="hover:text-white">
                  +1 (952) 883-8800
                </a>
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-amber-300/20 bg-black/30 p-8 lg:p-9">
            <h4 className="font-display text-3xl text-zinc-100">Quick Navigation</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    onClick={onQuickLinkClick}
                    className="text-base text-zinc-300 transition-colors hover:text-amber-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-300/20 bg-black/30 p-8 lg:p-9">
            <h4 className="font-display text-3xl text-zinc-100">Business Modules</h4>
            <div className="mt-5 space-y-4">
              {businessModules.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-2xl border border-amber-300/15 bg-zinc-900/50 p-5">
                    <div className="flex items-center gap-2 text-amber-200">
                      <Icon size={18} />
                      <h5 className="text-sm font-semibold uppercase tracking-[0.12em]">{item.title}</h5>
                    </div>
                    <p className="mt-2 text-base text-zinc-400">{item.detail}</p>
                  </article>
                );
              })}
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-amber-300/20 pt-6 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
          <p>© {year} Mall of America Interactive Sales Deck.</p>
          <div className="flex items-center gap-4">
            <Link to="/contact" onClick={onQuickLinkClick} className="transition-colors hover:text-amber-200">
              Start a Conversation
            </Link>
            <span className="text-zinc-600">|</span>
            <p>Built for executive-grade assignment presentation.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
