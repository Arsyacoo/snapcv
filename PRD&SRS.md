📄 Product Requirements Document (PRD)
Project Name: SnapCV (AI-Powered CV Generator)
Document Version: 1.0
Target Release: Phase 2 (SaaS Transition)

1. Product Overview
SnapCV berevolusi dari marketing landing page menjadi platform SaaS (Software as a Service) yang memungkinkan mahasiswa dan fresh graduate membuat CV ATS-friendly secara otomatis dengan bantuan kecerdasan buatan (AI). Platform ini memecahkan masalah kebingungan pengguna dalam merangkai kata-kata profesional untuk pengalaman dan proyek mereka.

2. Target Audience
Mahasiswa: Membutuhkan CV untuk keperluan magang (PKL), kepanitiaan, atau asisten laboratorium.

Fresh Graduates: Membutuhkan CV berstandar industri dengan optimasi keyword ATS untuk melamar pekerjaan entry-level.

3. Core Value Proposition
ATS Optimization: Jaminan format yang terbaca oleh sistem pelacakan pelamar (ATS).

AI-Assisted Writing: AI mengubah poin-poin mentah menjadi deskripsi pencapaian berorientasi hasil (menggunakan metode STAR - Situation, Task, Action, Result).

Frictionless UX: Proses wizard bertahap (multistep form) yang dipandu, tidak mengintimidasi pengguna pemula.

4. User Flow & Features (MVP Scope)
Authentication: Pengguna mendaftar/masuk menggunakan Google OAuth atau Email.

Onboarding: Pengguna memilih tujuan pembuatan CV (Magang, Kerja Full-time, Akademik).

Data Input Wizard: Form interaktif untuk Profil, Pendidikan, Pengalaman, dan Skills.

AI Magic Touch (Core Feature): Tombol "Optimize with AI" pada kolom pengalaman. Sistem akan mengirim draft ke backend, lalu mengembalikan teks yang sudah dipoles secara profesional.

Live Preview & Template: Split-screen (kiri: form, kanan: live preview CV).

Export: Mengunduh hasil akhir dalam format PDF beresolusi tinggi dan text-selectable.

5. Success Metrics (KPIs)
Task Success Rate: >85% pengguna yang memulai proses pembuatan CV berhasil mengunduh PDF.

Performance: Waktu pembuatan deskripsi oleh AI < 5 detik.

Business: Tingkat konversi (Conversion Rate) dari landing page ke sign-up > 10%.

🛠️ Software Requirements Specification (SRS)
System Name: SnapCV Core Engine

1. System Architecture
Sistem menggunakan pola arsitektur microservices terpisah untuk memisahkan beban rendering UI dan komputasi AI.

Frontend & BFF (Backend-for-Frontend): Next.js (App Router)

AI Microservice: Python (FastAPI)

Database: PostgreSQL (via Prisma ORM)

Authentication: NextAuth.js (Auth.js)

PDF Engine: @react-pdf/renderer (Client/Server side rendering untuk stabilitas layout dokumen).

2. Functional Requirements
2.1. Authentication System
Sistem HARUS mendukung OAuth 2.0 (Google) dan Kredensial JWT.

Sistem HARUS mengamankan rute dashboard menggunakan middleware.

2.2. CV Builder Engine
Sistem HARUS menyimpan draft progres pengguna secara real-time ke database atau local storage untuk mencegah kehilangan data.

Sistem HARUS memvalidasi input formulir (Zod validation) sebelum dikirim ke peladen.

2.3. AI Optimization Service
Frontend HARUS mengirimkan payload berisi raw text dan job context ke endpoint /api/optimize.

BFF Next.js HARUS mem- proxy permintaan ini ke backend FastAPI dengan menyertakan Authorization header.

FastAPI service HARUS memproses teks menggunakan model LLM (misal: Gemini API) dengan system prompt khusus yang membatasi output hanya pada poin-poin profesional (tanpa format obrolan).

Sistem HARUS memiliki mekanisme Rate Limiting (misal: maks 10 permintaan AI per menit per user) untuk mencegah eksploitasi API.

2.4. Document Generation
Sistem HARUS merender HTML/React DOM menjadi PDF yang mempertahankan margin, font, dan hyperlink.

PDF yang dihasilkan HARUS lolos uji parsing text (tidak di- render sebagai gambar tunggal agar ramah ATS).

3. Non-Functional Requirements
3.1. Performance & Scalability
Landing page statis (Next.js SSG) HARUS mencapai skor FCP (First Contentful Paint) di bawah 1.5 detik pada perangkat seluler.

Backend FastAPI HARUS bersifat stateless agar mudah di- scale secara horizontal jika terjadi lonjakan pengguna.

3.2. Security
API Key untuk layanan AI TIDAK BOLEH terekspos di sisi client. Semua pemanggilan AI harus melalui rute peladen.

Data identitas personal (PII) pengguna dalam CV HARUS ditransmisikan melalui koneksi HTTPS (TLS 1.2+).

4. High-Level Data Schema (Entity Relationship)
User: id, email, name, created_at

Resume: id, user_id, title, target_job, updated_at

Experience: id, resume_id, company, role, start_date, end_date, description (relasi One-to-Many dengan Resume).