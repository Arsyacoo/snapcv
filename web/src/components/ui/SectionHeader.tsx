'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
};

export default function SectionHeader({ eyebrow, title, description, className }: SectionHeaderProps) {
  return (
    <motion.div
      className={cn('mx-auto mb-14 max-w-[700px] text-center', className)}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <span className="mb-[18px] inline-block rounded-full bg-primary-light px-3.5 py-1.5 text-[0.85rem] font-semibold uppercase tracking-wider text-primary">
        {eyebrow}
      </span>
      <h2 className="mb-3.5 font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-[1.05rem] text-text-secondary">{description}</p>
      )}
    </motion.div>
  );
}
