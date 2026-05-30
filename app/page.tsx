import type { Metadata } from "next";
import CompanyLogo from "@/components/CompanyLogo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pablo Ramirez Moreno",
  description: "Pablo 'Rami' Ramirez Moreno — Center Back. Select your language.",
};

export default function LanguageSelector() {
  return (
    <div
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.85) 100%), url('/Rami jugando.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
      }}
    >
      <header className="flex items-center gap-4 px-6 py-5 sm:px-10">
        <CompanyLogo priority />
        <span className="font-body text-sm font-semibold text-secondary-foreground">PR15</span>
      </header>

      <div className="flex flex-1 flex-col items-center justify-center px-4 pb-16 text-center">
        <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">
          Defensa Central · Center Back
        </p>
        <h1 className="font-heading mt-4 text-5xl font-bold leading-none text-foreground sm:text-7xl">
          <span className="block">Pablo</span>
          <span className="block text-gradient-gold">Ramirez</span>
        </h1>
        <p className="font-body mt-3 text-sm text-secondary-foreground">
          Fuenlabrada · Leganés B · Getafe CF
        </p>

        <p className="font-body mt-10 text-sm uppercase tracking-widest text-secondary-foreground/60">
          Select language · Elige idioma
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/en"
            className="group flex min-w-[180px] flex-col items-center gap-2 rounded-2xl border border-white/15 bg-black/30 px-10 py-7 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-black/50"
          >
            <span className="text-3xl">🇺🇸</span>
            <span className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              English
            </span>
          </Link>

          <Link
            href="/es"
            className="group flex min-w-[180px] flex-col items-center gap-2 rounded-2xl border border-white/15 bg-black/30 px-10 py-7 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-black/50"
          >
            <span className="text-3xl">🇪🇸</span>
            <span className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              Español
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
