import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About | M Berglund Inc.",
  description:
    "Learn about Mia Poggenpoel and M Berglund Inc., specialist cost consultants and taxation attorneys based in Pretoria, Gauteng.",
};

const values = [
  {
    title: "Accuracy",
    description:
      "Every bill of costs is prepared with meticulous attention to detail, ensuring compliance with the rules of court and professional standards.",
  },
  {
    title: "Speed",
    description:
      "We understand the urgency of cost recovery. Our streamlined processes ensure swift turnaround without compromising quality.",
  },
  {
    title: "Professionalism",
    description:
      "With over a decade of specialist experience, we conduct all matters with the highest degree of professional integrity.",
  },
  {
    title: "Client Focus",
    description:
      "We act for both attorneys of record and their clients, tailoring our approach to achieve the best possible outcome for each matter.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-[#E0E0E0] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-4">
            Who We Are
          </p>
          <h1
            className="text-4xl md:text-5xl font-semibold text-[#0A0A0A] max-w-2xl leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            About M Berglund Inc.
          </h1>
        </div>
      </section>

      {/* Profile */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeader
            label="Director"
            title="Mia Poggenpoel"
            subtitle="Cost Consultant & Taxation Specialist"
          />
          <div className="flex flex-col gap-4 text-base text-[#6B6B6B] leading-relaxed">
            <p>
              Mia Poggenpoel is the founder and director of M Berglund Inc., a
              boutique practice dedicated exclusively to legal cost consulting
              and taxation. With more than ten years of specialist experience,
              Mia has developed an authoritative command of the rules governing
              bills of costs and taxation proceedings in the High Court.
            </p>
            <p>
              Her practice is built on a thorough understanding of the Rules of
              Court relating to cost orders — including party and party,
              attorney and client, and attorney and own client — and the
              procedural requirements before the Taxing Master.
            </p>
            <p>
              Mia is registered with the Legal Practice Council (LPC No. 73001)
              and practises from Waterkloof Glen, Pretoria, serving clients
              across the greater Gauteng region.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#E0E0E0]">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-1">LPC Number</p>
              <p className="font-semibold text-[#0A0A0A]">73001</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-1">Years of Practice</p>
              <p className="font-semibold text-[#0A0A0A]">10+</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-1">Location</p>
              <p className="font-semibold text-[#0A0A0A]">Pretoria, Gauteng</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-1">Jurisdictions</p>
              <p className="font-semibold text-[#0A0A0A]">High Court</p>
            </div>
          </div>
        </div>

        {/* Right column: photo, mission, address */}
        <div className="flex flex-col gap-8">
          <div className="w-1/2 mx-auto">
            <Image
              src="https://www.attorneys.co.za/ImageUploads/M-Berglund-Inc-Pretoria-Pic1-ab05ec.jpg"
              alt="M Berglund Inc. — Mia Poggenpoel, Cost Consultant"
              width={480}
              height={600}
              className="w-full h-auto"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>

          <div className="border-l-4 border-[#1D4ED8] bg-[#EFF6FF] p-6 flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#1D4ED8]">
              Our Mission
            </p>
            <blockquote
              className="text-xl text-[#0A0A0A] leading-relaxed italic"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              &ldquo;We ultimately strive to promote the interests of both the
              attorney of record and the client — delivering accurate bills of
              cost swiftly and resolving cost disputes with conviction.&rdquo;
            </blockquote>
          </div>

          <div className="border border-[#E0E0E0] p-5 flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B]">
              Office Address
            </p>
            <address className="not-italic text-[#0A0A0A] leading-relaxed">
              194 Bancor Avenue
              <br />
              Park Lane West Building
              <br />
              Waterkloof Glen
              <br />
              Pretoria, 0181
            </address>
            <div className="flex flex-col gap-1 text-sm text-[#6B6B6B] pt-2 border-t border-[#E0E0E0]">
              <a href="tel:0846045555" className="hover:text-[#0A0A0A] transition-colors">
                084 604 5555
              </a>
              <a href="mailto:mia@mberglundcosts.co.za" className="hover:text-[#0A0A0A] transition-colors">
                mia@mberglundcosts.co.za
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F8F9FA] border-y border-[#E0E0E0]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <SectionHeader
            label="Our Values"
            title="What Guides Our Practice"
            subtitle="Every matter we handle is informed by four core principles."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E0E0E0] mt-12">
            {values.map(({ title, description }) => (
              <div key={title} className="bg-white p-8 flex flex-col gap-4">
                <h3
                  className="text-lg font-semibold text-[#0A0A0A]"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-[#6B6B6B] text-base">
          Ready to discuss your matter?
        </p>
        <Link
          href="/contact"
          className="bg-[#1D4ED8] text-white text-sm uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#1e40af] transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </>
  );
}
