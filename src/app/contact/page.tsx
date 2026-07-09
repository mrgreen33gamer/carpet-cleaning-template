"use client";
import styles from "./page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import LocalCitationBlock from "#/PageComponents/LocalCitationBlock/LocalCitationBlock";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function ContactPage() {
  const faq = [
    { question: "How fast can you schedule?", answer: "Same-day or next-day is often available. Call (254) 830-3030 for openings." },
    { question: "Do you provide free quotes?", answer: "Yes — flat-rate written quotes before any work begins." },
    { question: "What areas do you serve?", answer: "Waco, Hewitt, Woodway, Temple, Killeen, McGregor, China Spring, Bellmead, and surrounding Central Texas." },
    { question: "Are you insured?", answer: "Yes — IICRC-certified, bonded, and insured." },
  ];
  return (
    <main className={styles.pageWrapper}>
      <SectionIntro
        title="Contact PureSoft Carpet Care"
        subtitle="Call, text, or send the form — we respond quickly with flat-rate scheduling for Waco and Central Texas."
      />
      <TrustBar headline="(254) 830-3030 · hello@puresoftcarpet.com · 2800 W Waco Dr, Waco, TX 76707" />
      <div className={styles.section}>
        <Variant4 title="Request a Free Quote" cityName="Waco" slug="/contact" spot="contact-page-form" formVariant={2} />
      </div>
      <div className={styles.section}>
        <LocalCitationBlock cityName="Waco" />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Contact FAQs" />
      </div>
      <CTABanner
        headline="Prefer to talk now?"
        subline="Call our Waco team at (254) 830-3030."
        primaryText="Call (254) 830-3030"
        primaryLink="tel:+12548303030"
        secondaryText="View Services"
        secondaryLink="/services"
      />
    </main>
  );
}
