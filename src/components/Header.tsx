"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { nav } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/35">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 [filter:drop-shadow(0_1px_4px_rgba(0,0,0,0.8))]">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/brand/wilky-logo.png"
            alt="Wilky Productions"
            width={240}
            height={48}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-sm uppercase tracking-wider text-foreground/90 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-border bg-background px-6 py-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 font-display text-sm uppercase tracking-wider text-foreground/80 hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}

      {/* Thin cyan line, brightest at center, fading to transparent at both edges */}
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--accent) 50%, transparent)",
        }}
      />
    </header>
  );
}
