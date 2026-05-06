import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

const featuredServices = [
  {
    icon: "⚖️",
    title: "Bills of Costs",
    description:
      "Accurate drafting and opposing of party & party, attorney & client, and attorney & own client bills of costs.",
  },
  {
    icon: "🏛️",
    title: "Court Taxations",
    description:
      "Representation at taxation proceedings before the Taxing Master in the High Court and Magistrates' Court.",
  },
  {
    icon: "🤝",
    title: "Cost Recovery",
    description:
      "Strategic negotiations and fee assessments to recover costs effectively before or instead of formal taxation.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[92vh] flex flex-col justify-center px-6 max-w-6xl mx-auto py-24">
        <div className="max-w-3xl flex flex-col gap-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6B6B6B]">
            M Berglund Inc. — Pretoria, Gauteng
          </p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-[#0A0A0A]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Precise.
            <br />
            Swift.
            <br />
            Professional.
          </h1>
          <p className="text-lg md:text-xl text-[#6B6B6B] max-w-xl leading-relaxed">
            Specialist cost consultant and taxation attorneys serving attorneys,
            firms, and clients across the greater Pretoria area.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/services"
              className="bg-[#1D4ED8] text-white text-sm uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#1e40af] transition-colors"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="border border-[#0A0A0A] text-[#0A0A0A] text-sm uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#0A0A0A] hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Dividing line */}
        <div className="mt-20 border-t border-[#E0E0E0] pt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { stat: "10 Years", label: "of Practice" },
            { stat: "High Court", label: "& Magistrates' Court" },
            { stat: "Party & Party", label: "Attorney & Client · Own Client" },
          ].map(({ stat, label }) => (
            <div key={stat} className="flex flex-col gap-1">
              <span
                className="text-2xl font-semibold text-[#0A0A0A]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {stat}
              </span>
              <span className="text-sm text-[#6B6B6B]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About snippet */}
      <section className="bg-[#F8F9FA] border-y border-[#E0E0E0]">
        <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B]">
              About the Firm
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold leading-tight text-[#0A0A0A]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              A Dedicated Specialist in Legal Costs
            </h2>
            <p className="text-base text-[#6B6B6B] leading-relaxed">
              M Berglund Inc., led by Mia Poggenpoel, has been practising as a
              cost consultant and taxation specialist for over a decade. Our
              singular focus on legal costs means we bring a depth of expertise
              that generalist practitioners simply cannot match.
            </p>
            <p className="text-base text-[#6B6B6B] leading-relaxed">
              We act for both attorneys of record and their clients, always
              striving to achieve accurate bills and maximum cost recovery in the
              most efficient manner possible.
            </p>
            <Link
              href="/about"
              className="text-sm text-[#1D4ED8] border-b border-[#1D4ED8] pb-0.5 self-start hover:opacity-70 transition-opacity mt-2"
            >
              Learn more about us →
            </Link>
          </div>
          <blockquote className="border-l-2 border-[#1D4ED8] pl-8 py-2">
            <p
              className="text-xl md:text-2xl text-[#0A0A0A] leading-relaxed italic"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              &ldquo;We ultimately strive to promote the interests of both the
              attorney of record and the client.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-[#6B6B6B] not-italic">
              — Mia Poggenpoel, Director
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Services teaser */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B]">
              What We Do
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold text-[#0A0A0A]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Core Services
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors"
          >
            All services →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E0E0E0]">
          {featuredServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#E0E0E0] bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <h2
              className="text-2xl md:text-3xl font-semibold text-[#0A0A0A]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Ready to recover your costs?
            </h2>
            <p className="text-[#6B6B6B] text-base">
              Contact us for a swift, professional assessment of your matter.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-[#1D4ED8] text-white text-sm uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#1e40af] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
