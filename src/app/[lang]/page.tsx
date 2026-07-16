import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";
import FloatingGardenScene from "@/components/FloatingGardenScene";
import TiltCard from "@/components/TiltCard";
import Icon from "@/components/Icon";
import { isLocale, type Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = await getDictionary(locale);
  const t = dict.home;

  return (
    <div className="flex flex-col overflow-hidden">
      <section className="relative bg-linear-to-b from-green-900 via-green-900 to-green-800 text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob absolute -left-20 -top-20 h-96 w-96 rounded-full bg-lime-400/20 blur-3xl" />
          <div
            className="blob absolute -right-10 top-1/3 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="blob absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl"
            style={{ animationDelay: "6s" }}
          />
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-24 sm:py-32 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col items-start gap-6">
            <Reveal>
              <p className="rounded-full bg-lime-400/20 px-4 py-1 text-sm font-semibold text-lime-300 ring-1 ring-lime-300/30">
                {t.badge}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                {t.heroTitleBefore}
                <span className="text-shimmer">{t.heroTitleHighlight}</span>
                {t.heroTitleAfter}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="max-w-2xl text-lg text-green-100">{t.heroSubtitle}</p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href={`/${locale}/solution`}
                  className="group rounded-full bg-lime-400 px-6 py-3 font-semibold text-green-950 shadow-lg shadow-lime-500/20 transition-all hover:-translate-y-0.5 hover:bg-lime-300 hover:shadow-xl hover:shadow-lime-500/30"
                >
                  {t.ctaPrimary}
                  <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href={`/${locale}/problem`}
                  className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
                >
                  {t.ctaSecondary}
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={250} className="hidden lg:block">
            <FloatingGardenScene />
          </Reveal>
        </div>
        <WaveDivider />
      </section>

      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 py-16 sm:grid-cols-3">
        {t.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 120}>
            <TiltCard>
              <div className="group h-full rounded-2xl border border-green-900/10 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10 dark:border-green-100/10 dark:bg-green-950/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-900/5 text-green-800 transition-transform group-hover:scale-110 dark:bg-lime-400/10 dark:text-lime-400">
                  <Icon name={stat.icon} className="text-2xl" />
                </span>
                <p className="mt-4 font-display text-3xl font-semibold text-green-800 transition-colors dark:text-lime-400">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-green-900/80 dark:text-green-100/70">{stat.label}</p>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </section>

      <section className="bg-green-50/60 dark:bg-green-950/20">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <Reveal>
              <ImageWithFallback
                src="/images/team/group-photo.jpg"
                alt="The AgroVision think tank team"
                label="Add the team group photo here (public/images/team/group-photo.jpg)"
                className="aspect-video w-full rounded-2xl object-cover shadow-lg transition-transform duration-500 hover:scale-[1.02]"
              />
            </Reveal>
            <Reveal delay={150}>
              <h2 className="text-2xl font-bold text-green-900 dark:text-green-50">{t.communityTitle}</h2>
              <p className="mt-4 text-green-900/80 dark:text-green-100/80">{t.communityBody}</p>
              <Link
                href={`/${locale}/team`}
                className="group mt-6 inline-flex items-center gap-1 font-semibold text-green-800 underline decoration-lime-400 decoration-2 underline-offset-4 dark:text-lime-400"
              >
                {t.meetTeam}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <Reveal>
          <h2 className="text-2xl font-bold text-green-900 dark:text-green-50">{t.continentTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-green-900/80 dark:text-green-100/80">{t.continentBody}</p>
        </Reveal>
        <Reveal delay={150}>
          <ImageWithFallback
            src="/images/team/africa.jpg"
            alt="A map of Africa built from farming and agriculture icons"
            label="Add the Africa graphic here (public/images/team/africa.jpg)"
            className="mx-auto mt-10 max-h-110 w-full max-w-2xl rounded-2xl bg-white/70 object-contain p-4 shadow-lg backdrop-blur-md transition-transform duration-500 hover:scale-[1.02] dark:bg-green-950/40"
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-green-900 dark:text-green-50">{t.exploreTitle}</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {t.quickLinks.map((link, i) => (
            <Reveal key={link.href} delay={i * 100}>
              <TiltCard>
                <Link
                  href={`/${locale}${link.href}`}
                  className="group block h-full rounded-2xl border border-green-900/10 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/50 hover:shadow-xl hover:shadow-green-900/10 dark:border-green-100/10 dark:bg-green-950/40"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-900/5 text-green-800 transition-transform group-hover:scale-110 group-hover:bg-lime-400/10 dark:bg-lime-400/10 dark:text-lime-400">
                    <Icon name={link.icon} className="text-2xl" />
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-green-900 group-hover:text-green-700 dark:text-green-50 dark:group-hover:text-lime-400">
                    {link.title}
                  </h3>
                  <p className="mt-2 text-sm text-green-900/70 dark:text-green-100/70">{link.description}</p>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
