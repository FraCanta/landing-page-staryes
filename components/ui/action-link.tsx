import type { AnchorHTMLAttributes, ReactNode } from "react";

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
};

const variantClasses = {
  primary: "border border-primary bg-primary text-white hover:border-primary-hover hover:bg-primary-hover",
  secondary: "border border-primary bg-transparent text-primary hover:bg-secondary-hover",
};

const sizeClasses = {
  sm: "min-h-11 px-4 text-sm",
  md: "min-h-12 px-6 text-button",
  lg: "min-h-14 px-8 text-button sm:text-lg",
};

export function ActionLink({
  children,
  className = "",
  icon,
  size = "md",
  variant = "primary",
  ...props
}: ActionLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-control font-semibold leading-none transition-colors duration-150 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon ? <span aria-hidden="true" className="inline-flex">{icon}</span> : null}
    </a>
  );
}
