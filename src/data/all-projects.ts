export interface IAllProject {
  name: string;
  description: string;
  link: string;
}

export interface IProjectCategory {
  category: string;
  projects: IAllProject[];
}

export const allProjects: IProjectCategory[] = [
  {
    category: 'Maintained Apps in Store',
    projects: [
      { name: 'Irorun (Android)', description: 'Fast access to loans with no collaterals', link: 'https://play.google.com/store/search?q=irorun&c=apps&hl=en' },
      { name: 'SnapCash (Android)', description: 'Cash in a snap for everyday Nigerians', link: 'https://play.google.com/store/search?q=snapcash&c=apps&hl=en' },
      { name: 'SnapCash (iOS)', description: 'Cash in a snap for everyday Nigerians', link: 'https://apps.apple.com/ng/app/snapcash-loans-in-a-snap/id1634947408' },
      { name: 'Blocka Cash (iOS)', description: 'Instant loans', link: 'https://apps.apple.com/ng/app/blocka-cash/id1548212165' },
      { name: 'Lendsqr Admin (Android)', description: 'Manage lending business operations', link: 'https://play.google.com/store/search?q=lendsqr%20admin&c=apps&hl=en' },
      { name: 'Nolt Finance (Android)', description: 'Finance and Investment', link: 'https://play.google.com/store/apps/details?id=com.finance.nolt.app&hl=en' },
      { name: 'Urgent10k (Android)', description: 'Need cash urgently? Urgent10k has got you covered', link: 'https://play.google.com/store/search?q=urgent10k&c=apps&hl=en' },
      { name: 'Urgent10k (iOS)', description: 'Need cash urgently? Urgent10k has got you covered', link: 'https://apps.apple.com/ng/app/urgent10k/id1585140872' },
      { name: 'Kolo (Android)', description: 'Tame your bank accounts', link: 'https://play.google.com/store/apps/details?id=com.kolomyapp&hl=en' },
      { name: 'Standard Life (Android)', description: 'Digital Loans', link: 'https://play.google.com/store/apps/details?id=rw.org.standardlife.app&hl=en' },
    ],
  },
  {
    category: 'Mobile - React Native',
    projects: [
      { name: 'Mira', description: 'A Restaurant Management App (acquired by Chowdeck)', link: 'https://drive.google.com/drive/folders/1U8b0pgtXhi9pdzRvrks0fLQhZU0mp1XA?usp=share_link' },
      { name: 'Whispr', description: 'A Secure Chat App using ByteLock encryption', link: 'https://drive.google.com/file/d/17yJEqFRr7CD0utOS4njOkToOi6S8YttJ/view?usp=sharing' },
      { name: 'Blogged', description: 'A Blog App', link: 'https://drive.google.com/drive/folders/1TL5FVaPutdtPTfBOmfYslIxp59Vf8781?usp=share_link' },
      { name: 'Tutor AI', description: 'An app that tutors students using AI', link: 'https://drive.google.com/drive/folders/1SDiltjNfcRTHHgTtN0vrZjXIHVEeN8ZD?usp=share_link' },
      { name: 'Travel App', description: 'A minimalistic travel app design', link: 'https://drive.google.com/file/d/1IosFWiEh2xG4skEZbc0vezi3wW4dJYgd/view?usp=share_link' },
      { name: 'FP News', description: 'A news listing app', link: 'https://drive.google.com/file/d/1GgkzBWrMsNS7Gp1PjQtcDhW5-amqUQTt/view' },
      { name: 'KFS', description: 'Attendance app with fingerprint authentication', link: 'https://drive.google.com/file/d/1AbuOllUwliOUMBglFm9h0wOKl80d9xS5/view?usp=share_link' },
      { name: 'Kwasu PAS', description: 'Attendance app with pin/password authentication', link: 'https://drive.google.com/file/d/1eWsNoYPMAt9uWJctrPQbY8tC7Gj1EeB3/view?usp=share_link' },
      { name: 'React Native Custom Liveness', description: 'Native liveness detection module with on-device ML (Google ML Kit + Apple Vision)', link: '#' },
    ],
  },
  {
    category: 'Open Source',
    projects: [
      { name: 'ByteLock', description: 'A cipher/decipher algorithm', link: 'https://github.com/akindejuh/bytelock' },
      { name: 'React Google Cloud Translate', description: 'React.js wrapper for Google Cloud Translation API', link: 'https://github.com/akindejuh/react-google-cloud-translate' },
      { name: 'Invok', description: 'A modern, lightweight, self-hosted serverless framework (Rust)', link: 'https://github.com/alob-mtc/invok' },
    ],
  },
  {
    category: 'Web - React.js',
    projects: [
      { name: 'E-Commerce Store', description: 'Design for an E-Commerce store', link: 'https://agma-e-store.netlify.app/' },
      { name: 'ILoveArt', description: 'An Art Website', link: 'https://iloveart.netlify.app/' },
      { name: 'ScandiStore', description: 'A web store implemented using React.js', link: 'https://agma-scandiweb-frontend.netlify.app/products' },
      { name: 'La Dope Delish', description: 'Restaurant operations management', link: 'https://agma-team-restaurant-app.netlify.app/' },
      { name: 'Health Records System', description: 'Student health records management', link: 'https://ent-futa-clinic.netlify.app/login' },
      { name: 'Travel Website', description: 'Travel-related information', link: 'https://agma-arctic-travels.netlify.app/' },
      { name: 'Tutor AI Admin', description: 'Tutor AI Admin web app', link: 'https://agma-tutorai-admin.netlify.app/' },
      { name: 'Dashboard App', description: 'A simple dashboard web app', link: 'https://g32-new-admin-dashboard.netlify.app' },
      { name: 'Task Manager', description: 'A web app for managing tasks', link: 'https://agma-task-manager.netlify.app/' },
    ],
  },
  {
    category: 'Backend - Node.js',
    projects: [
      { name: 'Tutor AI API', description: 'API for the Tutor AI app', link: 'https://github.com/akindejuh/Node_JS_TutorAI_v2' },
      { name: 'Blogged API', description: 'API for the Blogged app', link: 'https://github.com/akindejuh/Node_JS_Blogged' },
      { name: 'Health Records System API', description: 'API for student health records', link: 'https://github.com/akindejuh/Node_JS_Futa_Clinic' },
      { name: 'Property Database API', description: 'API for managing a property database', link: 'https://github.com/akindejuh/Node_JS_Product_App' },
      { name: 'FP News API', description: 'API for the FP News App', link: 'https://github.com/akindejuh/Node_JS_FP_News' },
    ],
  },
  {
    category: 'Rust',
    projects: [
      { name: 'Bubble Sort Algorithm', description: 'Basic bubble sort in Rust', link: 'https://github.com/akindejuh/Rust_Sorting_Algorithms' },
    ],
  },
];
