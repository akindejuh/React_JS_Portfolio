const getEnv = (name: string): string | undefined => {
  const value = process.env[name];
  if (value === undefined || value === null) {
    console.error(`%cEnvironment variable ${name} is required!`, 'color: red;');
  }
  return value;
};

export const getEnvConfig = () => {
  const apiKey = getEnv('NEXT_PUBLIC_API_KEY');
  const authDomain = getEnv('NEXT_PUBLIC_AUTH_DOMAIN');
  const projectId = getEnv('NEXT_PUBLIC_PROJECT_ID');
  const storageBucket = getEnv('NEXT_PUBLIC_STORAGE_BUCKET');
  const messagingSenderId = getEnv('NEXT_PUBLIC_MESSAGING_SENDER_ID');
  const appId = getEnv('NEXT_PUBLIC_APP_ID');
  const measurementId = getEnv('NEXT_PUBLIC_MEASUREMENT_ID');

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
