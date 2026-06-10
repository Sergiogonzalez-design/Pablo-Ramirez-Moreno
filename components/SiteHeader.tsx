"use client";

import CompanyLogo from "@/components/CompanyLogo";
import StatsDropdown from "@/components/StatsDropdown";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavLink = { href: string; label: string; active?: boolean };

export type NavItem =
  | { type: "group"; label: string; links: NavLink[] }
  | { type: "link"; href: string; label: string; active?: boolean }
  | { type: "anchor"; href: string; label: string };

type SiteHeaderProps = {
  backHref: string;
  backAriaLabel: string;
  items: NavItem[];
  menuLabel?: string;
};

function navItemClass(active?: boolean) {
  return active
    ? "text-primary"
    : "text-secondary-foreground transition-colors hover:text-primary";
}

export default function SiteHeader({
  backHref,
  backAriaLabel,
  items,
  menuLabel = "Menu",
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Link
            href={backHref}
            className="shrink-0 font-body text-sm text-secondary-foreground transition-colors hover:text-primary"
            aria-label={backAriaLabel}
          >
            ←
          </Link>
          <CompanyLogo priority />
          <span className="font-body text-sm font-semibold text-secondary-foreground">PR15</span>
        </div>

        <ul className="hidden items-center justify-end gap-x-4 gap-y-2 font-body text-sm font-medium text-secondary-foreground lg:flex">
          {items.map((item) => {
            if (item.type === "group") {
              return (
                <StatsDropdown
                  key={item.label}
                  label={item.label}
                  links={item.links.map(({ href, label }) => ({ href, label }))}
                />
              );
            }
            if (item.type === "anchor") {
              return (
                <li key={item.href}>
                  <a href={item.href} className={navItemClass()}>
                    {item.label}
                  </a>
                </li>
              );
            }
            return (
              <li key={item.href}>
                <Link href={item.href} className={navItemClass(item.active)}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-foreground transition-colors hover:border-primary/40 hover:text-primary lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={menuLabel}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <>
                <path strokeLinecap="round" d="M4 7h16" />
                <path strokeLinecap="round" d="M4 12h16" />
                <path strokeLinecap="round" d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-background/95 px-4 py-3 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1 font-body text-sm font-medium">
            {items.map((item) => {
              if (item.type === "group") {
                return (
                  <li key={item.label}>
                    <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
                      {item.label}
                    </p>
                    <ul className="mb-2 flex flex-col gap-1">
                      {item.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={closeMenu}
                            className={`block rounded-lg px-3 py-2.5 pl-5 ${navItemClass(link.active)}`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              if (item.type === "anchor") {
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className={`block rounded-lg px-3 py-2.5 ${navItemClass()}`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`block rounded-lg px-3 py-2.5 ${navItemClass(item.active)}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
