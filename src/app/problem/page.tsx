import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Problem | AgroVision",
  description: "Why flooding and food insecurity in South Sudan demand a new solution.",
};

const affectedGroups = [
  {
    name: "Smallholder farmers",
    detail:
      "Making up the vast majority of the population, these families usually farm less than two hectares of staples like sorghum, maize, and groundnuts.",
  },
  {
    name: "Women",
    detail:
      "Women handle an estimated 60% of all farm labor yet face barriers to land ownership, credit, and training.",
  },
  {
    name: "Internally Displaced Persons",
    detail:
      "The civil war uprooted around 2 million people, many of them farmers who still cannot safely return to productive land.",
  },
  {
    name: "Children",
    detail:
      "Severe acute malnutrition among children under five in places like Jonglei and Unity often surpasses emergency levels.",
  },
  {
    name: "Youth",
    detail:
      "Seeing no viable future in farming, many young people are leaving rural areas, shrinking the agricultural workforce.",
  },
];

const pestle: { letter: string; title: string; points: string[] }[] = [
  {
    letter: "P",
    title: "Political",
    points: [
      "Civil war (2013-2018) and continued localized violence devastated infrastructure and displaced millions.",
      "Agriculture relies heavily on foreign aid rather than sustainable state funding.",
      "Land Act protections exist on paper, but enforcement is weak against elites and armed groups.",
    ],
  },
  {
    letter: "E",
    title: "Economic",
    points: [
      "The economy depends on oil for ~90% of revenue, leaving it fragile to price shocks and hyperinflation.",
      "Rural banking and crop insurance are virtually non-existent.",
      "Poor roads and no cold storage cause 30-40% post-harvest losses.",
    ],
  },
  {
    letter: "S",
    title: "Social",
    points: [
      "War displaced around 4 million people, sharply reducing food production.",
      "Women do 60-70% of farm work but face major barriers to land, loans, and training.",
      "Ethnic tensions make collaboration on shared agricultural projects difficult.",
    ],
  },
  {
    letter: "T",
    title: "Technological",
    points: [
      "Farming is overwhelmingly manual; tractors are rare and mostly kept near the capital.",
      "Poor mobile network coverage blocks digital ag-tech adoption common elsewhere in the region.",
      "Little local agricultural research exists to develop climate-suited crop varieties.",
    ],
  },
  {
    letter: "L",
    title: "Legal",
    points: [
      "Land disputes are handled by customary courts that often favor the wealthy and powerful.",
      "No official seed certification framework discourages investment in improved seeds.",
      "Weak cooperative law makes it hard for farmers to organize for loans or better prices.",
    ],
  },
  {
    letter: "E",
    title: "Environmental",
    points: [
      "Extreme flooding from 2019-2022 submerged vast farmland in Jonglei and Unity states.",
      "Unpredictable rainfall is making traditional farming calendars obsolete.",
      "Almost all farming relies on rainfall, with little irrigation infrastructure to buffer weather shocks.",
    ],
  },
];

export default function ProblemPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-green-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
            Grand Challenge: Agriculture &amp; Food Security &middot; South Sudan
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight">The Problem</h1>
          <p className="mt-6 max-w-3xl text-lg text-green-100">
            According to the United Nations, climate change has intensified flooding in
            South Sudan&apos;s Upper Nile State, displacing more than 90,000 people over the
            past three years. The recurrent floods have damaged agricultural land,
            disrupted food production, and limited access to food, contributing to rising
            levels of food insecurity and malnutrition, particularly among women and
            children.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-bold text-green-900 dark:text-green-50">Problem Statement</h2>
        <p className="mt-4 text-green-900/80 dark:text-green-100/80">
          Smallholder farmers in rural areas &mdash; especially in Central Equatoria,
          Jonglei, Unity, and Western Bahr el Ghazal &mdash; struggle to grow enough food to
          feed their families, let alone make a profit. This is driven by a harsh mix of
          poor infrastructure, scarce farming inputs, the lingering impacts of war, and
          worsening climate shocks. Despite ongoing interventions, many farmers lack
          access to climate-resilient agricultural practices that could help them adapt to
          recurring floods and sustain food production. This challenge threatens
          livelihoods, community resilience, and long-term food security.
        </p>
      </section>

      <section className="bg-amber-50 dark:bg-green-950/20">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold text-green-900 dark:text-green-50">Who Is Affected?</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {affectedGroups.map((group) => (
              <div
                key={group.name}
                className="rounded-2xl border border-green-900/10 bg-white p-6 shadow-sm dark:border-green-100/10 dark:bg-green-950/40"
              >
                <h3 className="font-semibold text-green-900 dark:text-green-50">{group.name}</h3>
                <p className="mt-2 text-sm text-green-900/70 dark:text-green-100/70">{group.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-green-900 dark:text-green-50">PESTLE Analysis</h2>
        <p className="mt-4 max-w-3xl text-green-900/70 dark:text-green-100/70">
          A breakdown of the external macro-environmental factors shaping agriculture in
          South Sudan &mdash; essential for designing interventions that can survive and
          scale in this context.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pestle.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-green-900/10 bg-white p-6 shadow-sm dark:border-green-100/10 dark:bg-green-950/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-800 font-bold text-white dark:bg-amber-400 dark:text-green-950">
                  {item.letter}
                </span>
                <h3 className="font-semibold text-green-900 dark:text-green-50">{item.title}</h3>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-green-900/70 dark:text-green-100/70">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
