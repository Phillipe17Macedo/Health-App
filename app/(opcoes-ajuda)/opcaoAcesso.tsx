import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { styles } from "@/styles/StylesAjudaPage/StylesOpcoesAjuda/StylesOpcaoAcesso/styles";
import { HeaderOpcoes } from "@/components/Ajuda/Opcoes/Header";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function OpcaoAcesso() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Carregando a fonte
        await Font.loadAsync({
          "MPlusRounded1c-Medium": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Medium.ttf"),
          "MPlusRounded1c-Regular": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Regular.ttf"),
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
      <HeaderOpcoes />
      <View style={[styles.containerInstrucao]}>
        <Text style={[styles.textoTituloInstrucao, {fontFamily: 'MPlusRounded1c-Medium'}]}>
          Já sou filiado (a) da Aserpa Saúde e perdi meu acesso ao app. O que
          fazer?
        </Text>
        <Text style={[styles.textoInstrucao, {fontFamily: 'MPlusRounded1c-Regular'}]}>Instrução 1</Text>
      </View>
    </View>
  );
}
