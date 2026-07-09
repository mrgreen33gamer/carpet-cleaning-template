// PureSoft Carpet Care — Carpet Cleaning Service Page
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
    { icon: faSearch, title: "Soil Assessment", description: "We evaluate fiber type, soil level, and stains — and explain the best method before we start." },
    { icon: faFileContract, title: "Flat-Rate Quote First", description: "Written price before pretreatment begins. No surprise add-ons mid-clean." },
    { icon: faCheckCircle, title: "Deep Clean Done Right", description: "Pre-treat, agitation, extraction, and even drying guidance for lasting results." },
    { icon: faShieldHalved, title: "Spot-Free Satisfaction Guarantee", description: "If a treated spot does not meet the standard we discussed, we make it right." }
  ];

  const whyFeatures = [
    { icon: faClock, title: "Same-Day Availability", description: "When schedule allows, we clean the same day you call — perfect for events and move-outs." },
    { icon: faSoap, title: "Method Matched to Your Carpet", description: "Hot-water extraction or low-moisture options based on fiber, soil, and dry-time needs." },
    { icon: faShieldHalved, title: "IICRC-Certified Technicians", description: "Trained techs, professional equipment, and careful furniture handling." }
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
    { question: "How much does carpet cleaning cost in Waco?", answer: "Most residential cleans range from $150–$450 depending on rooms, soil, and add-ons. We quote flat-rate on site before starting." },
    { question: "How long until carpets dry?", answer: "Typically 4–8 hours with good airflow. We share simple aftercare tips so drying goes smoothly." },
    { question: "Do you move furniture?", answer: "Yes — we carefully move most light furniture and replace it on protective tabs when appropriate." },
    { question: "Can you clean pet stains during a regular clean?", answer: "Yes. Light spots are often included; heavy urine odor may need dedicated pet odor treatment for best results." },
    { question: "Is cleaning safe for kids and pets?", answer: "We use professional chemistry designed for residential use and rinse thoroughly. We advise light traffic until dry." },
    { question: "Do you offer commercial carpet cleaning?", answer: "Yes — offices, medical suites, and multi-unit common areas. Ask about after-hours scheduling." }
  ];

  const crossServices = [
    { icon: faCouch, title: "Upholstery Cleaning", body: "Sofas and chairs cleaned fabric-safe.", link: "/services/upholstery-cleaning" },
    { icon: faPaw, title: "Pet Odor Treatment", body: "Enzyme treatment for urine odor and stains.", link: "/services/pet-odor-treatment" },
    { icon: faRug, title: "Area Rug Cleaning", body: "Careful cleaning for wool and synthetic rugs.", link: "/services/area-rugs" },
    { icon: faBorderAll, title: "Tile & Grout Cleaning", body: "Restore tile floors and grout lines.", link: "/services/tile-grout" }
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Carpet Cleaning" },
      ]} />

      <SectionIntro
        title="Carpet Cleaning in Waco, TX"
        subtitle="Professional deep carpet cleaning in Waco and Central Texas. Hot-water extraction, traffic-lane treatment, flat-rate pricing, IICRC-certified, Spot-Free Satisfaction Guarantee."
      />

      <TrustBar headline="11,000+ cleans · 4.9★ · Spot-Free Satisfaction Guarantee" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Choose PureSoft for Carpet Cleaning"} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/carpet-cleaning" title="Carpet Cleaning Across Central Texas" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Carpet Cleaning FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Carpet Cleaning" cityName="Waco" slug="services/carpet-cleaning" spot="carpet-cleaning-page-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Ready for Carpet Cleaning?"
        subline="Same-day appointments when available. Flat-rate pricing. Spot-Free Satisfaction Guarantee."
        primaryText="Call (254) 830-3030"
        primaryLink="tel:+12548303030"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
