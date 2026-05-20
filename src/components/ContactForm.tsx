"use client";

import { useState } from "react";
import Icon from "./Icon";

interface ContactFormProps {
  email: string;
}

export default function ContactForm({ email }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-paper-2 border border-line rounded-[22px] p-12 text-center shadow-[0_24px_60px_-20px_rgba(42,37,33,0.16)]">
        <div className="w-14 h-14 mx-auto mb-4.5 rounded-2xl bg-[color-mix(in_oklab,var(--accent)_14%,var(--paper))] grid place-items-center text-accent">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-bold text-2xl tracking-[-0.01em] mb-2 text-ink">Message sent</h2>
        <p className="text-muted">We&apos;ll come back to you at the email you provided. Take care.</p>
      </div>
    );
  }

  return (
    <form
      className="bg-paper-2 border border-line rounded-[22px] p-9 max-sm:p-6 shadow-[0_24px_60px_-20px_rgba(42,37,33,0.16)]"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire up to email API using address: email
        console.log("Submitting to", email);
        setSubmitted(true);
      }}
    >
      {[
        { id: "name", label: "Your name", type: "text", placeholder: "What should we call you?", required: true },
        { id: "email", label: "Email", type: "email", placeholder: "you@example.com", required: true },
        { id: "phone", label: "Phone", type: "tel", placeholder: "07…", required: false },
      ].map((field) => (
        <div key={field.id} className="flex flex-col gap-2 mb-4.5">
          <label htmlFor={field.id} className="text-[13px] font-semibold tracking-[0.04em] text-ink">
            {field.label}{" "}
            {field.required
              ? <span className="text-accent">*</span>
              : <span className="text-muted font-normal tracking-normal">(optional)</span>
            }
          </label>
          <input
            id={field.id}
            name={field.id}
            type={field.type}
            required={field.required}
            placeholder={field.placeholder}
            className="font-[inherit] text-[15.5px] bg-paper border-[1.5px] border-line rounded-xl px-4 py-[13px] text-ink transition-colors duration-150 focus:outline-none focus:border-accent"
          />
        </div>
      ))}
      <div className="flex flex-col gap-2 mb-4.5">
        <label htmlFor="message" className="text-[13px] font-semibold tracking-[0.04em] text-ink">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Take your time. Share whatever feels right."
          className="font-[inherit] text-[15.5px] bg-paper border-[1.5px] border-line rounded-xl px-4 py-[13px] text-ink transition-colors duration-150 focus:outline-none focus:border-accent resize-y min-h-35"
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-4 px-5.5 rounded-full font-semibold text-base text-white bg-accent hover:brightness-105 transition-all duration-150 hover:-translate-y-px mt-1.5"
      >
        Send message <Icon name="arrow" size={18} />
      </button>
      <p className="mt-4 text-[13px] text-muted text-center text-pretty">
        By sending, you agree we may contact you at the email or phone above. We&apos;ll never share your details.
      </p>
    </form>
  );
}
