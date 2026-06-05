import type { Metadata } from "next";
import CompanyLogo from "@/components/CompanyLogo";
import RamiFooter from "@/components/RamiFooter";
import StatsDropdown from "@/components/StatsDropdown";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pablo Ramirez Moreno — Center Back",
  description:
    "Pablo 'Rami' Ramirez Moreno — Spanish center back. Fuenlabrada · Leganés B · Getafe CF. Career stats, timeline, and highlights.",
};

const stats = [
  { label: "Games", value: "139" },
  { label: "Starts", value: "116" },
  { label: "Position", value: "Center Back" },
  { label: "Current League", value: "2ª Fed." },
];

const details = [
  { label: "Birth Date", value: "18/03/2003" },
  { label: "Height", value: "186 cm" },
  { label: "Weight", value: "78 kg" },
  { label: "Strong Foot", value: "Right" },
  { label: "Hometown", value: "Madrid, Spain" },
];

const seasons = [
  { club: "Fuenlabrada",       league: "Segunda Federación",  season: "2025/26", gp: 26, gs: 20, goals: 1, minutes: 1884 },
  { club: "Leganés B",         league: "Tercera Federación",  season: "2024/25", gp: 22, gs: 17, goals: 0, minutes: 1603 },
  { club: "Leganés B",         league: "Tercera Federación",  season: "2023/24", gp: 32, gs: 25, goals: 3, minutes: 2364 },
  { club: "Getafe B",          league: "Tercera Federación",  season: "2022/23", gp: 20, gs: 19, goals: 2, minutes: 1682 },
  { club: "Getafe B + Sub 19", league: "Academy",             season: "2021/22", gp: 39, gs: 35, goals: 1, minutes: 2933 },
];

const timeline = [
  { year: "2025–Present", club: "Fuenlabrada",    detail: "Segunda Federación — Spain's 4th tier. Regular starter." },
  { year: "2023–2025",    club: "Leganés B",      detail: "Two seasons in Tercera Federación, fighting for promotion and scoring a goal in the playoff game." },
  { year: "2021–2023",    club: "Getafe CF B",    detail: "Promoted through Getafe's B team. Earned a call-up to the first team squad in 2022/23." },
  { year: "2020–2022",    club: "Getafe Academy", detail: "Developed through Getafe Sub 19 and U19 B — one of Spain's most respected academies." },
];

export default function EnPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Link href="/" className="shrink-0 font-body text-sm text-secondary-foreground transition-colors hover:text-primary" aria-label="Back to language selector">←</Link>
            <CompanyLogo priority />
            <span className="font-body text-sm font-semibold text-secondary-foreground">PR15</span>
          </div>
          <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 font-body text-sm font-medium text-secondary-foreground">
            <StatsDropdown
              label="Stats"
              links={[
                { href: "/en/stats/2025-26", label: "2025/26" },
                { href: "/en/stats/2024-25", label: "2024/25" },
              ]}
            />
            <li><a href="#seasons" className="transition-colors hover:text-primary">Seasons</a></li>
            <li><a href="#highlights" className="transition-colors hover:text-primary">Highlights</a></li>
            <li><a href="#report" className="transition-colors hover:text-primary">Report</a></li>
            <li><a href="#career" className="transition-colors hover:text-primary">Career</a></li>
            <li><a href="#contact" className="transition-colors hover:text-primary">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('/Rami jugando.jpg')", backgroundPosition: "center 20%" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body mb-4 text-xs uppercase tracking-[0.35em] text-primary">Center Back · Spain</p>
          <h1 className="font-heading text-5xl font-bold leading-none text-foreground sm:text-7xl md:text-8xl">
            <span className="block">Pablo</span>
            <span className="block text-gradient-gold">Ramirez</span>
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            Pablo &ldquo;Rami&rdquo; Ramirez Moreno is a Spanish center back formed in the academy of Getafe CF — one of La Liga&apos;s most respected development programs. After earning a first-team call-up at Getafe and two productive seasons at Leganés B, he is currently competing for Fuenlabrada in the Segunda Federación.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="https://es.besoccer.com/jugador/p-ramirez-1005319" target="_blank" rel="noopener noreferrer" className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">BeSoccer Profile</a>
            <a href="https://www.transfermarkt.es/pablo-ramirez/profil/spieler/979355" target="_blank" rel="noopener noreferrer" className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10">Transfermarkt</a>
            <a href="https://www.instagram.com/ramijr5/" target="_blank" rel="noopener noreferrer" className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10">Instagram</a>
            <a href="#contact" className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10">Contact</a>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-black/25 p-5">
                <p className="font-body text-xs uppercase tracking-widest text-primary">{s.label}</p>
                <p className="mt-2 font-heading text-xl font-bold text-foreground">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/40 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-6 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:px-8">
          {details.map((d) => (
            <div key={d.label}>
              <p className="font-body text-xs uppercase tracking-widest text-primary">{d.label}</p>
              <p className="mt-2 font-heading text-base font-semibold text-foreground">{d.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="seasons" className="scroll-mt-24 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Seasons</h2>
          <p className="font-body mt-2 text-secondary-foreground">Year-by-year performance across all clubs.</p>
          <div className="mt-10 overflow-hidden rounded-xl border border-white/10">
            <table className="w-full font-body text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-black/30">
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-widest text-primary">Season</th>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-widest text-primary">Club</th>
                  <th className="hidden px-4 py-3 text-left text-xs uppercase tracking-widest text-primary sm:table-cell">League</th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">GP</th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">GS</th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">G</th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest text-primary">Min</th>
                </tr>
              </thead>
              <tbody>
                {seasons.map((s, i) => (
                  <tr key={i} className="border-b border-white/5 bg-black/10 transition-colors hover:bg-black/25">
                    <td className="px-4 py-3 text-secondary-foreground">{s.season}</td>
                    <td className="px-4 py-3 font-medium text-foreground">{s.club}</td>
                    <td className="hidden px-4 py-3 text-secondary-foreground sm:table-cell">{s.league}</td>
                    <td className="px-4 py-3 text-center text-foreground">{s.gp}</td>
                    <td className="px-4 py-3 text-center text-foreground">{s.gs}</td>
                    <td className="px-4 py-3 text-center font-semibold text-primary">{s.goals}</td>
                    <td className="px-4 py-3 text-center text-foreground">{s.minutes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="highlights" className="scroll-mt-24 bg-zinc-900/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Highlights</h2>
          <div className="mt-10">
            <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/25 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/2fs-Gborb0o"
                title="Pablo Ramirez — Highlights"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section id="report" className="scroll-mt-24 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Performance Report</h2>
          <p className="font-body mt-2 max-w-2xl text-secondary-foreground">
            Full report with profile, season metrics, and career path — ready for coaches and recruiters.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/pablo-ramirez-report.pdf" target="_blank" rel="noopener noreferrer" className="font-body inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">View Report</a>
            <a href="/pablo-ramirez-report.pdf" download className="font-body inline-flex items-center rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10">Download PDF</a>
          </div>
        </div>
      </section>

      <section id="career" className="scroll-mt-24 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Career Timeline</h2>
          <ol className="mt-10 space-y-6">
            {timeline.map((t, i) => (
              <li key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                  {i < timeline.length - 1 && <div className="mt-1 w-px flex-1 bg-white/10" />}
                </div>
                <div className="pb-6">
                  <p className="font-body text-xs uppercase tracking-widest text-primary">{t.year}</p>
                  <p className="font-heading mt-1 text-lg font-semibold text-foreground">{t.club}</p>
                  <p className="font-body mt-1 text-sm leading-relaxed text-secondary-foreground">{t.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Contact</h2>
          <p className="font-body mt-2 text-secondary-foreground">Recruiting and media inquiries.</p>
          <div className="mt-8 max-w-md rounded-xl border border-white/10 bg-black/25 p-8">
            <p className="font-heading text-xl font-semibold text-foreground">Pablo Ramirez Moreno</p>
            <p className="font-body mt-1 text-sm text-secondary-foreground">Center Back · Fuenlabrada · Spain</p>
            <a href="mailto:ramirez.pablom03@gmail.com" className="font-body mt-4 block text-primary underline-offset-2 hover:underline">ramirez.pablom03@gmail.com</a>
          </div>
        </div>
      </section>

      <RamiFooter />
    </div>
  );
}

