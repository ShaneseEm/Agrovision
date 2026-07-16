import Link from "next/link";
import Icon from "@/components/Icon";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/dictionary";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/agrovision.123?igsh=MTY4Z2hhcjBiM3JtNQ==",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "http://www.youtube.com/@Agrovision_Official",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12Z" />
      </svg>
    ),
  },
];

export default function Footer({
  lang,
  dict,
  nav,
}: {
  lang: Locale;
  dict: Dictionary["footer"];
  nav: Dictionary["nav"];
}) {
  const siteLinks = [
    { href: `/${lang}`, label: nav.home },
    { href: `/${lang}/problem`, label: nav.problem },
    { href: `/${lang}/solution`, label: nav.solution },
    { href: `/${lang}/team`, label: nav.team },
    { href: `/${lang}/challenges`, label: nav.challenges },
  ];

  return (
    <footer className="border-t border-green-900/10 bg-green-950/95 text-green-100 backdrop-blur-md dark:border-green-100/10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 text-sm sm:grid-cols-3">
        <div>
          <Link href={`/${lang}`} className="flex items-center gap-2 font-display text-lg font-semibold text-white">
            <Icon name="eco" className="text-xl" />
            AgroVision
          </Link>
          <p className="mt-3 max-w-xs text-green-300">{dict.tagline}</p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-green-100/20 text-green-100 transition-all hover:-translate-y-0.5 hover:border-lime-400/60 hover:text-lime-400"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-lime-400">{dict.explore}</p>
          <ul className="mt-4 space-y-2">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-green-300 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-lime-400">{dict.aboutProject}</p>
          <p className="mt-4 text-green-300">
            {dict.university}
            <br />
            {dict.track}
          </p>
          <p className="mt-4 text-green-300">
            {dict.grandChallenge}
            <br />
            {dict.communityFocus}
          </p>
        </div>
      </div>

      <div className="border-t border-green-100/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-green-400">
          &copy; {new Date().getFullYear()} {dict.rights}
        </div>
      </div>
    </footer>
  );
}
