import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(160deg,#070f18_0%,#111f2e_55%,#0b1620_100%)] text-paper/80 pt-18 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 max-md:gap-8 pb-14 border-b border-paper/10">
          <div>
            <Logo footer />
            <p className="mt-4 max-w-70 text-[14.5px] leading-[1.55] text-paper/60">
              Peer-led suicide prevention and grief support, rooted in Banbridge.
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="text-xs font-bold tracking-[0.12em] uppercase text-paper mb-1.5">Explore</div>
            <Link href="/#about" className="text-[15px] text-paper/70 hover:text-paper transition-colors duration-150">About</Link>
            <Link href="/#services" className="text-[15px] text-paper/70 hover:text-paper transition-colors duration-150">Services</Link>
            <Link href="/#events" className="text-[15px] text-paper/70 hover:text-paper transition-colors duration-150">Events</Link>
            <Link href="/#involved" className="text-[15px] text-paper/70 hover:text-paper transition-colors duration-150">Get Involved</Link>
            <Link href="/#donate" className="text-[15px] text-paper/70 hover:text-paper transition-colors duration-150">Donate</Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="text-xs font-bold tracking-[0.12em] uppercase text-paper mb-1.5">Get in touch</div>
            <Link href="/contact?type=support" className="text-[15px] text-paper/70 hover:text-paper transition-colors duration-150">Support</Link>
            <Link href="/contact?type=volunteer" className="text-[15px] text-paper/70 hover:text-paper transition-colors duration-150">Volunteer</Link>
            <Link href="/contact?type=fundraise" className="text-[15px] text-paper/70 hover:text-paper transition-colors duration-150">Fundraise</Link>
            <Link href="/contact?type=partner" className="text-[15px] text-paper/70 hover:text-paper transition-colors duration-150">Partner</Link>
            <a href="mailto:hello@thestiginitiative.com" className="text-[15px] text-paper/70 hover:text-paper transition-colors duration-150">hello@thestiginitiative.com</a>
            <a href="tel:07526484738" className="text-[15px] text-paper/70 hover:text-paper transition-colors duration-150">07526 484738</a>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="text-xs font-bold tracking-[0.12em] uppercase text-paper mb-1.5">Follow</div>
            <div className="flex gap-2.5 mt-1">
              {[
                { name: "ig", label: "Instagram" },
                { name: "fb", label: "Facebook" },
                { name: "tt", label: "TikTok" },
              ].map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.label}
                  className="w-9.5 h-9.5 rounded-[10px] border border-paper/18 grid place-items-center transition-all duration-150 hover:bg-accent hover:border-accent hover:text-white"
                >
                  <Icon name={s.name} size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between max-sm:flex-col max-sm:gap-2 pt-7 text-[13px] text-paper/50">
          <div>© {new Date().getFullYear()} The Jack Murray Trust Ltd.</div>
          <div>Company Reg. NI741121</div>
        </div>
      </div>
    </footer>
  );
}
