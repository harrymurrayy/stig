import Link from "next/link";
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
    <section id="involved" className="py-27.5 max-md:py-20 bg-paper-3">
      <div className="container">
        <div className="max-w-180 mx-auto text-center mb-14">
          <div className="inline-flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-4.5">
            <span className="w-7 h-0.5 rounded-full bg-accent" />
            Get involved
          </div>
          <h2 className="font-bold text-[clamp(30px,3.6vw,48px)] leading-[1.08] tracking-[-0.02em] mb-4.5 text-balance text-ink">
            Stand with us.
          </h2>
          <p className="text-lg leading-[1.55] text-muted text-pretty">
            Whether you&apos;ve got an hour or a year, there&apos;s a way in. Our annual signature event —{" "}
            <strong>the Jack Murray Memorial Match</strong> — brings the whole community together every summer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {INVOLVED.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="relative bg-paper border border-line rounded-[18px] p-8 flex flex-col min-h-60 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(42,37,33,0.25)]"
            >
              <div className="w-14 h-14 rounded-[14px] bg-[color-mix(in_oklab,var(--accent)_12%,var(--paper))] grid place-items-center mb-5 text-accent">
                <Icon name={item.icon} size={28} />
              </div>
              <h3 className="font-bold text-2xl tracking-[-0.014em] mb-2.5 text-ink">{item.title}</h3>
              <p className="text-base leading-[1.55] text-muted flex-1 text-pretty">{item.desc}</p>
              <span className="absolute top-8 right-8 text-accent transition-transform duration-200 group-hover:translate-x-1">
                <Icon name="arrow" size={18} />
              </span>
            </Link>
          ))}
        </div>

        {/* Match banner */}
        <div className="relative overflow-hidden bg-ink text-paper rounded-[22px] px-12 py-11 max-md:px-7 max-md:py-8 flex flex-col items-start gap-2">
          <div
            className="absolute -right-20 -top-20 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle at center, color-mix(in oklab, var(--accent) 60%, transparent), transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="text-xs font-semibold tracking-[0.12em] uppercase text-accent">Annual signature event</div>
          <div className="font-bold text-[clamp(28px,3.2vw,40px)] leading-[1.1] tracking-[-0.018em] text-paper">
            Jack Murray Memorial Match
          </div>
          <div className="text-[17px] text-paper/80 max-w-135 text-pretty">
            A day on the pitch in Banbridge, in Jack&apos;s memory — and in support of everyone walking the same road.
          </div>
        </div>
      </div>
    </section>
  );
}
