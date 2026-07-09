// PureSoft Carpet Care — Upholstery Cleaning Service Page
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
    { icon: faSearch, title: "Fabric-Safe Assessment", description: "We identify fiber type and test cleaning methods so colors and textures stay protected." },
    { icon: faFileContract, title: "Clear Scope & Price", description: "Piece-by-piece pricing for sofas, chairs, and ottomans before we start." },
    { icon: faCheckCircle, title: "Deep Soil Removal", description: "Pre-treat spills and body oils, then extract carefully for a fresher feel." },
    { icon: faShieldHalved, title: "Spot-Free Satisfaction Guarantee", description: "We stand behind treated spots discussed before the clean." }
  ];

  const whyFeatures = [
    { icon: faCouch, title: "All Common Fabrics", description: "Synthetics, many natural blends, and performance fabrics — we confirm method first." },
    { icon: faClock, title: "Same-Visit Carpet Add-Ons", description: "Bundle upholstery with carpet cleaning for one appointment and one invoice." },
    { icon: faShieldHalved, title: "IICRC-Certified Care", description: "Professional equipment and trained technicians — not a rental machine guess." }
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
    { question: "How much does sofa cleaning cost?", answer: "Most sofas and sectionals range from $100–$300 depending on size and soil. Dining chairs are often priced per seat." },
    { question: "Will cleaning shrink my fabric?", answer: "We identify fabric type and use appropriate methods to minimize risk. Some delicate fabrics require specialized care we will discuss on site." },
    { question: "Can you remove pet hair and odors?", answer: "Yes — hair removal and targeted odor treatment are common add-ons for pet households." },
    { question: "How long until upholstery is dry?", answer: "Often a few hours; denser cushions can take longer. We optimize moisture and share drying tips." },
    { question: "Do you clean microfiber?", answer: "Yes — microfiber responds well when cleaned with the correct chemistry and technique." },
    { question: "Can you clean office lobby furniture?", answer: "Yes — commercial upholstery is available with scheduling around business hours." }
  ];

  const crossServices = [
    { icon: faSoap, title: "Carpet Cleaning", body: "Deep clean wall-to-wall carpets in the same visit.", link: "/services/carpet-cleaning" },
    { icon: faPaw, title: "Pet Odor Treatment", body: "Target pet odor on fabric and carpet.", link: "/services/pet-odor-treatment" },
    { icon: faRug, title: "Area Rug Cleaning", body: "Refresh rugs that frame your seating areas.", link: "/services/area-rugs" },
    { icon: faBuilding, title: "Commercial Carpet Care", body: "Lobby seating and office soft goods.", link: "/services/commercial-carpet" }
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Upholstery Cleaning" },
      ]} />

      <SectionIntro
        title="Upholstery Cleaning in Waco, TX"
        subtitle="Professional upholstery cleaning in Waco and Central Texas. Sofas, sectionals, dining chairs — fabric-safe methods, flat-rate pricing, IICRC-certified."
      />

      <TrustBar headline="11,000+ cleans · 4.9★ · Spot-Free Satisfaction Guarantee" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Choose PureSoft for Upholstery Cleaning"} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/upholstery-cleaning" title="Upholstery Cleaning Across Central Texas" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Upholstery Cleaning FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Upholstery Cleaning" cityName="Waco" slug="services/upholstery-cleaning" spot="upholstery-cleaning-page-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Ready for Upholstery Cleaning?"
        subline="Same-day appointments when available. Flat-rate pricing. Spot-Free Satisfaction Guarantee."
        primaryText="Call (254) 830-3030"
        primaryLink="tel:+12548303030"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
