'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WA_NUMBER = '628000000000';

export default function CTA() {
  return (
    <section id="final-cta" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-dark to-primary px-8 py-16 text-center shadow-[0_20px_50px_rgba(46,117,182,0.35)] md:px-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Decorative glow */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl"
            aria-hidden="true"
          />

          <h2 className="relative mb-4 font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white">
            Siap Tampil Profesional?
          </h2>
          <p className="relative mx-auto mb-8 max-w-lg text-lg text-white/80">
            Bergabung dengan 500+ mahasiswa yang sudah dibantu SnapCV. CV
            impianmu cuma sejauh satu klik.
          </p>
          <motion.a
            href={`https://wa.me/${WA_NUMBER}?text=Halo+SnapCV%2C+saya+ingin+konsultasi`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-base font-semibold text-primary shadow-md transition-colors hover:bg-primary-light"
          >
            <MessageCircle className="h-5 w-5" />
            Pesan Sekarang
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
