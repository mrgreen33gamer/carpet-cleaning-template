// PureSoft Carpet Care — Area Rug Cleaning Service Page
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
    { icon: faSearch, title: "Fiber Identification", description: "We identify construction and fiber so cleaning method protects dyes and backing." },
    { icon: faFileContract, title: "Per-Rug Pricing", description: "Clear quote by size and condition before cleaning begins." },
    { icon: faCheckCircle, title: "Thorough Soil Removal", description: "Dust removal, wash/rinse as appropriate, and controlled drying." },
    { icon: faShieldHalved, title: "Careful Handling", description: "Fringes, edges, and delicate constructions treated with professional care." }
  ];

  const whyFeatures = [
    { icon: faRug, title: "Wool & Synthetic Experts", description: "From machine-made synthetics to finer wool pieces — method matched to the rug." },
    { icon: faClock, title: "Pickup & Return Options", description: "Discuss in-home vs. facility cleaning based on rug type and schedule." },
    { icon: faShieldHalved, title: "IICRC-Certified Team", description: "Trained technicians — not a parking-lot pressure wash." }
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
    { question: "How much does area rug cleaning cost?", answer: "Most rugs are priced by size and fiber. We quote before cleaning." },
    { question: "Can you clean wool rugs?", answer: "Yes — wool requires controlled chemistry and drying. We assess dyes and construction first." },
    { question: "Do you clean rug pads?", answer: "Pads can often be cleaned or replaced depending on condition; we advise on site." },
    { question: "How long does rug cleaning take?", answer: "Many rugs return within a few days when facility cleaned; simple synthetics may be same-visit eligible." },
    { question: "What about antique or hand-knotted rugs?", answer: "We evaluate carefully and only proceed with methods appropriate for value and condition." },
    { question: "Can pet urine be removed from rugs?", answer: "Often yes with enzyme treatment and thorough rinse — severity determines results." }
  ];

  const crossServices = [
    { icon: faSoap, title: "Carpet Cleaning", body: "Wall-to-wall carpets cleaned while rugs are out.", link: "/services/carpet-cleaning" },
    { icon: faCouch, title: "Upholstery Cleaning", body: "Match soft goods for a full room refresh.", link: "/services/upholstery-cleaning" },
    { icon: faPaw, title: "Pet Odor Treatment", body: "Target pet accidents on rugs and pads.", link: "/services/pet-odor-treatment" },
    { icon: faBorderAll, title: "Tile & Grout Cleaning", body: "Clean hard floors under and around rugs.", link: "/services/tile-grout" }
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Area Rug Cleaning" },
      ]} />

      <SectionIntro
        title="Area Rug Cleaning in Waco, TX"
        subtitle="Area rug cleaning in Waco and Central Texas. Wool, synthetic, and specialty rugs cleaned carefully with proper dry and fiber care. Flat-rate pricing."
      />

      <TrustBar headline="11,000+ cleans · 4.9★ · Spot-Free Satisfaction Guarantee" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Choose PureSoft for Area Rug Cleaning"} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/area-rugs" title="Area Rug Cleaning Across Central Texas" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Area Rug Cleaning FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Area Rug Cleaning" cityName="Waco" slug="services/area-rugs" spot="area-rugs-page-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Ready for Area Rug Cleaning?"
        subline="Same-day appointments when available. Flat-rate pricing. Spot-Free Satisfaction Guarantee."
        primaryText="Call (254) 830-3030"
        primaryLink="tel:+12548303030"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
