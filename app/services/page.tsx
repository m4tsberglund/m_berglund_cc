import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Services | M Berglund Inc.",
  description:
    "Full-service legal cost consulting: drafting and opposing bills of costs, High Court and Magistrates' Court taxations, fee assessments, and cost recovery.",
};

const services = [
  {
    icon: "📋",
    title: "Drafting Bills of Costs",
    description:
      "We prepare accurate, comprehensive bills of costs in accordance with the tariffs and rules of court applicable to each matter. Whether the order is party and party, attorney and client, or attorney and own client, we ensure every item is correctly claimed and properly supported.",
    tags: ["Party & Party", "Attorney & Client", "Own Client"],
  },
  {
    icon: "🔍",
    title: "Opposing Bills of Costs",
    description:
      "Where costs have been awarded against your client, we review and oppose inflated or incorrectly claimed items in the opposing party's bill of costs. Our detailed knowledge of the applicable tariffs allows us to identify overcharges and protect your client's position effectively.",
    tags: ["Party & Party", "Attorney & Client", "Own Client"],
  },
  {
    icon: "🏛️",
    title: "High Court Taxations",
    description:
      "We represent attorneys and their clients at formal taxation proceedings before the Taxing Master in the High Court. We attend all taxation hearings, present argument on disputed items, and ensure the bill is taxed to its proper value.",
    tags: ["High Court", "Taxing Master"],
  },
  {
    icon: "⚖️",
    title: "Magistrates' Court Taxations",
    description:
      "We handle taxation proceedings in the Magistrates' Court with the same rigour applied in the High Court. Our familiarity with the Magistrates' Court tariff ensures all allowable costs are claimed and defended appropriately.",
    tags: ["Magistrates' Court", "Tariff A & B"],
  },
  {
    icon: "📊",
    title: "Legal Fee Assessments",
    description:
      "We provide independent assessments of legal fees for reasonableness and compliance — useful for attorneys reviewing their own bills before delivery, or clients seeking clarity on fees charged. We also assist in resolving fee disputes between attorney and client.",
    tags: ["Fee Review", "Dispute Resolution"],
  },
  {
    icon: "🤝",
    title: "Cost Recovery & Negotiations",
    description:
      "Formal taxation proceedings are not always the most efficient route to recovery. We engage directly with opposing parties to negotiate and settle cost disputes, achieving favourable outcomes through strategic engagement before incurring the time and cost of a taxation.",
    tags: ["Negotiations", "Settlement", "Cost Recovery"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-[#E0E0E0] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-4">
            What We Do
          </p>
          <h1
            className="text-4xl md:text-5xl font-semibold text-[#0A0A0A] max-w-2xl leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Our Services
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-[#E0E0E0]">
        <div className="max-w-2xl">
          <SectionHeader
            title="Specialist Legal Cost Consulting"
            subtitle="M Berglund Inc. offers a comprehensive range of cost consulting services to attorneys and their clients across Pretoria and the greater Gauteng region. Our exclusive focus on legal costs means every service we provide is underpinned by specialist expertise."
          />
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E0E0E0]">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* Coverage note */}
      <section className="bg-[#F8F9FA] border-y border-[#E0E0E0]">
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B]">
              Coverage Area
            </p>
            <h2
              className="text-2xl font-semibold text-[#0A0A0A]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Serving the Greater Pretoria Region
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed text-sm">
              Our practice is based in Waterkloof Glen, Pretoria, and we
              regularly appear in courts and attend taxations throughout the
              Gauteng Province. If you are unsure whether we can assist with
              your matter, contact us — we are happy to discuss your
              requirements.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3 border-l border-[#E0E0E0] pl-10">
            {["Pretoria High Court", "Gauteng Division", "Magistrates' Courts, Gauteng"].map((court) => (
              <div key={court} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                <span className="text-sm text-[#6B6B6B]">{court}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-[#6B6B6B] text-base">
          Have a matter you would like to discuss?
        </p>
        <Link
          href="/contact"
          className="bg-[#1D4ED8] text-white text-sm uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#1e40af] transition-colors"
        >
          Send an Enquiry
        </Link>
      </section>
    </>
  );
}
