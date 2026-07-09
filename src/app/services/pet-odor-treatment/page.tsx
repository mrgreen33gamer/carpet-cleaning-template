// PureSoft Carpet Care — Pet Odor Treatment Service Page
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
    { icon: faSearch, title: "Locate Problem Areas", description: "We identify active odor zones — not just visible stains — and set honest expectations." },
    { icon: faFileContract, title: "Targeted Flat-Rate Scope", description: "Price by rooms or zones needing enzyme treatment before we start." },
    { icon: faCheckCircle, title: "Enzyme + Extraction", description: "Chemistry that breaks down urine salts, followed by thorough extraction." },
    { icon: faShieldHalved, title: "Honest Results Talk", description: "Old, repeated accidents into padding may need multi-step work — we say so upfront." }
  ];

  const whyFeatures = [
    { icon: faPaw, title: "Built for Pet Households", description: "We treat odor at the source instead of masking with fragrance alone." },
    { icon: faClock, title: "Bundle with Whole-Home Clean", description: "Combine pet treatment with full carpet cleaning for one efficient visit." },
    { icon: faShieldHalved, title: "IICRC-Certified Process", description: "Professional methods that go beyond grocery-store sprays." }
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
    { question: "Can you remove old pet urine odor?", answer: "Often significantly reduced. Severe pad contamination may need multi-step work — we diagnose honestly." },
    { question: "Do you use inspection tools?", answer: "When helpful, we use inspection tools to locate residual urine beyond visible stains." },
    { question: "Is treatment safe for pets?", answer: "We use professional residential-safe chemistry and advise keeping pets off treated areas until dry." },
    { question: "How much does pet odor treatment cost?", answer: "Depends on rooms and severity. Many jobs add $75–$250+ to a clean. We quote before treatment." },
    { question: "Will stains come back after humidity?", answer: "Proper enzyme work and extraction reduce rebound. Incomplete DIY treatments often leave salts that resurface." },
    { question: "Do you treat upholstery for pets too?", answer: "Yes — sofas and chairs can be treated with fabric-safe methods." }
  ];

  const crossServices = [
    { icon: faSoap, title: "Carpet Cleaning", body: "Full-home deep clean plus odor treatment.", link: "/services/carpet-cleaning" },
    { icon: faCouch, title: "Upholstery Cleaning", body: "Treat fabric furniture pets use daily.", link: "/services/upholstery-cleaning" },
    { icon: faRug, title: "Area Rug Cleaning", body: "Rugs that hold pet accidents.", link: "/services/area-rugs" },
    { icon: faBuilding, title: "Commercial Carpet Care", body: "Rental turnovers and multi-unit make-ready.", link: "/services/commercial-carpet" }
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Pet Odor Treatment" },
      ]} />

      <SectionIntro
        title="Pet Odor Treatment in Waco, TX"
        subtitle="Pet odor and stain treatment in Waco and Central Texas. Enzyme chemistry and extraction for urine odor that surface cleaners miss. Flat-rate pricing."
      />

      <TrustBar headline="11,000+ cleans · 4.9★ · Spot-Free Satisfaction Guarantee" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Choose PureSoft for Pet Odor Treatment"} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/pet-odor-treatment" title="Pet Odor Treatment Across Central Texas" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Pet Odor Treatment FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Pet Odor Treatment" cityName="Waco" slug="services/pet-odor-treatment" spot="pet-odor-treatment-page-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Ready for Pet Odor Treatment?"
        subline="Same-day appointments when available. Flat-rate pricing. Spot-Free Satisfaction Guarantee."
        primaryText="Call (254) 830-3030"
        primaryLink="tel:+12548303030"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
