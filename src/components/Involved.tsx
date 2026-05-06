import Icon from "./Icon";

const INVOLVED = [
  {
    icon: "volunteer",
    title: "Volunteer",
    desc: "Help run Circles, support events, or lend your skills behind the scenes.",
    href: "/contact?type=volunteer",
  },
  {
    icon: "fundraise",
    title: "Fundraise",
    desc: "Run, ride, bake or busk for us. We'll back you up with everything you need.",
    href: "/contact?type=fundraise",
  },
  {
    icon: "partner",
    title: "Partner with us",
    desc: "Schools, clubs and businesses — let's work together on something meaningful.",
    href: "/contact?type=partner",
  },
];

export default function Involved() {
  return (
    <section id="involved" className="involved">
      <div className="container">
        <div className="section-head section-head-center">
          <div className="section-eyebrow">
            <span className="rule" style={{ background: "var(--accent)" }} />
            Get involved
          </div>
          <h2 className="section-title">Stand with us.</h2>
          <p className="section-sub">
            Whether you&apos;ve got an hour or a year, there&apos;s a way in.
            Our annual signature event —{" "}
            <strong>the Jack Murray Memorial Match</strong> — brings the whole
            community together every summer.
          </p>
        </div>
        <div className="involved-grid">
          {INVOLVED.map((item) => (
            <a key={item.title} className="involved-card" href={item.href}>
              <div
                className="involved-icon"
                style={{ color: "var(--accent)" }}
              >
                <Icon name={item.icon} size={28} />
              </div>
              <h3 className="involved-title">{item.title}</h3>
              <p className="involved-desc">{item.desc}</p>
              <span
                className="involved-arrow"
                style={{ color: "var(--accent)" }}
              >
                <Icon name="arrow" size={18} />
              </span>
            </a>
          ))}
        </div>
        <div className="match-banner">
          <div className="match-tag" style={{ color: "var(--accent)" }}>
            Annual signature event
          </div>
          <div className="match-title">Jack Murray Memorial Match</div>
          <div className="match-sub">
            A day on the pitch in Banbridge, in Jack&apos;s memory — and in
            support of everyone walking the same road.
          </div>
        </div>
      </div>
    </section>
  );
}
