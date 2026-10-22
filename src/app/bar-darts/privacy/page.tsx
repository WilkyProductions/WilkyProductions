import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Bar Darts Privacy Policy",
  description: "How the Bar Darts app handles your information.",
};

const sections = [
  {
    heading: "Information we collect",
    body: "None. Bar Darts does not collect, transmit or sell any personal information. It has no accounts, advertising, analytics or tracking.",
  },
  {
    heading: "Information stored on your device",
    body: "Player names, team settings, game progress and scores are saved only on your device so you can resume a game. This information never leaves your device and is removed when you delete the app.",
  },
  {
    heading: "Purchases",
    body: "Purchases are handled by Apple through the App Store. We do not receive your payment details.",
  },
  {
    heading: "Children",
    body: "Bar Darts does not knowingly collect information from anyone, including children under 13.",
  },
  {
    heading: "Changes",
    body: "If this policy changes, we will update this page and the effective date above.",
  },
];

export default function BarDartsPrivacyPage() {
  return (
    <div>
      <PageHero eyebrow="Bar Darts" title="Privacy Policy" description="Effective October 21, 2026" />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <p className="text-text-secondary">
          Bar Darts is made by Wilky Productions. This policy explains how the Bar Darts app handles
          your information.
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-lg uppercase tracking-wide">{section.heading}</h2>
              <p className="mt-2 text-text-secondary">{section.body}</p>
            </div>
          ))}

          <div>
            <h2 className="font-display text-lg uppercase tracking-wide">Contact</h2>
            <p className="mt-2 text-text-secondary">
              Questions? Email{" "}
              <a href="mailto:bardarts@wilkyproductions.com" className="text-accent hover:underline">
                bardarts@wilkyproductions.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
