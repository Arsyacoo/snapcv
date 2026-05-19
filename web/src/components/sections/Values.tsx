'use client';

import { motion } from 'framer-motion';
import { Target, Zap, Wallet, Users, type LucideIcon } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

/* ── Static Data ── */
interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

const values: ValueItem[] = [
  {
    icon: Target,
    title: 'ATS-Friendly',
    description:
      'CV dirancang lolos sistem seleksi otomatis perusahaan besar seperti Tokopedia, Gojek, dan multinasional.',
    iconBg: 'bg-primary-light',
    iconColor: 'text-primary',
  },
  {
    icon: Zap,
    title: 'Cepat 24 Jam',
    description:
      'Hasil dikirim dalam 1×24 jam setelah data diterima. Cocok untuk yang butuh cepat lamar pekerjaan.',
    iconBg: 'bg-accent-light',
    iconColor: 'text-accent-dark',
  },
  {
    icon: Wallet,
    title: 'Harga Terjangkau',
    description:
      'Mulai Rp 50.000, cocok untuk kantong mahasiswa. Tidak ada biaya tersembunyi.',
    iconBg: 'bg-success-light',
    iconColor: 'text-success',
  },
  {
    icon: Users,
    title: 'Tim Berpengalaman',
    description:
      'Dikerjakan mahasiswa Informatika yang paham kebutuhan industri tech dan startup.',
    iconBg: 'bg-danger-light',
    iconColor: 'text-danger',
  },
];

/* ── Animation Variants ── */
const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Values() {
  return (
    <section id="values" className="bg-surface-alt py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Kenapa SnapCV?"
          title="Dirancang Khusus untuk Mahasiswa & Fresh Graduate"
          description="Kami paham apa yang dicari HRD karena kami juga sedang membangun karier kami sendiri."
        />

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {values.map(({ icon: Icon, title, description, iconBg, iconColor }) => (
            <motion.article
              key={title}
              className="group rounded-lg border border-border bg-white p-8 transition-all duration-250 hover:-translate-y-1.5 hover:border-transparent hover:shadow-md"
              variants={cardVariant}
            >
              <div
                className={`mb-[18px] grid h-[52px] w-[52px] place-items-center rounded-md ${iconBg} ${iconColor}`}
              >
                <Icon className="h-[26px] w-[26px]" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold">{title}</h3>
              <p className="text-[0.95rem] text-text-secondary">{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
