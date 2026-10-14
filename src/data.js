// Everything the site says lives here — edit this file to update the portfolio.

export const profile = {
  name: 'Atul Lilhare',
  first: 'Atul',
  role: 'SDE II',
  // Typed out one after another in the hero.
  roles: [
    'SDE II at CUBE.',
    'MERN stack developer.',
    'React Native developer.',
    'Full-stack engineer.',
    'I build things that ship.',
  ],
  company: 'CUBE',
  companyUrl: 'https://cube.ms',
  years: 4,
  since: 2022,
  github: 'https://github.com/heyAtul',
  githubHandle: 'heyAtul',
  leetcode: 'https://leetcode.com/u/MaiAtulHoon/',
  leetcodeHandle: 'MaiAtulHoon',
  linkedin: 'https://www.linkedin.com/in/atul-lilhare-27478b149',
  resume: 'https://drive.google.com/file/d/1R_TTSfZXYnTIwqnav7hQyLCsilZ9CQ_k/view',
  email: '442atulilhare@gmail.com',
  timezone: 'Asia/Kolkata',
  tzLabel: 'IST',
}

// The live site, for search engines. If the domain changes, also update the
// canonical/og:url tags in index.html and public/robots.txt + public/sitemap.xml.
export const site = {
  url: 'https://atulcode.com/',
  name: 'AtulCode',
  title: 'Atul Lilhare (AtulCode) — MERN & React Native Developer',
}

// The scrolling ticker under the hero.
export const stack = [
  'React Native',
  'Expo',
  'EAS Build',
  'OTA Updates',
  'React Navigation',
  'Push Notifications',
  'iOS & Android',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Redux Toolkit',
  'Material UI',
  'Tailwind CSS',
  'HOOPS Web Viewer',
  'Electron',
  'HTML5',
  'CSS3',
  'Node.js',
  'Express.js',
  'REST APIs',
  'Microservices',
  'MongoDB',
  'MySQL',
  'Redis',
  'Zod',
  'JWT',
  'SSO',
  'AWS S3',
  'AWS EC2',
  'AWS IAM',
  'Docker',
  'GitLab CI/CD',
  'Sentry',
  'Cypress',
  'Postman',
  'Git',
  'Claude Code',
  'Chrome Extensions',
]

export const about =
  'I’m a software developer who likes the whole stack — from the pixel a user taps to the query that answers it. For four years I’ve been shipping production software, first at Techture and now at CUBE. I build for the web with React and for phones with React Native, and in between I make my own tools: browser extensions, APIs, full-stack apps.'

export const stats = [
  { value: 4, suffix: '+', label: 'Years shipping production code' },
  { value: 7, suffix: '', label: 'Public repos on GitHub' },
  { value: 3, suffix: '', label: 'Platforms I build for — web, iOS, Android' },
]

// Shown under the stats in the About section.
export const highlights = [
  {
    label: 'Recognition',
    items: ['Impact Award — CUBE Exponent 2026', 'Employee of the Month — CUBE, May 2025'],
  },
  {
    label: 'Problem solving',
    items: ['380+ DSA problems solved on LeetCode and GeeksforGeeks'],
  },
  {
    label: 'Education',
    items: ['B.E., Computer Science — G H Raisoni Institute of Engineering and Technology, Nagpur (2018–2022)'],
  },
]

export const experience = [
  {
    company: 'CUBE.MS',
    url: 'https://cube.ms',
    role: 'Software Development Engineer II · Gurugram, HR',
    period: 'Nov 2023 — Present',
    years: 3,
    current: true,
    points: [
      'Led development of CUBE’s cross-platform iOS and Android app across 18+ releases (1,000+ installs, 280+ monthly active users), with EAS Build, OTA and forced updates, push notifications and Sentry.',
      'Developed the mobile Forms module that replaced paper-based site forms for inspections, progress updates and custom forms (33,000+ created), with multi-level approvals completed in a median of under 3 days, feeding contract progress and billing.',
      'Designed a cross-platform form-validation engine: one shared React hook runs rule-based checks (required, length, range, file count) for React Native and web, with live and submit-time validation.',
      'Built 25+ custom React hooks shared by web and mobile, so both apps run on one logic layer without duplicate code.',
      'Optimized the Model Tree API, used by 7 product modules, by moving element data for large merged models from MongoDB to compressed archives on AWS S3 (p95 latency under 110 ms).',
      'Worked on the multi-level Reviews approval workflow: configurable review flows with per-level reviewers, stage transitions and checklists, review notifications, and server-side filtering and sorting.',
    ],
    stack: [
      {
        label: 'Mobile',
        items: ['React Native', 'Expo', 'EAS Build', 'OTA Updates', 'React Navigation', 'Push Notifications'],
      },
      {
        label: 'Web',
        items: ['React.js', 'TypeScript', 'Redux Toolkit', 'Material UI', 'Tailwind CSS', 'HOOPS Web Viewer'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Redis', 'Zod', 'JWT', 'SSO'],
      },
      {
        label: 'Cloud & Tools',
        items: ['AWS S3', 'AWS EC2', 'Docker', 'GitLab CI/CD', 'Sentry', 'Cypress', 'Claude Code'],
      },
    ],
  },
  {
    company: 'Techture',
    url: 'https://techture.global',
    role: 'Software Development Engineer I · Gurugram, HR',
    period: 'Jul 2022 — Oct 2023',
    years: 1,
    current: false,
    points: [
      'Built a clash-test system on the HOOPS Web Viewer API that detects collisions between model elements (480+ tests, 400,000+ clashes flagged in 45 projects), so teams catch design issues early and avoid costly rework. Added versioned re-runs to compare against earlier runs, faster clash lists with virtualized tables, role-based access and Cypress tests.',
      'Built version history for cost estimates that tracks line items, quantities, measurements and files across 9 linked MySQL tables, letting users view any past date and restore an older version as a new one without losing history.',
    ],
    stack: [
      {
        label: 'Stack',
        items: ['React.js', 'HOOPS Web Viewer', 'Node.js', 'MongoDB', 'MySQL', 'Cypress'],
      },
    ],
  },
]

// The Skills section. `logo` is a Simple Icons slug, or one of the line icons in
// SkillIcon.jsx for things that have no brand mark.
export const skills = [
  {
    title: 'Mobile',
    icon: 'mobile',
    blurb: 'Cross-platform apps in React Native and Expo — one codebase, a native feel on iOS and Android.',
    items: [
      { name: 'React Native', logo: 'react' },
      { name: 'Expo', logo: 'expo' },
      { name: 'EAS Build', logo: 'expo' },
      { name: 'OTA Updates', logo: 'refresh' },
      { name: 'React Navigation', logo: 'route' },
      { name: 'Push Notifications', logo: 'bell' },
    ],
  },
  {
    title: 'Frontend',
    icon: 'web',
    blurb: 'Fast, accessible interfaces in React and TypeScript — in the browser and on the desktop.',
    items: [
      { name: 'JavaScript', logo: 'javascript' },
      { name: 'TypeScript', logo: 'typescript' },
      { name: 'React.js', logo: 'react' },
      { name: 'Redux Toolkit', logo: 'redux' },
      { name: 'Material UI', logo: 'mui' },
      { name: 'Tailwind CSS', logo: 'tailwindcss' },
      { name: 'HOOPS Web Viewer', logo: 'cube' },
      { name: 'Electron', logo: 'electron' },
      { name: 'HTML5', logo: 'html5' },
      { name: 'CSS3', logo: 'css' },
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    blurb: 'APIs and services in Node.js and Express, backed by MongoDB, MySQL and Redis, with real auth.',
    items: [
      { name: 'Node.js', logo: 'nodedotjs' },
      { name: 'Express.js', logo: 'express' },
      { name: 'REST APIs', logo: 'api' },
      { name: 'Microservices', logo: 'nodes' },
      { name: 'MongoDB', logo: 'mongodb' },
      { name: 'MySQL', logo: 'mysql' },
      { name: 'Redis', logo: 'redis' },
      { name: 'Zod', logo: 'zod' },
      { name: 'JWT', logo: 'jsonwebtokens' },
      { name: 'SSO', logo: 'key' },
    ],
  },
  {
    title: 'Cloud, DevOps & Tools',
    icon: 'cloud',
    blurb: 'Shipping, testing and monitoring — keeping production healthy, plus the AI that speeds it up.',
    items: [
      { name: 'AWS S3', logo: 'aws' },
      { name: 'AWS EC2', logo: 'aws' },
      { name: 'AWS IAM', logo: 'aws' },
      { name: 'Docker', logo: 'docker' },
      { name: 'GitLab CI/CD', logo: 'gitlab' },
      { name: 'Sentry', logo: 'sentry' },
      { name: 'Cypress', logo: 'cypress' },
      { name: 'Postman', logo: 'postman' },
      { name: 'Git', logo: 'git' },
      { name: 'Claude Code', logo: 'claude' },
      { name: 'Chrome Extensions', logo: 'googlechrome' },
    ],
  },
]

// Shown at the end of any project card with `madeWithClaude: true`.
export const claudeCredit = {
  label: 'Made using Claude',
  note: 'Idea to existence with Claude',
}

export const projectFilters = ['All', 'Full-stack', 'Frontend', 'Backend', 'Extension']

export const projects = [
  {
    id: 'yourlabtest',
    categories: ['Full-stack', 'Frontend'],
    name: 'YourLabTest',
    kind: 'Monorepo',
    blurb:
      'Community-funded supplement testing, in beta: users vote on supplements and pool money for unbiased lab tests, because one lab test is too expensive for one person. Browse categories like whey protein and creatine, filter by brand and vote; an admin panel manages brands and products. A React + MUI client and an Express 5 + MongoDB API.',
    tags: ['React', 'MUI', 'Tailwind', 'Express 5', 'MongoDB'],
    repo: 'https://github.com/heyAtul/YourLabTest',
    visual: 'labtest',
  },
  {
    id: 'chat',
    categories: ['Full-stack', 'Backend'],
    name: 'Real-time Chat',
    kind: 'Full-stack App',
    blurb:
      'A WhatsApp-style messenger. Log in with a one-time code sent to your email, search for people, and chat one-to-one in real time over Socket.IO, with every message saved in MongoDB. The React client runs on Cloudflare and the Express API on Render.',
    tags: ['React', 'Socket.IO', 'Express 5', 'MongoDB', 'Resend'],
    repo: 'https://github.com/heyAtul/Chat',
    live: 'https://chat.atulcode.com',
    visual: 'chat',
  },
  {
    id: 'url-shortener',
    categories: ['Full-stack', 'Backend'],
    name: 'URL Shortener',
    kind: 'Full-stack App',
    blurb:
      'A link shortener with user accounts. Sign up with a one-time code sent to your email, then shorten links, track their clicks, and download a QR code for any of them. Server-rendered Express 5 pages with JWT sessions in httpOnly cookies, deployed on Vercel.',
    tags: ['Node.js', 'Express 5', 'MongoDB', 'JWT', 'Vercel'],
    repo: 'https://github.com/heyAtul/URLSHORTNER',
    live: 'https://url.atulcode.com',
    visual: 'shortener',
  },
  {
    id: 'portfolio',
    categories: ['Frontend'],
    name: 'This Portfolio',
    kind: 'Website',
    blurb:
      'The site you’re scrolling. React 19 and Vite, with Lenis smooth scrolling and Motion for scroll-linked animation — tuned to stay at 60fps.',
    tags: ['React 19', 'Vite', 'Motion', 'Lenis'],
    repo: 'https://github.com/heyAtul/Portfolio',
    visual: 'portfolio',
    madeWithClaude: true,
  },
  {
    id: 'css-injector',
    categories: ['Extension'],
    name: 'Custom CSS Injector',
    kind: 'Chrome Extension',
    blurb:
      'Pick any element on any site, write CSS for it, and have it reapplied on every visit — even after the site renames its ids and classes. Ranked selectors plus an element fingerprint re-find the node; a DevTools sidebar pane gives exact control.',
    tags: ['Manifest V3', 'JavaScript', 'DevTools API', 'Zero dependencies'],
    repo: 'https://github.com/heyAtul/DOM-Styler-Custom-CSS-Injector',
    live: 'https://chromewebstore.google.com/detail/custom-css-injector/aebiehgbcchamlofdpcmdlfohffohghn',
    liveLabel: 'Chrome Web Store',
    liveCursor: 'Install',
    // Users and rating are fetched live from the Chrome Web Store (see useStoreStats.js).
    storeId: 'aebiehgbcchamlofdpcmdlfohffohghn',
    visual: 'injector',
    madeWithClaude: true,
  },
]
