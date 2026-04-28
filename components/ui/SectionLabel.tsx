interface SectionLabelProps {
  children: string;
  center?: boolean;
}

export default function SectionLabel({
  children,
  center = false,
}: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-2 mb-4 ${center ? "justify-center" : ""}`}
    >
      <div className="w-8 h-[2px] gradient-blue-bg flex-shrink-0" />
      <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0B5CFF]">
        {children}
      </span>
    </div>
  );
}
