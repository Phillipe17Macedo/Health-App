import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View, Text } from 'react-native';

import { styles } from '../styles/StylesPerfilPage/styles'

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}