'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const IMAGES = Array.from({ length: 9 }, (_, i) => ({
  src: `/content/image${i + 1}.jpg`,
  alt: `Jack Murray Memorial Match photo ${i + 1}`,
}));

export default function MatchGallery() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent(c => (c + 1) % IMAGES.length), []);
  const prev = useCallback(() => setCurrent(c => (c - 1 + IMAGES.length) % IMAGES.length), []);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      aria-label="Jack Murray Memorial Match"
      className="relative min-h-160 max-md:min-h-140 rounded-[22px] overflow-hidden isolate flex items-end bg-ink text-paper select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {IMAGES.map(({ src, alt }, i) => (
          <Image
            key={src}
            src={src}
            alt={alt}
            fill
            className={`object-cover transition-opacity ease-in-out duration-[1200ms] ${i === current ? 'opacity-100' : 'opacity-0'}`}
            priority={i === 0}
          />
        ))}
      </div>

      {/* Dark scrim — bottom-heavy for text legibility */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, color-mix(in oklab, var(--ink) 10%, transparent) 0%, transparent 30%, color-mix(in oklab, var(--ink) 75%, transparent) 100%)',
        }}
        aria-hidden
      />

      {/* Accent vignette — top-right */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, color-mix(in oklab, var(--accent) 40%, transparent), transparent 60%)' }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-20 p-12 max-md:p-7 max-w-[720px] flex flex-col items-start gap-2.5">
        <div className="text-xs font-semibold tracking-[0.12em] uppercase text-accent">
          Annual signature event
        </div>
        <h3 className="font-bold text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.02em] mt-0.5 text-balance text-paper">
          Jack Murray Memorial Match
        </h3>
        <p className="text-[17px] leading-[1.55] text-paper/80 max-w-[560px] text-pretty mt-1.5">
          A day on the pitch in Banbridge, in Jack&apos;s memory — and in support of everyone walking the same road.
        </p>
      </div>

      {/* Controls — bottom right */}
      <div className="absolute right-6 bottom-6 z-30 flex items-center gap-2">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-[38px] h-[38px] grid place-items-center rounded-full border border-paper/30 bg-ink/30 backdrop-blur-[8px] text-paper hover:bg-ink/50 hover:border-paper/60 transition-colors cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <div className="flex items-center gap-1.5 px-2.5" role="tablist">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-label={`Slide ${i + 1}`}
              aria-selected={i === current}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full cursor-pointer transition-all duration-200 ${i === current ? 'w-[22px] bg-paper' : 'w-2 bg-paper/40 hover:bg-paper/60'}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next slide"
          className="w-[38px] h-[38px] grid place-items-center rounded-full border border-paper/30 bg-ink/30 backdrop-blur-[8px] text-paper hover:bg-ink/50 hover:border-paper/60 transition-colors cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
