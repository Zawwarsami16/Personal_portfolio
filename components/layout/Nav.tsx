"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
          scrolled
            ? "bg-[var(--color-bg)]/70 backdrop-blur-xl border-b border-[var(--color-line)]"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-12">
          <Logo />

          <nav className="hidden items-center gap-10 md:flex">
            {site.nav.map((item) => {
              const href: string = item.href;
              const active =
                pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative font-mono text-[11px] tracking-[0.3em] uppercase"
                  data-cursor="hover"
                >
                  <span
                    className={cn(
                      "transition-colors",
                      active
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-fg-dim)] group-hover:text-[var(--color-fg)]",
                    )}
                  >
                    {item.label}
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-px w-full origin-left bg-[var(--color-accent)]"
                    initial={{ scaleX: active ? 1 : 0 }}
                    animate={{ scaleX: active ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Open command palette"
              data-cursor="hover"
              onClick={() => {
                window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
              }}
              className="hidden h-9 items-center gap-2 rounded-md border border-[var(--color-line)] bg-[var(--color-surface)]/60 px-3 font-mono text-[10px] tracking-[0.25em] text-[var(--color-fg-dim)] uppercase backdrop-blur-sm transition-colors hover:border-[var(--color-accent)]/60 hover:text-[var(--color-accent)] lg:inline-flex"
            >
              <span>Search</span>
              <kbd className="rounded border border-[var(--color-line)] bg-[var(--color-bg)] px-1.5 py-0.5 text-[9px]">/</kbd>
            </button>
            <Button href="/contact" variant="primary" className="hidden md:inline-flex">
              Let&apos;s Connect
            </Button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              data-cursor="hover"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-fg)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] md:h-11 md:w-11"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <MobileMenu pathname={pathname} onClose={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

function MobileMenu({ pathname, onClose }: { pathname: string; onClose: () => void }) {
  return (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-30 bg-[var(--color-bg)]/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ delay: 0.05, duration: 0.5 }}
        className="mx-auto flex h-full max-w-[1440px] flex-col justify-center gap-6 px-6 lg:px-12"
        onClick={(e) => e.stopPropagation()}
      >
        {site.nav.map((item, i) => {
          const href: string = item.href;
          const active = pathname === href || (href !== "/" && pathname.startsWith(href));
          return (
            <motion.div
              key={item.href}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <Link
                href={item.href}
                onClick={onClose}
                className={cn(
                  "block font-serif text-6xl tracking-tight md:text-8xl",
                  active ? "text-[var(--color-accent)]" : "text-[var(--color-fg)]",
                )}
              >
                <em className="not-italic">{item.label}</em>
              </Link>
            </motion.div>
          );
        })}
        <div className="mt-12 flex items-center gap-6 font-mono text-[11px] tracking-[0.3em] text-[var(--color-muted)] uppercase">
          <a href={site.socials.github} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)]">
            GitHub
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)]">
            LinkedIn
          </a>
          <a href={site.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)]">
            Twitter
          </a>
        </div>
      </motion.nav>
    </motion.div>
  );
}
