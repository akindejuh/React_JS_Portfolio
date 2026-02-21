import { initializeApp } from '@firebase/app';
import { getAnalytics } from '@firebase/analytics';
import { getStorage } from '@firebase/storage';
import { getEnvConfig } from '@/utils/get-env';

const firebaseConfig = {
  apiKey: getEnvConfig().apiKey,
  authDomain: getEnvConfig().authDomain,
  projectId: getEnvConfig().projectId,
  storageBucket: getEnvConfig().storageBucket,
  messagingSenderId: getEnvConfig().messagingSenderId,
  appId: getEnvConfig().appId,
  measurementId: getEnvConfig().measurementId,
};

const fb_app = initializeApp(firebaseConfig);
const fb_analytics = typeof window !== 'undefined' ? getAnalytics(fb_app) : null;
const fb_storage = getStorage(fb_app);

export { fb_app, fb_analytics, fb_storage };
