import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
};

const variantClasses = {
  primary:
    "border border-primary bg-primary text-white hover:border-primary-hover hover:bg-primary-hover",
  secondary:
    "border border-primary bg-transparent text-primary hover:bg-secondary-hover",
};

const sizeClasses = {
  sm: "min-h-11 px-4 text-sm",
  md: "min-h-12 px-6 text-button",
  lg: "min-h-14 px-8 text-button sm:text-lg",
};

export function Button({
  children,
  className = "",
  icon,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-control font-semibold leading-none transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      type={type}
      {...props}
    >
      <span>{children}</span>
      {icon ? <span aria-hidden="true" className="inline-flex">{icon}</span> : null}
    </button>
  );
}
