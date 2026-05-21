"use client";

import { useState } from "react";
import Icon from "./Icon";

interface ContactFormProps {
  type: string;
}

export default function ContactForm({ type }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      type,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error ?? "Something went wrong");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-form" style={{ textAlign: "center", padding: 48 }}>
        <div
          style={{
            width: 56,
            height: 56,
            margin: "0 auto 18px",
            borderRadius: 16,
            background: "color-mix(in oklab, var(--accent) 14%, var(--paper))",
            display: "grid",
            placeItems: "center",
            color: "var(--accent)",
          }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12l4 4L19 7" />
          </svg>
        </div>
        <h2
          style={{
            fontFamily: "var(--heading-font)",
            fontWeight: 700,
            fontSize: 26,
            margin: "0 0 8px",
            letterSpacing: "-0.01em",
          }}
        >
          Message sent
        </h2>
        <p style={{ color: "var(--muted)", margin: 0 }}>
          We&apos;ll come back to you at the email you provided. Take care.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name">
          Your name <span className="req">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="What should we call you?"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email">
          Email <span className="req">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
        />
      </div>
      <div className="form-row">
        <label htmlFor="phone">
          Phone <span className="opt">(optional)</span>
        </label>
        <input id="phone" name="phone" type="tel" placeholder="07…" />
      </div>
      <div className="form-row">
        <label htmlFor="message">
          Message <span className="req">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Take your time. Share whatever feels right."
        />
      </div>

      {status === "error" && (
        <p style={{ color: "red", fontSize: 14, margin: "0 0 12px" }}>
          {errorMsg}. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary form-submit"
        style={{ background: "var(--accent)" }}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : <>Send message <Icon name="arrow" size={18} /></>}
      </button>
      <p className="form-foot">
        By sending, you agree we may contact you at the email or phone above.
        We&apos;ll never share your details.
      </p>
    </form>
  );
}
