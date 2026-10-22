import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Bar Darts Support",
  description: "Get help with the Bar Darts app.",
};

export default function BarDartsSupportPage() {
  return (
    <div>
      <PageHero eyebrow="Bar Darts" title="Support" description="Need help with the app? We're happy to assist." />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <p className="text-text-secondary">
          Bar Darts is made by Wilky Productions. For questions, bug reports or feature requests,
          reach out and we&apos;ll get back to you.
        </p>

        <div className="mt-10">
          <h2 className="font-display text-lg uppercase tracking-wide">Contact</h2>
          <p className="mt-2 text-text-secondary">
            Email{" "}
            <a href="mailto:jwilky108@gmail.com" className="text-accent hover:underline">
              jwilky108@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
