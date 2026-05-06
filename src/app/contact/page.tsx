import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const TYPES: Record<string, { title: string; intro: string; email: string; tag: string }> = {
  support: {
    title: "Reach out for support",
    intro: "Whatever you're carrying, you don't have to carry it alone. Tell us a little about what's going on — we'll get back to you as soon as we can.",
    email: "help@stiginitiative.org",
    tag: "Support",
  },
  volunteer: {
    title: "Volunteer with us",
    intro: "Got time to give? Whether it's an hour a month or a Saturday a year, we'd love to hear from you.",
    email: "volunteer@stiginitiative.org",
    tag: "Volunteer",
  },
  fundraise: {
    title: "Fundraise for The Stig Initiative",
    intro: "Running, riding, baking or busking — every fundraiser keeps a Circle running, a Package packed, a Talk in a school.",
    email: "fundraise@stiginitiative.org",
    tag: "Fundraise",
  },
  partner: {
    title: "Partner with us",
    intro: "Schools, sports clubs, employers and organisations — let's build something meaningful together for our community.",
    email: "partners@stiginitiative.org",
    tag: "Partner",
  },
  default: {
    title: "Get in touch",
    intro: "Send us a message and we'll come back to you. Mention what's on your mind and we'll route it to the right person.",
    email: "hello@stiginitiative.org",
    tag: "General",
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
              Routing to{" "}
              <strong style={{ marginLeft: 4, color: "var(--ink)" }}>
                {t.tag}
              </strong>
            </div>
            <h1 className="contact-title">{t.title}</h1>
            <p className="contact-intro">{t.intro}</p>
            <div className="contact-route">
              Goes to&nbsp;<span className="ind">{t.email}</span>
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

          <ContactForm email={t.email} />
        </div>
      </main>
      <Footer />
    </>
  );
}
