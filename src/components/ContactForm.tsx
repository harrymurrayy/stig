"use client";

import { useState } from "react";
import Icon from "./Icon";

interface ContactFormProps {
  type: string;
}

export default function ContactForm({ type }: ContactFormProps) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
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
      <div className="bg-paper-2 border border-line rounded-[22px] p-12 text-center shadow-[0_24px_60px_-20px_rgba(42,37,33,0.16)]">
        <div className="w-14 h-14 mx-auto mb-4.5 rounded-2xl bg-[color-mix(in_oklab,var(--accent)_14%,var(--paper))] grid place-items-center text-accent">
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
        <h2 className="font-bold text-2xl tracking-[-0.01em] mb-2 text-ink">
          Message sent
        </h2>
        <p className="text-muted">
          We&apos;ll come back to you at the email you provided. Take care.
        </p>
      </div>
    );
  }

  return (
    <form
      className="bg-paper-2 border border-line rounded-[22px] p-9 max-sm:p-6 shadow-[0_24px_60px_-20px_rgba(42,37,33,0.16)]"
      onSubmit={handleSubmit}
    >
      {[
        {
          id: "name",
          label: "Your name",
          type: "text",
          placeholder: "What should we call you?",
          required: true,
        },
        {
          id: "email",
          label: "Email",
          type: "email",
          placeholder: "you@example.com",
          required: true,
        },
        {
          id: "phone",
          label: "Phone",
          type: "tel",
          placeholder: "07123 456789",
          required: false,
        },
      ].map((field) => (
        <div key={field.id} className="flex flex-col gap-2 mb-4.5">
          <label
            htmlFor={field.id}
            className="text-[13px] font-semibold tracking-[0.04em] text-ink"
          >
            {field.label}{" "}
            {field.required ? (
              <span className="text-accent">*</span>
            ) : (
              <span className="text-muted font-normal tracking-normal">
                (optional)
              </span>
            )}
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
        <label
          htmlFor="message"
          className="text-[13px] font-semibold tracking-[0.04em] text-ink"
        >
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

      {status === "error" && (
        <p style={{ color: "red", fontSize: 14, margin: "0 0 12px" }}>
          {errorMsg}. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-4 px-5.5 rounded-full font-semibold text-base text-white bg-accent hover:brightness-105 transition-all duration-150 hover:-translate-y-px mt-1.5"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          "Sending…"
        ) : (
          <>
            Send message <Icon name="arrow" size={18} />
          </>
        )}
      </button>
      <p className="mt-4 text-[13px] text-muted text-center text-pretty">
        By sending, you agree we may contact you at the email or phone above.
        We&apos;ll never share your details.
      </p>
    </form>
  );
}
