"use client";
import styles from "./page.module.scss";
import AboutHero from "#/PageComponents/AboutHero/AboutHero";
import AboutStory from "#/PageComponents/AboutStory/AboutStory";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials from "#/PageComponents/Testimonials/Testimonials";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";
import reviews from "&/local-db/reviews";
import {
  faTrophy, faChartLine, faClock, faShieldHalved, faUsers, faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  const metrics = [
    { icon: faTrophy, value: 11000, label: "Cleans completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 15, label: "Years serving Waco-area homes", suffix: "+", duration: 2 },
  ];
  const whyFeatures = [
    { icon: faClipboardCheck, title: "Flat-Rate Written Quotes", description: "Firm price before we start. No hourly surprises." },
    { icon: faShieldHalved, title: "IICRC-Certified Technicians", description: "Bonded, insured professionals on every job." },
    { icon: faUsers, title: "Locally Owned Since 2011", description: "Founded in Waco by Mia Chen — decisions made locally." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <AboutHero cityName="Waco" />
      <TrustBar headline="IICRC-Certified · Bonded & Insured · Spot-Free Satisfaction Guarantee" />
      <div className={styles.section}><AboutStory cityName="Waco" /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Central Texas Chooses PureSoft" /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><Variant4 title="Work With PureSoft Carpet Care" cityName="Waco" slug="/about" spot="about-form" formVariant={2} /></div>
      <CTABanner
        headline="Meet the team that keeps Central Texas carpets fresh"
        subline="Call (254) 830-3030 or request a free quote online."
        primaryText="Call (254) 830-3030"
        primaryLink="tel:+12548303030"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </main>
  );
}
