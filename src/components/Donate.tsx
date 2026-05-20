"use client";

import { useState } from "react";
import Icon from "./Icon";

const AMOUNTS = [10, 25, 50, 100];

export default function Donate() {
  const [picked, setPicked] = useState<number | "other">(25);
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");

  return (
    <section id="donate" className="py-27.5 max-md:py-20 bg-paper">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-16 max-md:gap-8 items-center">

          <div>
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-4.5">
              <span className="w-7 h-0.5 rounded-full bg-accent" />
              Donate
            </div>
            <h2 className="font-bold text-[clamp(30px,3.6vw,48px)] leading-[1.08] tracking-[-0.02em] mt-1.5 mb-0 text-balance text-ink">
              Every contribution helps us reach someone who needs it.
            </h2>
            <p className="text-lg leading-[1.6] text-muted mt-5.5 mb-7 max-w-130 text-pretty">
              Your donation funds therapy grants through{" "}
              <strong>Stig&apos;s Grants</strong>, our grief care packages for newly bereaved families, and the day-to-day running of a charity built by the community, for the community.
            </p>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {[
                "£10 — comfort items in a Stig's Package",
                "£50 — a Circles drop-in evening",
                "£250 — a single therapy session via Stig's Grants",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3.5 text-[15.5px] text-ink">
                  <span className="w-2 h-2 rounded-full bg-accent flex-none" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-paper-2 border border-line rounded-[22px] p-8 shadow-[0_30px_60px_-40px_rgba(42,37,33,0.3)]">
            <div className="flex items-center gap-2.5 font-semibold text-[17px] mb-5.5 text-ink">
              <Icon name="heart" size={20} stroke="var(--accent)" />
              <span>Make a donation</span>
            </div>

            <div className="grid grid-cols-5 max-sm:grid-cols-3 gap-2 mb-3.5">
              {AMOUNTS.map((a) => (
                <button
                  key={a}
                  onClick={() => setPicked(a)}
                  className={`rounded-xl py-3.5 font-semibold text-base border-[1.5px] transition-all duration-150 ${
                    picked === a
                      ? "bg-accent border-accent text-white"
                      : "bg-paper border-line text-ink hover:border-ink"
                  }`}
                >
                  £{a}
                </button>
              ))}
              <button
                onClick={() => setPicked("other")}
                className={`rounded-xl py-3.5 font-semibold text-[13.5px] border-[1.5px] transition-all duration-150 ${
                  picked === "other"
                    ? "bg-accent border-accent text-white"
                    : "bg-paper border-line text-ink hover:border-ink"
                }`}
              >
                Other
              </button>
            </div>

            <div className="flex bg-paper border border-line rounded-full p-1 mb-4">
              <button
                onClick={() => setFrequency("once")}
                className={`flex-1 py-2.5 px-4 rounded-full font-semibold text-sm transition-all duration-150 ${
                  frequency === "once" ? "bg-ink text-paper" : "text-muted"
                }`}
              >
                One-off
              </button>
              <button
                onClick={() => setFrequency("monthly")}
                className={`flex-1 py-2.5 px-4 rounded-full font-semibold text-sm transition-all duration-150 ${
                  frequency === "monthly" ? "bg-ink text-paper" : "text-muted"
                }`}
              >
                Monthly
              </button>
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-4 px-5.5 rounded-full font-semibold text-base text-white bg-accent hover:brightness-105 transition-all duration-150 hover:-translate-y-px">
              Donate {picked === "other" ? "—" : `£${picked}`}{" "}
              <Icon name="arrow" size={18} />
            </button>
            <p className="mt-3.5 text-[12.5px] text-muted text-center tracking-[0.02em]">
              Donation widget placeholder · Stripe / GoCardless integration to follow
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
