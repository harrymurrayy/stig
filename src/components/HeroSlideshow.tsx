'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const IMAGES = Array.from({ length: 9 }, (_, i) => ({
  src: `/content/image${i + 1}.jpg`,
  alt: `The Stig Initiative community photo ${i + 1}`,
}));

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const next = useCallback(() => setCurrent(c => (c + 1) % IMAGES.length), []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [paused, reducedMotion, next]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Slides */}
      {IMAGES.map(({ src, alt }, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-[1600ms] ease-in-out ${
            i === current
              ? reducedMotion
                ? 'opacity-100'
                : 'opacity-100 [animation:heroKenBurns_18s_ease-out_forwards]'
              : 'opacity-0'
          }`}
          priority={i === 0}
          loading={i === 0 ? 'eager' : 'lazy'}
        />
      ))}

      {/* Scrim — heavier at top and bottom, lighter in the middle */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, color-mix(in oklab, var(--ink) 62%, transparent) 0%, color-mix(in oklab, var(--ink) 48%, transparent) 38%, color-mix(in oklab, var(--ink) 70%, transparent) 100%)',
        }}
      />

      {/* Edge vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 75% 60% at 50% 45%, transparent 0%, color-mix(in oklab, var(--ink) 18%, transparent) 100%)',
        }}
      />

      {/* Dots */}
      <div className="absolute left-1/2 bottom-6 -translate-x-1/2 z-20 flex items-center gap-2 pointer-events-auto">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => { setCurrent(i); setPaused(true); }}
            className={`h-2 rounded-full cursor-pointer transition-all duration-200 ${
              i === current ? 'w-[26px] bg-paper' : 'w-2 bg-paper/45 hover:bg-paper/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
