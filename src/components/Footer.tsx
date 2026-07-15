import Link from "next/link";

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

const siteLinks = [
  { href: "/", label: "Home" },
  { href: "/problem", label: "The Problem" },
  { href: "/solution", label: "Our Solution" },
  { href: "/team", label: "Team" },
  { href: "/challenges", label: "E-LAB Challenges" },
];

export default function Footer() {
  return (
    <footer className="border-t border-green-900/10 bg-green-950 text-green-100 dark:border-green-100/10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 text-sm sm:grid-cols-3">
        <div>
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
            <span aria-hidden="true">🌾</span>
            AgroVision
          </Link>
          <p className="mt-3 max-w-xs text-green-300">
            Supporting farmers with sustainable solutions, modern technology, and market
            access to improve food security in South Sudan.
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-green-100/20 text-green-100 transition-all hover:-translate-y-0.5 hover:border-amber-400/60 hover:text-amber-400"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">Explore</p>
          <ul className="mt-4 space-y-2">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-green-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">About This Project</p>
          <p className="mt-4 text-green-300">
            African Leadership University
            <br />
            Innovation and Business Track (IBT) | E-Lab
          </p>
          <p className="mt-4 text-green-300">
            Grand Challenge: Agriculture &amp; Food Security
            <br />
            Community Focus: South Sudan
          </p>
        </div>
      </div>

      <div className="border-t border-green-100/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-green-400">
          &copy; {new Date().getFullYear()} AgroVision Think Tank. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
