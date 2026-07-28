"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, services, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const createServices = services.filter((s) => s.group === "Create");
  const growServices = services.filter((s) => s.group === "Grow");

  return (
    <header className="sticky top-0 z-50 border-b border-line-dark/60 bg-ink/95 text-paper backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className="font-script text-2xl leading-none text-paper"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 font-display text-sm tracking-wider text-paper/80 uppercase transition-colors hover:text-signal"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <span
                className={`text-xs transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 w-[560px] -translate-x-1/2 pt-4">
                <div className="grid grid-cols-2 gap-6 rounded-2xl border border-line-dark bg-ink p-6 shadow-2xl shadow-black/40">
                  <div>
                    <p className="font-display text-xs tracking-wider text-signal uppercase">
                      Create
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {createServices.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/${s.slug}`}
                            className="block text-sm text-paper/80 hover:text-paper"
                            onClick={() => setServicesOpen(false)}
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-display text-xs tracking-wider text-signal uppercase">
                      Grow
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {growServices.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/${s.slug}`}
                            className="block text-sm text-paper/80 hover:text-paper"
                            onClick={() => setServicesOpen(false)}
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-sm tracking-wider text-paper/80 uppercase transition-colors hover:text-signal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-7 bg-paper transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-7 bg-paper transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-7 bg-paper transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line-dark px-5 pb-5 md:hidden">
          <button
            className="flex items-center justify-between py-3 font-display text-lg tracking-wider text-paper/90 uppercase"
            aria-expanded={mobileServicesOpen}
            onClick={() => setMobileServicesOpen((v) => !v)}
          >
            Services
            <span
              className={`text-sm transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
            >
              ▾
            </span>
          </button>

          {mobileServicesOpen && (
            <div className="mb-2 flex flex-col gap-1 border-l border-line-dark pl-4">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="py-2 text-sm text-paper/70"
                  onClick={() => setOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-3 font-display text-lg tracking-wider text-paper/90 uppercase hover:text-signal"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
