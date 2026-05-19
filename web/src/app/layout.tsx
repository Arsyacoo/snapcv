import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

/* ---------- Font Loading ----------
   next/font automatically self-hosts these fonts, eliminating the
   render-blocking Google Fonts CDN <link> from the legacy index.html.
   Each font injects a CSS variable that our Tailwind theme references.
   ---------------------------------- */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

/* ---------- Global Metadata ---------- */
export const metadata: Metadata = {
  title: {
    default: "SnapCV — CV Profesional ATS-Friendly untuk Mahasiswa",
    template: "%s | SnapCV",
  },
  description:
    "Buat CV ATS-friendly secara otomatis dengan AI. Platform SaaS untuk mahasiswa dan fresh graduate. Selesai dalam hitungan menit.",
  keywords: [
    "CV ATS-friendly",
    "CV generator",
    "resume builder",
    "mahasiswa",
    "fresh graduate",
    "AI CV",
    "SnapCV",
  ],
  openGraph: {
    title: "SnapCV — CV Kamu Menentukan Masa Depanmu",
    description:
      "CV ATS-friendly, portfolio website, dan LinkedIn optimization untuk mahasiswa & fresh graduate.",
    type: "website",
    locale: "id_ID",
  },
};

/* ---------- Root Layout ---------- */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
