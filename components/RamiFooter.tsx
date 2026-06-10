import CompanyLogo from "@/components/CompanyLogo";

export default function RamiFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        <div>
          <CompanyLogo variant="footer" />
          <p className="mt-2 font-body text-sm font-semibold text-primary">
            Where Talent Meets Visibility.
          </p>
          <p className="mt-1 max-w-md font-body text-sm text-secondary-foreground">
            Custom websites for athletes — stats, video, and story in one site.
          </p>
        </div>
        <div className="font-body text-sm">
          <p className="font-semibold text-foreground">Onix Media</p>
          <ul className="mt-2 flex flex-col gap-3 text-secondary-foreground">
            <li>
              <a
                href="https://onixmedia.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                onixmedia.agency
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@onixmedia.agency"
                className="text-primary hover:underline"
              >
                contact@onixmedia.agency
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/onixmedia.agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-body text-xs text-zinc-500">
          © {new Date().getFullYear()} Onix Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
