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
    OneSignal.initialize("");

    OneSignal.Debug.setLogLevel(LogLevel.Verbose);

    OneSignal.Notifications.requestPermission(true);
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(opcoes-ajuda)" options={{ headerShown: false }} />
      <Stack.Screen name="perfil" options={{ headerShown: false }} />
      <Stack.Screen name="meuCartao" options={{ headerShown: false }} />
      <Stack.Screen name="meuCadastro" options={{ headerShown: false }} />
      <Stack.Screen name="consulta" options={{ headerShown: false }} />
      <Stack.Screen name="exame" options={{ headerShown: false }} />
      <Stack.Screen name="guiaConsulta" options={{ headerShown: false }} />
      <Stack.Screen name="guiaExame" options={{ headerShown: false }} />
      <Stack.Screen name="ajuda" options={{ headerShown: false }} />
    </Stack>
  );
}
