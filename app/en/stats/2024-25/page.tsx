import type { Metadata } from "next";
import CompanyLogo from "@/components/CompanyLogo";
import RamiFooter from "@/components/RamiFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pablo Ramirez — 2024/25 Stats",
  description: "Match-by-match stats for Pablo Ramirez Moreno at Leganés B, 2024/25 season.",
};

const matches = [
  { date: "27 Apr", home: "LEG", away: "LRZ", score: "1–2", min: 64 },
  { date: "19 Apr", home: "CAN", away: "LEG", score: "0–3", min: 90 },
  { date: "13 Apr", home: "LEG", away: "ALC", score: "1–1", min: 90 },
  { date: "22 Feb", home: "LEG", away: "ALA", score: "0–0", min: 32 },
  { date: "02 Feb", home: "VAL", away: "LEG", score: "1–1", min: 90 },
  { date: "18 Jan", home: "ALC", away: "LEG", score: "1–2", min: 75 },
  { date: "12 Jan", home: "ADP", away: "LEG", score: "1–3", min: 88 },
  { date: "21 Dec", home: "LEG", away: "VIL", score: "1–2", min: 90 },
  { date: "15 Dec", home: "LRZ", away: "LEG", score: "2–4", min: 90 },
  { date: "07 Dec", home: "LEG", away: "CAN", score: "6–1", min: 90 },
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
  { date: "28 Aug", home: "LEG", away: "CDT", score: "0–1", min: 90 },
];

export default function RamiEnStats2425Page() {
  return (
    <div
      className="min-h-screen bg-background"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.80) 100%), url('/rami perfil.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 72px",
        backgroundAttachment: "scroll",
      }}
    >
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-4">
            <Link href="/en" className="shrink-0 font-body text-sm text-secondary-foreground transition-colors hover:text-primary" aria-label="Back to profile">←</Link>
            <CompanyLogo priority />
            <span className="font-body text-sm font-semibold text-secondary-foreground">PR15</span>
          </div>
          <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 font-body text-sm font-medium text-secondary-foreground">
            <li><Link href="/en" className="transition-colors hover:text-primary">Profile</Link></li>
            <li><Link href="/en/stats/2025-26" className="transition-colors hover:text-primary">2025/26</Link></li>
            <li><Link href="/en/stats/2024-25" className="text-primary">2024/25</Link></li>
          </ul>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-4 pt-36 pb-16 sm:px-6 sm:pt-40 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.35em] text-primary">Leganés B · Tercera Federación</p>
            <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">2024 / 25 Season</h1>
          </div>
          <div className="flex gap-3 pt-2">
            {[{ label: "Appearances", value: "22" }, { label: "Started", value: "17" }, { label: "Goals", value: "0" }].map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-center backdrop-blur-sm">
                <p className="font-body text-xs uppercase tracking-widest text-primary">{s.label}</p>
                <p className="font-heading mt-1 text-2xl font-bold text-foreground">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 overflow-hidden rounded-xl border border-white/10">
          <table className="w-full font-body text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-black/30">
                <th className="px-4 py-3 text-left text-xs uppercase tracking-widest text-primary">Date</th>
                <th className="px-4 py-3 text-left text-xs uppercase tracking-widest text-primary">Match</th>
                <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">Score</th>
                <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">Min</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((m, i) => (
                <tr key={i} className="border-b border-white/5 bg-black/10 transition-colors hover:bg-black/25">
                  <td className="px-4 py-3 text-secondary-foreground whitespace-nowrap">{m.date}</td>
                  <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">{m.home} <span className="text-secondary-foreground">vs</span> {m.away}</td>
                  <td className="px-4 py-3 text-center font-semibold text-foreground">{m.score}</td>
                  <td className="px-4 py-3 text-center text-secondary-foreground">{m.min > 0 ? `${m.min}'` : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-body mt-4 text-xs text-secondary-foreground">Source: BeSoccer</p>
      </section>
      <RamiFooter />
    </div>
  );
}


