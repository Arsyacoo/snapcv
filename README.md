<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white" alt="Framer Motion" />
</p>

# 📄 SnapCV

> **"CV Kamu Menentukan Masa Depanmu — Buat yang Terbaik Bersama SnapCV"**

SnapCV adalah platform SaaS pembuatan CV ATS-friendly berbasis AI untuk mahasiswa dan fresh graduate di Indonesia. Proyek ini sedang dalam tahap migrasi dari landing page statis ke aplikasi web full-stack menggunakan **Next.js App Router**.

---

## 🎯 Latar Belakang

Banyak mahasiswa dan fresh graduate kesulitan membuat CV yang lolos seleksi otomatis (ATS) perusahaan besar, padahal kualitas CV sangat menentukan peluang untuk dipanggil interview. SnapCV hadir sebagai solusi terjangkau yang dikerjakan oleh mahasiswa Informatika yang memahami kebutuhan industri teknologi maupun non-teknologi.

---

## 🏗️ Arsitektur Sistem

| Layer | Teknologi | Status |
|-------|-----------|:------:|
| Frontend & BFF | Next.js 16 (App Router) + Tailwind CSS v4 | ✅ Phase 1 |
| AI Microservice | Python (FastAPI) + Gemini API | 🔜 Phase 2 |
| Database | PostgreSQL via Prisma ORM | 🔜 Phase 2 |
| Authentication | NextAuth.js (Google OAuth + JWT) | 🔜 Phase 2 |
| PDF Engine | @react-pdf/renderer | 🔜 Phase 2 |

---

## ⚡ Quick Start

```bash
# Clone repository
git clone https://github.com/nafizamhdr/snapcv.git
cd snapcv

# Install dependencies
cd web
npm install

# Start development server
npm run dev
```

Aplikasi akan berjalan di **http://localhost:3000**

---

## 📁 Struktur Proyek

```
snapcv/
├── index.html              # Legacy landing page (Phase 1 reference)
├── style.css               # Legacy stylesheet (1100+ lines, migrated)
├── script.js               # Legacy interactions (migrated to React)
├── PRD&SRS.md              # Product Requirements & System Spec
│
└── web/                    # ✨ Next.js App Router (Phase 2)
    ├── src/
    │   ├── app/
    │   │   ├── layout.tsx          # Root layout (fonts, metadata)
    │   │   ├── globals.css         # Tailwind v4 design system
    │   │   └── page.tsx            # Landing page assembly
    │   │
    │   ├── components/
    │   │   ├── layout/
    │   │   │   ├── Navbar.tsx      # Sticky glassmorphic navbar
    │   │   │   └── Footer.tsx      # Site footer
    │   │   ├── sections/
    │   │   │   ├── Hero.tsx        # Hero with CV mockup visual
    │   │   │   ├── Values.tsx      # 4 value proposition cards
    │   │   │   ├── Portfolio.tsx   # Filtered gallery + modal
    │   │   │   ├── Pricing.tsx     # 3-tier pricing table
    │   │   │   ├── HowItWorks.tsx  # 3-step process flow
    │   │   │   ├── Testimonials.tsx# Draggable carousel
    │   │   │   ├── FAQ.tsx         # Animated accordion
    │   │   │   └── CTA.tsx         # Final conversion banner
    │   │   └── ui/
    │   │       └── SectionHeader.tsx
    │   │
    │   └── lib/
    │       └── utils.ts            # cn() class merge utility
    │
    ├── package.json
    └── tsconfig.json
```

---

## 💼 Layanan

| Fitur | Basic | Standard | Premium |
|-------|:-----:|:--------:|:-------:|
| Harga | Rp 50.000 | Rp 150.000 | Rp 300.000 |
| CV ATS-Friendly | ✅ | ✅ | ✅ |
| Portfolio Website | — | ✅ | ✅ |
| LinkedIn Optimization | — | — | ✅ |
| Revisi | 1× | 2× | Unlimited |

---

## 🎯 Target Pengguna

- **Primer** — Mahasiswa tingkat akhir (semester 6–8) yang sedang mencari magang atau kerja
- **Sekunder** — Fresh graduate 0–2 tahun yang ingin upgrade CV untuk melamar ke perusahaan lebih besar
- **Tersier** — Peserta bootcamp dan program MSIB/Magang Kampus Merdeka yang membutuhkan portfolio profesional

---

## 🛠️ Tech Stack Detail

| Package | Versi | Fungsi |
|---------|-------|--------|
| `next` | 16.2.6 | Framework React (App Router, SSR/SSG) |
| `react` | 19.2.4 | UI library |
| `tailwindcss` | 4.x | CSS utility-first framework |
| `framer-motion` | 12.x | Animasi & transisi deklaratif |
| `lucide-react` | 1.x | Sistem ikon (tree-shakeable) |
| `clsx` + `tailwind-merge` | Latest | Dynamic class merging |

---

## 📋 Roadmap

- [x] **Phase 1** — Landing page migration ke Next.js + Tailwind v4
  - [x] Scaffold Next.js App Router environment
  - [x] Design system migration (CSS custom properties → Tailwind v4 `@theme`)
  - [x] 10 modular React components (Navbar, Hero, Values, Portfolio, Pricing, HowItWorks, Testimonials, FAQ, CTA, Footer)
  - [x] Framer Motion animations (replacing IntersectionObserver)
  - [x] Mobile responsive + glassmorphic navbar
- [ ] **Phase 2** — SaaS transition
  - [ ] Authentication (NextAuth.js + Google OAuth)
  - [ ] CV Builder wizard (multistep form + Zod validation)
  - [ ] AI optimization service (FastAPI + Gemini API)
  - [ ] Live preview (split-screen editor)
  - [ ] PDF export (@react-pdf/renderer)
  - [ ] Database schema (Prisma + PostgreSQL)

---

## 👥 Tim

Proyek ini dikerjakan sebagai tugas **Mata Kuliah Digital Bisnis**, Program Studi S1 Informatika, Universitas Amikom Yogyakarta, Tahun Akademik 2025/2026.

| Nama | NIM |
|------|-----|
| Ahmad Daffa | 23.11.5697 |
| Abyan Hisyam Al'Ammar | 23.11.5710 |
| Lavina Arsya Aryanto | 23.11.5723 |
| Desta Adriyan Saputra | 23.11.5731 |
| Nafiza Mahardi W. | 23.11.5741 |

---

<p align="center">
  Dibuat dengan ❤️ untuk mahasiswa Indonesia<br/>
  <sub>© 2026 SnapCV. All rights reserved.</sub>
</p>
