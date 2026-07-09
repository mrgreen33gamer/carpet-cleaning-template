"use client";
import styles from "./page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import NearbyAreasHero from "#/PageComponents/NearbyAreasHero/NearbyAreasHero";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function ServiceAreasPage() {
  const nearbyCities = [
    { name: "Hewitt", distance: "8 mi", href: "/service-areas" },
    { name: "Woodway", distance: "7 mi", href: "/service-areas" },
    { name: "Temple", distance: "35 mi", href: "/service-areas" },
    { name: "Killeen", distance: "55 mi", href: "/service-areas" },
    { name: "China Spring", distance: "12 mi", href: "/service-areas" },
    { name: "McGregor", distance: "18 mi", href: "/service-areas" },
  ];
  const areas = [
    { town: "Waco", benefit: "Home base — fastest scheduling and most available techs.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential and commercial coverage on regular routes.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for homes and businesses.", badge: "" },
    { town: "Temple", benefit: "Bell County coverage with reliable turnaround.", badge: "" },
    { town: "Killeen", benefit: "Full carpet, upholstery, and tile service near Fort Cavazos.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with clear trip expectations.", badge: "" },
    { town: "McGregor", benefit: "Residential and small commercial cleans.", badge: "" },
    { town: "Bellmead", benefit: "On our regular route — quick scheduling.", badge: "" },
  ];
  const faq = [
    { question: "Do you charge trip fees?", answer: "Most addresses within our primary Central Texas cluster have no separate trip charge. Remote addresses are confirmed when you book." },
    { question: "How far do you travel from Waco?", answer: "Most locations within about 60 miles of Waco are in range. Call to confirm your address." },
    { question: "Is same-day service available outside Waco?", answer: "Often yes on our regular routes — call (254) 830-3030 for availability." },
  ];
  return (
    <main className={styles.pageWrapper}>
      <NearbyAreasHero
        cityName="Waco"
        headline="Carpet Cleaning Service in Waco, TX"
        description="PureSoft Carpet Care provides fast, reliable carpet, upholstery, and tile cleaning to Waco and all surrounding communities. IICRC-certified technicians, flat-rate pricing, Spot-Free Satisfaction Guarantee on every job."
        nearbyCities={nearbyCities}
      />
      <SectionIntro
        title="Service Areas Across Central Texas"
        subtitle="PureSoft Carpet Care is based in Waco and serves surrounding communities with IICRC-certified carpet, upholstery, and tile cleaning."
      />
      <TrustBar headline="Waco home base · Temple & Killeen covered · Rural routes welcome" />
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={areas} title="Where We Clean" />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Service Area FAQs" />
      </div>
      <div className={styles.section}>
        <Variant4 title="Check Availability for Your Address" cityName="Waco" slug="/service-areas" spot="service-areas-form" formVariant={2} />
      </div>
      <CTABanner
        headline="Not sure if we cover your neighborhood?"
        subline="Call (254) 830-3030 — we will confirm quickly."
        primaryText="Call (254) 830-3030"
        primaryLink="tel:+12548303030"
        secondaryText="Contact Form"
        secondaryLink="/contact"
      />
    </main>
  );
}