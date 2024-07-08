import { Stack } from "expo-router";
import React, {useEffect} from "react";
import { requestUserPermission, getFCMToken, notificationListener } from "@/utils/constants/notifications";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "/perfil",
};

export default function RootLayout() {

  useEffect(() => {
    requestUserPermission();
    getFCMToken();
    notificationListener();
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
