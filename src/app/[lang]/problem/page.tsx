import type { Metadata } from "next";
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
  return { title: dict.problem.metaTitle, description: dict.problem.metaDescription };
}

export default async function ProblemPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = await getDictionary(locale);
  const t = dict.problem;

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-green-900 text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob absolute -right-24 -top-24 h-96 w-96 rounded-full bg-red-400/10 blur-3xl" />
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

      <section className="mx-auto max-w-4xl px-6 py-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-green-900 dark:text-green-50">{t.statementTitle}</h2>
          <p className="mt-4 text-green-900/80 dark:text-green-100/80">{t.statementBody}</p>
        </Reveal>
      </section>

      <section className="bg-green-50/60 dark:bg-green-950/20">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <h2 className="text-2xl font-bold text-green-900 dark:text-green-50">{t.whoTitle}</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.affectedGroups.map((group, i) => (
              <Reveal key={group.name} delay={i * 80}>
                <div className="h-full rounded-2xl border border-green-900/10 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/10 dark:border-green-100/10 dark:bg-green-950/40">
                  <h3 className="font-semibold text-green-900 dark:text-green-50">{group.name}</h3>
                  <p className="mt-2 text-sm text-green-900/70 dark:text-green-100/70">{group.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-green-900 dark:text-green-50">{t.pestleTitle}</h2>
          <p className="mt-4 max-w-3xl text-green-900/70 dark:text-green-100/70">{t.pestleIntro}</p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.pestle.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-green-900/10 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/10 dark:border-green-100/10 dark:bg-green-950/40">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-800 font-bold text-white dark:bg-lime-400 dark:text-green-950">
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
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
