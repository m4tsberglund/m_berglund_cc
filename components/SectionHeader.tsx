interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-3 max-w-2xl">
      {label && (
        <p
          className={`text-xs uppercase tracking-[0.2em] font-medium ${
            light ? "text-[#9A9A9A]" : "text-[#6B6B6B]"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-semibold leading-tight ${
          light ? "text-white" : "text-[#0A0A0A]"
        }`}
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base leading-relaxed mt-1 ${
            light ? "text-[#9A9A9A]" : "text-[#6B6B6B]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
