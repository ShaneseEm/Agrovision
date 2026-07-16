import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";
import ImageWithFallback from "@/components/ImageWithFallback";
import TiltCard from "@/components/TiltCard";
import { isLocale, type Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ lang: string }> };

const youtubeIds = ["ml-VE7G-Vrk", "E1F6iz0eckM", "7RD2md3nsRE", "62kZIJS3CEI", "K3emnoGf7Zo"];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: dict.challenges.metaTitle, description: dict.challenges.metaDescription };
}

export default async function ChallengesPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = await getDictionary(locale);
  const t = dict.challenges;

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-green-900 text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-lime-300/15 blur-3xl" />
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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {t.videoChallenges.map((challenge, i) => (
            <Reveal key={challenge.title} delay={i * 100}>
              <TiltCard maxTilt={4}>
                <div className="group h-full overflow-hidden rounded-2xl border border-green-900/10 bg-white/70 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10 dark:border-green-100/10 dark:bg-green-950/40">
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${youtubeIds[i]}`}
                      title={challenge.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-green-900 group-hover:text-green-700 dark:text-green-50 dark:group-hover:text-lime-400">
                      {challenge.title}
                    </h3>
                    {challenge.description && (
                      <p className="mt-2 text-sm text-green-900/70 dark:text-green-100/70">
                        {challenge.description}
                      </p>
                    )}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}

          <Reveal delay={t.videoChallenges.length * 100}>
            <TiltCard>
              <div className="group h-full overflow-hidden rounded-2xl border-2 border-lime-400/60 bg-white/90 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10 dark:border-lime-400/30 dark:bg-green-950/40">
                <div className="relative aspect-video w-full overflow-hidden">
                  <ImageWithFallback
                    src="/images/team/website-preview.png"
                    alt="A screenshot of the AgroVision website homepage"
                    label="Add a website screenshot here (public/images/team/website-preview.png)"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-green-950/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-lime-200 backdrop-blur-sm">
                    {t.challenge6Label}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-green-900 dark:text-green-50">{t.challenge6Title}</h3>
                  <p className="mt-2 text-sm text-green-900/70 dark:text-green-100/70">{t.challenge6Body}</p>
                  <Link
                    href={`/${locale}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-green-700 dark:text-lime-400"
                  >
                    {t.challenge6Link}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
