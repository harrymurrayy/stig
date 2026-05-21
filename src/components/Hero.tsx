import Link from "next/link";
import Icon from "./Icon";
import HeroSlideshow from "./HeroSlideshow";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-20 pb-27.5 max-sm:pt-12 max-sm:pb-20 bg-ink">
      <HeroSlideshow />

      <div className="relative z-10 max-w-245 mx-auto px-8 max-sm:px-5.5 text-center">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-paper/12 border border-paper/25 text-[13px] text-paper/92 tracking-[0.01em] backdrop-blur-[8px]">
          <span className="w-2 h-2 rounded-full bg-accent" />
          Banbridge, Northern Ireland · Peer-led
        </div>

        <h1 className="font-bold text-[clamp(40px,6.6vw,88px)] leading-[1.02] tracking-[-0.025em] mt-7 mb-5.5 text-balance text-paper [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]">
          You don&apos;t have to{" "}
          <span className="italic text-accent [text-shadow:0_2px_24px_rgba(0,0,0,0.4)]">face this alone.</span>
        </h1>

        <p className="text-[clamp(17px,1.6vw,21px)] leading-[1.55] text-paper/92 max-w-160 mx-auto text-pretty [text-shadow:0_1px_18px_rgba(0,0,0,0.45)]">
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
            className="inline-flex items-center gap-2 px-5.5 py-3.5 rounded-full font-semibold text-[15.5px] text-paper border border-paper/50 bg-ink/18 backdrop-blur-[8px] hover:bg-paper/15 hover:border-paper/85 transition-all duration-150 hover:-translate-y-px"
          >
            Get Involved
          </Link>
        </div>

        <div className="mt-11 inline-flex items-center gap-4 flex-wrap justify-center text-[14px] text-paper/78">
          <div>
            <strong className="text-paper">No booking.</strong> No referral. No waiting list.
          </div>
          <span className="w-1 h-1 rounded-full bg-paper/40" />
          <div>
            If you need to talk to someone right now,{" "}
            <Link href="/contact?type=support" className="text-paper border-b border-current pb-px">reach out here</Link>.
          </div>
        </div>
      </div>
    </section>
  );
}
