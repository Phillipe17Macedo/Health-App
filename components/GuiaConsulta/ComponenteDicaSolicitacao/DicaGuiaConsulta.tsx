import React, { useState, useEffect } from "react";
import {
  View,
  Text,
} from "react-native";
import { styles } from "./styles";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export function DicaGuiaConsulta() {
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
      <View style={styles.containerOrientacao}>
        <Text style={[styles.tituloOrientacao, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>EMITIR GUIA PARA CONSULTA</Text>
        <Text style={[styles.orientacao, {fontFamily: 'MPlusRounded1c-Bold'}]}>
          Para solicitar uma guia de consulta, siga os passos abaixo:
        </Text>
        <Text style={[styles.orientacao, {fontFamily: 'MPlusRounded1c-Medium'}]}>
          1- Marque se é para um Dependente ou Não.
        </Text>
        <Text style={[styles.orientacao, {fontFamily: 'MPlusRounded1c-Medium'}]}>
          2- Selecione a Especialidade do Médico.
        </Text>
        <Text style={[styles.orientacao, {fontFamily: 'MPlusRounded1c-Medium'}]}>
          3- Selecione o Médico.
        </Text>
      </View>
    </>
  );
}
