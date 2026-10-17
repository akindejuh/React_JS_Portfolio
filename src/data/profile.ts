export const profile = {
  name: 'Michael Akindeju',
  fullName: 'Akindeju Oluwagbemiga Michael',
  role: 'Software Engineer',
  company: 'Benmore Technologies',
  companyUrl: 'https://benmore.tech',
  location: 'Nigeria',
  email: 'akindejuhmikel@gmail.com',
  cv: '/pdfs/Akindeju_CV.pdf',
  intro:
    'I build mobile, web and backend products end to end, and I ship them fast. AI writes most of my code. I write the spec, review every diff by hand, and own everything that goes out.',
};

// The numbers a hiring manager asks about, one per beat of the keynote.
export const stats = [
  { value: '4+', unit: 'years', line: 'shipping production software for fintech, AI and consumer products.' },
  { value: '15+', unit: 'apps', line: 'live on the App Store and Google Play that I have built or maintained.' },
  { value: '3M+', unit: 'people', line: 'use apps I have worked on, across Nigeria’s digital lending ecosystem.' },
  { value: '2', unit: 'days', line: 'from an empty repo to Wòjú with chat, HD video calls and notifications.' },
];

export const method = {
  statement:
    'I treat AI as my engineering team. I write the spec, agents write the code, and I review every diff myself before it merges. That is how Wòjú went from an empty repo to video calls, chat and notifications in two days, and how I keep shipping production code at a pace that used to take a whole team.',
  principles: [
    { title: 'Spec before code', text: 'Every feature starts as a written design: what it does, what it must never do, and how we will know it works.' },
    { title: 'Every diff, read by a human', text: 'Agents write fast. I read every line they produce, push back, and only merge what I would sign my name to.' },
    { title: 'Tests are the gate', text: 'Nothing ships on vibes. Each change lands with the check that would catch it breaking, backend to mobile.' },
    { title: 'Release daily', text: 'Small, reviewed releases with a changelog entry for each one. Wòjú shipped 89 of them in its first 13 days.' },
  ],
  toolbox: [
    'TypeScript', 'React Native', 'React', 'Next.js', 'Node.js', 'Go', 'PostgreSQL', 'Swift', 'Kotlin', 'Rust',
    'WebRTC', 'GraphQL', 'Firebase', 'Docker', 'Claude Code', 'App Store Connect', 'Google Play Console', 'Figma',
  ],
};
