import React, { useEffect } from "react";
import { LogLevel, OneSignal } from "react-native-onesignal";
import { Stack } from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "/index",
};

export default function LayoutOpcoes() {
  return (
    <Stack>
      <Stack.Screen name="opcaoAcesso" options={{ headerShown: false }} />
      <Stack.Screen name="opcaoConsulta" options={{ headerShown: false }} />
      <Stack.Screen name="opcaoExame" options={{ headerShown: false }}/>
      <Stack.Screen name="opcaoGuia" options={{ headerShown: false }}/>
      <Stack.Screen name="opcaoSuporte" options={{ headerShown: false }}/>
    </Stack>
  );
}
