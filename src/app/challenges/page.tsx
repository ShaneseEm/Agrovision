import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";
import Icon from "@/components/Icon";

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
      <section className="relative overflow-hidden bg-green-900 text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-lime-300/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-lime-300">
              Innovation and Business Track (IBT) &middot; E-Lab
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              The Six E-LAB Challenges
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-3xl text-lg text-green-100">
              Every AgroVision think tank member documented our journey through all six
              E-LAB challenges &mdash; from discovery to this digital print.
            </p>
          </Reveal>
        </div>
        <WaveDivider />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {videoChallenges.map((challenge, i) => (
            <Reveal key={challenge.number} delay={i * 100}>
              <div className="group h-full overflow-hidden rounded-2xl border border-green-900/10 bg-white/70 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10 dark:border-green-100/10 dark:bg-green-950/40">
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
                  <h3 className="font-semibold text-green-900 group-hover:text-green-700 dark:text-green-50 dark:group-hover:text-lime-400">
                    {challenge.title}
                  </h3>
                  <p className="mt-2 text-sm text-green-900/70 dark:text-green-100/70">
                    {challenge.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={videoChallenges.length * 100}>
            <div className="group h-full overflow-hidden rounded-2xl border border-lime-400/40 bg-green-50/60 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10 dark:border-lime-400/30 dark:bg-green-950/40">
              <div className="bg-dot-grid relative aspect-video w-full overflow-hidden bg-linear-to-br from-green-800 via-green-700 to-lime-600 text-white/15 transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                  <Icon name="eco" className="text-5xl" />
                  <p className="font-display text-2xl font-semibold text-white">AgroVision</p>
                  <p className="text-sm font-medium uppercase tracking-wide text-lime-200">
                    Digital Print &middot; Challenge 6
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-green-900 dark:text-green-50">
                  Challenge 6: Digital Print
                </h3>
                <p className="mt-2 text-sm text-green-900/70 dark:text-green-100/70">
                  This website is Challenge 6. It brings together our mission, problem
                  statement, solution, prototype, and think tank team in one place &mdash;
                  documenting our full E-LAB journey.
                </p>
                <Link
                  href="/"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-green-700 dark:text-lime-400"
                >
                  You&apos;re already here &mdash; explore the site
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
