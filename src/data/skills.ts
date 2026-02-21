export interface ISkill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'backend' | 'design';
}

export const skills: ISkill[] = [
  { name: 'TypeScript', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'Swift', category: 'language' },
  { name: 'Kotlin', category: 'language' },
  { name: 'Rust', category: 'language' },
  { name: 'HTML/CSS', category: 'language' },
  { name: 'SQL', category: 'language' },
  { name: 'React Native', category: 'framework' },
  { name: 'React.js', category: 'framework' },
  { name: 'Redux', category: 'framework' },
  { name: 'Zustand', category: 'framework' },
  { name: 'Tailwind CSS', category: 'framework' },
  { name: 'React Query', category: 'framework' },
  { name: 'Framer Motion', category: 'framework' },
  { name: 'Node.js', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'Firebase', category: 'backend' },
  { name: 'Git', category: 'tool' },
  { name: 'App Store Connect', category: 'tool' },
  { name: 'Google Play Console', category: 'tool' },
  { name: 'CodePush (OTA)', category: 'tool' },
  { name: 'Docker', category: 'tool' },
  { name: 'Figma', category: 'design' },
  { name: 'Framer', category: 'design' },
];

export const skillCategories = [
  { key: 'language' as const, label: 'Languages' },
  { key: 'framework' as const, label: 'Frameworks' },
  { key: 'backend' as const, label: 'Backend & Data' },
  { key: 'tool' as const, label: 'Tools & Platforms' },
  { key: 'design' as const, label: 'Design' },
];

export const marqueeSkills = [
  'TypeScript', 'React Native', 'React.js', 'Node.js', 'GraphQL',
  'Swift', 'Kotlin', 'Rust', 'Tailwind', 'Redux', 'Firebase',
  'MongoDB', 'Docker', 'Git', 'Figma',
];
