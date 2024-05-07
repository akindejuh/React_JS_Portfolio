import { initializeApp } from '@firebase/app';
import { getAnalytics } from '@firebase/analytics';
import { getStorage } from '@firebase/storage';
import { getEnvConfig } from 'src/utils/get-env';

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
const fb_analytics = getAnalytics(fb_app);
const fb_storage = getStorage(fb_app);

export { fb_app, fb_analytics, fb_storage };
