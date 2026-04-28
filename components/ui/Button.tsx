import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  className?: string;
}

const base =
  "inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-200 px-6 py-3 text-sm cursor-pointer";

const variants: Record<string, string> = {
  primary:
    "gradient-blue-bg text-white hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]",
  outline:
    "border border-white/20 text-white hover:border-[#0B5CFF]/60 hover:bg-[#0B5CFF]/5",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("https://wa");
    return (
      <a
        href={href}
        className={cls}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return <button className={cls}>{children}</button>;
}
