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
      <main className="contact-page">
        <div className="container contact-grid">
          <div>
            <div className="contact-eyebrow">
              <span className="dot" />
              {t.tag}
            </div>
            <h1 className="contact-title">{t.title}</h1>
            <p className="contact-intro">{t.intro}</p>
            <div className="contact-route">
              Your message will be sent to&nbsp;<span className="ind">{t.email}</span>
            </div>
            <div className="contact-urgent">
              <strong>If it&apos;s urgent</strong>
              If you or someone you love is in immediate danger, please call{" "}
              <strong style={{ color: "var(--ink)" }}>999</strong>, or contact
              Lifeline on{" "}
              <strong style={{ color: "var(--ink)" }}>0808 808 8000</strong>{" "}
              (free, 24/7 across Northern Ireland).
            </div>
          </div>

          <ContactForm type={type ?? "default"} />
        </div>
      </main>
      <Footer />
    </>
  );
}
