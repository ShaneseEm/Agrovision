import type { Metadata } from "next";
import ImageWithFallback from "@/components/ImageWithFallback";

export const metadata: Metadata = {
  title: "Our Solution | AgroVision",
  description: "Floating gardens: a flood-resilient farming solution for South Sudan.",
};

const materials = [
  {
    name: "Water hyacinth",
    detail: "An abundant invasive plant repurposed as buoyant, decomposing growing material.",
  },
  {
    name: "Reeds",
    detail: "Locally harvested reeds bind the floating bed and provide structural support.",
  },
  {
    name: "Compost",
    detail: "Organic compost layered on top gives crops a nutrient-rich rooting medium.",
  },
];

const partners = [
  "Local farmers",
  "Community leaders",
  "Agricultural experts",
  "NGOs",
  "Government partners",
];

export default function SolutionPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-green-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">Our Solution</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight">Floating Gardens</h1>
          <p className="mt-6 max-w-3xl text-lg text-green-100">
            An innovative farming method that enables communities to grow crops on
            floating beds made from locally available materials. These gardens rise and
            fall with water levels, making them ideal for flood-prone areas and ensuring
            year-round food production.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-green-900 dark:text-green-50">How It Works</h2>
            <p className="mt-4 text-green-900/80 dark:text-green-100/80">
              Floating gardens are built from layers of locally sourced, buoyant
              materials. Because the beds float on the water&apos;s surface, they rise and
              fall naturally with flood levels &mdash; protecting crops instead of losing
              them when the water comes.
            </p>
            <ul className="mt-6 space-y-4">
              {materials.map((material) => (
                <li key={material.name} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                  <div>
                    <p className="font-semibold text-green-900 dark:text-green-50">{material.name}</p>
                    <p className="text-sm text-green-900/70 dark:text-green-100/70">{material.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <ImageWithFallback
            src="/images/solution/floating-garden.jpg"
            alt="A floating garden prototype on water"
            label="Add a floating garden / prototype photo here (public/images/solution/floating-garden.jpg)"
            className="aspect-square w-full rounded-2xl object-cover shadow-md"
          />
        </div>
      </section>

      <section className="bg-amber-50 dark:bg-green-950/20">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <ImageWithFallback
              src="/images/solution/prototype.jpg"
              alt="AgroVision floating garden prototype"
              label="Add a prototype photo or diagram here (public/images/solution/prototype.jpg)"
              className="aspect-video w-full rounded-2xl object-cover shadow-md md:order-2"
            />
            <div className="md:order-1">
              <h2 className="text-2xl font-bold text-green-900 dark:text-green-50">The Prototype</h2>
              <p className="mt-4 text-green-900/80 dark:text-green-100/80">
                Our think tank designed and tested a small-scale floating garden
                prototype to validate the concept: a buoyant frame of reeds and water
                hyacinth, topped with a compost growing bed, anchored to allow it to
                safely rise and fall with the water level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-green-900 dark:text-green-50">Who Implements It</h2>
        <p className="mt-4 max-w-3xl text-green-900/70 dark:text-green-100/70">
          The solution is implemented through training and community support programs,
          bringing together:
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {partners.map((partner) => (
            <span
              key={partner}
              className="rounded-full bg-green-800 px-4 py-2 text-sm font-medium text-white dark:bg-amber-400 dark:text-green-950"
            >
              {partner}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
