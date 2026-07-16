import type { Metadata } from "next";
import ImageWithFallback from "@/components/ImageWithFallback";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";
import { isLocale, type Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: dict.solution.metaTitle, description: dict.solution.metaDescription };
}

export default async function SolutionPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = await getDictionary(locale);
  const t = dict.solution;

  return (
    <div className="flex flex-col overflow-hidden">
      <section className="relative overflow-hidden bg-green-900 text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob absolute -left-16 top-0 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-lime-300">{t.badge}</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {t.title}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-3xl text-lg text-green-100">{t.intro}</p>
          </Reveal>
        </div>
        <WaveDivider />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-bold text-green-900 dark:text-green-50">{t.howTitle}</h2>
            <p className="mt-4 text-green-900/80 dark:text-green-100/80">{t.howBody}</p>
            <ul className="mt-6 space-y-4">
              {t.materials.map((material) => (
                <li key={material.name} className="group flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-lime-500 transition-transform group-hover:scale-150" />
                  <div>
                    <p className="font-semibold text-green-900 dark:text-green-50">{material.name}</p>
                    <p className="text-sm text-green-900/70 dark:text-green-100/70">{material.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <ImageWithFallback
              src="/images/solution/prototypeee.jpg"
              alt="Sketch of the floating garden design"
              label="Add the floating garden sketch here (public/images/solution/prototypeee.jpg)"
              className="max-h-130 w-full rounded-2xl bg-white/80 object-contain p-2 shadow-lg backdrop-blur-md transition-transform duration-500 hover:scale-[1.02] dark:bg-green-950/60"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-green-50/60 dark:bg-green-950/20">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <Reveal className="md:order-2">
              <ImageWithFallback
                src="/images/solution/prototype.jpg"
                alt="AgroVision floating garden prototype"
                label="Add a prototype photo or diagram here (public/images/solution/prototype.jpg)"
                className="max-h-130 w-full rounded-2xl bg-white/80 object-contain p-2 shadow-lg backdrop-blur-md transition-transform duration-500 hover:scale-[1.02] dark:bg-green-950/60"
              />
            </Reveal>
            <Reveal delay={150} className="md:order-1">
              <h2 className="text-2xl font-bold text-green-900 dark:text-green-50">{t.prototypeTitle}</h2>
              <p className="mt-4 text-green-900/80 dark:text-green-100/80">{t.prototypeBody}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-green-900 dark:text-green-50">{t.implementsTitle}</h2>
          <p className="mt-4 max-w-3xl text-green-900/70 dark:text-green-100/70">{t.implementsBody}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {t.partners.map((partner) => (
              <span
                key={partner}
                className="rounded-full bg-green-800 px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:shadow-md dark:bg-lime-400 dark:text-green-950"
              >
                {partner}
              </span>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
