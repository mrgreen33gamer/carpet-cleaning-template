// PureSoft Carpet Care — Industries Index
"use client";

import styles from "./page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";
import { faBuilding, faHotel, faBriefcase } from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {
  const industries = [
    { icon: faBuilding, title: "Property Management", body: "Make-ready cleans, common-area carpet care, and multi-unit schedules that respect tenant notice windows.", link: "/industries/property-management" },
    { icon: faHotel, title: "Hospitality", body: "Guest-ready rooms, lobby carpets, and flexible overnight cleans for hotels and short-term rentals.", link: "/industries/hospitality" },
    { icon: faBriefcase, title: "Offices & Medical", body: "Presentation-ready floors for professional offices and medical suites — after-hours options available.", link: "/industries/offices" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <SectionIntro
        title="Industries We Serve Across Central Texas"
        subtitle="Property managers, hospitality operators, and professional offices trust PureSoft for consistent carpet and soft-surface care."
      />
      <TrustBar headline="IICRC-certified · Bonded & insured · Business-friendly scheduling" />
      <div className={styles.section}>
        <ServiceCardComponent heading="Who We Work With" cards={industries} />
      </div>
      <div className={styles.section}>
        <Variant4 title="Request Commercial or Multi-Unit Service" cityName="Waco" slug="/industries" spot="industries-index-form" formVariant={2} />
      </div>
      <CTABanner
        headline="Need a Standing Cleaning Partner?"
        subline="Flat-rate scopes, COIs on request, after-hours options."
        primaryText="Call (254) 830-3030"
        primaryLink="tel:+12548303030"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </main>
  );
}
