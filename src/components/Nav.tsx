"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";

const LEFT_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#events", label: "Events" },
];

const RIGHT_LINKS = [
  { href: "/#involved", label: "Get Involved" },
];

const NAV_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];

const SCROLL_FADE_DISTANCE = 60;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollProgress(Math.min(window.scrollY / SCROLL_FADE_DISTANCE, 1));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  const surfaceStyle = {
    backgroundColor: `rgba(245, 248, 253, ${0.88 * scrollProgress})`,
    backdropFilter: `blur(${12 * scrollProgress}px) saturate(${100 + 60 * scrollProgress}%)`,
    WebkitBackdropFilter: `blur(${12 * scrollProgress}px) saturate(${100 + 60 * scrollProgress}%)`,
  };

  return (
    <header
      className="sticky top-0 z-50"
      style={{ ...surfaceStyle, boxShadow: `0 1px 0 rgba(17, 24, 39, ${0.08 * scrollProgress})` }}
    >
      <div className="max-w-300 mx-auto px-8 max-sm:px-5.5 py-3 md:py-3 md:min-h-24 md:grid md:grid-cols-[1fr_auto_1fr] flex items-center justify-between gap-6">
        <nav className="hidden md:flex items-center gap-1.5" aria-label="Primary">
          {LEFT_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className="px-3.5 py-2.5 rounded-full text-[15px] text-ink opacity-75 hover:opacity-100 hover:bg-ink/5 transition-all duration-150"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Logo size={64} />
        </div>
        <div className="hidden md:block md:w-32" aria-hidden />
        <nav className="hidden md:flex items-center justify-end gap-1.5" aria-label="Secondary">
          {RIGHT_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className="px-3.5 py-2.5 rounded-full text-[15px] text-ink opacity-75 hover:opacity-100 hover:bg-ink/5 transition-all duration-150"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={close}
            className="ml-2 text-white px-4.5 py-2.5 font-semibold rounded-full bg-accent hover:brightness-105 transition-all duration-150"
          >
            Contact
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
      <div
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/4 z-10 w-32 h-32 rounded-full items-center justify-center pointer-events-none"
        style={{
          backgroundColor: `rgba(245, 248, 253, ${1 - 0.12 * scrollProgress})`,
          backdropFilter: `blur(${12 * scrollProgress}px) saturate(${100 + 60 * scrollProgress}%)`,
          WebkitBackdropFilter: `blur(${12 * scrollProgress}px) saturate(${100 + 60 * scrollProgress}%)`,
        }}
      >
        <Logo size={112} className="w-24 h-24 pointer-events-auto" />
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
          <Link
            href="/contact"
            onClick={close}
            className="mt-3 text-white text-center rounded-full font-semibold py-3.5 bg-accent"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
