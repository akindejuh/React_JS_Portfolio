const getEnv = (name: string): string | undefined => {
  const value = process.env[name];
  if (value === undefined || value === null) {
    console.error(`%cEnvironment variable ${name} is required!`, 'color: red;');
  }
  return value;
};

export const getEnvConfig = () => {
  const apiKey = getEnv('REACT_APP_API_KEY');
  const authDomain = getEnv('REACT_APP_AUTH_DOMAIN');
  const projectId = getEnv('REACT_APP_PROJECT_ID');
  const storageBucket = getEnv('REACT_APP_STORAGE_BUCKET');
  const messagingSenderId = getEnv('REACT_APP_MESSAGING_SENDER_ID');
  const appId = getEnv('REACT_APP_APP_ID');
  const measurementId = getEnv('REACT_APP_MEASUREMENT_ID');

  return {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
  };
};
