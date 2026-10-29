// Wòjú facts are taken from its git history and changelog.
export const woju = {
  url: 'https://usewoju.com',
  tagline:
    'Video calls, group calls and encrypted chat with the people you know.',
  facts: [
    { value: '2 days', label: 'to a working v1' },
    { value: '96', label: 'releases in 13 days' },
    { value: '3', label: 'platforms: web, iOS, Android' },
    { value: '1', label: 'engineer, with AI agents' },
  ],
  features: [
    'HD video and group calls with live filters and picture-in-picture',
    'End-to-end encrypted chat, voice notes, replies and reactions',
    'View once: any message, seen one time, then deleted everywhere',
    'Vibez, the status feed, with likes and comments',
    'Sparks: earn them as you chat, call and post',
    'Shuffle, to meet someone new',
    'An admin dashboard with milestones and an audit log',
  ],
  stack: [
    'Go',
    'PostgreSQL',
    'WebSockets',
    'WebRTC',
    'Next.js',
    'React Native',
    'Swift',
    'Kotlin',
    'Cloudinary',
    'Firebase',
  ],
};

// The build, day by day. A real sequence, so it is numbered.
export const wojuDays = [
  {
    day: 1,
    date: 'Oct 5',
    versions: '1.0',
    title: 'Launch',
    text: 'Video calls and chat, on the web, iOS and Android.',
  },
  {
    day: 2,
    date: 'Oct 6',
    versions: '1.1 to 1.14',
    title: 'Fourteen releases',
    text: 'Notifications, voice notes, replies and reactions, native incoming calls, HD calls with filters and picture-in-picture, and Status.',
  },
  {
    day: 3,
    date: 'Oct 7',
    versions: '1.15 to 1.19',
    title: 'Run it like a product',
    text: 'Admin dashboard, friends and message requests, streaks, @mentions and nicknames.',
  },
  {
    day: 5,
    date: 'Oct 9',
    versions: '1.20',
    title: 'Shuffle',
    text: 'Swipe to meet someone new.',
  },
  {
    day: 6,
    date: 'Oct 10',
    versions: '1.21 to 1.32',
    title: 'Private by default',
    text: 'End-to-end encrypted messages, delete for everyone, Wòjú Community, link previews and sharing.',
  },
  {
    day: 7,
    date: 'Oct 11',
    versions: '1.33 to 1.38',
    title: 'Always reachable',
    text: 'Notifications when the app is closed, device management and the Android download.',
  },
  {
    day: 8,
    date: 'Oct 12',
    versions: '1.39 to 1.41',
    title: 'A new look',
    text: 'Continue with Google, a redesign and a FaceTime-style self view.',
  },
  {
    day: 9,
    date: 'Oct 13',
    versions: '1.42 to 1.43',
    title: 'Open to the world',
    text: 'A homepage for the web, and control over who sees your personal details.',
  },
  {
    day: 13,
    date: 'Oct 17',
    versions: '1.44 to 1.45',
    title: 'Simpler, and private',
    text: 'View once for any message, and points became Sparks while streaks went away.',
  },
];
