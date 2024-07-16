import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { styles } from "./styles";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

interface HeaderConsultaProps {
  onRefresh: () => void;
}

export function HeaderConsulta({ onRefresh }: HeaderConsultaProps) {
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
      <Link href={"/servicos"} style={[styles.containerLink]}>

        <View style={[styles.containerIcone]}>
          <Ionicons name="arrow-back-circle" size={42} color="#F2F2F2" />
        </View>

        <View style={[styles.containerTexto]}>
          <Text style={[styles.textoHeader, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Voltar</Text>
        </View>
      </Link>
      <TouchableOpacity onPress={onRefresh} style={styles.refreshButton}>
        <Fontisto name="cloud-refresh" size={25} color="#F2F2F2" />
        <Text style={[styles.textoIcone, {fontFamily: 'MPlusRounded1c-Bold'}]}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
}
