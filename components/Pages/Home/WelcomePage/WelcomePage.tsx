// _archetype-library/hero-b-before-after/Component.tsx
//
// Hero B: Before / After — left copy, right full drag-to-reveal image comparison.
// Interactive range slider + pointer drag. Accessible via role="slider" + range input.
'use client';
import React, { useCallback, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

function BeforeAfterSlider({
  beforeImageSrc,
  afterImageSrc,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: {
  beforeImageSrc: string;
  afterImageSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [position, setPosition] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  const onRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(Number(e.target.value));
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - step));
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + step));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setPosition(100);
    }
  };

  return (
    <div className={styles.baFrame} ref={frameRef}>
      <img
        src={afterImageSrc}
        alt={afterLabel}
        className={styles.baImage}
        draggable={false}
      />
      <div
        className={styles.baBeforeClip}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeImageSrc}
          alt={beforeLabel}
          className={styles.baImage}
          draggable={false}
        />
      </div>

      <span className={`${styles.baLabel} ${styles.baLabelBefore}`}>{beforeLabel}</span>
      <span className={`${styles.baLabel} ${styles.baLabelAfter}`}>{afterLabel}</span>

      <div
        className={styles.baDivider}
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        <div className={styles.baHandle}>
          <span className={styles.baHandleArrow} data-dir="left" />
          <span className={styles.baHandleArrow} data-dir="right" />
        </div>
      </div>

      {/* Accessible control — full-area range for pointer + keyboard */}
      <input
        type="range"
        className={styles.baRange}
        min={0}
        max={100}
        step={0.5}
        value={position}
        onChange={onRangeChange}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
        aria-label="Before and after reveal"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`${Math.round(position)} percent before image`}
        role="slider"
      />
    </div>
  );
}

export default function WelcomePage() {
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
const beforeImageSrc = '/pages/home/welcome/before.jpg';
const afterImageSrc = '/pages/home/welcome/after.jpg';
const beforeLabel = "Stained & dull";
const afterLabel = "Fresh & bright";
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
    <section className={styles.hero} aria-label="Hero">
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

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
        >
          <BeforeAfterSlider
            beforeImageSrc={beforeImageSrc}
            afterImageSrc={afterImageSrc}
            beforeLabel={beforeLabel}
            afterLabel={afterLabel}
          />
        </motion.div>
      </div>
    </section>
  );
}
