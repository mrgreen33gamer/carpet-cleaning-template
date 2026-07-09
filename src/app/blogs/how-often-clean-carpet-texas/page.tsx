'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import {
  faClock, faPaw, faWind, faHouseChimney, faShieldHalved, faCheckCircle,
  faFlask, faSearch, faSoap, faCouch,
} from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Central Texas homes collect dust, pollen, and foot traffic year-round. Waiting until carpets look ruined usually means soil has already worked deep into the pile — and vacuuming alone cannot pull it out. Here is a practical schedule PureSoft Carpet Care recommends for Waco, Hewitt, Woodway, Temple, and Killeen households.",
  },
  {
    type: 'cards',
    heading: "How Often to Clean — Practical Rules",
    cards: [
      { icon: faClock, title: "Most homes: every 6–12 months", body: "Active households with kids or pets often need semi-annual cleans; quieter homes may stretch to yearly deep cleans." },
      { icon: faPaw, title: "Pets accelerate the schedule", body: "Accidents and heavy shedding mean more frequent traffic-lane cleaning and targeted odor treatment." },
      { icon: faWind, title: "Texas dust & pollen count", body: "Soil settles into fibers continuously. If carpet feels gritty after vacuuming, it is past due." },
      { icon: faHouseChimney, title: "Prioritize high-traffic rooms", body: "Hallways, living rooms, and stairs show wear first — clean them even if bedrooms wait longer." },
      { icon: faShieldHalved, title: "Warranties & resale", body: "Many carpet warranties expect professional cleaning on a schedule. Pre-listing cleans also lift presentation." },
      { icon: faCheckCircle, title: "Do not wait for visible stains only", body: "Deep soil builds below the surface long before stains look dramatic." }
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Call PureSoft Carpet Care at (254) 830-3030 for a flat-rate quote — IICRC-certified technicians and a Spot-Free Satisfaction Guarantee.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      "Vacuum high-traffic areas at least twice a week",
      "Schedule professional cleaning every 6–12 months",
      "Address pet accidents promptly with enzyme treatment",
      "Use walk-off mats at main entrances",
      "Book a pre-listing deep clean before photos"
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title={"How Often Should You Clean Carpet in Central Texas?"}
        description={"Dust, pollen, kids, and pets put Texas carpets through a lot. Learn how often to schedule professional cleaning in Waco-area homes — and what happens if you wait too long."}
        imageSrc={"/pages/blogs/hvac-filter.jpg"}
        imageAlt={"How Often Should You Clean Carpet in Central Texas? — PureSoft Carpet Care"}
        category={"Care Tips"}
        date={"July 3, 2026"}
        readTime={7}
        authorName="PureSoft Carpet Care"
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title={"Ready for a professional clean?"}
        body={"Book PureSoft Carpet Care — IICRC-certified technicians with a Spot-Free Satisfaction Guarantee."}
        buttonText={"Schedule Carpet Cleaning"}
        buttonHref={"/services/carpet-cleaning"}
      />
      <NewsletterSignup variant={1} spot={"blog-how-often-clean-carpet-texas"} />
    </>
  );
}
