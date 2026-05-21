import { Resend } from "resend";
import { NextRequest } from "next/server";

const SUPPORT_TYPES = ["support"];

function destinationEmail(type: string): string {
  return SUPPORT_TYPES.includes(type)
    ? "help@thestiginitiative.com"
    : "hello@thestiginitiative.com";
}

function subjectLine(type: string, name: string): string {
  const labels: Record<string, string> = {
    support: "Support enquiry",
    volunteer: "Volunteer enquiry",
    fundraise: "Fundraising enquiry",
    partner: "Partnership enquiry",
  };
  return `${labels[type] ?? "Contact form"} from ${name}`;
}

export async function POST(request: NextRequest) {
  const { name, email, phone, message, type } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const to = destinationEmail(type ?? "general");
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "The Stig Foundation <noreply@thestiginitiative.com>",
    to,
    replyTo: email,
    subject: subjectLine(type ?? "general", name),
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Type: ${type ?? "general"}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
