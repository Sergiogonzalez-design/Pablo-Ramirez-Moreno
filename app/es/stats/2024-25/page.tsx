import type { Metadata } from "next";
import CompanyLogo from "@/components/CompanyLogo";
import RamiFooter from "@/components/RamiFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pablo Ramirez — Estadísticas 2024/25",
  description: "Estadísticas partido a partido de Pablo Ramirez Moreno en Leganés B, temporada 2024/25.",
};

const matches = [
  { date: "27 Abr", home: "LEG", away: "LRZ", score: "1–2", min: 64 },
  { date: "19 Abr", home: "CAN", away: "LEG", score: "0–3", min: 90 },
  { date: "13 Abr", home: "LEG", away: "ALC", score: "1–1", min: 90 },
  { date: "22 Feb", home: "LEG", away: "ALA", score: "0–0", min: 32 },
  { date: "02 Feb", home: "VAL", away: "LEG", score: "1–1", min: 90 },
  { date: "18 Ene", home: "ALC", away: "LEG", score: "1–2", min: 75 },
  { date: "12 Ene", home: "ADP", away: "LEG", score: "1–3", min: 88 },
  { date: "21 Dic", home: "LEG", away: "VIL", score: "1–2", min: 90 },
  { date: "15 Dic", home: "LRZ", away: "LEG", score: "2–4", min: 90 },
  { date: "07 Dic", home: "LEG", away: "CAN", score: "6–1", min: 90 },
  { date: "30 Nov", home: "ALC", away: "LEG", score: "2–2", min: 44 },
  { date: "17 Nov", home: "ALC", away: "LEG", score: "1–0", min: 89 },
  { date: "10 Nov", home: "LEG", away: "RVB", score: "0–3", min: 75 },
  { date: "03 Nov", home: "CPO", away: "LEG", score: "3–3", min: 90 },
  { date: "27 Oct", home: "TRC", away: "LEG", score: "2–2", min: 28 },
  { date: "19 Oct", home: "LEG", away: "CAR", score: "0–0", min: 14 },
  { date: "13 Oct", home: "ALA", away: "LEG", score: "0–4", min: 14 },
  { date: "06 Oct", home: "LEG", away: "ATM", score: "1–0", min: 90 },
  { date: "29 Sep", home: "GAL", away: "LEG", score: "1–1", min: 90 },
  { date: "21 Sep", home: "LEG", away: "VAL", score: "1–2", min: 90 },
  { date: "15 Sep", home: "ARA", away: "LEG", score: "1–0", min: 90 },
  { date: "08 Sep", home: "LEG", away: "ALC", score: "4–0", min: 90 },
  { date: "28 Ago", home: "LEG", away: "CDT", score: "0–1", min: 90 },
];

export default function RamiEsStats2425Page() {
  return (
    <div
      className="min-h-screen bg-background"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.75) 100%), url('/rami perfil.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 72px",
        backgroundAttachment: "scroll",
      }}
    >
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Link href="/es" className="shrink-0 font-body text-sm text-secondary-foreground transition-colors hover:text-primary" aria-label="Volver al perfil">←</Link>
            <CompanyLogo priority />
            <span className="font-body text-sm font-semibold text-secondary-foreground">PR15</span>
          </div>
          <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 font-body text-sm font-medium text-secondary-foreground">
            <li><Link href="/es" className="transition-colors hover:text-primary">Perfil</Link></li>
            <li><Link href="/es/stats/2025-26" className="transition-colors hover:text-primary">2025/26</Link></li>
            <li><Link href="/es/stats/2024-25" className="text-primary">2024/25</Link></li>
          </ul>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">Leganés B · Tercera Federación</p>
            <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">Temporada 2024 / 25</h1>
          </div>
          <div className="flex gap-3 pt-2">
            {[{ label: "Partidos", value: "22" }, { label: "Titularidades", value: "17" }, { label: "Goles", value: "0" }].map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-center backdrop-blur-md">
                <p className="font-body text-xs uppercase tracking-widest text-primary">{s.label}</p>
                <p className="font-heading mt-1 text-2xl font-bold text-foreground">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 overflow-hidden rounded-xl border border-white/10">
          <table className="w-full font-body text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-black/35">
                <th className="px-4 py-3 text-left text-xs uppercase tracking-widest text-primary">Fecha</th>
                <th className="px-4 py-3 text-left text-xs uppercase tracking-widest text-primary">Partido</th>
                <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">Resultado</th>
                <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">Min</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((m, i) => (
                <tr key={i} className="border-b border-white/5 bg-black/15 transition-colors hover:bg-black/30">
                  <td className="px-4 py-3 text-secondary-foreground whitespace-nowrap">{m.date}</td>
                  <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">{m.home} <span className="text-secondary-foreground">vs</span> {m.away}</td>
                  <td className="px-4 py-3 text-center font-semibold text-foreground">{m.score}</td>
                  <td className="px-4 py-3 text-center text-secondary-foreground">{m.min > 0 ? `${m.min}'` : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-body mt-4 text-xs text-secondary-foreground">Fuente: BeSoccer</p>
      </section>
      <RamiFooter />
    </div>
  );
}


