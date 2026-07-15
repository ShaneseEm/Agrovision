import type { Metadata } from "next";
import ImageWithFallback from "@/components/ImageWithFallback";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Our Team | AgroVision",
  description: "Meet the AgroVision E-Lab think tank.",
};

// TODO: fill in real bios for each member.
const teamMembers = [
  {
    name: "Angel Akeen",
    role: "Leader",
    bio: "Short bio goes here — background, what they contributed to the think tank.",
    photo: "/images/team/Angel.jpeg",
  },
  {
    name: "Ryan",
    role: "Secretary",
    bio: "Short bio goes here — background, what they contributed to the think tank.",
    photo: "/images/team/Ryan.jpeg",
  },
  {
    name: "Bethelhem",
    role: "Developer",
    bio: "Short bio goes here — background, what they contributed to the think tank.",
    photo: "/images/team/Bethelhem.jpg",
  },
  {
    name: "Jess",
    role: "Video Editor",
    bio: "Short bio goes here — background, what they contributed to the think tank.",
    photo: "/images/team/Jess.jpeg",
  },
  {
    name: "Lael",
    role: "Researcher",
    bio: "Short bio goes here — background, what they contributed to the think tank.",
    photo: "/images/team/Lael.jpeg",
  },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col overflow-hidden">
      <section className="relative overflow-hidden bg-green-900 text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob absolute right-0 -top-10 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
              AgroVision Think Tank
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Our Team
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-3xl text-lg text-green-100">
              The people behind the research, the problem framing, and the floating gardens
              solution.
            </p>
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
          {teamMembers.map((member, i) => (
            <Reveal
              key={member.name}
              delay={i * 100}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
            >
              <div className="group h-full overflow-hidden rounded-2xl border border-green-900/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10 dark:border-green-100/10 dark:bg-green-950/40">
                <div className="overflow-hidden">
                  <ImageWithFallback
                    src={member.photo}
                    alt={member.name}
                    label={`Add photo (public${member.photo})`}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-green-900 dark:text-green-50">{member.name}</h3>
                  <p className="text-sm font-medium text-amber-600 dark:text-amber-400">{member.role}</p>
                  <p className="mt-3 text-sm text-green-900/70 dark:text-green-100/70">{member.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
