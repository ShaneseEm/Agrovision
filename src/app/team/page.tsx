import type { Metadata } from "next";
import ImageWithFallback from "@/components/ImageWithFallback";

export const metadata: Metadata = {
  title: "Our Team | AgroVision",
  description: "Meet the AgroVision E-Lab think tank.",
};

// TODO: replace placeholder name/role/bio for each member, and drop a matching
// photo into public/images/team/ using the file name listed in `photo`.
const teamMembers = [
  {
    name: "Team Member 1",
    role: "Role / Title",
    bio: "Short bio goes here — background, what they contributed to the think tank.",
    photo: "/images/team/member-1.jpg",
  },
  {
    name: "Team Member 2",
    role: "Role / Title",
    bio: "Short bio goes here — background, what they contributed to the think tank.",
    photo: "/images/team/member-2.jpg",
  },
  {
    name: "Team Member 3",
    role: "Role / Title",
    bio: "Short bio goes here — background, what they contributed to the think tank.",
    photo: "/images/team/member-3.jpg",
  },
  {
    name: "Team Member 4",
    role: "Role / Title",
    bio: "Short bio goes here — background, what they contributed to the think tank.",
    photo: "/images/team/member-4.jpg",
  },
  {
    name: "Team Member 5",
    role: "Role / Title",
    bio: "Short bio goes here — background, what they contributed to the think tank.",
    photo: "/images/team/member-5.jpg",
  },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-green-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
            AgroVision Think Tank
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight">Our Team</h1>
          <p className="mt-6 max-w-3xl text-lg text-green-100">
            The people behind the research, the problem framing, and the floating gardens
            solution.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <ImageWithFallback
          src="/images/team/group-photo.jpg"
          alt="The AgroVision think tank team together"
          label="Add the team group photo here (public/images/team/group-photo.jpg)"
          className="aspect-21/9 w-full rounded-2xl object-cover shadow-md"
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-2xl border border-green-900/10 bg-white shadow-sm dark:border-green-100/10 dark:bg-green-950/40"
            >
              <ImageWithFallback
                src={member.photo}
                alt={member.name}
                label={`Add photo (public${member.photo})`}
                className="aspect-square w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-green-900 dark:text-green-50">{member.name}</h3>
                <p className="text-sm font-medium text-amber-600 dark:text-amber-400">{member.role}</p>
                <p className="mt-3 text-sm text-green-900/70 dark:text-green-100/70">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
