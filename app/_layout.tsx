import { Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '/perfil',
};
export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ title: 'Login', headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="perfil" options={{ headerShown: false }} />
        <Stack.Screen name="consulta" options={{ headerShown: false }} />
        <Stack.Screen name="exame" options={{ headerShown: false }} />
        <Stack.Screen name="perfilEditar" options={{headerShown: false, title: 'Editar Perfil'}}/>
    </Stack>
  );
}
