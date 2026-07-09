// PureSoft Carpet Care — Services Index
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro         from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar             from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs          from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline      from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics        from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials         from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection     from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import FAQ                  from "#/PageComponents/FAQ/FAQ";
import CTABanner            from "#/PageComponents/CTABanner/CTABanner";
import Variant4             from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faSoap, faCouch, faBorderAll, faRug, faPaw, faBuilding,
  faTrophy, faChartLine, faClock, faShieldHalved, faUsers, faClipboardCheck,
  faHeadset, faSearch, faFileContract, faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {
  const services = [
    { icon: faSoap,      title: "Carpet Cleaning",      body: "Hot-water extraction and low-moisture options for wall-to-wall carpet. Traffic lanes, family rooms, and pre-treat for tough stains.", link: "/services/carpet-cleaning" },
    { icon: faCouch,     title: "Upholstery Cleaning",  body: "Sofas, sectionals, dining chairs, and fabric furniture cleaned fabric-safe — including pet hair and everyday spills.", link: "/services/upholstery-cleaning" },
    { icon: faBorderAll, title: "Tile & Grout Cleaning", body: "Deep clean for tile floors and grout lines in kitchens, baths, and entries.", link: "/services/tile-grout" },
    { icon: faRug,       title: "Area Rug Cleaning",    body: "Careful cleaning for wool, synthetic, and specialty rugs with proper dry and fiber care.", link: "/services/area-rugs" },
    { icon: faPaw,       title: "Pet Odor Treatment",   body: "Enzyme treatments and targeted extraction for pet urine odor and stains.", link: "/services/pet-odor-treatment" },
    { icon: faBuilding,  title: "Commercial Carpet Care", body: "Offices, medical suites, and multi-unit common areas on flexible schedules.", link: "/services/commercial-carpet" },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Flat-Rate Written Quotes", description: "Firm price before we start. No hourly billing, no surprise add-ons mid-job." },
    { icon: faShieldHalved,   title: "IICRC-Certified Technicians", description: "Every tech is IICRC-certified, bonded, and insured." },
    { icon: faUsers,          title: "Locally Owned Since 2011", description: "Founded in Waco by Mia Chen. Every decision is made locally." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm a same-day or next-day slot.", icon: faHeadset },
    { number: 2, title: "We Assess On-Site", description: "An IICRC-certified tech inspects soils and fibers and explains options.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work starts. Zero pressure to proceed.", icon: faFileContract },
    { number: 4, title: "Cleaned Right, Guaranteed", description: "Professional methods and Spot-Free Satisfaction Guarantee.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 11000, label: "Cleans completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,    label: "Customer satisfaction rating",        suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,    label: "Years of local carpet cleaning experience", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "How much does carpet cleaning cost in Waco?", answer: "Most residential whole-home cleans range from $150–$450 depending on rooms, soil, and add-ons. We always provide a flat-rate written quote before any work begins." },
    { question: "Do you clean upholstery and rugs too?", answer: "Yes — sofas, sectionals, dining chairs, wool and synthetic area rugs, and many fabric types." },
    { question: "How long until carpets are dry?", answer: "Typically 4–8 hours with good airflow. We share simple aftercare tips." },
    { question: "Do you offer same-day service?", answer: "Yes when schedule allows — call (254) 830-3030 for availability." },
    { question: "Are you certified and insured?", answer: "Yes — PureSoft Carpet Care is IICRC-certified, bonded, and insured." },
    { question: "Do you offer a guarantee?", answer: "Yes — our Spot-Free Satisfaction Guarantee." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <SectionIntro
        title="Carpet Cleaning Services for Waco & Central Texas"
        subtitle="Deep carpet, upholstery, tile & grout, area rugs, pet odor treatment, and commercial carpet care — done right, priced upfront, backed by a Spot-Free Satisfaction Guarantee."
      />
      <TrustBar headline="11,000+ Central Texas cleans by PureSoft Carpet Care" />
      <div className={styles.section}><ServiceCardComponent heading="All Our Services" cards={services} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose PureSoft" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Carpet Cleaning Service FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request Service or a Free Quote" cityName="Waco" slug="/services" spot="services-index-form" formVariant={2} /></div>
      <CTABanner
        headline="Need Carpet Cleaning Today?"
        subline="Same-day appointments when available. Flat-rate pricing. Spot-Free Satisfaction Guarantee."
        primaryText="Call (254) 830-3030"
        primaryLink="tel:+12548303030"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
