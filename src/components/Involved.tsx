import Link from "next/link";
import Icon from "./Icon";
import MatchGallery from "./MatchGallery";

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
            </Link>
          ))}
        </div>

        {/* Match gallery — image slideshow with overlaid content */}
        <MatchGallery />

        {/* Match video card */}
        <div className="mt-5 grid grid-cols-[320px_1fr] max-md:grid-cols-1 gap-7 items-center bg-paper border border-line rounded-[22px] p-5 shadow-[0_18px_40px_-28px_rgba(28,43,58,0.25)]">
          <div className="py-3.5 px-4.5 max-md:pb-0">
            <div className="text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-2.5">
              Watch · Jack&apos;s story
            </div>
            <h3 className="font-bold text-[28px] leading-[1.1] tracking-[-0.02em] mb-2.5 text-ink text-balance">
              From the pitch, with love.
            </h3>
            <p className="text-[15.5px] leading-[1.55] text-muted text-pretty">
              A short film about Jack, the match, and the community that keeps showing up.
            </p>
          </div>
          <div className="relative aspect-video rounded-[18px] overflow-hidden bg-ink">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Flynne.murray.5074%2Fvideos%2F1840230503259758%2F%3Fidorvanity%3D1106544077850395&show_text=false&width=560&t=0"
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              title="Jack Murray Memorial Match video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
