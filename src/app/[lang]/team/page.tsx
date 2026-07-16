import type { Metadata } from "next";
import ImageWithFallback from "@/components/ImageWithFallback";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";
import FlagIcon from "@/components/FlagIcon";
import TiltCard from "@/components/TiltCard";
import { isLocale, type Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ lang: string }> };

// TODO: fill in Ryan and Jess's bios.
const teamMembers = [
  {
    name: "Akeen Anger Kuc",
    photo: "/images/team/Angel.jpeg",
    photoClassName: "",
    country: "South Sudan",
    flag: "SS" as const,
  },
  {
    name: "Ryan",
    photo: "/images/team/Ryan.jpeg",
    photoClassName: "",
    country: "Rwanda",
    flag: "RW" as const,
  },
  {
    name: "Bethelhem Alemayehu Ejigu",
    photo: "/images/team/Bethelhem.jpg",
    photoClassName: "",
    country: "Ethiopia",
    flag: "ET" as const,
  },
  {
    name: "Jess",
    photo: "/images/team/Jess.jpeg",
    photoClassName: "",
    country: "Rwanda",
    flag: "RW" as const,
  },
  {
    name: "Birasa Ian Lael",
    photo: "/images/team/Lael.jpeg",
    photoClassName: "scale-150 object-[50%_71%] group-hover:scale-[1.65]",
    country: "Rwanda",
    flag: "RW" as const,
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: dict.team.metaTitle, description: dict.team.metaDescription };
}

export default async function TeamPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = await getDictionary(locale);
  const t = dict.team;

  return (
    <div className="flex flex-col overflow-hidden">
      <section className="relative overflow-hidden bg-green-900 text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob absolute right-0 -top-10 h-72 w-72 rounded-full bg-lime-400/20 blur-3xl" />
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
        <Reveal>
          <ImageWithFallback
            src="/images/team/group-photo.jpg"
            alt="The AgroVision think tank team together"
            label="Add the team group photo here (public/images/team/group-photo.jpg)"
            className="aspect-21/9 w-full rounded-2xl object-cover shadow-lg transition-transform duration-500 hover:scale-[1.01]"
          />
        </Reveal>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, i) => {
            const info = t.members[i];
            return (
              <Reveal
                key={member.name}
                delay={i * 100}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
              >
                <TiltCard>
                  <div className="group h-full overflow-hidden rounded-2xl border border-green-900/10 bg-white/70 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10 dark:border-green-100/10 dark:bg-green-950/40">
                    <div className="overflow-hidden">
                      <ImageWithFallback
                        src={member.photo}
                        alt={member.name}
                        label={`Add photo (public${member.photo})`}
                        className={`aspect-square w-full object-cover transition-transform duration-500 ${member.photoClassName || "group-hover:scale-105"}`}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="flex items-center gap-2 font-semibold text-green-900 dark:text-green-50">
                        <FlagIcon country={member.flag} className="h-3.5 w-5 shrink-0" />
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-green-600 dark:text-lime-400">{info.role}</p>
                      <p className="mt-3 text-sm text-green-900/70 dark:text-green-100/70">{info.bio}</p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
