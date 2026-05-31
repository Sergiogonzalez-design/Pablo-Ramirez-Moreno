"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type StatsDropdownProps = {
  label: string;
  links: { href: string; label: string }[];
};

export default function StatsDropdown({ label, links }: StatsDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
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

  return (
    <li ref={ref} className="group relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer select-none"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
      </button>
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
