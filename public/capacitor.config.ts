import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.f2fdev.app',
  appName: 'f2fdev',
  webDir: 'build',  // Ensure this matches your React build output folder
  bundledWebRuntime: false,
};

export default config;
