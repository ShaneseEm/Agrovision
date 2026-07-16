import type { Dictionary } from "../dictionary";

const dict: Dictionary = {
  meta: {
    homeTitle: "AgroVision | Digital Print",
    homeDescription:
      "AgroVision's Digital Print: mission, problem statement, floating-gardens solution, think tank team, and E-LAB challenges.",
  },
  nav: {
    home: "Home",
    problem: "The Problem",
    solution: "Our Solution",
    team: "Team",
    challenges: "E-LAB Challenges",
    toggleMenu: "Toggle navigation menu",
    toggleTheme: "Toggle light and dark mode",
    languageSwitcher: "Change language",
  },
  footer: {
    tagline:
      "Supporting farmers with sustainable solutions, modern technology, and market access to improve food security in South Sudan.",
    explore: "Explore",
    aboutProject: "About This Project",
    university: "African Leadership University",
    track: "Innovation and Business Track (IBT) | E-Lab",
    grandChallenge: "Grand Challenge: Agriculture & Food Security",
    communityFocus: "Community Focus: South Sudan",
    rights: "AgroVision Think Tank. All rights reserved.",
  },
  home: {
    metaTitle: "AgroVision | Digital Print",
    metaDescription:
      "AgroVision's Digital Print: mission, problem statement, floating-gardens solution, think tank team, and E-LAB challenges.",
    badge: "African Leadership University · E-Lab Think Tank",
    heroTitleBefore: "Growing ",
    heroTitleHighlight: "food security",
    heroTitleAfter: " in South Sudan, one floating garden at a time.",
    heroSubtitle:
      "AgroVision's mission is to support farmers with sustainable farming solutions, modern technology, and market access to improve food security, increase productivity, and strengthen communities.",
    ctaPrimary: "See Our Solution",
    ctaSecondary: "Learn About the Problem",
    stats: [
      {
        value: "90,000+",
        label: "People displaced by flooding in Upper Nile State over 3 years",
        icon: "flood",
      },
      {
        value: "7.1M",
        label: "People facing acute food insecurity nationwide (2023 lean season)",
        icon: "nutrition",
      },
      {
        value: "80%",
        label: "Of South Sudan's population relies on farming and livestock",
        icon: "agriculture",
      },
    ],
    communityTitle: "A community-based solution",
    communityBody:
      "AgroVision is a community-based organization dedicated to reducing malnutrition and food insecurity in South Sudan. We work alongside local farmers, community leaders, agricultural experts, NGOs, and government partners to design solutions that survive and scale in a flood-prone environment.",
    meetTeam: "Meet the team",
    continentTitle: "Rooted Across the Continent",
    continentBody:
      "South Sudan is one piece of a much bigger picture — sustainable, climate-resilient farming is a shared challenge and a shared opportunity across Africa.",
    exploreTitle: "Explore the Digital Print",
    quickLinks: [
      {
        href: "/problem",
        title: "The Problem",
        description:
          "Climate-driven flooding in Upper Nile State is destroying farmland and deepening food insecurity.",
        icon: "warning",
      },
      {
        href: "/solution",
        title: "Our Solution",
        description:
          "Floating gardens: a flood-resilient farming method built from locally available materials.",
        icon: "eco",
      },
      {
        href: "/team",
        title: "The Team",
        description: "Meet the AgroVision think tank behind the research and the solution.",
        icon: "handshake",
      },
      {
        href: "/challenges",
        title: "E-LAB Challenges",
        description: "Follow our journey through all six E-LAB Think Tank challenges.",
        icon: "emoji_events",
      },
    ],
  },
  problem: {
    metaTitle: "The Problem | AgroVision",
    metaDescription: "Why flooding and food insecurity in South Sudan demand a new solution.",
    badge: "Grand Challenge: Agriculture & Food Security · South Sudan",
    title: "The Problem",
    intro:
      "According to the United Nations, climate change has intensified flooding in South Sudan's Upper Nile State, displacing more than 90,000 people over the past three years. The recurrent floods have damaged agricultural land, disrupted food production, and limited access to food, contributing to rising levels of food insecurity and malnutrition, particularly among women and children.",
    statementTitle: "Problem Statement",
    statementBody:
      "Smallholder farmers in rural areas — especially in Central Equatoria, Jonglei, Unity, and Western Bahr el Ghazal — struggle to grow enough food to feed their families, let alone make a profit. This is driven by a harsh mix of poor infrastructure, scarce farming inputs, the lingering impacts of war, and worsening climate shocks. Despite ongoing interventions, many farmers lack access to climate-resilient agricultural practices that could help them adapt to recurring floods and sustain food production. This challenge threatens livelihoods, community resilience, and long-term food security.",
    whoTitle: "Who Is Affected?",
    affectedGroups: [
      {
        name: "Smallholder farmers",
        detail:
          "Making up the vast majority of the population, these families usually farm less than two hectares of staples like sorghum, maize, and groundnuts.",
      },
      {
        name: "Women",
        detail:
          "Women handle an estimated 60% of all farm labor yet face barriers to land ownership, credit, and training.",
      },
      {
        name: "Internally Displaced Persons",
        detail:
          "The civil war uprooted around 2 million people, many of them farmers who still cannot safely return to productive land.",
      },
      {
        name: "Children",
        detail:
          "Severe acute malnutrition among children under five in places like Jonglei and Unity often surpasses emergency levels.",
      },
      {
        name: "Youth",
        detail:
          "Seeing no viable future in farming, many young people are leaving rural areas, shrinking the agricultural workforce.",
      },
    ],
    pestleTitle: "PESTLE Analysis",
    pestleIntro:
      "A breakdown of the external macro-environmental factors shaping agriculture in South Sudan — essential for designing interventions that can survive and scale in this context.",
    pestle: [
      {
        letter: "P",
        title: "Political",
        points: [
          "Civil war (2013-2018) and continued localized violence devastated infrastructure and displaced millions.",
          "Agriculture relies heavily on foreign aid rather than sustainable state funding.",
          "Land Act protections exist on paper, but enforcement is weak against elites and armed groups.",
        ],
      },
      {
        letter: "E",
        title: "Economic",
        points: [
          "The economy depends on oil for ~90% of revenue, leaving it fragile to price shocks and hyperinflation.",
          "Rural banking and crop insurance are virtually non-existent.",
          "Poor roads and no cold storage cause 30-40% post-harvest losses.",
        ],
      },
      {
        letter: "S",
        title: "Social",
        points: [
          "War displaced around 4 million people, sharply reducing food production.",
          "Women do 60-70% of farm work but face major barriers to land, loans, and training.",
          "Ethnic tensions make collaboration on shared agricultural projects difficult.",
        ],
      },
      {
        letter: "T",
        title: "Technological",
        points: [
          "Farming is overwhelmingly manual; tractors are rare and mostly kept near the capital.",
          "Poor mobile network coverage blocks digital ag-tech adoption common elsewhere in the region.",
          "Little local agricultural research exists to develop climate-suited crop varieties.",
        ],
      },
      {
        letter: "L",
        title: "Legal",
        points: [
          "Land disputes are handled by customary courts that often favor the wealthy and powerful.",
          "No official seed certification framework discourages investment in improved seeds.",
          "Weak cooperative law makes it hard for farmers to organize for loans or better prices.",
        ],
      },
      {
        letter: "E",
        title: "Environmental",
        points: [
          "Extreme flooding from 2019-2022 submerged vast farmland in Jonglei and Unity states.",
          "Unpredictable rainfall is making traditional farming calendars obsolete.",
          "Almost all farming relies on rainfall, with little irrigation infrastructure to buffer weather shocks.",
        ],
      },
    ],
  },
  solution: {
    metaTitle: "Our Solution | AgroVision",
    metaDescription: "Floating gardens: a flood-resilient farming solution for South Sudan.",
    badge: "Our Solution",
    title: "Floating Gardens",
    intro:
      "An innovative farming method that enables communities to grow crops on floating beds made from locally available materials. These gardens rise and fall with water levels, making them ideal for flood-prone areas and ensuring year-round food production.",
    howTitle: "How It Works",
    howBody:
      "Floating gardens are built from layers of locally sourced, buoyant materials. Because the beds float on the water's surface, they rise and fall naturally with flood levels — protecting crops instead of losing them when the water comes.",
    materials: [
      {
        name: "Water hyacinth",
        detail: "An abundant invasive plant repurposed as buoyant, decomposing growing material.",
      },
      {
        name: "Reeds",
        detail: "Locally harvested reeds bind the floating bed and provide structural support.",
      },
      {
        name: "Compost",
        detail: "Organic compost layered on top gives crops a nutrient-rich rooting medium.",
      },
    ],
    prototypeTitle: "The Prototype",
    prototypeBody:
      "Our think tank designed and tested a small-scale floating garden prototype to validate the concept: a buoyant frame of reeds and water hyacinth, topped with a compost growing bed, anchored to allow it to safely rise and fall with the water level.",
    implementsTitle: "Who Implements It",
    implementsBody:
      "The solution is implemented through training and community support programs, bringing together:",
    partners: [
      "Local farmers",
      "Community leaders",
      "Agricultural experts",
      "NGOs",
      "Government partners",
    ],
  },
  team: {
    metaTitle: "Our Team | AgroVision",
    metaDescription: "Meet the AgroVision E-Lab think tank.",
    badge: "AgroVision Think Tank",
    title: "Our Team",
    intro: "The people behind the research, the problem framing, and the floating gardens solution.",
    members: [
      { role: "Leader", bio: "Fun fact: I love turning big community problems into business solutions! 😊" },
      { role: "Secretary", bio: "Fun fact: My days aren't complete without at least 2 movies — I'm a certified movie addict. 😭" },
      { role: "Developer", bio: "Fun fact: My favorite hobby is professional sleeping. 😴" },
      { role: "Video Editor", bio: "Fun fact: I like trying new things — when people trust me and I have the courage, I can do great things." },
      { role: "Researcher", bio: "Fun fact: I can play 3 different instruments. 😭" },
    ],
  },
  challenges: {
    metaTitle: "E-LAB Challenges | AgroVision",
    metaDescription: "AgroVision's journey through all six E-LAB Think Tank challenges.",
    badge: "Innovation and Business Track (IBT) · E-Lab",
    title: "The Six E-LAB Challenges",
    intro:
      "Every AgroVision think tank member documented our journey through all six E-LAB challenges — from discovery to this digital print.",
    videoChallenges: [
      { title: "Challenge 1", description: "" },
      { title: "Challenge 2", description: "" },
      { title: "Challenge 3", description: "" },
      { title: "Challenge 4", description: "" },
      { title: "Challenge 5", description: "" },
    ],
    challenge6Label: "Digital Print · Challenge 6",
    challenge6Title: "Challenge 6: Digital Print",
    challenge6Body:
      "This website is Challenge 6. It brings together our mission, problem statement, solution, prototype, and think tank team in one place — documenting our full E-LAB journey.",
    challenge6Link: "You're already here — explore the site",
  },
};

export default dict;
