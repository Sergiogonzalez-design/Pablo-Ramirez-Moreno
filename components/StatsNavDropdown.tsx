"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface StatsNavDropdownProps {
  label: string;
  links: { href: string; label: string }[];
}

export default function StatsNavDropdown({ label, links }: StatsNavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <li ref={ref} className="group relative">
      <span
        className="cursor-pointer select-none"
        onClick={() => setOpen((o) => !o)}
      >
        {label}
      </span>
      <ul
        className={`absolute left-1/2 top-full z-20 mt-3 w-36 -translate-x-1/2 rounded-xl border border-white/10 bg-background/95 p-2 shadow-xl backdrop-blur-md transition-all duration-150
          ${open ? "visible opacity-100" : "invisible opacity-0 group-hover:visible group-hover:opacity-100"}`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-xs text-secondary-foreground transition-colors hover:bg-white/5 hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
