import Link from "next/link";
import { services } from "@/lib/site";

export default function OtherServices({ current }: { current: string }) {
  const others = services.filter((service) => service.slug !== current);

  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl uppercase tracking-wide">Explore our other services</h2>
        <div className="mt-6 flex flex-wrap gap-4">
          {others.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="rounded-sm border-2 border-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent transition-colors hover:bg-accent hover:text-black"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
