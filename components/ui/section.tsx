import type { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: "surface" | "soft" | "ice" | "navy";
};

const toneClasses = {
  surface: "bg-surface text-text-primary",
  soft: "bg-surface-soft text-text-primary",
  ice: "bg-ice-blue text-text-primary",
  navy: "bg-deep-navy text-white",
};

export function Section({
  className = "",
  tone = "surface",
  ...props
}: SectionProps) {
  return (
    <section
      className={`py-section ${toneClasses[tone]} ${className}`}
      {...props}
    />
  );
}
