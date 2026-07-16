export type Dictionary = {
  meta: {
    homeTitle: string;
    homeDescription: string;
  };
  nav: {
    home: string;
    problem: string;
    solution: string;
    team: string;
    challenges: string;
    toggleMenu: string;
    toggleTheme: string;
    languageSwitcher: string;
  };
  footer: {
    tagline: string;
    explore: string;
    aboutProject: string;
    university: string;
    track: string;
    grandChallenge: string;
    communityFocus: string;
    rights: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    badge: string;
    heroTitleBefore: string;
    heroTitleHighlight: string;
    heroTitleAfter: string;
    heroSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string; icon: string }[];
    communityTitle: string;
    communityBody: string;
    meetTeam: string;
    continentTitle: string;
    continentBody: string;
    exploreTitle: string;
    quickLinks: { href: string; title: string; description: string; icon: string }[];
  };
  problem: {
    metaTitle: string;
    metaDescription: string;
    badge: string;
    title: string;
    intro: string;
    statementTitle: string;
    statementBody: string;
    whoTitle: string;
    affectedGroups: { name: string; detail: string }[];
    pestleTitle: string;
    pestleIntro: string;
    pestle: { letter: string; title: string; points: string[] }[];
  };
  solution: {
    metaTitle: string;
    metaDescription: string;
    badge: string;
    title: string;
    intro: string;
    howTitle: string;
    howBody: string;
    materials: { name: string; detail: string }[];
    prototypeTitle: string;
    prototypeBody: string;
    implementsTitle: string;
    implementsBody: string;
    partners: string[];
  };
  team: {
    metaTitle: string;
    metaDescription: string;
    badge: string;
    title: string;
    intro: string;
    members: { role: string; bio: string }[];
  };
  challenges: {
    metaTitle: string;
    metaDescription: string;
    badge: string;
    title: string;
    intro: string;
    videoChallenges: { title: string; description: string }[];
    challenge6Label: string;
    challenge6Title: string;
    challenge6Body: string;
    challenge6Link: string;
  };
};
