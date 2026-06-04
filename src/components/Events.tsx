import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

export default function Events() {
  return (
    <section id="events" className="py-5 max-md:py-1 bg-paper-2">
      <div className="container">
        <div className="max-w-180 mx-auto text-center mb-14">
          <div className="inline-flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-4.5">
            <span className="w-7 h-0.5 rounded-full bg-accent" />
            Upcoming events
          </div>
          <h2 className="font-bold text-[clamp(30px,3.6vw,48px)] leading-[1.08] tracking-[-0.02em] mb-4.5 text-balance text-ink">
            Run with us. Play with us. Show up.
          </h2>
          <p className="text-lg leading-[1.55] text-muted text-pretty">
            From the pitch to the marathon, there are plenty of ways to be part of the Stig community and help us raise vital funds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {/* Jack Murray Memorial Match 2026 */}
          <div className="relative bg-paper border border-line rounded-[22px] overflow-hidden min-h-80 flex flex-col justify-end isolate">
            <Image
              src="/new/270e51e6-7a56-4408-a76a-9a255efc75c4.jpeg"
              alt="Stig FC community"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{ background: "linear-gradient(180deg, transparent 20%, rgba(28,22,18,0.82) 100%)" }}
              aria-hidden
            />
            <div className="relative z-20 p-8">
              <div className="text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-2">
                November 2026
              </div>
              <h3 className="font-bold text-[26px] leading-[1.1] tracking-[-0.018em] mb-2 text-paper">
                Jack Murray Memorial Match 2026
              </h3>
              <p className="text-[15px] leading-[1.55] text-paper/80 mb-5 text-pretty max-w-[460px]">
                The Jack Murray Memorial Match will take place in November 2026. We would love to hear from any business who would like to sponsor this year's event.
              </p>
              <Link
                href="/contact?type=sponsor"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-[14.5px] text-white bg-accent hover:brightness-105 transition-all duration-150 hover:-translate-y-px"
              >
                Become a sponsor <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-5">
            {/* Join Stig FC */}
            <Link
              href="/contact?type=stig-fc"
              className="relative bg-paper border border-line rounded-[22px] p-8 flex flex-col justify-between min-h-36 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(42,37,33,0.25)]"
            >
              <div>
                <div className="text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-2">
                  Register your interest
                </div>
                <h3 className="font-bold text-[24px] tracking-[-0.016em] mb-2 text-ink">
                  Join Stig FC
                </h3>
                <p className="text-[15px] leading-[1.55] text-muted text-pretty">
                  Want to pull on the shirt? Register your interest and we'll be in touch.
                </p>
              </div>
              <div className="mt-4 inline-flex items-center gap-1.5 text-accent font-semibold text-[14.5px]">
                Register interest <Icon name="arrow" size={16} />
              </div>
            </Link>

            {/* Dublin Marathon 2027 */}
            <div className="relative bg-paper border border-line rounded-[22px] overflow-hidden min-h-36 flex flex-col justify-end isolate">
              <Image
                src="/new/e1dcca69-0105-487d-a4c2-df3caa0fbf88.jpeg"
                alt="Run for Hope, For Jack"
                fill
                className="object-cover object-[center_25%]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{ background: "linear-gradient(180deg, transparent 10%, rgba(28,22,18,0.85) 100%)" }}
                aria-hidden
              />
              <div className="relative z-20 p-7 flex items-end justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-1.5">2027</div>
                  <h3 className="font-bold text-[22px] leading-[1.1] tracking-[-0.016em] mb-1 text-paper">
                    Run Dublin Marathon
                  </h3>
                  <p className="text-[14px] text-paper/75">Register your interest below.</p>
                </div>
                <Link
                  href="/contact?type=marathon"
                  className="flex-none inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full font-semibold text-[14px] text-white bg-accent hover:brightness-105 transition-all duration-150 hover:-translate-y-px whitespace-nowrap"
                >
                  Register <Icon name="arrow" size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
