"use client";

import { useState } from "react";
import Icon from "./Icon";

const AMOUNTS = [10, 25, 50, 100];

export default function Donate() {
  const [picked, setPicked] = useState<number | "other">(25);
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");

  return (
    <section id="donate" className="donate">
      <div className="container donate-grid">
        <div className="donate-copy">
          <div className="section-eyebrow">
            <span className="rule" style={{ background: "var(--accent)" }} />
            Donate
          </div>
          <h2 className="section-title">
            Every contribution helps us reach someone who needs it.
          </h2>
          <p className="donate-sub">
            Your donation funds therapy grants through{" "}
            <strong>Stig&apos;s Grants</strong>, our grief care packages for
            newly bereaved families, and the day-to-day running of a charity
            built by the community, for the community.
          </p>
          <ul className="donate-list">
            <li>
              <span className="dot" style={{ background: "var(--accent)" }} />
              £10 — comfort items in a Stig&apos;s Package
            </li>
            <li>
              <span className="dot" style={{ background: "var(--accent)" }} />
              £50 — a Circles drop-in evening
            </li>
            <li>
              <span className="dot" style={{ background: "var(--accent)" }} />
              £250 — a single therapy session via Stig&apos;s Grants
            </li>
          </ul>
        </div>

        <div className="donate-card">
          <div className="donate-card-head">
            <Icon name="heart" size={20} stroke="var(--accent)" />
            <span>Make a donation</span>
          </div>
          <div className="donate-amounts">
            {AMOUNTS.map((a) => (
              <button
                key={a}
                className="donate-amt"
                onClick={() => setPicked(a)}
                style={
                  picked === a
                    ? {
                        background: "var(--accent)",
                        borderColor: "var(--accent)",
                        color: "#fff",
                      }
                    : {}
                }
              >
                £{a}
              </button>
            ))}
            <button
              className="donate-amt donate-amt-other"
              onClick={() => setPicked("other")}
              style={
                picked === "other"
                  ? {
                      background: "var(--accent)",
                      borderColor: "var(--accent)",
                      color: "#fff",
                    }
                  : {}
              }
            >
              Other
            </button>
          </div>
          <div className="donate-frequency">
            <button
              className={`freq-btn${frequency === "once" ? " is-on" : ""}`}
              onClick={() => setFrequency("once")}
            >
              One-off
            </button>
            <button
              className={`freq-btn${frequency === "monthly" ? " is-on" : ""}`}
              onClick={() => setFrequency("monthly")}
            >
              Monthly
            </button>
          </div>
          <button
            className="btn btn-primary donate-submit"
            style={{ background: "var(--accent)" }}
          >
            Donate {picked === "other" ? "—" : `£${picked}`}{" "}
            <Icon name="arrow" size={18} />
          </button>
          <div className="donate-foot">
            Donation widget placeholder · Stripe / GoCardless integration to
            follow
          </div>
        </div>
      </div>
    </section>
  );
}
