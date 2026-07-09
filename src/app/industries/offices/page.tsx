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
    { icon: faBuilding, problem: "Traffic lanes look worn before clients arrive", consequence: "First impressions suffer in reception and corridors." },
    { icon: faCalendarAlt, problem: "Daytime service disrupts staff", consequence: "You need evenings/weekends without losing reliability." },
    { icon: faUsers, problem: "Medical waiting rooms need careful chemistry", consequence: "Generic cleaners may not respect clinical environments." },
    { icon: faFileInvoiceDollar, problem: "Hard to budget recurring cleans", consequence: "One-off quotes make annual planning difficult." },
    { icon: faClipboardList, problem: "No single vendor for carpet + hard floors", consequence: "Multiple contractors slow coordination." },
    { icon: faHandshake, problem: "COI and compliance delays", consequence: "Building management needs documentation fast." }
  ];
  const whyFeatures = [
    { icon: faBriefcase, title: "After-Hours Ready", description: "Evenings and weekends so your team keeps working." },
    { icon: faClipboardList, title: "Recurring Plans Available", description: "Quarterly or semi-annual corridors with spot service between." },
    { icon: faHandshake, title: "COIs & Clear Invoices", description: "Documentation building managers expect, without the chase." }
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
    { question: "Do you clean medical offices?", answer: "Yes — we schedule around clinic hours and respect professional environments." },
    { question: "Can you provide standing quarterly service?", answer: "Yes — many offices set a recurring cadence for main traffic areas." },
    { question: "Do you clean tile and restrooms too?", answer: "Yes — hard floors are commonly bundled with carpet service." },
    { question: "How quickly can you start?", answer: "Often within a few days; call for after-hours openings this week." }
  ];
  const services = [
    { icon: faBuilding, title: "Commercial Carpet Care", body: "Suites, corridors, and open offices.", link: "/services/commercial-carpet" },
    { icon: faSoap, title: "Carpet Cleaning", body: "Deep clean for smaller professional spaces.", link: "/services/carpet-cleaning" },
    { icon: faBorderAll, title: "Tile & Grout Cleaning", body: "Lobbies, break rooms, restrooms.", link: "/services/tile-grout" },
    { icon: faCouch, title: "Upholstery Cleaning", body: "Reception and waiting-room seating.", link: "/services/upholstery-cleaning" }
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
        { label: "Offices & Medical" },
      ]} />
      <SectionIntro title={"Offices & Medical Carpet Care in Central Texas"} subtitle={"Professional carpet and soft-surface cleaning for offices and medical suites — presentation-ready floors with after-hours options."} />
      <TrustBar headline="IICRC-certified · Bonded & insured · Business-friendly scheduling" />
      <div className={styles.section}><IndustryPainPoints industry="Offices & Medical" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Offices & Medical Chooses PureSoft"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} title="PureSoft vs. Generic Cleaners" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={services} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} title="Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Offices & Medical FAQs"} /></div>
      <div className={styles.section}><Variant4 title={"Request Offices & Medical Service"} cityName="Waco" slug="industries/offices" spot="offices-industry-form" formVariant={2} /></div>
      <CTABanner headline={"Need reliable carpet care for offices & medical?"} subline="Flat-rate scopes. COIs on request. Call (254) 830-3030." primaryText="Call Now" primaryLink="tel:+12548303030" secondaryText="Book Online" secondaryLink="/contact" />
    </main>
  );
}
