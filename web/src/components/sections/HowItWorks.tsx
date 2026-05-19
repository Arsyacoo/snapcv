'use client';

import { motion } from 'framer-motion';
import { ClipboardList, Laptop, Download, type LucideIcon } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

/* ── Data ── */
interface Step {
  num: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    num: 1,
    icon: ClipboardList,
    title: 'Isi Form Order',
    description:
      'Lengkapi data diri, pengalaman, dan preferensi gaya CV via form online.',
  },
  {
    num: 2,
    icon: Laptop,
    title: 'Tim Mengerjakan',
    description:
      'CV/portfolio dikerjakan oleh tim kami dalam waktu maksimal 24 jam.',
  },
  {
    num: 3,
    icon: Download,
    title: 'Terima Hasilnya',
    description:
      'File CV dikirim via Google Drive dalam format PDF + DOCX, siap dipakai.',
  },
];

/* ── Variants ── */
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] as const } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Cara Order"
          title="3 Langkah Mudah, CV-mu Siap dalam 24 Jam"
        />

        <motion.ol
          className="relative grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Connecting dashed line (desktop only) */}
          <li
            className="pointer-events-none absolute left-[16%] right-[16%] top-[40px] hidden h-0.5 md:block"
            aria-hidden="true"
          >
            <div className="h-full w-full bg-[repeating-linear-gradient(90deg,var(--color-primary)_0,var(--color-primary)_8px,transparent_8px,transparent_16px)] opacity-40" />
          </li>

          {steps.map(({ num, icon: Icon, title, description }) => (
            <motion.li
              key={num}
              className="relative z-10 flex flex-col items-center text-center"
              variants={item}
            >
              {/* Number circle */}
              <div className="mb-[18px] grid h-14 w-14 place-items-center rounded-full border-2 border-primary bg-white font-heading text-[1.4rem] font-extrabold text-primary shadow-[0_8px_16px_rgba(46,117,182,0.15)]">
                {num}
              </div>

              {/* Icon box */}
              <div className="mb-4 grid h-16 w-16 place-items-center rounded-lg bg-primary-light text-primary">
                <Icon className="h-[30px] w-[30px]" />
              </div>

              <h3 className="mb-2 font-heading text-xl font-bold">{title}</h3>
              <p className="text-[0.95rem] text-text-secondary">{description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
