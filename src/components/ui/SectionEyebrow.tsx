type SectionEyebrowProps = {
  children: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionEyebrow({
  children,
  align = "left",
  className = "",
}: SectionEyebrowProps) {
  const layout = align === "center" ? "inline-flex justify-center" : "flex";

  return (
    <div
      className={`${layout} items-center gap-3 text-xs font-semibold tracking-[0.12em] uppercase text-muted ${className}`}
    >
      <span className="w-7 h-0.5 rounded-full bg-accent" />
      {children}
    </div>
  );
}
