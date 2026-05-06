import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | M Berglund Inc.",
  description:
    "Contact M Berglund Inc. for specialist cost consulting and taxation services in Pretoria. Call 084 604 5555 or email mia@mberglundcosts.co.za.",
};

const contactDetails = [
  {
    label: "Phone",
    value: "084 604 5555",
    href: "tel:0846045555",
  },
  {
    label: "Email",
    value: "mia@mberglundcosts.co.za",
    href: "mailto:mia@mberglundcosts.co.za",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-[#E0E0E0] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-4">
            Get in Touch
          </p>
          <h1
            className="text-4xl md:text-5xl font-semibold text-[#0A0A0A] max-w-2xl leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-5 gap-16">
        {/* Left: contact info */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B]">
              Office Address
            </p>
            <address className="not-italic text-[#0A0A0A] leading-relaxed text-sm">
              194 Bancor Avenue
              <br />
              Park Lane West Building
              <br />
              Waterkloof Glen
              <br />
              Pretoria, 0181
            </address>
          </div>

          <div className="flex flex-col gap-5">
            {contactDetails.map(({ label, value, href }) => (
              <div key={label} className="flex flex-col gap-1">
                <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B]">
                  {label}
                </p>
                <a
                  href={href}
                  className="text-[#0A0A0A] hover:text-[#1D4ED8] transition-colors text-sm"
                >
                  {value}
                </a>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B]">
              Office Hours
            </p>
            <div className="flex flex-col gap-1 text-sm text-[#0A0A0A]">
              <div className="flex justify-between gap-8">
                <span>Monday – Friday</span>
                <span className="text-[#6B6B6B]">08:00 – 17:00</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>Saturday</span>
                <span className="text-[#6B6B6B]">By appointment</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>Sunday</span>
                <span className="text-[#6B6B6B]">Closed</span>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E0E0E0] pt-6 text-xs text-[#6B6B6B] leading-relaxed">
            <p>
              <strong className="text-[#0A0A0A]">LPC No. 73001</strong>
              <br />
              Registered with the Legal Practice Council of South Africa.
            </p>
          </div>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2
              className="text-2xl font-semibold text-[#0A0A0A]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Send an Enquiry
            </h2>
            <p className="text-sm text-[#6B6B6B]">
              We aim to respond to all enquiries within one business day.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Google Maps */}
      <section className="border-t border-[#E0E0E0]">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B]">
            Find Us
          </p>
          <iframe
            src="https://maps.google.com/maps?q=-25.7865,28.2819&z=16&output=embed"
            className="w-full h-80 border border-[#E0E0E0]"
            loading="lazy"
            title="M Berglund Inc. — 194 Bancor Avenue, Waterkloof Glen, Pretoria"
          />
        </div>
      </section>
    </>
  );
}
