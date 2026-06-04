"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#events", label: "Events" },
  { href: "/#involved", label: "Get Involved" },
  { href: "/#donate", label: "Donate" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-250 ${scrolled ? "bg-paper/88 backdrop-blur-md backdrop-saturate-[160%] shadow-[0_1px_0_var(--line)]" : ""}`}>
      <div className="max-w-300 mx-auto px-8 max-sm:px-5.5 py-4.5 flex items-center justify-between gap-6">
        <Logo />
        <nav className="hidden md:flex items-center gap-1.5" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className="px-3.5 py-2.5 rounded-full text-[15px] text-ink opacity-75 hover:opacity-100 hover:bg-ink/5 transition-all duration-150"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="px-3.5 py-2.5 rounded-full text-[15px] text-ink opacity-75 hover:opacity-100 hover:bg-ink/5 transition-all duration-150">
            Contact
          </Link>
          <Link
            href="/#donate"
            onClick={close}
            className="ml-2 text-white px-4.5 py-2.5 font-semibold rounded-full bg-accent hover:brightness-105 transition-all duration-150"
          >
            Donate
          </Link>
        </nav>
        <button
          className="flex md:hidden items-center justify-center w-10 h-10 bg-transparent border border-line rounded-2.5 text-ink"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </div>
      {open && (
        <nav className="flex flex-col px-6 pb-6 pt-2 gap-1 bg-paper border-b border-line" aria-label="Mobile">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className="py-3.5 px-1.5 border-b border-line text-[17px] text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={close} className="py-3.5 px-1.5 border-b border-line text-[17px] text-ink">
            Contact
          </Link>
          <Link
            href="/#donate"
            onClick={close}
            className="mt-3 text-white text-center rounded-full font-semibold py-3.5 bg-accent"
          >
            Donate
          </Link>
        </nav>
      )}
    </header>
  );
}
