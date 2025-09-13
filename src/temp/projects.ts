// eslint-disable-next-line no-unused-vars
import { IWorkCard } from 'src/components/work-card';

export const work_done = [
  {
    title: 'Custom Configurable Form at Lendsqr',
    desc: 'Designed and maintained a dynamic form system that allows lenders to define custom input types (e.g., text fields, dropdowns, date pickers) based on required data specifications.',
  },
  {
    title: 'Open Source Translation Package',
    desc: 'Built a plug-and-play package leveraging Google Cloud Translation API to enable seamless multilingual support in applications.',
  },
  {
    title: 'Open Source Encryption & Decryption Algorithm',
    desc: 'Developed a lightweight and secure algorithm for encrypting and decrypting sensitive data, available for open-source use.',
  },
  {
    title: 'Financial Applications',
    desc: 'Contributed to the development and ongoing maintenance of multiple financial applications, successfully deployed on both the App Store and Google Play. Examples include CredLine, SnapCash, BlockaCash, Irorun, Standard Life, Lendsqr Admin and a lot more.',
  },
  {
    title: 'Whispr (Real-time Chat App)',
    desc: 'Created a real-time chat application with instant messaging features, designed for speed and scalability.',
  },
  {
    title: 'Expo to React Native CLI Migration',
    desc: 'Led the full migration of an application from Expo to React Native CLI, optimizing performance and enabling greater native customization.',
  },
];

export const my_projects: Array<{
  name: string;
  works: IWorkCard[];
}> = [
  {
    name: 'Maintained Apps in Store',
    works: [
      {
        project_name: 'Irorun (Android)',
        project_desc:
          'Irorun offers fast access to loans with no collaterals but peace of mind',
        project_link:
          'https://play.google.com/store/search?q=irorun&c=apps&hl=en',
        stack: {
          reactNative: true,
          android: true,
          javascript: true,
        },
      },
      {
        project_name: 'SnapCash (Android)',
        project_desc:
          'SnapCash offers everyday Nigerians cash in a snap; just when you need it.',
        project_link:
          'https://play.google.com/store/search?q=snapcash&c=apps&hl=en',
        project_dp: '',
        stack: {
          reactNative: true,
          android: true,
          javascript: true,
        },
      },
      {
        project_name: 'SnapCash (iOS)',
        project_desc:
          'SnapCash offers everyday Nigerians cash in a snap; just when you need it.',
        project_link:
          'https://apps.apple.com/ng/app/snapcash-loans-in-a-snap/id1634947408',
        project_dp: '',
        stack: {
          reactNative: true,
          ios: true,
          javascript: true,
        },
      },
      {
        project_name: 'Blocka Cash (iOS)',
        project_desc: 'Blocka Cash - Instant loans',
        project_link: 'https://apps.apple.com/ng/app/blocka-cash/id1548212165',
        project_dp: '',
        stack: {
          reactNative: true,
          ios: true,
          javascript: true,
        },
      },
      {
        project_name: 'Lendsqr Admin (Android)',
        project_desc: 'Manage your lending business operations',
        project_link:
          'https://play.google.com/store/search?q=lendsqr%20admin&c=apps&hl=en',
        project_dp: '',
        stack: {
          reactNative: true,
          android: true,
          javascript: true,
        },
      },
      {
        project_name: 'Nolt Finance (Android)',
        project_desc: 'NOLT Finance and Investment',
        project_link:
          'https://play.google.com/store/apps/details?id=com.finance.nolt.app&hl=en',
        project_dp: '',
        stack: {
          reactNative: true,
          android: true,
          javascript: true,
        },
      },
      {
        project_name: 'Urgent10k (Android)',
        project_desc: 'Need cash urgently? Urgent10k has got you covered',
        project_link:
          'https://play.google.com/store/search?q=urgent10k&c=apps&hl=en',
        project_dp: '',
        stack: {
          reactNative: true,
          android: true,
          javascript: true,
        },
      },
      {
        project_name: 'Urgent10k (iOS)',
        project_desc: 'Need cash urgently? Urgent10k has got you covered',
        project_link: 'https://apps.apple.com/ng/app/urgent10k/id1585140872',
        project_dp: '',
        stack: {
          reactNative: true,
          ios: true,
          javascript: true,
        },
      },
      {
        project_name: 'Kolo (Android)',
        project_desc: 'Kolo - Tame your bank accounts',
        project_link:
          'https://play.google.com/store/apps/details?id=com.kolomyapp&hl=en',
        project_dp: '',
        stack: {
          reactNative: true,
          android: true,
          javascript: true,
        },
      },
      {
        project_name: 'Standard Life (Android)',
        project_desc: 'Standard Life Digital Loans',
        project_link:
          'https://play.google.com/store/apps/details?id=rw.org.standardlife.app&hl=en',
        project_dp: '',
        stack: {
          reactNative: true,
          android: true,
          javascript: true,
        },
      },
    ],
  },
  {
    name: 'Mobile - React Native',
    works: [
      {
        project_name: 'Mira',
        project_desc: 'A Restaurant Management App',
        project_link:
          'https://drive.google.com/drive/folders/1U8b0pgtXhi9pdzRvrks0fLQhZU0mp1XA?usp=share_link',
        project_dp: require('./_shots/mobile-mira.png'),
        stack: {
          reactNative: true,
          android: true,
          ios: true,
          javascript: true,
        },
      },
      {
        project_name: 'Whispr',
        project_desc:
          'A Secure Chat App which makes use of ByteLock encryption',
        project_link:
          'https://drive.google.com/file/d/17yJEqFRr7CD0utOS4njOkToOi6S8YttJ/view?usp=sharing',
        project_dp: require('./_shots/whispr.png'),
        stack: {
          reactNative: true,
          android: true,
          ios: true,
          javascript: true,
        },
      },
      {
        project_name: 'Blogged',
        project_desc: 'A Blog App',
        project_link:
          'https://drive.google.com/drive/folders/1TL5FVaPutdtPTfBOmfYslIxp59Vf8781?usp=share_link',
        project_dp: require('./_shots/mobile-blogged.png'),
        stack: {
          reactNative: true,
          android: true,
          ios: true,
          javascript: true,
        },
      },
      {
        project_name: 'Tutor AI',
        project_desc: 'An app that tutors students using AI',
        project_link:
          'https://drive.google.com/drive/folders/1SDiltjNfcRTHHgTtN0vrZjXIHVEeN8ZD?usp=share_link',
        project_dp: require('./_shots/mobile-tutor-ai.jpg'),
        stack: {
          reactNative: true,
          android: true,
          ios: true,
          javascript: true,
        },
      },
      {
        project_name: 'Travel App',
        project_desc: 'A minimalistic travel app design',
        project_link:
          'https://drive.google.com/file/d/1IosFWiEh2xG4skEZbc0vezi3wW4dJYgd/view?usp=share_link',
        project_dp: require('./_shots/mobile-travel-app.png'),
        stack: {
          reactNative: true,
          android: true,
          ios: true,
          javascript: true,
        },
      },
      {
        project_name: 'FP News',
        project_desc: 'A news listing app',
        project_link:
          'https://drive.google.com/file/d/1GgkzBWrMsNS7Gp1PjQtcDhW5-amqUQTt/view',
        project_dp: require('./_shots/fp_news.png'),
        stack: {
          reactNative: true,
          android: true,
          ios: true,
          javascript: true,
        },
      },
      {
        project_name: 'KFS',
        project_desc:
          'An attendance app with fingerprint authentication for students.',
        project_link:
          'https://drive.google.com/file/d/1AbuOllUwliOUMBglFm9h0wOKl80d9xS5/view?usp=share_link',
        stack: {
          reactNative: true,
          android: true,
          ios: true,
          javascript: true,
        },
      },
      {
        project_name: 'Kwasu PAS',
        project_desc:
          'An attendance app with pin/password authentication for students.',
        project_link:
          'https://drive.google.com/file/d/1eWsNoYPMAt9uWJctrPQbY8tC7Gj1EeB3/view?usp=share_link',
        stack: {
          reactNative: true,
          android: true,
          ios: true,
          javascript: true,
        },
      },
    ],
  },
  {
    name: 'OpenSource Projects',
    works: [
      {
        project_name: 'ByteLock',
        project_desc: 'A simple cipher/decipher algorithm',
        project_link: 'https://github.com/akindejuh/bytelock',
        stack: {
          react: true,
          web: true,
          javascript: true,
          github: true,
        },
      },
      {
        project_name: 'React Google Cloud Translate',
        project_desc:
          'A React.js wrapper built around google cloud translation API',
        project_link:
          'https://github.com/akindejuh/react-google-cloud-translate',
        stack: {
          react: true,
          web: true,
          javascript: true,
          github: true,
        },
      },
      {
        project_name: 'Invok',
        project_desc:
          'Invok by @alob-mtc - A modern, lightweight, and self-hosted serverless framework',
        project_link: 'https://github.com/alob-mtc/invok',
        stack: {
          rust: true,
          github: true,
        },
      },
    ],
  },
  {
    name: 'Web - React.js',
    works: [
      {
        project_name: 'E-Commerce store',
        project_desc: 'Design for an E-Commerce store',
        project_link: 'https://agma-e-store.netlify.app/',
        project_dp: require('./_shots/e-store.png'),
        stack: {
          react: true,
          javascript: true,
          web: true,
        },
      },
      {
        project_name: 'ILoveArt',
        project_desc: 'An Art Website',
        project_link: 'https://iloveart.netlify.app/',
        project_dp: require('./_shots/iloveart.png'),
        stack: {
          react: true,
          javascript: true,
          web: true,
        },
      },
      {
        project_name: 'ScandiStore',
        project_desc: 'A web store implemented using React.js',
        project_link: 'https://agma-scandiweb-frontend.netlify.app/products',
        project_dp: require('./_shots/ScandiStore.png'),
        stack: {
          react: true,
          javascript: true,
          web: true,
        },
      },
      {
        project_name: 'La Dope Delish',
        project_desc: 'A web application for managing restaurant operations',
        project_link: 'https://agma-team-restaurant-app.netlify.app/',
        project_dp: require('./_shots/la-dope-delish.png'),
        stack: {
          react: true,
          javascript: true,
          web: true,
        },
      },
      {
        project_name: 'Health Records System',
        project_desc: 'A web app for managing student health records',
        project_link: 'https://ent-futa-clinic.netlify.app/login',
        project_dp: require('./_shots/health-system.png'),
        stack: {
          react: true,
          javascript: true,
          web: true,
        },
      },
      {
        project_name: 'Travel Website',
        project_desc: 'A basic website for travel-related information',
        project_link: 'https://agma-arctic-travels.netlify.app/',
        project_dp: require('./_shots/artic-travels.png'),
        stack: {
          react: true,
          javascript: true,
          web: true,
        },
      },
      {
        project_name: 'Tutor AI Admin',
        project_desc: 'Tutor AI Admin web app',
        project_link: 'https://agma-tutorai-admin.netlify.app/',
        project_dp: require('./_shots/tutor-ai.png'),
        stack: {
          react: true,
          javascript: true,
          web: true,
        },
      },
      {
        project_name: 'Dashboard App',
        project_desc: 'A simple dashboard web app',
        project_link: 'http://g32-new-admin-dashboard.netlify.app',
        project_dp: require('./_shots/g32-dashboard.png'),
        stack: {
          react: true,
          javascript: true,
          web: true,
        },
      },
      {
        project_name: 'Task Manager',
        project_desc: 'A simple web app for managing tasks',
        project_link: 'https://agma-task-manager.netlify.app/',
        project_dp: require('./_shots/task-manager.png'),
        stack: {
          react: true,
          javascript: true,
          web: true,
        },
      },
    ],
  },
  {
    name: 'Backend - Node.js',
    works: [
      {
        project_name: 'Tutor AI API',
        project_desc: 'API for the Tutor AI app',
        project_link: 'https://github.com/akindejuh/Node_JS_TutorAI_v2',
        stack: {
          nodejs: true,
          javascript: true,
          github: true,
        },
      },
      {
        project_name: 'Blogged API',
        project_desc: 'API for the Blogged app',
        project_link: 'https://github.com/akindejuh/Node_JS_Blogged',
        stack: {
          nodejs: true,
          javascript: true,
          github: true,
        },
      },
      {
        project_name: 'Health Records System API',
        project_desc: 'API for the student health records',
        project_link: 'https://github.com/akindejuh/Node_JS_Futa_Clinic',
        stack: {
          nodejs: true,
          javascript: true,
          github: true,
        },
      },
      {
        project_name: 'Property Database API',
        project_desc: 'API for managing a property database',
        project_link: 'https://github.com/akindejuh/Node_JS_Product_App',
        stack: {
          nodejs: true,
          javascript: true,
          github: true,
        },
      },
      {
        project_name: 'FP News API',
        project_desc: 'API for the FP News App',
        project_link: 'https://github.com/akindejuh/Node_JS_FP_News',
        stack: {
          nodejs: true,
          javascript: true,
          github: true,
        },
      },
    ],
  },
  {
    name: 'Rust 👀',
    works: [
      {
        project_name: 'Bubble Sort Algoritghm',
        project_desc: 'Basic bubble sort in Rust',
        project_link: 'https://github.com/akindejuh/Rust_Sorting_Algorithms',
        stack: {
          rust: true,
          github: true,
        },
      },
    ],
  },
];
