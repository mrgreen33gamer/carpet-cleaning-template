// PureSoft Carpet Care — Commercial Carpet Care Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faSoap, faCouch, faBorderAll, faRug, faPaw, faBuilding, faWrench, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine
} from "@fortawesome/free-solid-svg-icons";

export default function ServicePage() {
  const expectations = [
    { icon: faSearch, title: "Walkthrough & Scope", description: "We map high-traffic lanes, spots, and scheduling constraints before quoting." },
    { icon: faFileContract, title: "Business-Friendly Pricing", description: "Clear scopes for one-time cleans or standing maintenance." },
    { icon: faCheckCircle, title: "Minimal Disruption", description: "After-hours and weekend options so your team stays productive." },
    { icon: faShieldHalved, title: "Insured Commercial Work", description: "Bonded, insured, and documentation available for property managers." }
  ];

  const whyFeatures = [
    { icon: faBuilding, title: "Offices & Medical Suites", description: "Presentation-ready floors for clients, patients, and staff." },
    { icon: faClock, title: "Flexible Scheduling", description: "Evenings and weekends available for multi-suite properties." },
    { icon: faShieldHalved, title: "IICRC-Certified Crews", description: "Consistent quality across common areas and units." }
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Phone, text, or online — we confirm a same-day or next-day slot when available.", icon: faHeadset },
    { number: 2, title: "On-Site Assessment", description: "IICRC-certified tech evaluates soils and fibers and explains options clearly.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before work starts. You approve — zero pressure.", icon: faFileContract },
    { number: 4, title: "Clean & Guarantee", description: "Professional methods, drying guidance, Spot-Free Satisfaction Guarantee.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 11000, label: "Cleans completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,    label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,    label: "Years serving Waco-area homes", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available techs.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Regular service for Woodway homes and businesses.", badge: "" },
    { town: "Bellmead",     benefit: "On our regular route — quick turnaround.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with clear trip expectations.", badge: "" },
    { town: "Temple",       benefit: "Full service coverage for Bell County.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate price before work starts", us: "✅ Always written", others: "❌ Hourly + estimate only" },
    { feature: "Spot-Free Satisfaction Guarantee", us: "✅ Every job", others: "❌ Rare or none" },
    { feature: "IICRC-certified technicians", us: "✅ All techs", others: "❌ Not always" },
    { feature: "Same-day / next-day options", us: "✅ When schedule allows", others: "❌ Week+ waits" },
    { feature: "No contracts required", us: "✅ Ever", others: "❌ Sometimes required" },
  ];

  const faq = [
    { question: "Do you clean after business hours?", answer: "Yes — evenings and weekends are common for commercial work." },
    { question: "Can you service multi-unit portfolios?", answer: "Yes — property managers can schedule make-ready and common-area cleans on a plan." },
    { question: "Do you provide insurance certificates?", answer: "Yes — COIs are available on request for PMs and ownership groups." },
    { question: "How often should office carpets be cleaned?", answer: "Many offices benefit from quarterly or semi-annual cleaning of main traffic areas, with spot service between." },
    { question: "Do you clean tile in commercial spaces too?", answer: "Yes — lobbies, restrooms, and break rooms are frequently bundled." },
    { question: "What areas do you cover commercially?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, Bellmead, McGregor, China Spring, and surrounding Central Texas." }
  ];

  const crossServices = [
    { icon: faSoap, title: "Carpet Cleaning", body: "Residential-grade care for small suites.", link: "/services/carpet-cleaning" },
    { icon: faBorderAll, title: "Tile & Grout Cleaning", body: "Hard floors in lobbies and restrooms.", link: "/services/tile-grout" },
    { icon: faCouch, title: "Upholstery Cleaning", body: "Lobby and waiting-room seating.", link: "/services/upholstery-cleaning" },
    { icon: faPaw, title: "Pet Odor Treatment", body: "Rental unit make-ready odor work.", link: "/services/pet-odor-treatment" }
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Commercial Carpet Care" },
      ]} />

      <SectionIntro
        title="Commercial Carpet Care in Waco, TX"
        subtitle="Commercial carpet cleaning in Waco and Central Texas for offices, medical suites, and multi-unit properties. After-hours scheduling available."
      />

      <TrustBar headline="11,000+ cleans · 4.9★ · Spot-Free Satisfaction Guarantee" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Choose PureSoft for Commercial Carpet Care"} />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} title="PureSoft vs. The Other Guys" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/commercial-carpet" title="Commercial Carpet Care Across Central Texas" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Commercial Carpet Care FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Commercial Carpet Care" cityName="Waco" slug="services/commercial-carpet" spot="commercial-carpet-page-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Ready for Commercial Carpet Care?"
        subline="Same-day appointments when available. Flat-rate pricing. Spot-Free Satisfaction Guarantee."
        primaryText="Call (254) 830-3030"
        primaryLink="tel:+12548303030"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
