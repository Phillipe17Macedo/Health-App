import React, { useEffect } from "react";
import { LogLevel, OneSignal } from "react-native-onesignal";
import { Stack } from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "/index",
};

export default function LayoutOpcoes() {
  useEffect(() => {
    // Inicialize o OneSignal com seu App ID
    OneSignal.initialize("590d625b-5bc5-4ef3-a132-d87326c47469");

    OneSignal.Debug.setLogLevel(LogLevel.Verbose);

    OneSignal.Notifications.requestPermission(true);
  }, []);
  return (
    <Stack>
      <Stack.Screen name="opcaoAcesso" options={{ headerShown: true }} />
      <Stack.Screen name="opcaoConsulta" options={{ headerShown: true }} />
      <Stack.Screen name="opcaoExame" options={{ headerShown: true }}/>
      <Stack.Screen name="opcaoGuia" options={{ headerShown: true }}/>
      <Stack.Screen name="opcaoSuporte" options={{ headerShown: true }}/>
    </Stack>
  );
}
