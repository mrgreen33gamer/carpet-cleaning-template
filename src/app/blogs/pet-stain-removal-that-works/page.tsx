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
    body: "Pet urine is not a surface problem. Salts soak into padding and keep releasing odor when humidity rises — which is why perfume sprays fail after a few days. Here is what actually works for Waco-area pet households.",
  },
  {
    type: 'cards',
    heading: "What Works for Pet Stains & Odor",
    cards: [
      { icon: faPaw, title: "Blot, do not scrub", body: "Scrubbing drives urine deeper. Blot fresh accidents, then plan professional extraction for heavy odor." },
      { icon: faFlask, title: "Enzymes beat perfume", body: "Enzyme chemistry breaks down urine salts that fragrance products only mask." },
      { icon: faSearch, title: "Find all the spots", body: "Old accidents hide. Pros locate residual zones so treatment is not limited to visible rings." },
      { icon: faSoap, title: "Extract thoroughly", body: "Chemistry without extraction leaves residue. Rinse/extract is half the result." },
      { icon: faCouch, title: "Upholstery needs fabric-safe methods", body: "Sofas hold accidents too — confirm fiber type before wet cleaning." },
      { icon: faShieldHalved, title: "Honest expectations", body: "Severe pad contamination may need multi-step work. A good company says so before you pay." }
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
      "Blot fresh accidents immediately — no scrubbing",
      "Avoid over-wetting with household cleaners",
      "Ask for enzyme treatment plus extraction",
      "Consider pet treatment on sofas and rugs too",
      "Call PureSoft for stubborn odor that keeps returning"
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title={"Pet Stain Removal That Actually Works"}
        description={"Enzyme treatments, proper extraction, and what DIY products get wrong — a practical guide to removing pet urine odor and stains from carpet and upholstery."}
        imageSrc={"/pages/blogs/energy-savings.jpg"}
        imageAlt={"Pet Stain Removal That Actually Works — PureSoft Carpet Care"}
        category={"Stains & Odors"}
        date={"June 24, 2026"}
        readTime={7}
        authorName="PureSoft Carpet Care"
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title={"Pet odor that will not quit?"}
        body={"Get enzyme treatment from PureSoft Carpet Care — IICRC-certified techs and honest expectations on site."}
        buttonText={"Schedule Pet Odor Treatment"}
        buttonHref={"/services/pet-odor-treatment"}
      />
      <NewsletterSignup variant={1} spot={"blog-pet-stain-removal-that-works"} />
    </>
  );
}
