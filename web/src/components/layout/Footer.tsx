import Link from 'next/link';
import { FileText, MessageCircle, AtSign, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Layanan', href: '#values' },
  { label: 'Paket', href: '#pricing' },
  { label: 'Portofolio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
];

const contacts = [
  { label: 'WhatsApp', href: 'https://wa.me/628000000000', icon: MessageCircle },
  { label: '@snapcv.id', href: 'https://instagram.com/snapcv.id', icon: AtSign },
  { label: 'hello@snapcv.id', href: 'mailto:hello@snapcv.id', icon: Mail },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-border bg-surface-alt">
      {/* Main grid */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-14 md:grid-cols-3">
        {/* Brand */}
        <div>
          <Link
            href="#hero"
            className="mb-4 inline-flex items-center gap-2.5 font-heading text-[1.35rem] font-extrabold text-text-primary"
          >
            <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-primary text-white shadow-[0_4px_10px_rgba(46,117,182,0.3)]">
              <FileText className="h-5 w-5" />
            </span>
            <span>
              Snap<span className="text-primary">CV</span>
            </span>
          </Link>
          <p className="max-w-xs text-[0.95rem] text-text-secondary">
            CV profesional, portfolio, dan LinkedIn optimization untuk mahasiswa
            &amp; fresh graduate.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="mb-4 font-heading text-base font-bold text-text-primary">
            Navigasi
          </h4>
          <ul className="space-y-2.5">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[0.95rem] text-text-secondary transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-heading text-base font-bold text-text-primary">
            Kontak
          </h4>
          <ul className="space-y-2.5">
            {contacts.map(({ label, href, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.95rem] text-text-secondary transition-colors hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-6 py-5 text-sm text-text-secondary md:flex-row">
          <p>© {new Date().getFullYear()} SnapCV. All rights reserved.</p>
          <p>
            Dibuat dengan{' '}
            <span className="text-[#ef4444]">♥</span> untuk mahasiswa Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}
