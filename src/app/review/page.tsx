import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ReviewForm from "@/components/ReviewForm";

export const metadata: Metadata = {
  title: "Leave a Review | Wilky Productions",
  description: "Share your experience working with Wilky Productions.",
};

export default function ReviewPage() {
  return (
    <div>
      <PageHero
        eyebrow="Feedback"
        title="Leave a Review"
        description="Thanks for working with us! Share a few words about your experience below."
      />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <ReviewForm />
      </section>
    </div>
  );
}
