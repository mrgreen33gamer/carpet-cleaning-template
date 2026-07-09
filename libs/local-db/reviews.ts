// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for PureSoft Carpet Care — used by Testimonials component,
// schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Carpet Cleaning',
    text:     "Our living room and hallway carpets looked dull and felt gritty. PureSoft Carpet Care deep-cleaned everything the same week we called. Fibers look brighter, the house smells fresh, and pricing was clear upfront. Highly recommend.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Pet Odor Treatment',
    text:     'We had pet urine odor that DIY products never fixed. PureSoft used enzyme treatment and full extraction — the smell is finally gone. Fair price, careful techs, and they walked us through aftercare.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Upholstery Cleaning',
    text:     'Had our sectional and dining chairs cleaned. Spills and kid messes came out without damaging the fabric. Techs were on time, protected floors, and left everything drying properly.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Tile & Grout Cleaning',
    text:     'Kitchen and entry tile looked permanently gray. After PureSoft cleaned the grout lines, the floors looked almost new. Worth every penny — booking them for the bathrooms next.',
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Commercial Carpet Care',
    text:     'We hired PureSoft for overnight carpet cleaning at our office suite. They worked after hours so we did not disrupt staff, and Monday morning the floors looked sharp. Professional from start to finish.',
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Area Rug Cleaning',
    text:     'Took three area rugs that had years of dirt and pet hair. They cleaned them off-site carefully and returned them looking completely refreshed. My go-to carpet company for life.',
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Carpet Cleaning',
    text:     'Pre-listing deep clean before we sold the house. Traffic lanes and dining room stains came out beautifully. Clear quote, no upsell pressure. Highly recommend for move-out cleans.',
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Pet Odor Treatment',
    text:     'Called about old pet stains that kept coming back after rain humidity. PureSoft treated the pad-level odor and extracted thoroughly. Treated it like it mattered — thank you.',
  },
];

export default reviews;
