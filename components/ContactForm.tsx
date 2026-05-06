"use client";

import { useState, FormEvent } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-white border border-[#E0E0E0] px-4 py-3 text-sm text-[#0A0A0A] placeholder-[#9A9A9A] focus:outline-none focus:border-[#0A0A0A] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs uppercase tracking-wider text-[#6B6B6B]">
            Full Name <span className="text-[#0A0A0A]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs uppercase tracking-wider text-[#6B6B6B]">
            Email Address <span className="text-[#0A0A0A]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-xs uppercase tracking-wider text-[#6B6B6B]">
          Phone Number <span className="text-[#9A9A9A]">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="071 000 0000"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-xs uppercase tracking-wider text-[#6B6B6B]">
          Subject <span className="text-[#0A0A0A]">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          className={inputClass}
          defaultValue=""
        >
          <option value="" disabled>Select a service</option>
          <option value="Drafting Bill of Costs">Drafting Bill of Costs</option>
          <option value="Opposing Bill of Costs">Opposing Bill of Costs</option>
          <option value="High Court Taxation">High Court Taxation</option>
          <option value="Magistrates' Court Taxation">Magistrates&apos; Court Taxation</option>
          <option value="Legal Fee Assessment">Legal Fee Assessment</option>
          <option value="Cost Recovery & Negotiations">Cost Recovery &amp; Negotiations</option>
          <option value="General Enquiry">General Enquiry</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs uppercase tracking-wider text-[#6B6B6B]">
          Message <span className="text-[#0A0A0A]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Please describe your matter briefly..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending" || status === "success"}
        className="bg-[#0A0A0A] text-white text-sm uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#333] disabled:opacity-50 transition-colors self-start"
      >
        {status === "sending"
          ? "Sending..."
          : status === "success"
          ? "Message Sent"
          : "Send Enquiry"}
      </button>

      {status === "success" && (
        <p className="text-sm text-[#0A0A0A] border border-[#E0E0E0] px-4 py-3 bg-white">
          Thank you. We will be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-700 border border-red-200 px-4 py-3 bg-red-50">
          Something went wrong. Please email us directly at{" "}
          <a href="mailto:mia@mberglundcosts.co.za" className="underline">
            mia@mberglundcosts.co.za
          </a>
          .
        </p>
      )}
    </form>
  );
}
