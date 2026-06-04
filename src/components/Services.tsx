import Link from "next/link";
import Icon from "./Icon";

const COUNT_WORDS = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

type Service = {
  icon: string;
  name: string;
  meta: string;
  body: string;
  action?: { label: string; href: string };
  comingSoon?: boolean;
};

const SERVICES: Service[] = [
  {
    icon: "circle",
    name: "Stig's Circles",
    meta: "Ages 18–25 · Fortnightly · Free · No booking",
    body: "A drop-in space to connect with peers and find a listening ear, free from judgement or stigma — talk as little or as much as you choose. Our groups are run by people with lived experience of suicide and mental health struggles, and at each one you'll find someone trained in Mental Health First Aid or ASIST.",
    action: { label: "Find a Circle", href: "/contact?type=support" },
  },
  {
    icon: "companion",
    name: "Stig's Companion",
    meta: "Bereavement support · Peer-led · Not counselling",
    body: "For anyone bereaved by suicide. Everyone here shares a singular bond — a loss that's indescribable to others — so you'll find people who understand without you having to explain. It isn't a counselling group; it's a space for mutual understanding and support, on a road we're walking too.",
    action: { label: "Get in touch", href: "/contact?type=support" },
  },
  {
    icon: "advice",
    name: "Stig's Advice",
    meta: "Legal support · Free · Coroner's process",
    body: "Free, professional guidance if you're going through a Coroner's enquiry or inquest. We understand how difficult and confusing it can be, so we'll talk you through the stages involved and give you a clear picture of what to expect.",
    action: { label: "Call 07526 484738", href: "tel:07526484738" },
  },
  {
    icon: "package",
    name: "Stig's Packages",
    meta: "Comfort packages · First weeks after a loss",
    body: "If you or someone you know has been bereaved by suicide, we'll send a comfort package — practical resources, comfort items and a gentle guide for the first, hardest weeks.",
    action: { label: "Request a package", href: "/contact?type=support" },
  },
  {
    icon: "talk",
    name: "Stig Talk",
    meta: "Education · Coming soon",
    body: "Suicide-prevention talks for schools, clubs and workplaces across the community. We're training our team now and will share more soon.",
    comingSoon: true,
  },
];

type Helpline = {
  id: string;
  name: string;
  logo: string;
  logoW: number;
  logoH: number;
  logoWMob: number;
  logoHMob: number;
  tagline: string;
  phone?: string;
  textLine?: string;
  hours: string;
  url: string;
};

const HELPLINES: Helpline[] = [
  {
    id: "lifeline",
    name: "Lifeline",
    logo: "/helplines/lifeline.svg",
    logoW: 80, logoH: 45, logoWMob: 50, logoHMob: 28,
    tagline: "Northern Ireland's 24/7 crisis helpline — free, compassionate support for anyone in distress.",
    phone: "0808 808 8000",
    hours: "24/7",
    url: "https://www.lifelinehelpline.info",
  },
  {
    id: "samaritans",
    name: "Samaritans",
    logo: "/helplines/Samaritans.png",
    logoW: 88, logoH: 23, logoWMob: 55, logoHMob: 15,
    tagline: "Whatever you're going through, a Samaritan is available to listen, any time of day or night.",
    phone: "116 123",
    hours: "24/7",
    url: "https://www.samaritans.org",
  },
  {
    id: "shout",
    name: "Shout",
    logo: "/helplines/shout.png",
    logoW: 62, logoH: 45, logoWMob: 39, logoHMob: 28,
    tagline: "Prefer not to talk? A free, confidential 24/7 text service for anyone in crisis.",
    textLine: "Text SHOUT to 85258",
    hours: "24/7",
    url: "https://www.giveusashout.org",
  },
  {
    id: "papyrus",
    name: "Papyrus HopeLine",
    logo: "/helplines/papyrus.svg",
    logoW: 48, logoH: 48, logoWMob: 30, logoHMob: 30,
    tagline: "For under-35s struggling with suicidal feelings, or anyone worried about a young person.",
    phone: "0300 102 2470",
    textLine: "Text HOPE to 88247",
    hours: "24/7",
    url: "https://www.papyrus-uk.org",
  },
];

function ServiceAside({ index, icon }: { index: number; icon: string }) {
  const num = String(index).padStart(2, "0");
  return (
    <aside className="md:sticky md:top-24 flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-3.5 mb-5 md:mb-0">
      <span
        className="font-semibold leading-none tabular-nums text-[22px] md:text-[38px] text-ink/25"
      >
        {num}
      </span>
      <span className="text-accent">
        <Icon name={icon} size={22} />
      </span>
    </aside>
  );
}

function ServiceAction({ action, comingSoon }: Pick<Service, "action" | "comingSoon">) {
  if (comingSoon) {
    return (
      <span className="mt-5 inline-flex items-center px-3.5 py-1.5 rounded-full text-[12.5px] font-semibold text-muted bg-ink/[0.05]">
        Coming soon
      </span>
    );
  }
  if (!action) return null;
  return (
    <a
      href={action.href}
      className="group mt-5 inline-flex items-center gap-2 text-accent font-semibold text-[15.5px] transition-all duration-150"
    >
      <span className="border-b border-transparent group-hover:border-accent/60 pb-px transition-colors duration-150">
        {action.label}
      </span>
      <span className="transition-transform duration-150 group-hover:translate-x-0.5">
        <Icon name="arrow" size={16} />
      </span>
    </a>
  );
}

export default function Services() {
  const totalCount = COUNT_WORDS[SERVICES.length + 1] ?? String(SERVICES.length + 1);

  return (
    <section id="services" className="py-27.5 max-md:py-20 bg-paper-2">
      <div className="container">

        {/* Section header */}
        <div className="max-w-180 mb-14">
          <div className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] uppercase text-muted mb-4.5">
            <span className="w-7 h-0.5 rounded-full bg-accent" />
            What we do
          </div>
          <h2 className="font-bold text-[clamp(30px,3.6vw,48px)] leading-[1.08] tracking-[-0.02em] mb-4.5 text-balance text-ink">
            {totalCount} ways we show up for the community.
          </h2>
          <p className="text-[18px] leading-[1.55] text-muted text-pretty">
            Every service is led by people with lived experience of suicide, grief, or mental health struggle. No clipboards. No clinical script.
          </p>
        </div>

        {/* Editorial index */}
        <ol className="border-t border-line">

          {/* Rows 01–05: the five programmes */}
          {SERVICES.map((s, i) => (
            <li key={s.name} className="border-b border-line">
              <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-x-12 py-11 max-md:py-8 items-start">
                <ServiceAside index={i + 1} icon={s.icon} />
                <div className="max-w-[720px]">
                  <h3 className="font-bold text-[clamp(25px,2.6vw,33px)] leading-[1.12] tracking-[-0.02em] text-ink">
                    {s.name}
                  </h3>
                  <p className="text-[12.5px] font-semibold tracking-[0.08em] uppercase text-muted mt-2.5 mb-[18px]">
                    {s.meta}
                  </p>
                  <p className="text-[18px] leading-[1.62] text-ink/80 max-w-[62ch] text-pretty">
                    {s.body}
                  </p>
                  <ServiceAction action={s.action} comingSoon={s.comingSoon} />
                </div>
              </div>
            </li>
          ))}

          {/* Row 06: Stig's Signposting + helplines */}
          <li className="border-b border-line">
            <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-x-12 py-11 max-md:py-8 items-start">
              <ServiceAside index={6} icon="signpost" />
              <div>
                <h3 className="font-bold text-[clamp(25px,2.6vw,33px)] leading-[1.12] tracking-[-0.02em] text-ink">
                  Stig&apos;s Signposting
                </h3>
                <p className="text-[12.5px] font-semibold tracking-[0.08em] uppercase text-muted mt-2.5 mb-[18px]">
                  Crisis &amp; referral · Free · 24/7
                </p>
                <p className="text-[18px] leading-[1.62] text-ink/80 max-w-[62ch] text-pretty">
                  We&apos;re a peer-led charity, so we can&apos;t offer crisis support ourselves — but no one should be left without somewhere to turn. If you need to talk to someone{" "}
                  <strong className="text-ink font-semibold">right now</strong>, reach any of these directly.
                </p>

                {/* Flat helpline list */}
                <div className="mt-8 border-t border-line">
                  {HELPLINES.map((h) => {
                    const primary = h.phone ?? h.textLine!;
                    const secondary = h.phone && h.textLine ? h.textLine : null;
                    return (
                      <a
                        key={h.id}
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center border-b border-line py-5 gap-7 max-md:gap-4 hover:opacity-70 transition-opacity duration-150"
                      >
                        {/* Desktop logo */}
                        <img src={h.logo} alt={h.name}
                          style={{ width: h.logoW, height: h.logoH }}
                          className="flex-none block max-md:hidden" />
                        {/* Mobile logo */}
                        <img src={h.logo} alt="" aria-hidden
                          style={{ width: h.logoWMob, height: h.logoHMob }}
                          className="flex-none block md:hidden" />

                        {/* Name + tagline */}
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-[17px] text-ink leading-snug">{h.name}</div>
                          <div className="text-[14px] text-muted mt-0.5 text-pretty leading-[1.45]">{h.tagline}</div>
                          {/* Contact on mobile — stacks beneath tagline */}
                          <div className="md:hidden mt-2.5 flex flex-col gap-0.5">
                            <span className="font-bold text-[16px] text-accent">{primary}</span>
                            {secondary && (
                              <span className="text-[13px] font-medium text-muted">{secondary}</span>
                            )}
                            <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-muted mt-0.5">
                              {h.hours}
                            </span>
                          </div>
                        </div>

                        {/* Contact on desktop — right-aligned */}
                        <div className="hidden md:flex flex-col items-end gap-0.5 flex-none text-right">
                          <span className="font-bold text-[17px] text-accent">{primary}</span>
                          {secondary && (
                            <span className="text-[13px] font-medium text-muted">{secondary}</span>
                          )}
                          <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-muted mt-0.5">
                            {h.hours}
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </li>
        </ol>

        {/* Section CTA */}
        {/* <div className="mt-12 text-center">
          <Link
            href="/contact?type=support"
            className="inline-flex items-center gap-2 px-5.5 py-3.5 rounded-full font-semibold text-[15.5px] text-white bg-accent hover:brightness-105 transition-all duration-150 hover:-translate-y-px"
          >
            Get in touch <Icon name="arrow" size={18} />
          </Link>
        </div> */}

      </div>
    </section>
  );
}
