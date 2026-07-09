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
    body: "\"Steam cleaning\" usually means hot-water extraction — not literal steam alone. Low-moisture methods dry faster but are not always better for heavy soil. Here is how PureSoft helps homeowners choose.",
  },
  {
    type: 'cards',
    heading: "Method Comparison Essentials",
    cards: [
      { icon: faSoap, title: "Hot-water extraction (steam)", body: "Pre-treat, agitate, extract with hot water. Excellent for deep soil in many residential carpets." },
      { icon: faWind, title: "Low-moisture / dry methods", body: "Faster dry times can suit commercial corridors or tight re-entry windows — soil type still matters." },
      { icon: faClock, title: "Dry time tradeoffs", body: "Extraction typically needs 4–8 hours with airflow. Low-moisture often reopens sooner." },
      { icon: faHouseChimney, title: "Match method to fiber & soil", body: "Not every carpet wants the same approach. IICRC-trained techs choose after inspection." },
      { icon: faCheckCircle, title: "Rinse quality beats marketing labels", body: "Poor technique leaves residue that attracts soil faster — method name alone is not a guarantee." },
      { icon: faShieldHalved, title: "Ask what is included", body: "Pre-treat, agitation, extraction, and drying guidance should be clear before you book." }
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
      "Describe soil level and dry-time needs when you book",
      "Ask which method is recommended for your fiber type",
      "Plan fans/AC to speed drying after extraction",
      "Avoid heavy traffic until carpets are dry",
      "Bundle pet treatment if odor is part of the problem"
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title={"Steam vs. Dry Carpet Cleaning: Which Is Right for Your Home?"}
        description={"Hot-water extraction vs. low-moisture methods — drying times, soil types, and when each method is the better choice for Central Texas homes and businesses."}
        imageSrc={"/pages/blogs/ac-replacement.jpg"}
        imageAlt={"Steam vs. Dry Carpet Cleaning: Which Is Right for Your Home? — PureSoft Carpet Care"}
        category={"Methods"}
        date={"June 15, 2026"}
        readTime={7}
        authorName="PureSoft Carpet Care"
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title={"Not sure which method you need?"}
        body={"We assess on site and recommend the right approach — flat-rate pricing, Spot-Free Satisfaction Guarantee."}
        buttonText={"Get a Free Quote"}
        buttonHref={"/services/carpet-cleaning"}
      />
      <NewsletterSignup variant={1} spot={"blog-steam-vs-dry-carpet-cleaning"} />
    </>
  );
}
