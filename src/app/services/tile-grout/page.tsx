// PureSoft Carpet Care — Tile & Grout Cleaning Service Page
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
    { icon: faSearch, title: "Grout Condition Check", description: "We assess soil, sealer condition, and tile type before selecting pressure and chemistry." },
    { icon: faFileContract, title: "Flat-Rate by Area", description: "Clear pricing for kitchens, baths, showers, and entries before we start." },
    { icon: faCheckCircle, title: "Deep Line Cleaning", description: "Agitation and extraction that pulls soil out of porous grout lines." },
    { icon: faShieldHalved, title: "Careful Around Fixtures", description: "Baseboards, cabinets, and transitions protected throughout the job." }
  ];

  const whyFeatures = [
    { icon: faBorderAll, title: "Kitchens, Baths & Entries", description: "High-traffic tile zones where grout shows soil first." },
    { icon: faClock, title: "Fast Turnaround", description: "Many residential jobs completed in a single visit with same-day results." },
    { icon: faShieldHalved, title: "IICRC-Certified Process", description: "Professional equipment that outperforms DIY scrubbing alone." }
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
    { question: "How much does tile and grout cleaning cost?", answer: "Most kitchens and baths range from $150–$400 depending on square footage and soil. We quote flat-rate on site." },
    { question: "Can you make dark grout look new?", answer: "Deep cleaning removes soil; original grout color returns when soil is the issue. Severely stained or unsealed grout may need additional options we will discuss honestly." },
    { question: "Do you seal grout?", answer: "Sealing is available as an add-on after cleaning when the surface is appropriate." },
    { question: "Is it safe for natural stone?", answer: "Some stone requires specialized methods. We identify material on site and only use appropriate chemistry." },
    { question: "How long until floors can be walked on?", answer: "Usually soon after cleaning; avoid heavy soil tracking until fully dry." },
    { question: "Do you clean shower tile?", answer: "Yes — shower walls and floors are a common request with soap-scum treatment." }
  ];

  const crossServices = [
    { icon: faSoap, title: "Carpet Cleaning", body: "Clean soft floors in the same visit.", link: "/services/carpet-cleaning" },
    { icon: faRug, title: "Area Rug Cleaning", body: "Rugs that sit on tile entries and kitchens.", link: "/services/area-rugs" },
    { icon: faBuilding, title: "Commercial Carpet Care", body: "Lobby tile and common-area floors.", link: "/services/commercial-carpet" },
    { icon: faCouch, title: "Upholstery Cleaning", body: "Refresh furniture after floor work.", link: "/services/upholstery-cleaning" }
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Tile & Grout Cleaning" },
      ]} />

      <SectionIntro
        title="Tile & Grout Cleaning in Waco, TX"
        subtitle="Tile and grout cleaning in Waco and Central Texas. Kitchens, baths, entries — restore color and remove ground-in soil. Flat-rate pricing, IICRC-certified."
      />

      <TrustBar headline="11,000+ cleans · 4.9★ · Spot-Free Satisfaction Guarantee" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Choose PureSoft for Tile & Grout Cleaning"} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/tile-grout" title="Tile & Grout Cleaning Across Central Texas" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Tile & Grout Cleaning FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Tile & Grout Cleaning" cityName="Waco" slug="services/tile-grout" spot="tile-grout-page-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Ready for Tile & Grout Cleaning?"
        subline="Same-day appointments when available. Flat-rate pricing. Spot-Free Satisfaction Guarantee."
        primaryText="Call (254) 830-3030"
        primaryLink="tel:+12548303030"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
