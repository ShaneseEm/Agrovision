import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";

const stats = [
  { value: "90,000+", label: "People displaced by flooding in Upper Nile State over 3 years" },
  { value: "7.1M", label: "People facing acute food insecurity nationwide (2023 lean season)" },
  { value: "80%", label: "Of South Sudan's population relies on farming and livestock" },
];

const quickLinks = [
  {
    href: "/problem",
    title: "The Problem",
    description:
      "Climate-driven flooding in Upper Nile State is destroying farmland and deepening food insecurity.",
  },
  {
    href: "/solution",
    title: "Our Solution",
    description:
      "Floating gardens: a flood-resilient farming method built from locally available materials.",
  },
  {
    href: "/team",
    title: "The Team",
    description: "Meet the AgroVision think tank behind the research and the solution.",
  },
  {
    href: "/challenges",
    title: "E-LAB Challenges",
    description: "Follow our journey through all six E-LAB Think Tank challenges.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-linear-to-b from-green-900 to-green-800 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24">
          <p className="rounded-full bg-amber-400/20 px-4 py-1 text-sm font-semibold text-amber-300">
            African Leadership University &middot; E-Lab Think Tank
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Growing food security in South Sudan, one floating garden at a time.
          </h1>
          <p className="max-w-2xl text-lg text-green-100">
            AgroVision&apos;s mission is to support farmers with sustainable farming
            solutions, modern technology, and market access to improve food security,
            increase productivity, and strengthen communities.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/solution"
              className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-green-950 transition-colors hover:bg-amber-300"
            >
              See Our Solution
            </Link>
            <Link
              href="/problem"
              className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Learn About the Problem
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 py-16 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-green-900/10 bg-white p-6 shadow-sm dark:border-green-100/10 dark:bg-green-950/40"
          >
            <p className="text-3xl font-bold text-green-800 dark:text-amber-400">{stat.value}</p>
            <p className="mt-2 text-sm text-green-900/80 dark:text-green-100/70">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="bg-amber-50 dark:bg-green-950/20">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <ImageWithFallback
              src="/images/team/group-photo.jpg"
              alt="The AgroVision think tank team"
              label="Add the team group photo here (public/images/team/group-photo.jpg)"
              className="aspect-video w-full rounded-2xl object-cover shadow-md"
            />
            <div>
              <h2 className="text-2xl font-bold text-green-900 dark:text-green-50">
                A community-based solution
              </h2>
              <p className="mt-4 text-green-900/80 dark:text-green-100/80">
                AgroVision is a community-based organization dedicated to reducing
                malnutrition and food insecurity in South Sudan. We work alongside local
                farmers, community leaders, agricultural experts, NGOs, and government
                partners to design solutions that survive and scale in a flood-prone
                environment.
              </p>
              <Link
                href="/team"
                className="mt-6 inline-block font-semibold text-green-800 underline decoration-amber-400 decoration-2 underline-offset-4 dark:text-amber-400"
              >
                Meet the team →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-green-900 dark:text-green-50">Explore the Digital Print</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-2xl border border-green-900/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-green-100/10 dark:bg-green-950/40"
            >
              <h3 className="text-lg font-semibold text-green-900 group-hover:text-amber-600 dark:text-green-50 dark:group-hover:text-amber-400">
                {link.title}
              </h3>
              <p className="mt-2 text-sm text-green-900/70 dark:text-green-100/70">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
