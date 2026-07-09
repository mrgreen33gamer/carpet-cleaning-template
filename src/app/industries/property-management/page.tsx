"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCalendarAlt, faSearch, faFileInvoiceDollar, faUsers,
  faBuilding, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faSoap, faCouch, faBorderAll, faPaw, faRug, faHotel, faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustryPage() {
  const painPoints = [
    { icon: faCalendarAlt, problem: "No proactive carpet schedule", consequence: "Units fail inspection at turnover and emergency cleans blow the maintenance budget." },
    { icon: faFileInvoiceDollar, problem: "Cleaning costs spike without warning", consequence: "Without multi-unit pricing, every make-ready becomes a scramble quote." },
    { icon: faUsers, problem: "Tenant disruption from unreliable vendors", consequence: "Missed access windows create complaints to the PM office." },
    { icon: faBuilding, problem: "Inconsistent quality across units", consequence: "Different freelancers leave uneven results and rework." },
    { icon: faClipboardList, problem: "No single point of contact", consequence: "Coordinating separate crews for each building wastes management time." },
    { icon: faHandshake, problem: "Vendors ignore PM workflows", consequence: "Access notices, owner approvals, and turnover timelines all slip." }
  ];
  const whyFeatures = [
    { icon: faCalendarAlt, title: "Portfolio-Friendly Planning", description: "Phased schedules across units and buildings — turnovers and common areas." },
    { icon: faFileInvoiceDollar, title: "Multi-Unit Pricing", description: "Volume-friendly rates and clear scopes ownership can budget." },
    { icon: faUsers, title: "Tenant-Aware Scheduling", description: "We coordinate access windows so your office is not fielding angry calls." }
  ];
  const processSteps = [
    { number: 1, title: "Site Walkthrough", description: "We document soil levels, high-traffic zones, and access constraints.", icon: faSearch },
    { number: 2, title: "Scoped Plan & Quote", description: "Clear pricing and a schedule that fits turnovers or business hours.", icon: faCalendarAlt },
    { number: 3, title: "Execute Cleanly", description: "IICRC-certified crews deliver consistent results with minimal disruption.", icon: faRocket },
    { number: 4, title: "Standing Options", description: "Optional recurring service so floors stay presentation-ready.", icon: faClipboardList },
  ];
  const metrics = [
    { icon: faTrophy, value: 200, label: "Commercial & multi-unit clients served", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98, label: "Client satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 15, label: "Years serving Central Texas properties", suffix: "+", duration: 2 },
  ];
  const comparisonRows = [
    { feature: "Portfolio / multi-site planning", us: "✅ Full plan available", others: "❌ One-off calls only" },
    { feature: "After-hours scheduling", us: "✅ Evenings & weekends", others: "❌ Daytime only" },
    { feature: "Single point of contact", us: "✅ Dedicated lead", others: "❌ Different tech each time" },
    { feature: "COI documentation", us: "✅ On request", others: "❌ Slow or incomplete" },
    { feature: "IICRC-certified & insured", us: "✅ Always", others: "❌ Not always" },
  ];
  const faq = [
    { question: "Do you work multi-unit portfolios?", answer: "Yes — apartments, duplexes, HOA common areas, and scattered-site residential portfolios." },
    { question: "Can you prioritize make-ready turnovers?", answer: "Yes. We schedule make-ready cleans around your turnover calendar." },
    { question: "Do you provide COIs?", answer: "Yes — insurance certificates for PMs and ownership groups are available on request." },
    { question: "What areas do you cover?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, Bellmead, McGregor, China Spring, and surrounding Central Texas." }
  ];
  const services = [
    { icon: faSoap, title: "Carpet Cleaning", body: "Fast make-ready and unit cleans.", link: "/services/carpet-cleaning" },
    { icon: faPaw, title: "Pet Odor Treatment", body: "Turnover odor and urine treatment.", link: "/services/pet-odor-treatment" },
    { icon: faBorderAll, title: "Tile & Grout Cleaning", body: "Entries, baths, and common hard floors.", link: "/services/tile-grout" },
    { icon: faBuilding, title: "Commercial Carpet Care", body: "Clubhouses and office suites.", link: "/services/commercial-carpet" }
  ];
  const localAreas = [
    { town: "Waco", benefit: "Home base for multi-unit and commercial work.", badge: "Home Base" },
    { town: "Temple", benefit: "Regular multi-family and office coverage in Bell County.", badge: "" },
    { town: "Killeen", benefit: "Apartments, offices, and medical suites near Fort Cavazos.", badge: "" },
    { town: "Hewitt", benefit: "Property and office coverage on regular routes.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Property Management" },
      ]} />
      <SectionIntro title={"Property Management Carpet Care in Central Texas"} subtitle={"Make-ready carpet cleaning, common-area care, and multi-unit schedules that keep turnovers on track across Central Texas portfolios."} />
      <TrustBar headline="IICRC-certified · Bonded & insured · Business-friendly scheduling" />
      <div className={styles.section}><IndustryPainPoints industry="Property Management" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Property Management Chooses PureSoft"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} title="PureSoft vs. Generic Cleaners" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={services} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} title="Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Property Management FAQs"} /></div>
      <div className={styles.section}><Variant4 title={"Request Property Management Service"} cityName="Waco" slug="industries/property-management" spot="property-management-industry-form" formVariant={2} /></div>
      <CTABanner headline={"Need reliable carpet care for property management?"} subline="Flat-rate scopes. COIs on request. Call (254) 830-3030." primaryText="Call Now" primaryLink="tel:+12548303030" secondaryText="Book Online" secondaryLink="/contact" />
    </main>
  );
}
