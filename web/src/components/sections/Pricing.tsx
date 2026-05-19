'use client';

import { motion } from 'framer-motion';
import { Check, X as XIcon, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionHeader from '@/components/ui/SectionHeader';

/* ── Types & Data ── */
interface Feature {
  text: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  subtitle: string;
  price: string;
  featured: boolean;
  ribbon?: string;
  features: Feature[];
  cta: string;
  ctaStyle: string;
  waText: string;
}

const WA_NUMBER = '628000000000';

const tiers: PricingTier[] = [
  {
    name: 'Basic',
    subtitle: 'Untuk yang baru mulai melamar',
    price: '50.000',
    featured: false,
    features: [
      { text: 'CV ATS-Friendly (PDF + DOCX)', included: true },
      { text: '1× Revisi gratis', included: true },
      { text: 'Pengiriman 24 jam', included: true },
      { text: 'Portfolio Website', included: false },
      { text: 'LinkedIn Optimization', included: false },
    ],
    cta: 'Pesan Basic',
    ctaStyle: 'border-2 border-border bg-transparent text-text-primary hover:border-primary hover:bg-primary-light hover:text-primary',
    waText: 'Halo+SnapCV%2C+saya+ingin+pesan+paket+Basic',
  },
  {
    name: 'Standard',
    subtitle: 'Pilihan terbaik buat fresh graduate',
    price: '150.000',
    featured: true,
    ribbon: '⭐ Paling Populer',
    features: [
      { text: 'CV ATS-Friendly (PDF + DOCX)', included: true },
      { text: 'Portfolio Website (1 halaman)', included: true },
      { text: '2× Revisi gratis', included: true },
      { text: 'Pengiriman 24 jam', included: true },
      { text: 'LinkedIn Optimization', included: false },
    ],
    cta: 'Pesan Standard',
    ctaStyle: 'bg-white text-primary hover:bg-primary-light',
    waText: 'Halo+SnapCV%2C+saya+ingin+pesan+paket+Standard',
  },
  {
    name: 'Premium',
    subtitle: 'Paket lengkap, siap tempur',
    price: '300.000',
    featured: false,
    features: [
      { text: 'CV ATS-Friendly (PDF + DOCX)', included: true },
      { text: 'Portfolio Website (multi-page)', included: true },
      { text: 'LinkedIn Optimization lengkap', included: true },
      { text: 'Revisi unlimited', included: true },
      { text: 'Priority support', included: true },
    ],
    cta: 'Pesan Premium',
    ctaStyle: 'bg-text-primary text-white hover:bg-[#1e293b]',
    waText: 'Halo+SnapCV%2C+saya+ingin+pesan+paket+Premium',
  },
];

/* ── Animation Variants ── */
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ── Feature List Item ── */
function FeatureRow({ text, included, featured }: Feature & { featured: boolean }) {
  const Icon: LucideIcon = included ? Check : XIcon;
  return (
    <li
      className={cn(
        'flex items-center gap-2.5 py-[9px] text-[0.95rem]',
        !included && (featured ? 'text-white/50' : 'text-[#94A3B8]'),
        included && (featured ? 'text-white' : 'text-text-primary'),
      )}
    >
      <Icon
        className={cn(
          'h-[18px] w-[18px] shrink-0',
          included
            ? featured ? 'text-accent' : 'text-success'
            : featured ? 'text-white/30' : 'text-[#CBD5E1]',
        )}
      />
      {text}
    </li>
  );
}

/* ── Main Component ── */
export default function Pricing() {
  return (
    <section id="pricing" className="bg-surface-alt py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Paket Harga"
          title="Pilih Paket yang Sesuai Kebutuhanmu"
          description="Transparan, tanpa biaya tersembunyi. Bayar sekali, hasil profesional seumur hidup."
        />

        <motion.div
          className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {tiers.map((tier) => (
            <motion.article
              key={tier.name}
              variants={cardVariant}
              className={cn(
                'relative flex flex-col rounded-xl p-8 transition-all duration-250',
                tier.featured
                  ? 'bg-gradient-to-b from-primary-dark to-primary text-white md:scale-[1.04] shadow-[0_20px_50px_rgba(46,117,182,0.35)] z-10'
                  : 'border border-border bg-white hover:-translate-y-1 hover:shadow-lg',
              )}
            >
              {/* Ribbon */}
              {tier.ribbon && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-4 py-1.5 text-[0.8rem] font-bold text-white shadow-[0_6px_14px_rgba(245,158,11,0.4)]">
                  {tier.ribbon}
                </div>
              )}

              {/* Header */}
              <header className="mb-5">
                <h3
                  className={cn(
                    'mb-1 font-heading text-2xl font-bold',
                    tier.featured ? 'text-white' : 'text-text-primary',
                  )}
                >
                  {tier.name}
                </h3>
                <p
                  className={cn(
                    'text-[0.85rem]',
                    tier.featured ? 'text-white/70' : 'text-text-secondary',
                  )}
                >
                  {tier.subtitle}
                </p>
              </header>

              {/* Price */}
              <div className="mb-7 flex items-baseline gap-1">
                <span
                  className={cn(
                    'text-[1.1rem] font-semibold',
                    tier.featured ? 'text-white/80' : 'text-text-secondary',
                  )}
                >
                  Rp
                </span>
                <span
                  className={cn(
                    'font-heading text-[2.6rem] font-extrabold tracking-tight',
                    tier.featured ? 'text-white' : 'text-text-primary',
                  )}
                >
                  {tier.price}
                </span>
              </div>

              {/* Features */}
              <ul className="mb-7 flex-1">
                {tier.features.map((f) => (
                  <FeatureRow key={f.text} {...f} featured={tier.featured} />
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href={`https://wa.me/${WA_NUMBER}?text=${tier.waText}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'flex items-center justify-center rounded-sm px-6 py-3.5 text-center font-semibold transition-all duration-250',
                  tier.ctaStyle,
                )}
              >
                {tier.cta}
              </motion.a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
