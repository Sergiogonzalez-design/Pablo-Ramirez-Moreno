import type { Metadata } from "next";
import RamiFooter from "@/components/RamiFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Pablo Ramirez — Estadísticas 2025/26",
  description: "Estadísticas partido a partido de Pablo Ramirez Moreno en Fuenlabrada, temporada 2025/26.",
};

const matches = [
  { date: "03 May", home: "NAV", away: "FUE", score: "3–1", min: 90 },
  { date: "26 Abr", home: "FUE", away: "MAJ", score: "0–0", min: 90 },
  { date: "19 Abr", home: "UDS", away: "FUE", score: "2–3", min: 90 },
  { date: "05 Abr", home: "QRE", away: "FUE", score: "1–0", min: 90 },
  { date: "28 Mar", home: "FUE", away: "RMA", score: "1–1", min: 90 },
  { date: "22 Mar", home: "ELC", away: "FUE", score: "2–3", min: 6  },
  { date: "15 Feb", home: "FUE", away: "LPA", score: "1–1", min: 90 },
  { date: "07 Feb", home: "COL", away: "FUE", score: "3–0", min: 44 },
  { date: "01 Feb", home: "FUE", away: "UBC", score: "0–1", min: 90 },
  { date: "24 Ene", home: "RVB", away: "FUE", score: "1–2", min: 90 },
  { date: "17 Ene", home: "FUE", away: "COR", score: "1–2", min: 90 },
  { date: "11 Ene", home: "FUE", away: "CDT", score: "1–1", min: 90 },
  { date: "04 Ene", home: "ALC", away: "FUE", score: "0–0", min: 90 },
  { date: "20 Dic", home: "FUE", away: "ELC", score: "1–1", min: 90 },
  { date: "13 Dic", home: "MAJ", away: "FUE", score: "1–0", min: 90 },
  { date: "07 Dic", home: "FUE", away: "QRE", score: "2–1", min: 90 },
  { date: "30 Nov", home: "FUE", away: "COL", score: "3–0", min: 90 },
  { date: "23 Nov", home: "UBC", away: "FUE", score: "2–0", min: 90 },
  { date: "08 Nov", home: "RMA", away: "FUE", score: "3–1", min: 90 },
  { date: "02 Nov", home: "CDT", away: "FUE", score: "1–3", min: 90 },
  { date: "26 Oct", home: "FUE", away: "UDS", score: "1–1", min: 14 },
  { date: "19 Oct", home: "COR", away: "FUE", score: "2–0", min: 5  },
  { date: "05 Oct", home: "LPA", away: "FUE", score: "1–2", min: 15 },
  { date: "07 Sep", home: "ORI", away: "FUE", score: "2–0", min: 90 },
  { date: "31 Ago", home: "ADA", away: "FUE", score: "0–1", min: 33 },
];

export default function RamiEsStats2526Page() {
  return (
    <div
      className="min-h-screen bg-background"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.75) 100%), url('/rami alcala.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
        backgroundAttachment: "fixed",
      }}
    >
      <SiteHeader
        backHref="/es"
        backAriaLabel="Volver al perfil"
        menuLabel="Menú"
        items={[
          { type: "link", href: "/es", label: "Perfil" },
          { type: "link", href: "/es/stats/2025-26", label: "2025/26", active: true },
          { type: "link", href: "/es/stats/2024-25", label: "2024/25" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">Fuenlabrada · Segunda Federación</p>
            <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">Temporada 2025 / 26</h1>
          </div>
          <div className="flex gap-3 pt-2">
            {[{ label: "Partidos", value: "26" }, { label: "Titularidades", value: "20" }, { label: "Goles", value: "1" }].map((s) => (
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


