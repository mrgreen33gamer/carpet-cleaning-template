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
    { icon: faCalendarAlt, problem: "Guest rooms look tired between deep cleans", consequence: "Reviews mention odors and dull carpet — even when housekeeping is solid day-to-day." },
    { icon: faUsers, problem: "Daytime cleans disrupt occupancy", consequence: "You need overnight or flexible windows without losing quality." },
    { icon: faFileInvoiceDollar, problem: "Inconsistent vendor quality", consequence: "Franchise-level presentation requires consistent methods, not cheap one-offs." },
    { icon: faBuilding, problem: "Lobbies and corridors soil faster than rooms", consequence: "High-traffic zones need a different cadence than guest suites." },
    { icon: faClipboardList, problem: "No documented scope for multi-property brands", consequence: "Standards drift between locations." },
    { icon: faHandshake, problem: "Hard to coordinate around events and peak seasons", consequence: "Last-minute room blocks need responsive partners." }
  ];
  const whyFeatures = [
    { icon: faHotel, title: "Guest-First Scheduling", description: "Overnight and low-occupancy windows that protect the guest experience." },
    { icon: faClipboardList, title: "Clear Room & Public-Area Scopes", description: "Documented standards for rooms, corridors, and lobbies." },
    { icon: faHandshake, title: "Responsive Peak Support", description: "Event weeks and seasonal rushes handled with a plan, not panic." }
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
    { question: "Can you clean overnight?", answer: "Yes — after-hours cleans are common for hospitality properties." },
    { question: "Do you handle short-term rentals?", answer: "Yes — single units and small portfolios with fast turnaround needs." },
    { question: "Can you clean upholstery in lobbies?", answer: "Yes — seating and soft goods are frequently bundled with carpet work." },
    { question: "Do you serve multiple locations?", answer: "Yes across the Waco–Temple–Killeen corridor." }
  ];
  const services = [
    { icon: faSoap, title: "Carpet Cleaning", body: "Rooms, corridors, and public areas.", link: "/services/carpet-cleaning" },
    { icon: faCouch, title: "Upholstery Cleaning", body: "Lobby seating and in-room soft goods.", link: "/services/upholstery-cleaning" },
    { icon: faRug, title: "Area Rug Cleaning", body: "Decorative and specialty rugs.", link: "/services/area-rugs" },
    { icon: faBorderAll, title: "Tile & Grout Cleaning", body: "Entries, restrooms, and pool decks (tile).", link: "/services/tile-grout" }
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
        { label: "Hospitality" },
      ]} />
      <SectionIntro title={"Hospitality Carpet Care in Central Texas"} subtitle={"Guest-ready carpet and soft-surface cleaning for hotels, short-term rentals, and hospitality properties across Central Texas."} />
      <TrustBar headline="IICRC-certified · Bonded & insured · Business-friendly scheduling" />
      <div className={styles.section}><IndustryPainPoints industry="Hospitality" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Hospitality Chooses PureSoft"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} title="PureSoft vs. Generic Cleaners" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={services} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} title="Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Hospitality FAQs"} /></div>
      <div className={styles.section}><Variant4 title={"Request Hospitality Service"} cityName="Waco" slug="industries/hospitality" spot="hospitality-industry-form" formVariant={2} /></div>
      <CTABanner headline={"Need reliable carpet care for hospitality?"} subline="Flat-rate scopes. COIs on request. Call (254) 830-3030." primaryText="Call Now" primaryLink="tel:+12548303030" secondaryText="Book Online" secondaryLink="/contact" />
    </main>
  );
}
