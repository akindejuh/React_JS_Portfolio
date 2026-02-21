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

export const experiences: IExperience[] = [
  {
    company: 'Benmore Technologies',
    initials: 'BT',
    role: 'Software Engineer',
    period: '2025 - Present',
    description: 'AI-powered custom software development company helping 100+ companies deploy software the right way.',
    highlights: [
      'Building scalable software solutions with AI-powered development workflows',
      'Collaborating with cross-functional teams across the US and Africa',
    ],
    companyColor: '#2563EB',
    website: 'https://benmore.tech',
  },
  {
    company: 'Lendsqr',
    initials: 'LQ',
    role: 'Software Engineer (Mobile & Frontend)',
    period: 'Aug 2024 - 2025',
    description: "Nigeria's leading digital lending platform serving millions of users across the lending ecosystem.",
    highlights: [
      'Managed 15+ fintech mobile apps serving 3M+ active users',
      'Migrated SnapCash from Expo to React Native CLI, reducing deployment time by 30%',
      'Designed configurable form package for customizable loan applications',
      'Maintained lender web platform with 97% uptime, reduced crashes by 40%',
    ],
    companyColor: '#349898',
    website: 'https://lendsqr.com',
  },
  {
    company: 'Assurdly',
    initials: 'AS',
    role: 'Software Engineer (Mobile)',
    period: 'Dec 2024 - Mar 2025',
    description: 'Quality-as-a-Service product delivery company helping fintech and healthtech teams launch quality products.',
    highlights: [
      'Built NorthQuest Financial Application, improving UX by 35%',
      'Executed React Native framework downgrade, improving stability by 60%',
      'Redesigned navigation system, reducing user drop-off by 25%',
      'Achieved 98% transaction success rate for financial operations',
    ],
    companyColor: '#38CB89',
    website: 'https://assurdly.com',
  },
  {
    company: 'Provenier Innovation Limited',
    initials: 'PI',
    role: 'Full Stack Mobile Software Engineer',
    period: 'Nov 2023 - Jul 2024',
    description: 'AI and data analytics startup transforming the digital landscape with cutting-edge solutions.',
    highlights: [
      'Enhanced project delivery accuracy by 24% through technical assessments',
      'Engineered DreamVC investor recommendation system, improving matching by 40%',
      'Built Mira restaurant app (acquired by Chowdeck), increasing efficiency by 42%',
      'Drove 15% revenue increase while maintaining 96% client satisfaction',
    ],
    companyColor: '#8B5CF6',
  },
];
