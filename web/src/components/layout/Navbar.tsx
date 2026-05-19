'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Layanan', href: '#values' },
  { label: 'Paket', href: '#pricing' },
  { label: 'Portofolio', href: '#portfolio' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      id="navbar"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass shadow-sm py-2.5'
          : 'bg-transparent py-[18px]',
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6">
        {/* ── Logo ── */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 font-heading text-[1.35rem] font-extrabold text-text-primary"
          aria-label="SnapCV Home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-primary text-white shadow-[0_4px_10px_rgba(46,117,182,0.3)]">
            <FileText className="h-5 w-5" />
          </span>
          <span>
            Snap<span className="text-primary">CV</span>
          </span>
        </a>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigasi utama">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="group relative text-[0.95rem] font-medium text-text-secondary transition-colors duration-250 hover:text-primary"
            >
              {label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-primary transition-all duration-250 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* ── Desktop CTA ── */}
        <a
          href="#pricing"
          className="hidden items-center justify-center rounded-sm bg-primary px-[18px] py-2.5 text-[0.9rem] font-semibold text-white shadow-[0_6px_14px_rgba(46,117,182,0.35)] transition-all duration-250 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_10px_22px_rgba(46,117,182,0.45)] md:inline-flex"
        >
          Pesan Sekarang
        </a>

        {/* ── Mobile Toggle ── */}
        <button
          className="grid h-10 w-10 place-items-center text-text-primary md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-t border-border bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-6 py-4">
              {navLinks.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-md px-3 py-2.5 text-[0.95rem] font-medium text-text-secondary transition-colors hover:bg-primary-light hover:text-primary"
                >
                  {label}
                </motion.a>
              ))}
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center rounded-sm bg-primary px-4 py-3 text-[0.95rem] font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Pesan Sekarang
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
