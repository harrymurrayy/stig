import Icon from "./Icon";

const SERVICES = [
  {
    icon: "circle",
    name: "Stig's Circles",
    short: "For 16–25s",
    desc: "Informal, non-clinical drop-in support groups for young people. No booking, no registration — just connection.",
  },
  {
    icon: "companion",
    name: "Stig's Companion",
    short: "Bereavement",
    desc: "Peer-led grief support for parents, siblings and friends bereaved by suicide, led by someone with lived experience.",
  },
  {
    icon: "signpost",
    name: "Stig's Signposting",
    short: "Crisis & referral",
    desc: "Support and referral for anyone in crisis, or anyone worried about someone they love. No long waiting lists.",
  },
  {
    icon: "package",
    name: "Stig's Packages",
    short: "First weeks",
    desc: "Grief care packages for families in the immediate aftermath of loss — resources, comfort items and a guide for the first difficult weeks.",
  },
  {
    icon: "talk",
    name: "Stig Talk",
    short: "Education",
    desc: "Educational talks on suicide prevention delivered in schools and sports settings across the community.",
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">
            <span className="rule" style={{ background: "var(--accent)" }} />
            What we do
          </div>
          <h2 className="section-title">
            Five ways we show up for the community.
          </h2>
          <p className="section-sub">
            Every service is led by people with lived experience of suicide,
            grief, or mental health struggle. No clipboards. No clinical script.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <article key={s.name} className={`service-card service-card-${i}`}>
              <div className="service-icon" style={{ color: "var(--accent)" }}>
                <Icon name={s.icon} size={32} />
              </div>
              <div className="service-tag">{s.short}</div>
              <h3 className="service-name">{s.name}</h3>
              <p className="service-desc">{s.desc}</p>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 48, textAlign: "center" }}>
          <a
            className="btn btn-primary"
            href="/contact?type=support"
            style={{ background: "var(--accent)" }}
          >
            Get in touch <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
