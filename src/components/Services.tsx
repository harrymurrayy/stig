import Link from "next/link";
import Icon from "./Icon";

const SERVICES = [
  {
    icon: "circle",
    name: "Stig's Circles",
    short: "For 16–25s",
    desc: "Informal, non-clinical drop-in support groups for young people. No booking, no registration — just connection.",
    span: "md:col-span-2",
  },
  {
    icon: "companion",
    name: "Stig's Companion",
    short: "Bereavement",
    desc: "Peer-led grief support for parents, siblings and friends bereaved by suicide, led by someone with lived experience.",
    span: "md:col-span-2",
  },
  {
    icon: "signpost",
    name: "Stig's Signposting",
    short: "Crisis & referral",
    desc: "Support and referral for anyone in crisis, or anyone worried about someone they love. No long waiting lists.",
    span: "md:col-span-2",
  },
  {
    icon: "package",
    name: "Stig's Packages",
    short: "First weeks",
    desc: "Grief care packages for families in the immediate aftermath of loss — resources, comfort items and a guide for the first difficult weeks.",
    span: "md:col-span-3 sm:col-span-2",
  },
  {
    icon: "talk",
    name: "Stig Talk",
    short: "Education",
    desc: "Educational talks on suicide prevention delivered in schools and sports settings across the community.",
    span: "md:col-span-3 sm:col-span-2",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-27.5 max-md:py-20 bg-paper-2">
      <div className="container">
        <div className="max-w-180 mb-14">
          <div className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] uppercase text-muted mb-4.5">
            <span className="w-7 h-0.5 rounded-full bg-accent" />
            What we do
          </div>
          <h2 className="font-bold text-[clamp(30px,3.6vw,48px)] leading-[1.08] tracking-[-0.02em] mb-4.5 text-balance text-ink">
            Five ways we show up for the community.
          </h2>
          <p className="text-[18px] leading-[1.55] text-muted text-pretty">
            Every service is led by people with lived experience of suicide, grief, or mental health struggle. No clipboards. No clinical script.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-5">
          {SERVICES.map((s) => (
            <article
              key={s.name}
              className={`${s.span} bg-paper border border-line rounded-[18px] p-7 flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(42,37,33,0.25)]`}
            >
              <div className="w-14 h-14 rounded-[14px] bg-[color-mix(in_oklab,var(--accent)_12%,var(--paper))] grid place-items-center mb-5.5 text-accent">
                <Icon name={s.icon} size={32} />
              </div>
              <div className="text-[11.5px] font-semibold tracking-widest uppercase text-muted mb-2">{s.short}</div>
              <h3 className="font-bold text-[22px] tracking-[-0.012em] mb-2.5 text-ink">{s.name}</h3>
              <p className="text-[15.5px] leading-[1.55] text-muted flex-1 text-pretty">{s.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact?type=support"
            className="inline-flex items-center gap-2 px-5.5 py-3.5 rounded-full font-semibold text-[15.5px] text-white bg-accent hover:brightness-105 transition-all duration-150 hover:-translate-y-px"
          >
            Get in touch <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
