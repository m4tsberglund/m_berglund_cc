import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F8F9FA] border-t border-[#E0E0E0] text-[#6B6B6B] text-sm">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <span
            className="text-[#0A0A0A] text-base font-semibold"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            M Berglund Inc.
          </span>
          <p className="leading-relaxed text-xs">
            Specialist cost consultant &amp; taxation attorneys in the greater
            Pretoria area.
          </p>
          <p className="text-xs">LPC No. 73001</p>
        </div>

        {/* Quick links */}
        <div className="flex flex-col gap-3">
          <p className="text-[#0A0A0A] text-xs uppercase tracking-[0.15em] font-medium">
            Navigation
          </p>
          <ul className="flex flex-col gap-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-[#0A0A0A] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <p className="text-[#0A0A0A] text-xs uppercase tracking-[0.15em] font-medium">
            Contact
          </p>
          <address className="not-italic flex flex-col gap-1.5 text-xs leading-relaxed">
            <span>194 Bancor Avenue</span>
            <span>Park Lane West Building</span>
            <span>Waterkloof Glen, 0181</span>
            <a href="tel:0846045555" className="hover:text-[#0A0A0A] transition-colors mt-1">
              084 604 5555
            </a>
            <a
              href="mailto:mia@mberglundcosts.co.za"
              className="hover:text-[#0A0A0A] transition-colors"
            >
              mia@mberglundcosts.co.za
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-[#E0E0E0] max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-xs">
        <span>© {year} M Berglund Inc. All rights reserved.</span>
        <span>Pretoria, Gauteng</span>
      </div>
    </footer>
  );
}
