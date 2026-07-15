import type { Metadata } from "next";
import ImageWithFallback from "@/components/ImageWithFallback";

export const metadata: Metadata = {
  title: "E-LAB Challenges | AgroVision",
  description: "AgroVision's journey through all six E-LAB Think Tank challenges.",
};

// TODO: swap in the real title/description for each challenge once finalized.
const videoChallenges = [
  {
    number: 1,
    title: "Challenge 1",
    description: "Add a short description of what this challenge covered.",
    youtubeId: "ml-VE7G-Vrk",
  },
  {
    number: 2,
    title: "Challenge 2",
    description: "Add a short description of what this challenge covered.",
    youtubeId: "E1F6iz0eckM",
  },
  {
    number: 3,
    title: "Challenge 3",
    description: "Add a short description of what this challenge covered.",
    youtubeId: "7RD2md3nsRE",
  },
  {
    number: 4,
    title: "Challenge 4",
    description: "Add a short description of what this challenge covered.",
    youtubeId: "62kZIJS3CEI",
  },
  {
    number: 5,
    title: "Challenge 5",
    description: "Add a short description of what this challenge covered.",
    youtubeId: "K3emnoGf7Zo",
  },
];

export default function ChallengesPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-green-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
            Innovation and Business Track (IBT) &middot; E-Lab
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight">
            The Six E-LAB Challenges
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-green-100">
            Every AgroVision think tank member documented our journey through all six
            E-LAB challenges &mdash; from discovery to this digital print.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {videoChallenges.map((challenge) => (
            <div
              key={challenge.number}
              className="overflow-hidden rounded-2xl border border-green-900/10 bg-white shadow-sm dark:border-green-100/10 dark:bg-green-950/40"
            >
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${challenge.youtubeId}`}
                  title={challenge.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-green-900 dark:text-green-50">
                  {challenge.title}
                </h3>
                <p className="mt-2 text-sm text-green-900/70 dark:text-green-100/70">
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}

          <div className="overflow-hidden rounded-2xl border border-amber-400/40 bg-amber-50 shadow-sm dark:border-amber-400/30 dark:bg-green-950/40">
            <ImageWithFallback
              src="/images/challenges/digital-print-cover.jpg"
              alt="AgroVision Digital Print cover"
              label="Optional cover image for Challenge 6 (public/images/challenges/digital-print-cover.jpg)"
              className="aspect-video w-full object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-green-900 dark:text-green-50">
                Challenge 6: Digital Print
              </h3>
              <p className="mt-2 text-sm text-green-900/70 dark:text-green-100/70">
                This website is Challenge 6. It brings together our mission, problem
                statement, solution, prototype, and think tank team in one place &mdash;
                documenting our full E-LAB journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
