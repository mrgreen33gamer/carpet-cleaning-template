// components/Pages/Home/WelcomePage/WelcomePage.tsx
//
// PureSoft Carpet Care Hero — teal/obsidian identity.
// Photographic parallax stage + an authentic technician photo card replaces the
// prior drag-to-reveal before/after slider. Real IICRC-crew imagery, teal
// brand scrim, existing copy preserved verbatim.
'use client';
import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

export default function WelcomePage() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // Scroll-linked parallax on the background photo. Disabled under reduced-motion.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '14%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, reduceMotion ? 1.06 : 1.14]);

const badgeText = 'Waco\'s Most Trusted Carpet Care — Since 2011';
const headlineLines = [
  'Soft Carpets.',
  'Fresh Rooms.',
];
const headlineAccent = 'PureSoft Carpet Care.';
const subheadline = 'Deep Carpet · Upholstery · Tile Cleaning. Flat-rate pricing. Same-day service. Spot-Free Satisfaction Guarantee. Serving Waco and Central Texas with IICRC-certified technicians.';
const primaryCta = { label: 'Call (254) 830-3030', href: 'tel:+12548303030' };
const secondaryCta = { label: 'Free Estimate', href: '/contact' };
const chips = [
  'Same-Day Service',
  'No Contracts',
  'IICRC-Certified',
  '15+ Yrs Local',
  'Spot-Free Guarantee',
];
const stats = [
  {
    "value": "500+",
    "label": "Jobs Done"
  },
  {
    "value": "4.9 ★",
    "label": "Rating"
  },
  {
    "value": "15+",
    "label": "Years Local"
  },
  {
    "value": "1-Yr",
    "label": "Warranty"
  }
];
const meterTarget = 72;
const meterTopLabel = "After";
const meterMidLabel = "During";
const meterBotLabel = "Before";
const particleColor = '#14b8a6';
const mapCenterLabel = 'Service HQ';
const mapPins = [
  { label: 'Waco', x: 42, y: 48 },
  { label: 'Temple', x: 68, y: 62 },
  { label: 'Killeen', x: 58, y: 72 },
];
const coverageLabel = 'Central Texas coverage';
const materials = [
  { name: "Rooms", swatch: "#0ea5e9", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Stairs", swatch: "#38bdf8", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Upholstery", swatch: "#0284c7", imageSrc: "/pages/home/welcome/mat-3.jpg" },
  { name: "Pet Odor", swatch: "#7dd3fc", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Area Rugs", swatch: "#0369a1", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Office", swatch: "#0c4a6e", imageSrc: "/pages/home/welcome/mat-3.jpg" }
];
const quote = "Puppy accidents were everywhere. After PureSoft you cannot tell — and the smell is gone.";
const authorName = "Jess L.";
const authorMeta = "Pet treatment · Killeen";
const rating = 5;
const schematicLabel = "PureSoft schematic";
const gauges = [
  { label: "Homes", value: "5,400+" },
  { label: "Rating", value: "4.9 ★" },
  { label: "Dry time", value: "~4–6 hrs" },
  { label: "Pet safe", value: "Yes" }
];
const toggles = [
  { label: "Before/after", on: true },
  { label: "Weekend slots", on: true },
  { label: "Photo proofs", on: true }
];
const textureSrc = '/pages/home/welcome/hero-main.jpg';
const textureAlt = 'Texture';
const accentWord = "PureSoft";

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Hero">
      {/* Photographic parallax background — real IICRC crew on a Waco-area job */}
      <motion.div
        className={styles.bgLayer}
        style={{ y: bgY, scale: bgScale }}
        aria-hidden="true"
      >
        <Image
          src="/pages/home/welcome/hero-parallax-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </motion.div>
      {/* Teal brand scrim keeps the headline legible over the photo */}
      <div className={styles.scrim} aria-hidden="true" />
      <div className={styles.shard} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Authentic technician photo — the ownable image, framed as a spec card */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
        >
          <div className={styles.photoCard}>
            <Image
              src="/pages/home/welcome/hero-photo-card.jpg"
              alt="PureSoft Carpet Care technician running a professional extraction vacuum across a tile floor in a Waco-area home"
              fill
              priority
              sizes="(max-width: 960px) 88vw, 460px"
              className={styles.photo}
            />
            <div className={styles.photoGlaze} aria-hidden="true" />

            <div className={styles.photoBadge}>
              <span className={styles.photoBadgeDot} />
              IICRC-Certified Techs · On-Site
            </div>

            <div className={styles.specCard}>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> Same-Day Service
              </span>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> Spot-Free Guarantee
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
