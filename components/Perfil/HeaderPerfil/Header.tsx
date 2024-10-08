import React, { useEffect, useState } from "react";
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { styles } from './styles';
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export function HeaderPerfil() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          "MPlusRounded1c-Medium": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Medium.ttf"),
          "MPlusRounded1c-Regular": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Regular.ttf"),
          "MPlusRounded1c-Bold": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Bold.ttf"),
          "MPlusRounded1c-ExtraBold": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-ExtraBold.ttf"),
        });

        setFontLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
        <View style={[styles.containerItensHeader]}>
            <Link href="/home" style={[styles.linkIcone]}>
                <Ionicons name="arrow-back-circle" size={48} color="#fff"/>
            </Link>
            <Text style={[styles.textoHeader, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Perfil e Configurações</Text>
        </View>
    </View>
  );
}