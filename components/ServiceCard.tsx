interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  tags?: string[];
  light?: boolean;
}

export default function ServiceCard({
  icon,
  title,
  description,
  tags,
  light = false,
}: ServiceCardProps) {
  return (
    <div
      className={`flex flex-col gap-4 p-8 border transition-colors ${
        light
          ? "border-[#1E1E1E] bg-[#111] hover:bg-[#161616]"
          : "border-[#E0E0E0] bg-white hover:border-[#0A0A0A]"
      }`}
    >
      <span className="text-2xl">{icon}</span>
      <h3
        className={`text-lg font-semibold leading-snug ${
          light ? "text-white" : "text-[#0A0A0A]"
        }`}
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        {title}
      </h3>
      <p
        className={`text-sm leading-relaxed ${
          light ? "text-[#9A9A9A]" : "text-[#6B6B6B]"
        }`}
      >
        {description}
      </p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`text-[10px] uppercase tracking-wider px-2 py-1 border ${
                light
                  ? "border-[#333] text-[#9A9A9A]"
                  : "border-[#E0E0E0] text-[#6B6B6B]"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
