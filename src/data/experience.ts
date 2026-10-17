export interface IExperience {
  company: string;
  initials: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  companyColor: string;
  website?: string;
}

// From public/pdfs/Akindeju_CV.pdf; keep the two in sync.
export const experiences: IExperience[] = [
  {
    company: 'Benmore Technologies',
    initials: 'BT',
    role: 'Senior Software Engineer (Full Stack)',
    period: 'Nov 2025 - Present',
    description:
      'AI-powered custom software development company helping 100+ companies deploy software the right way.',
    highlights: [
      'Built GO-180, a veteran transition platform with 25+ modules across employment, financial, housing, insurance and more',
      'Migrated the platform from Heroku to AWS (VPC, RDS, Redis, S3, EC2) with zero-downtime CI/CD, cutting costs by 58%',
      'Created custom agent skills and orchestrated AI agents to speed up delivery, with rigorous code review to hold production standards',
    ],
    companyColor: '#2563EB',
    website: 'https://benmore.tech',
  },
  {
    company: 'Lendsqr',
    initials: 'LQ',
    role: 'Software Engineer (Mobile & Frontend)',
    period: 'Aug 2024 - Nov 2025',
    description:
      "Nigeria's leading digital lending platform serving millions of users across the lending ecosystem.",
    highlights: [
      'Managed, maintained and deployed 15+ mobile apps, including Irorun and Andray Finance, serving 3M+ active users',
      'Moved SnapCash from Expo to React Native CLI for Netcore push notifications, cutting development and deployment time by over 60%',
      'Kept the primary lender web platform at 100% uptime and reduced app crashes by 40% with a uniform component system',
      'Built a configurable form package in React Native, then shipped a Flutter version with AI agents in 3 weeks, reviewed to production standard',
    ],
    companyColor: '#349898',
    website: 'https://lendsqr.com',
  },
  {
    company: 'Assurdly',
    initials: 'AS',
    role: 'Software Engineer (Mobile)',
    period: 'Dec 2024 - Mar 2025',
    description:
      'Quality-as-a-Service product delivery company helping fintech and healthtech teams launch quality products.',
    highlights: [
      'Built the NorthQuest Financial app, improving user experience by 35%',
      'Led a critical React Native upgrade, improving stability by 60% and cutting build failures by 90%',
      'Rebuilt navigation, reducing drop-off by 36%, and shipped onboarding and bill payments with a 98% transaction success rate',
    ],
    companyColor: '#38CB89',
    website: 'https://assurdly.com',
  },
  {
    company: 'Provenier Innovation Limited',
    initials: 'PI',
    role: 'Full Stack Mobile Software Engineer',
    period: 'Nov 2023 - Jul 2024',
    description:
      'AI and data analytics startup transforming the digital landscape with cutting-edge solutions.',
    highlights: [
      'Led several high-profile projects, driving a 15% revenue increase with 96% client satisfaction',
      'Engineered DreamVC, an investor recommendation system that improved matching accuracy by 40% and sped up funding by 25%',
      'Built Mira, a restaurant management app later acquired by Chowdeck, increasing restaurant efficiency by 42%',
    ],
    companyColor: '#8B5CF6',
  },
];

// Two chapters at one school: a field switch, and a higher finish.
export const education = {
  school: 'Federal University of Technology, Akure',
  story:
    'I started at FUTA in 2018 in Meteorology and Climate Science and held a 4.50. In 2023 I switched to Software Engineering, rebuilt from the ground up, and graduated in 2026 with a 4.65.',
  steps: [
    {
      years: '2018 to 2023',
      field: 'Meteorology and Climate Science',
      grade: '4.50',
      note: 'where I started',
    },
    {
      years: '2023 to 2026',
      field: 'B.Sc. Software Engineering',
      grade: '4.65',
      note: 'switched fields and finished higher',
    },
  ],
};
