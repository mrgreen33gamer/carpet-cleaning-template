// PureSoft Carpet Care — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faSoap, faCouch, faBorderAll, faRug, faPaw, faBuilding,
  faTrophy, faChartLine, faClock,
  faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar, faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faSoap,
      title: "Carpet Cleaning",
      body: "Hot-water extraction and low-moisture options for wall-to-wall carpet. Traffic lanes, family rooms, and pre-treat for tough stains.",
      link: "/services/carpet-cleaning",
    },
    {
      icon: faCouch,
      title: "Upholstery Cleaning",
      body: "Sofas, sectionals, dining chairs, and fabric furniture cleaned fabric-safe — including pet hair and everyday spills.",
      link: "/services/upholstery-cleaning",
    },
    {
      icon: faBorderAll,
      title: "Tile & Grout Cleaning",
      body: "Deep clean for tile floors and grout lines in kitchens, baths, and entries — restoring color and removing ground-in soil.",
      link: "/services/tile-grout",
    },
    {
      icon: faRug,
      title: "Area Rug Cleaning",
      body: "Careful cleaning for wool, synthetic, and specialty rugs — soil suspension, rinse, and proper dry so fibers stay soft.",
      link: "/services/area-rugs",
    },
    {
      icon: faPaw,
      title: "Pet Odor Treatment",
      body: "Enzyme treatments and targeted extraction for pet urine odor and stains that surface cleaners never fully remove.",
      link: "/services/pet-odor-treatment",
    },
    {
      icon: faBuilding,
      title: "Commercial Carpet Care",
      body: "Offices, medical suites, and multi-unit common areas on schedules that work around your business hours.",
      link: "/services/commercial-carpet",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 11000, label: "Cleans completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 15,    label: "Years of local carpet cleaning experience", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,    label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Flat-Rate Written Quotes",
      description: "You get a firm price before we start pretreatment. No hourly surprises mid-job.",
    },
    {
      icon: faShieldHalved,
      title: "IICRC-Certified Technicians",
      description: "Every tech is IICRC-certified, bonded, and insured. Professional equipment and methods on every job.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2011",
      description: "We're not a franchise. PureSoft Carpet Care was founded in Waco by Mia Chen. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm a same-day or next-day slot that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "We Assess On-Site",
      description: "An IICRC-certified tech inspects fibers and soils, explains options in plain English, and recommends the right method.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before any work starts. You decide — zero pressure to proceed. The quote never changes mid-job.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Cleaned Right, Guaranteed",
      description: "Professional extraction, careful drying guidance, and our Spot-Free Satisfaction Guarantee. We leave when you're satisfied.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest Soil Assessment",
      description: "We diagnose what's actually on and in the carpet — not what's most profitable to sell. You see findings before we quote.",
    },
    {
      icon: faSoap,
      title: "Clean, Respectful Work",
      description: "Furniture carefully moved when needed, baseboards protected, and rooms left neat. Your home treated like our own.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before any work begins. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Professional Methods",
      description: "Hot-water extraction, low-moisture options, and fabric-safe chemistry matched to your carpet or upholstery type.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available techs in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial coverage. On our regular route.",      badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes and businesses.",               badge: "" },
    { town: "Temple",       benefit: "Regular service area — quick turnaround guaranteed.",                  badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",      badge: "" },
    { town: "Killeen",      benefit: "Full carpet, upholstery, and tile service for Killeen-area homes.",    badge: "" },
  ];

  const faq = [
    {
      question: "How much does carpet cleaning cost in Waco?",
      answer: "Most residential whole-home cleans range from $150–$450 depending on rooms, soil level, and add-ons like pet treatment. We always provide a flat-rate written quote before any work begins.",
    },
    {
      question: "How long until carpets are dry?",
      answer: "Typical dry times are 4–8 hours with good airflow. We share simple aftercare tips (fans, AC, light foot traffic) so you know what to expect.",
    },
    {
      question: "Do you clean area rugs and upholstery too?",
      answer: "Yes — area rugs, sofas, sectionals, dining chairs, and many fabric types. We'll confirm fabric-safe methods before starting.",
    },
    {
      question: "Can you remove pet odor?",
      answer: "Yes. Pet odor treatment uses enzyme chemistry and thorough extraction targeting urine that has soaked into padding. Results depend on age and severity — we'll set honest expectations on site.",
    },
    {
      question: "Are you certified and insured?",
      answer: "Yes — PureSoft Carpet Care is IICRC-certified, bonded, and insured.",
    },
    {
      question: "Do you offer a guarantee?",
      answer: "Yes — our Spot-Free Satisfaction Guarantee. If a treated spot doesn't meet the standard we discussed, we'll make it right.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar headline="11,000+ cleans completed · 4.9★ from 1,400+ reviews" />

      <div className={styles.section}>
        <ServiceCardComponent heading="Carpet, Upholstery & Tile Services" cards={services} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Central Texas Chooses PureSoft" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <WhatToExpect sectionTitle="Every Service Call, Every Time" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Carpet Cleaning FAQs" />
      </div>

      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request a Free Quote" cityName="Waco" slug="/" spot="home-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Ready for Softer, Cleaner Floors?"
        subline="Same-day appointments available. Flat-rate pricing. Spot-Free Satisfaction Guarantee."
        primaryText="Call (254) 830-3030"
        primaryLink="tel:+12548303030"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
