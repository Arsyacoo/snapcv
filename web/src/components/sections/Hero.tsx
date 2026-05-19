'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  CheckCircle2,
  GraduationCap,
  Send,
  Eye,
  ShieldCheck,
  Clock,
} from 'lucide-react';

/* ── Animation Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const badges = [
  { label: 'Selesai 24 Jam', Icon: Zap },
  { label: 'ATS-Friendly', Icon: CheckCircle2 },
  { label: 'Khusus Mahasiswa', Icon: GraduationCap },
] as const;

const trustAvatars = [
  { letter: 'R', bg: '#FDE68A' },
  { letter: 'S', bg: '#BFDBFE' },
  { letter: 'F', bg: '#FBCFE8' },
  { letter: 'A', bg: '#BBF7D0' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-40 pb-24">
      {/* ── Decorative Background ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        {/* Radial gradient blobs */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(46,117,182,0.12),transparent_50%),radial-gradient(circle_at_85%_80%,rgba(245,158,11,0.10),transparent_50%)]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(46,117,182,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(46,117,182,0.05)_1px,transparent_1px)] bg-[length:50px_50px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black_30%,transparent_80%)]" />
      </div>

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_1fr]">
        {/* ════════ Left: Content ════════ */}
        <motion.div
          className="max-w-[600px]"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Badges */}
          <motion.div className="mb-5 flex flex-wrap gap-2" variants={fadeUp}>
            {badges.map(({ label, Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-text-primary shadow-sm"
              >
                <Icon className="h-3.5 w-3.5 text-primary" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mb-5 font-heading text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold leading-[1.15] tracking-tight"
            variants={fadeUp}
          >
            CV Kamu Menentukan{' '}
            <span className="text-gradient">Masa Depanmu</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mb-8 text-lg leading-relaxed text-text-secondary"
            variants={fadeUp}
          >
            Kami bantu kamu tampil profesional di mata HRD. CV ATS-friendly,
            portfolio website, dan LinkedIn optimization — selesai dalam 24 jam.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="mb-9 flex flex-wrap gap-3.5" variants={fadeUp}>
            {/* Primary CTA */}
            <a
              href="#pricing"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-primary px-7 py-4 text-base font-semibold text-white shadow-[0_6px_14px_rgba(46,117,182,0.35)] transition-all duration-250 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_10px_22px_rgba(46,117,182,0.45)]"
            >
              <Send className="h-[18px] w-[18px]" />
              Pesan CV Sekarang
              {/* Shine sweep */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[600ms] group-hover:translate-x-full" />
            </a>

            {/* Outline CTA */}
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-md border-2 border-border bg-transparent px-7 py-4 text-base font-semibold text-text-primary transition-all duration-250 hover:border-primary hover:bg-primary-light hover:text-primary"
            >
              <Eye className="h-[18px] w-[18px]" />
              Lihat Contoh CV
            </a>
          </motion.div>

          {/* Social Proof / Trust */}
          <motion.div className="flex items-center gap-4" variants={fadeUp}>
            <div className="flex" aria-hidden="true">
              {trustAvatars.map(({ letter, bg }, i) => (
                <span
                  key={letter}
                  className="grid h-9 w-9 place-items-center rounded-full border-2 border-white text-[0.85rem] font-bold text-text-secondary"
                  style={{ background: bg, marginLeft: i > 0 ? -10 : 0 }}
                >
                  {letter}
                </span>
              ))}
            </div>
            <p className="text-sm text-text-secondary">
              <strong className="text-text-primary">500+ mahasiswa</strong> sudah
              dibantu &middot;{' '}
              <span className="text-accent">★★★★★</span> 4.9/5
            </p>
          </motion.div>
        </motion.div>

        {/* ════════ Right: CV Mockup Visual ════════ */}
        <motion.div
          className="relative hidden justify-center lg:flex"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* CV Card */}
          <div className="w-[360px] max-w-full -rotate-2 rounded-lg border border-border bg-white p-8 shadow-lg transition-transform duration-250 hover:rotate-0 hover:scale-[1.02]">
            {/* Header row */}
            <div className="mb-5 flex items-center gap-4 border-b-2 border-primary-light pb-5">
              <div className="h-14 w-14 shrink-0 rounded-full bg-gradient-to-br from-primary to-primary-dark" />
              <div className="flex-1 space-y-2">
                <div className="h-3.5 w-[70%] rounded bg-text-primary" />
                <div className="h-2 w-[50%] rounded bg-primary" />
              </div>
            </div>

            {/* Experience section */}
            <div className="mb-5 space-y-2">
              <div className="mb-3 h-[11px] w-[40%] rounded bg-primary" />
              <div className="h-[9px] w-full rounded bg-border" />
              <div className="h-[9px] w-[90%] rounded bg-border" />
              <div className="h-[9px] w-[70%] rounded bg-border" />
            </div>

            {/* Education section */}
            <div className="mb-5 space-y-2">
              <div className="mb-3 h-[11px] w-[40%] rounded bg-primary" />
              <div className="h-[9px] w-full rounded bg-border" />
              <div className="h-[9px] w-[80%] rounded bg-border" />
            </div>

            {/* Skills chips */}
            <div>
              <div className="mb-3 h-[11px] w-[40%] rounded bg-primary" />
              <div className="flex flex-wrap gap-1.5">
                {[50, 70, 40, 60, 45].map((w, i) => (
                  <span
                    key={i}
                    className="h-[22px] rounded-full bg-primary-light"
                    style={{ width: w }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Floating Badge — ATS Score */}
          <motion.div
            className="absolute left-0 top-[10%] flex items-center gap-2.5 rounded-md border border-border bg-white px-4 py-3 shadow-md"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ShieldCheck className="h-5 w-5 text-primary" />
            <div>
              <strong className="block text-xs text-text-secondary">ATS Score</strong>
              <p className="text-[0.95rem] font-bold text-text-primary">98/100</p>
            </div>
          </motion.div>

          {/* Floating Badge — Delivery Time */}
          <motion.div
            className="absolute bottom-[12%] right-0 flex items-center gap-2.5 rounded-md border border-border bg-white px-4 py-3 shadow-md"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          >
            <Clock className="h-5 w-5 text-primary" />
            <div>
              <strong className="block text-xs text-text-secondary">Selesai</strong>
              <p className="text-[0.95rem] font-bold text-text-primary">24 Jam</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
