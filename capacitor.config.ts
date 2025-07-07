import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fabio.appclima',
  appName: 'App Clima',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      backgroundColor: '#1F7CCF', // Cor de fundo da splash screen
      showSpinner: false,
      androidSplashResourceName: 'splash', // Nome do recurso de splash
      androidScaleType: 'CENTER_CROP', // Tipo de escala da imagem de splash
    }
  }
};

export default config;
