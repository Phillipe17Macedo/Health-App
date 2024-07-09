import React, { useEffect } from 'react';
import { LogLevel, OneSignal } from 'react-native-onesignal';
import { Stack } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "/index",
};

export default function RootLayout() {
  useEffect(() => {
    // Inicialize o OneSignal com seu App ID
    OneSignal.initialize("590d625b-5bc5-4ef3-a132-d87326c47469");

    OneSignal.Debug.setLogLevel(LogLevel.Verbose);

    OneSignal.Notifications.requestPermission(true);
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="perfil" options={{ headerShown: false }} />
      <Stack.Screen name="consulta" options={{ headerShown: false }} />
      <Stack.Screen name="exame" options={{ headerShown: false }} />
      <Stack.Screen name="perfilEditar" options={{ headerShown: false }} />
      <Stack.Screen name="guiaConsulta" options={{ headerShown: false }} />
    </Stack>
  );
}
