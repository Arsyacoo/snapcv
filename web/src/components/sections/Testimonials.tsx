'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionHeader from '@/components/ui/SectionHeader';

/* ── Data ── */
interface Testimonial {
  quote: string;
  name: string;
  university: string;
  avatarLetter: string;
  avatarBg: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      '"CV yang dibuat SnapCV langsung lolos screening HRD Tokopedia. Prosesnya cepat dan hasilnya profesional banget!"',
    name: 'Rizky A.',
    university: 'Universitas Gadjah Mada',
    avatarLetter: 'R',
    avatarBg: '#BFDBFE',
  },
  {
    quote:
      '"Awalnya ragu, tapi ternyata hasilnya melebihi ekspektasi. Portfolio websitenya bagus dan harganya worth it!"',
    name: 'Sari D.',
    university: 'Universitas Amikom Yogyakarta',
    avatarLetter: 'S',
    avatarBg: '#FBCFE8',
  },
  {
    quote:
      '"Rekomen banget buat yang mau magang. CV aku jadi lebih rapi dan ATS-friendly. Terima kasih SnapCV!"',
    name: 'Fajar M.',
    university: 'Universitas Negeri Yogyakarta',
    avatarLetter: 'F',
    avatarBg: '#FDE68A',
  },
];

/* ── Slide Variants ── */
const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
};

export default function Testimonials() {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (idx: number) => {
      const dir = idx > current ? 1 : -1;
      setCurrent([((idx % testimonials.length) + testimonials.length) % testimonials.length, dir]);
    },
    [current],
  );

  const next = useCallback(() => go(current + 1), [current, go]);
  const prev = useCallback(() => go(current - 1), [current, go]);

  /* Auto-play */
  const startAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => go(current + 1), 4000);
  }, [current, go]);

  useEffect(() => {
    startAuto();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startAuto]);

  /* Drag handler */
  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 50) {
      info.offset.x < 0 ? next() : prev();
    }
    startAuto();
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="bg-surface-alt py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Testimoni"
          title="Apa Kata Mereka yang Sudah Pakai SnapCV?"
        />

        <div
          className="relative mx-auto max-w-[760px]"
          onMouseEnter={() => { if (timerRef.current) clearInterval(timerRef.current); }}
          onMouseLeave={startAuto}
        >
          {/* Prev / Next buttons */}
          <button
            onClick={() => { prev(); startAuto(); }}
            className="absolute -left-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-primary shadow-md transition-all hover:scale-110 hover:bg-primary hover:text-white md:grid"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => { next(); startAuto(); }}
            className="absolute -right-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-primary shadow-md transition-all hover:scale-110 hover:bg-primary hover:text-white md:grid"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Slide area */}
          <div className="relative min-h-[280px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.article
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
                className="rounded-xl bg-white px-10 py-10 shadow-md md:px-12"
              >
                <div className="mb-3.5 text-lg tracking-widest text-accent">★★★★★</div>
                <p className="mb-5 text-lg italic leading-relaxed text-text-primary">
                  {t.quote}
                </p>
                <footer className="flex items-center gap-3.5">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-full text-[0.95rem] font-bold text-text-primary"
                    style={{ background: t.avatarBg }}
                  >
                    {t.avatarLetter}
                  </span>
                  <div>
                    <strong className="block text-[0.95rem]">{t.name}</strong>
                    <span className="text-[0.85rem] text-text-secondary">{t.university}</span>
                  </div>
                </footer>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="mt-7 flex justify-center gap-2" role="tablist">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { go(i); startAuto(); }}
                aria-label={`Slide ${i + 1}`}
                className={cn(
                  'h-2.5 rounded-full transition-all duration-300',
                  i === current
                    ? 'w-7 bg-primary'
                    : 'w-2.5 bg-border hover:bg-primary/40',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
