import Link from "next/link";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-25 max-sm:pt-12">
      {/* Background shape */}
      <div className="absolute inset-[-10%] z-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
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
          <path d="M -50 540 C 200 460, 380 620, 600 520 S 900 480, 950 540 L 950 850 L -50 850 Z" fill="var(--accent)" fillOpacity="0.07" />
          <path d="M -50 620 C 220 560, 420 700, 620 600 S 920 580, 950 620 L 950 850 L -50 850 Z" fill="var(--accent)" fillOpacity="0.05" />
        </svg>
      </div>

      <div className="relative z-10 max-w-245 mx-auto px-8 max-sm:px-5.5 text-center">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-paper/80 border border-line text-[13px] text-muted tracking-[0.01em]">
          <span className="w-2 h-2 rounded-full bg-accent" />
          Banbridge, Northern Ireland · Peer-led
        </div>

        <h1 className="font-bold text-[clamp(40px,6.6vw,88px)] leading-[1.02] tracking-[-0.025em] mt-7 mb-5.5 text-balance text-ink">
          You don&apos;t have to{" "}
          <span className="italic text-accent">face this alone.</span>
        </h1>

        <p className="text-[clamp(17px,1.6vw,21px)] leading-[1.55] text-muted max-w-160 mx-auto text-pretty">
          The Stig Initiative is a peer-led suicide prevention and grief support charity, rooted in lived experience and built around the Banbridge community.
        </p>

        <div className="flex gap-3.5 justify-center mt-9 flex-wrap">
          <Link
            href="/contact?type=support"
            className="inline-flex items-center gap-2 px-5.5 py-3.5 rounded-full font-semibold text-[15.5px] text-white bg-accent hover:brightness-105 transition-all duration-150 hover:-translate-y-px"
          >
            Get Support <Icon name="arrow" size={18} />
          </Link>
          <Link
            href="#involved"
            className="inline-flex items-center gap-2 px-5.5 py-3.5 rounded-full font-semibold text-[15.5px] text-ink border border-ink/20 hover:bg-ink/6 transition-all duration-150 hover:-translate-y-px"
          >
            Get Involved
          </Link>
        </div>

        <div className="mt-11 inline-flex items-center gap-4 flex-wrap justify-center text-[14px] text-muted">
          <div>
            <strong className="text-ink">No booking.</strong> No referral. No waiting list.
          </div>
          <span className="w-1 h-1 rounded-full bg-line" />
          <div>
            If you need to talk to someone right now,{" "}
            <Link href="/contact?type=support" className="text-ink border-b border-current pb-px">reach out here</Link>.
          </div>
        </div>
      </div>
    </section>
  );
}
