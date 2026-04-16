import HeroSlide from '../components/slides/HeroSlide';
import StatsSlide from '../components/slides/StatsSlide';
import FeatureSlide from '../components/slides/FeatureSlide';
import GallerySlide from '../components/slides/GallerySlide';
import QuoteSlide from '../components/slides/QuoteSlide';
import CTASlide from '../components/slides/CTASlide';

export const CHAPTERS = [
  { key: 'overview',      label: 'Overview' },
  { key: 'retail',        label: 'Retail' },
  { key: 'entertainment', label: 'Entertainment' },
  { key: 'events',        label: 'Events' },
  { key: 'sponsorship',   label: 'Sponsorship' },
  { key: 'leasing',       label: 'Leasing' },
];

export const slides = [
  // ─── CHAPTER: OVERVIEW ──────────────────────────────
  {
    id: 'hero',
    chapter: 'overview',
    component: HeroSlide,
    data: {
      eyebrow: 'MALL OF AMERICA',
      headline: 'The Center of Everything.',
      subheadline: '40 million visitors. 520 stores. One address.',
      cta: 'Explore the Property',
      bgImage: 'https://images.unsplash.com/photo-1519565502693-1811c7502758?auto=format&fit=crop&w=1920&q=80',
    },
  },
  {
    id: 'stats',
    chapter: 'overview',
    component: StatsSlide,
    data: {
      headline: 'Scale That Cannot Be Ignored',
      stats: [
        { value: 5600000, display: '5.6M', suffix: ' sq ft', label: 'Total Space' },
        { value: 40000000, display: '40M+', suffix: '', label: 'Annual Visitors' },
        { value: 520, display: '520+', suffix: '', label: 'Stores & Restaurants' },
        { value: 50, display: '50+', suffix: '', label: 'Attractions' },
        { value: 1500, display: '1,500+', suffix: '', label: 'Hotel Rooms On-Site' },
        { value: 32, display: '32', suffix: '', label: 'States Visitors Travel From' },
      ],
    },
  },
  {
    id: 'why-moa',
    chapter: 'overview',
    component: FeatureSlide,
    data: {
      eyebrow: 'WHY MALL OF AMERICA',
      headline: 'America\'s Most Visited Destination',
      body: 'Located in Bloomington, Minnesota — minutes from Minneapolis-St. Paul International Airport. MOA draws visitors from all 50 states and 11 countries, making it the premier commercial platform in North America.',
      points: [
        'Direct access: 2 light rail lines + 20,000 parking spaces',
        'Average visitor spends 3+ hours on property',
        '60% of visitors travel 150+ miles specifically to visit',
        'Year-round programming drives 365-day foot traffic',
      ],
      bgImage: 'https://picsum.photos/seed/moa-why-01/1920/1200',
      imagePosition: 'right',
    },
  },

  // ─── CHAPTER: RETAIL ────────────────────────────────
  {
    id: 'retail-overview',
    chapter: 'retail',
    component: FeatureSlide,
    data: {
      eyebrow: 'RETAIL',
      headline: '520+ Stores. Every Category. Every Customer.',
      body: 'From luxury flagships to fast fashion, MOA offers unmatched retail density across four floors. New tenant openings generate national press coverage and social media moments.',
      points: [
        'Luxury wing: Rolex, Louis Vuitton, Tiffany & Co.',
        'Anchor tenants: Nordstrom, Macy\'s, Sears',
        'Fast fashion: Zara, H&M, Forever 21',
        '60+ restaurants and food experiences',
      ],
      bgImage: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1920&q=80',
      imagePosition: 'left',
    },
  },
  {
    id: 'retail-quote',
    chapter: 'retail',
    component: QuoteSlide,
    data: {
      stat: '60%',
      statLabel: 'of visitors come specifically to shop',
      quote: 'Opening at Mall of America isn\'t just leasing space. It\'s announcing your brand to 40 million people.',
      bgImage: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1920&q=80',
    },
  },

  // ─── CHAPTER: ENTERTAINMENT ─────────────────────────
  {
    id: 'entertainment-overview',
    chapter: 'entertainment',
    component: FeatureSlide,
    data: {
      eyebrow: 'ENTERTAINMENT',
      headline: 'No Mall on Earth Offers This.',
      body: 'Nickelodeon Universe — America\'s largest indoor theme park — sits at the heart of MOA. Combined with SEA LIFE Aquarium, FlyOver America, and 15+ additional attractions, MOA is a destination, not a shopping trip.',
      points: [
        'Nickelodeon Universe: 27 rides, 7 acres indoors',
        'SEA LIFE Minnesota Aquarium: 10,000+ sea creatures',
        'FlyOver America: immersive flight simulation experience',
        'Mini golf, bowling, mirror maze, escape rooms',
      ],
      bgImage: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&w=1920&q=80',
      imagePosition: 'right',
    },
  },
  {
    id: 'entertainment-gallery',
    chapter: 'entertainment',
    component: GallerySlide,
    data: {
      eyebrow: 'ATTRACTIONS',
      headline: 'Something for Everyone.',
      images: [
        { src: 'https://picsum.photos/seed/moa-gallery-01/1200/900', label: 'Nickelodeon Universe' },
        { src: 'https://picsum.photos/seed/moa-gallery-02/1200/900', label: 'SEA LIFE Aquarium' },
        { src: 'https://picsum.photos/seed/moa-gallery-03/1200/900', label: 'FlyOver America' },
        { src: 'https://picsum.photos/seed/moa-gallery-04/1200/900', label: 'Crayola Experience' },
      ],
    },
  },

  // ─── CHAPTER: EVENTS ────────────────────────────────
  {
    id: 'events-overview',
    chapter: 'events',
    component: FeatureSlide,
    data: {
      eyebrow: 'EVENTS & PLATFORM',
      headline: 'A Global Stage, Not Just a Building.',
      body: 'MOA hosts 400+ events per year — from celebrity appearances and product launches to concerts and brand activations. The property\'s rotunda, common areas, and dedicated event spaces reach millions of visitors annually.',
      points: [
        '400+ events per year across all categories',
        'Central Rotunda: prime visibility, 4-floor audience',
        'North Garden: flexible 20,000 sq ft event space',
        'Past activations: Nike, Apple, Disney, Netflix',
      ],
      bgImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80',
      imagePosition: 'left',
      imageBrightness: 1.24,
      imageContrast: 1.08,
      imageSaturation: 1.12,
      imageDarkStart: 0.42,
      imageDarkEnd: 0.2,
      vignetteOpacity: 0.26,
      imageGlow: 0.24,
    },
  },
  {
    id: 'events-venue',
    chapter: 'events',
    component: QuoteSlide,
    data: {
       stat: '400+',
       statLabel: 'events hosted every year',
       quote: 'From product launches to pop concerts — if you want an audience, MOA has one waiting.',
       bgImage: 'https://images.unsplash.com/photo-1540039155732-6a710526e033?auto=format&fit=crop&w=1920&q=80',
       cta: 'Book a Venue',
       ctaType: 'event',
    },
  },

  // ─── CHAPTER: SPONSORSHIP ───────────────────────────
  {
    id: 'sponsorship-overview',
    chapter: 'sponsorship',
    component: FeatureSlide,
    data: {
      eyebrow: 'SPONSORSHIP & BRAND PARTNERSHIPS',
      headline: 'Put Your Brand in Front of 40 Million People.',
      body: 'MOA\'s sponsorship platform offers unmatched reach — digital signage, naming rights, activations, and integrated campaigns across the property\'s full media inventory.',
      points: [
        'Digital signage: 200+ screens throughout the property',
        'Naming rights: atriums, stages, event spaces',
        'Brand activations: pop-ups, sampling, experiential',
        'Custom packages for luxury, tech, F&B, and entertainment brands',
      ],
      bgImage: 'https://picsum.photos/seed/moa-sponsor-01/1920/1200',
      imagePosition: 'right',
      imageBrightness: 1.22,
      imageContrast: 1.08,
      imageSaturation: 1.1,
      imageDarkStart: 0.4,
      imageDarkEnd: 0.18,
      vignetteOpacity: 0.24,
      imageGlow: 0.22,
    },
  },
  {
    id: 'sponsorship-tiers',
    chapter: 'sponsorship',
    component: StatsSlide,
    data: {
      headline: 'Your Audience Is Already Here',
      stats: [
        { display: '40M+', label: 'Annual Visitors' },
        { display: '$97K', label: 'Avg Household Income' },
        { display: '68%', label: 'Female Audience' },
        { display: '52%', label: 'Visitors 18–44' },
        { display: '3.2hrs', label: 'Average Dwell Time' },
        { display: '200+', label: 'Digital Screens' },
      ],
    },
  },

  // ─── CHAPTER: LEASING ───────────────────────────────
  {
    id: 'leasing-overview',
    chapter: 'leasing',
    component: FeatureSlide,
    data: {
      eyebrow: 'LEASING',
      headline: 'Find Your Space.',
      body: 'From 200 sq ft pop-up kiosks to 10,000 sq ft flagship stores — MOA offers flexible leasing options for every brand stage and category. New tenant openings generate national press coverage.',
      points: [
        'Luxury flagship: 2,000–15,000 sq ft, dedicated wing',
        'Standard retail: 500–5,000 sq ft, all four floors',
        'F&B: inline, kiosk, and food court formats',
        'Pop-up: 30/60/90-day short-term leases available',
      ],
      bgImage: 'https://picsum.photos/seed/moa-leasing-01/1920/1200',
      imagePosition: 'left',
      imageBrightness: 1.24,
      imageContrast: 1.1,
      imageSaturation: 1.12,
      imageDarkStart: 0.4,
      imageDarkEnd: 0.16,
      vignetteOpacity: 0.22,
      imageGlow: 0.24,
    },
  },

  // ─── FINAL CTA ───────────────────────────────────────
  {
    id: 'cta',
    chapter: 'leasing',
    component: CTASlide,
    data: {
      headline: 'Ready to Be Part of It?',
      subheadline: 'Join 520+ brands at America\'s most visited destination.',
      bgImage: 'https://images.unsplash.com/photo-1549469506-695be24867fa?auto=format&fit=crop&w=1920&q=80',
      actions: [
        { label: 'Lease Space', type: 'leasing', icon: 'building' },
        { label: 'Become a Sponsor', type: 'sponsorship', icon: 'star' },
        { label: 'Book a Venue', type: 'event', icon: 'calendar' },
      ],
    },
  },
];