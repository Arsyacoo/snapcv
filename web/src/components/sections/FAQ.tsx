'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionHeader from '@/components/ui/SectionHeader';

/* ── Data ── */
interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'Berapa lama proses pengerjaan CV?',
    answer:
      'Maksimal 1×24 jam setelah semua data diterima. Jika butuh lebih cepat (express 12 jam), bisa diskusikan via WhatsApp.',
  },
  {
    question: 'Dalam format apa hasil CV dikirim?',
    answer:
      'PDF (siap kirim ke HRD) dan DOCX (mudah diedit nanti). Semua file dikirim via Google Drive.',
  },
  {
    question: 'Bagaimana cara melakukan revisi?',
    answer:
      'Hubungi tim via WhatsApp, lalu kirim catatan revisi. Jumlah revisi sesuai paket: Basic 1×, Standard 2×, Premium unlimited.',
  },
  {
    question: 'Metode pembayaran apa yang tersedia?',
    answer:
      'Transfer bank (BCA, BRI, Mandiri) dan QRIS. Pembayaran dilakukan di awal sebelum pengerjaan dimulai.',
  },
  {
    question: 'Apakah bisa konsultasi dulu sebelum order?',
    answer:
      'Bisa! Konsultasi gratis via WhatsApp. Tim kami siap bantu memilih paket yang paling cocok dengan kebutuhanmu.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-[800px] px-6">
        <SectionHeader eyebrow="FAQ" title="Pertanyaan yang Sering Ditanyakan" />

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={cn(
                  'overflow-hidden rounded-md border bg-white transition-colors duration-250',
                  isOpen ? 'border-primary/30' : 'border-border',
                )}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-[1.05rem] font-semibold text-text-primary">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      'grid h-7 w-7 shrink-0 place-items-center rounded-full transition-colors duration-250',
                      isOpen ? 'bg-primary text-white' : 'bg-surface-alt text-text-secondary',
                    )}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 leading-relaxed text-text-secondary">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
