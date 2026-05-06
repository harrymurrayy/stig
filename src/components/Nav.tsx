"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import Icon from "./Icon";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
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
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="nav-inner">
        <Logo />
        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="/contact">Contact</a>
          <a
            className="nav-cta"
            href="/#donate"
            onClick={close}
            style={{ background: "var(--accent)" }}
          >
            Donate
          </a>
        </nav>
        <button
          className="nav-burger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </div>
      {open && (
        <div className="nav-mobile" role="dialog">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="/contact" onClick={close}>
            Contact
          </a>
          <a
            className="nav-cta-mobile"
            href="/#donate"
            onClick={close}
            style={{ background: "var(--accent)" }}
          >
            Donate
          </a>
        </div>
      )}
    </header>
  );
}
