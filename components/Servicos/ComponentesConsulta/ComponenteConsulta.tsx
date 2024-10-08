import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { styles } from "./styles";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export function ComponentesConsulta() {
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
    <>
      <TouchableOpacity style={[styles.container]}>
        <Link href={"/consulta"} style={{ width: 150 }}>
          <View style={[styles.containerLink]}>
            <MaterialCommunityIcons
              name="pill"
              size={64}
              color="#9C71D9"
            />
            <Text style={[styles.textoConsultas, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Agendar Consulta</Text>
          </View>
        </Link>
      </TouchableOpacity>
    </>
  );
}
