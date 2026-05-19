'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionHeader from '@/components/ui/SectionHeader';

/* ── Types & Data ── */
type Category = 'all' | 'minimalis' | 'kreatif' | 'formal';

interface PortfolioItem {
  id: string;
  category: Exclude<Category, 'all'>;
  tag: string;
  tagStyle: string;
  title: string;
  description: string;
  previewStyle: string;
  previewType: 'minimal' | 'creative' | 'formal';
}

const categories: { label: string; value: Category }[] = [
  { label: 'Semua', value: 'all' },
  { label: 'Minimalis', value: 'minimalis' },
  { label: 'Kreatif', value: 'kreatif' },
  { label: 'Formal', value: 'formal' },
];

const portfolioItems: PortfolioItem[] = [
  {
    id: 'minimal-1',
    category: 'minimalis',
    tag: 'Minimalis',
    tagStyle: 'bg-primary-light text-primary',
    title: 'Clean & Profesional',
    description: 'Cocok untuk industri tech, startup, dan corporate.',
    previewStyle: 'bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]',
    previewType: 'minimal',
  },
  {
    id: 'creative-1',
    category: 'kreatif',
    tag: 'Kreatif',
    tagStyle: 'bg-accent-light text-accent-dark',
    title: 'Bold & Expressive',
    description: 'Untuk industri kreatif: desain, marketing, content.',
    previewStyle: 'bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A]',
    previewType: 'creative',
  },
  {
    id: 'formal-1',
    category: 'formal',
    tag: 'Formal',
    tagStyle: 'bg-[#E2E8F0] text-text-primary',
    title: 'Klasik & Terstruktur',
    description: 'Untuk BUMN, perbankan, dan corporate tradisional.',
    previewStyle: 'bg-gradient-to-br from-primary-light to-[#DBE9F4]',
    previewType: 'formal',
  },
];

/* ── CV Preview Mockups ── */
function MinimalPreview() {
  return (
    <div className="mx-auto w-full max-w-[200px] rounded-md bg-white p-[18px] shadow-md">
      <div className="mb-2.5 h-2 w-[40%] rounded bg-primary" />
      <div className="space-y-1.5">
        {[70, 90, 60, 80, 50].map((w, i) => (
          <div key={i} className="h-1.5 rounded bg-border" style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
  );
}

function CreativePreview() {
  return (
    <div className="mx-auto flex w-full max-w-[200px] overflow-hidden rounded-md bg-white shadow-md">
      <div className="w-[35%] bg-gradient-to-b from-accent-dark to-[#92400E]" />
      <div className="flex-1 space-y-1.5 p-3.5">
        <div className="h-2 w-[60%] rounded bg-primary" />
        {[80, 60, 90].map((w, i) => (
          <div key={i} className="h-1.5 rounded bg-border" style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
  );
}

function FormalPreview() {
  return (
    <div className="mx-auto w-full max-w-[200px] rounded-md bg-white p-[18px] text-center shadow-md">
      <div className="mx-auto mb-1.5 h-2 w-[60%] rounded bg-primary" />
      <div className="mx-auto mb-2.5 h-1.5 w-[40%] rounded bg-border" />
      <div className="mx-auto mb-2.5 h-[2px] w-[60%] bg-text-primary" />
      <div className="space-y-1.5">
        {[80, 90, 70].map((w, i) => (
          <div key={i} className="h-1.5 rounded bg-border" style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
  );
}

const previewComponents = {
  minimal: MinimalPreview,
  creative: CreativePreview,
  formal: FormalPreview,
};

/* ── Main Component ── */
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [modalItem, setModalItem] = useState<PortfolioItem | null>(null);

  const filtered =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Portofolio Kami"
          title="Contoh Hasil CV yang Pernah Kami Buat"
          description="Beragam gaya CV sesuai industri dan kepribadianmu — semua tetap ATS-friendly."
        />

        {/* ── Filter Tabs ── */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-semibold transition-all duration-250',
                activeFilter === value
                  ? 'bg-primary text-white shadow-[0_4px_12px_rgba(46,117,182,0.3)]'
                  : 'bg-surface-alt text-text-secondary hover:bg-primary-light hover:text-primary',
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ── Cards Grid ── */}
        <motion.div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => {
              const Preview = previewComponents[item.previewType];
              return (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="group overflow-hidden rounded-lg border border-border bg-white transition-all duration-250 hover:-translate-y-1.5 hover:shadow-lg"
                >
                  {/* Preview area */}
                  <div
                    className={cn(
                      'flex h-[280px] items-start justify-center p-8',
                      item.previewStyle,
                    )}
                  >
                    <Preview />
                  </div>

                  {/* Body */}
                  <div className="px-6 py-5">
                    <span
                      className={cn(
                        'mb-2.5 inline-block rounded-full px-2.5 py-1 text-xs font-semibold',
                        item.tagStyle,
                      )}
                    >
                      {item.tag}
                    </span>
                    <h3 className="mb-1.5 font-heading text-xl font-bold">{item.title}</h3>
                    <p className="mb-3.5 text-[0.9rem] text-text-secondary">
                      {item.description}
                    </p>
                    <button
                      onClick={() => setModalItem(item)}
                      className="inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-primary transition-colors hover:text-primary-dark"
                    >
                      Lihat Detail
                      <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Detail Modal ── */}
      <AnimatePresence>
        {modalItem && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setModalItem(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Dialog */}
            <motion.div
              className="relative w-full max-w-lg rounded-xl border border-border bg-white p-8 shadow-lg"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              <button
                onClick={() => setModalItem(null)}
                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-text-secondary transition-colors hover:bg-surface-alt hover:text-text-primary"
                aria-label="Tutup"
              >
                <X className="h-5 w-5" />
              </button>

              <span
                className={cn(
                  'mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold',
                  modalItem.tagStyle,
                )}
              >
                {modalItem.tag}
              </span>
              <h3 className="mb-2 font-heading text-2xl font-bold">{modalItem.title}</h3>
              <p className="mb-6 text-text-secondary">{modalItem.description}</p>

              {/* Mockup preview inside modal */}
              <div
                className={cn(
                  'mb-6 flex items-center justify-center rounded-lg p-10',
                  modalItem.previewStyle,
                )}
              >
                {(() => {
                  const Preview = previewComponents[modalItem.previewType];
                  return <Preview />;
                })()}
              </div>

              <a
                href="#pricing"
                onClick={() => setModalItem(null)}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 font-semibold text-white transition-all hover:bg-primary-dark"
              >
                Pesan Gaya Ini
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
