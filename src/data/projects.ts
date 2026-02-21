export interface IFeaturedProject {
  name: string;
  description: string;
  category: 'mobile' | 'web' | 'opensource';
  stack: string[];
  link: string;
  featured: boolean;
}

export const featuredProjects: IFeaturedProject[] = [
  {
    name: 'Lendsqr Ecosystem',
    description: "Managed 15+ fintech mobile apps serving 3M+ active users across Nigeria's digital lending ecosystem. Deployed production-grade apps to App Store and Google Play.",
    category: 'mobile',
    stack: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
    link: 'https://lendsqr.com',
    featured: true,
  },
  {
    name: 'Mira',
    description: 'Restaurant management app featuring pay-outs tracking, order tracking, and inventory management. Now acquired by Chowdeck. Increased restaurant efficiency by 42%.',
    category: 'mobile',
    stack: ['React Native', 'Node.js', 'MongoDB'],
    link: 'https://drive.google.com/drive/folders/1U8b0pgtXhi9pdzRvrks0fLQhZU0mp1XA?usp=share_link',
    featured: true,
  },
  {
    name: 'DreamVC',
    description: 'Investor Recommendation Model System that enhanced investor matching accuracy by 40% and accelerated funding timelines by 25%.',
    category: 'web',
    stack: ['React.js', 'Node.js', 'AI/ML', 'TypeScript'],
    link: '#',
    featured: true,
  },
  {
    name: 'ByteLock',
    description: 'Open-source cipher/decipher algorithm for encrypting and decrypting sensitive data. Published npm package used in production apps.',
    category: 'opensource',
    stack: ['TypeScript', 'npm', 'Cryptography'],
    link: 'https://github.com/akindejuh/bytelock',
    featured: true,
  },
  {
    name: 'React Google Cloud Translate',
    description: 'Open-source React.js wrapper around Google Cloud Translation API. Enables seamless multilingual support in applications.',
    category: 'opensource',
    stack: ['React.js', 'TypeScript', 'Google Cloud'],
    link: 'https://github.com/akindejuh/react-google-cloud-translate',
    featured: true,
  },
  {
    name: 'Whispr',
    description: 'Secure real-time chat application using ByteLock encryption. Built for speed and scalability with instant messaging.',
    category: 'mobile',
    stack: ['React Native', 'Socket.io', 'Node.js', 'ByteLock'],
    link: 'https://drive.google.com/file/d/17yJEqFRr7CD0utOS4njOkToOi6S8YttJ/view?usp=sharing',
    featured: true,
  },
  {
    name: 'NorthQuest Financial',
    description: 'Financial application with onboarding and bill payment features. Achieved 98% transaction success rate for financial operations.',
    category: 'mobile',
    stack: ['React Native', 'TypeScript', 'Redux'],
    link: '#',
    featured: true,
  },
  {
    name: 'Invok',
    description: 'Contributed to a modern, lightweight, self-hosted serverless framework built in Rust. Open-source collaboration.',
    category: 'opensource',
    stack: ['Rust', 'Serverless', 'Cloud'],
    link: 'https://github.com/alob-mtc/invok',
    featured: true,
  },
  {
    name: 'React Native Custom Liveness',
    description: 'Native liveness detection module for identity verification with 12 commands (blink, smile, head turns, video, speech). On-device ML using Google ML Kit and Apple Vision — no cloud dependency.',
    category: 'mobile',
    stack: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Google ML Kit', 'Apple Vision'],
    link: '#',
    featured: true,
  },
];

export const projectCategories = ['All', 'Mobile', 'Web', 'Open Source'] as const;
