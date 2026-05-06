import Icon from "./Icon";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-shape" aria-hidden="true">
        <svg viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="g1" cx="30%" cy="35%" r="60%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
              <stop offset="55%" stopColor="var(--accent)" stopOpacity="0.08" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="g2" cx="80%" cy="75%" r="55%">
              <stop offset="0%" stopColor="#2C7EDE" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#2C7EDE" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="800" height="800" fill="url(#g1)" />
          <rect width="800" height="800" fill="url(#g2)" />
          <path
            d="M -50 540 C 200 460, 380 620, 600 520 S 900 480, 950 540 L 950 850 L -50 850 Z"
            fill="var(--accent)"
            fillOpacity="0.07"
          />
          <path
            d="M -50 620 C 220 560, 420 700, 620 600 S 920 580, 950 620 L 950 850 L -50 850 Z"
            fill="var(--accent)"
            fillOpacity="0.05"
          />
        </svg>
      </div>

      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="dot" style={{ background: "var(--accent)" }} />
          Banbridge, Northern Ireland · Peer-led
        </div>
        <h1 className="hero-title">
          You don&apos;t have to{" "}
          <span className="hero-emph" style={{ color: "var(--accent)" }}>
            face this alone.
          </span>
        </h1>
        <p className="hero-sub">
          The Stig Initiative is a peer-led suicide prevention and grief support
          charity, rooted in lived experience and built around the Banbridge
          community.
        </p>
        <div className="hero-ctas">
          <a
            className="btn btn-primary"
            href="/contact?type=support"
            style={{ background: "var(--accent)" }}
          >
            Get Support <Icon name="arrow" size={18} />
          </a>
          <a className="btn btn-ghost" href="#involved">
            Get Involved
          </a>
        </div>
        <div className="hero-meta">
          <div>
            <strong>No booking.</strong> No referral. No waiting list.
          </div>
          <span className="hero-meta-sep" />
          <div>
            If you need to talk to someone right now,{" "}
            <a href="/contact?type=support">reach out here</a>.
          </div>
        </div>
      </div>
    </section>
  );
}
