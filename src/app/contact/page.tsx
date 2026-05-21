import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const TYPES: Record<string, { title: string; intro: string; email: string; tag: string }> = {
  support: {
    title: "Reach out for support",
    intro: "Whatever you're carrying, you don't have to carry it alone. Tell us a little about what's going on — we'll get back to you as soon as we can.",
    email: "help@thestiginitiative.com",
    tag: "Support",
  },
  volunteer: {
    title: "Volunteer with us",
    intro: "Got time to give? Whether it's an hour a month or a Saturday a year, we'd love to hear from you.",
    email: "hello@thestiginitiative.com",
    tag: "Volunteer",
  },
  fundraise: {
    title: "Fundraise for The Stig Initiative",
    intro: "Running, riding, baking or busking — every fundraiser keeps a Circle running, a Package packed, a Talk in a school.",
    email: "hello@thestiginitiative.com",
    tag: "Fundraise",
  },
  partner: {
    title: "Partner with us",
    intro: "Schools, sports clubs, employers and organisations — let's build something meaningful together for our community.",
    email: "hello@thestiginitiative.com",
    tag: "Partner",
  },
  default: {
    title: "Get in touch",
    intro: "Send us a message and we'll come back to you. Mention what's on your mind and we'll route it to the right person.",
    email: "hello@thestiginitiative.com",
    tag: "General enquiry",
  },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const t = TYPES[type ?? ""] ?? TYPES.default;

  return (
    <>
      <Nav />
      <main className="py-20 max-md:py-14 bg-paper min-h-[70vh]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-18 max-md:gap-10 items-start">

            <div>
              <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-full bg-paper-2 border border-line text-[13px] font-medium text-muted mb-6">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {t.tag}
              </div>
              <h1 className="font-bold text-[clamp(34px,4.6vw,56px)] leading-[1.05] tracking-[-0.022em] mb-5.5 text-balance text-ink">
                {t.title}
              </h1>
              <p className="text-[18.5px] leading-[1.55] text-muted mb-8 text-pretty">{t.intro}</p>
              <div className="inline-flex items-center gap-2.5 px-4 py-3 bg-paper-2 border border-line rounded-xl text-sm text-ink">
                Your message will be sent to&nbsp;<span className="text-accent font-semibold">{t.email}</span>
              </div>
              <div className="mt-8 text-[14.5px] text-muted leading-[1.6] max-w-105">
                <strong className="text-ink block mb-1">If it&apos;s urgent</strong>
                If you or someone you love is in immediate danger, please call{" "}
                <strong className="text-ink">999</strong>, or contact Lifeline on{" "}
                <strong className="text-ink">0808 808 8000</strong>{" "}
                (free, 24/7 across Northern Ireland).
              </div>
            </div>

            <ContactForm type={type ?? "default"} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
