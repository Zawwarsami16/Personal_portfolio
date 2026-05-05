"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { Magnetic } from "./MagneticLink";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "outline";

type Common = {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode | false;
  className?: string;
};

type AsLink = Common & {
  href: string;
  external?: boolean;
};

type AsButton = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof Common> & {
    href?: undefined;
  };

type Props = AsLink | AsButton;

const baseClasses =
  "group/btn relative inline-flex items-center gap-3 px-7 py-4 font-mono text-[11px] tracking-[0.3em] uppercase select-none transition-colors";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-[var(--color-accent-bright)]",
  ghost: "text-[var(--color-fg)] hover:text-[var(--color-accent)]",
  outline:
    "border border-[var(--color-line)] text-[var(--color-fg)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
};

function Inner({ children, icon }: { children: ReactNode; icon: ReactNode | false | undefined }) {
  return (
    <>
      <span className="relative z-10">{children}</span>
      {icon !== false && (
        <motion.span
          aria-hidden
          className="relative z-10 inline-flex"
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
        >
          {icon ?? <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />}
        </motion.span>
      )}
    </>
  );
}

export function Button(props: Props) {
  const { children, variant = "primary", icon, className } = props;
  const cls = cn(baseClasses, variantClasses[variant], className);

  if ("href" in props && props.href) {
    const isExternal = props.external || /^https?:|^mailto:|^tel:/.test(props.href);
    if (isExternal) {
      return (
        <Magnetic strength={0.18}>
          <a
            href={props.href}
            target={props.href.startsWith("http") ? "_blank" : undefined}
            rel={props.href.startsWith("http") ? "noreferrer" : undefined}
            className={cls}
            data-cursor="hover"
          >
            <Inner icon={icon}>{children}</Inner>
          </a>
        </Magnetic>
      );
    }
    return (
      <Magnetic strength={0.18}>
        <Link href={props.href} className={cls} data-cursor="hover">
          <Inner icon={icon}>{children}</Inner>
        </Link>
      </Magnetic>
    );
  }

  // Button case
  const { type = "button", onClick, disabled, "aria-label": ariaLabel } =
    props as AsButton;
  return (
    <Magnetic strength={0.18}>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
        className={cls}
        data-cursor="hover"
      >
        <Inner icon={icon}>{children}</Inner>
      </button>
    </Magnetic>
  );
}
