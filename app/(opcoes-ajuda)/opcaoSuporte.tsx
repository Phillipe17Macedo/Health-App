import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { styles } from "@/styles/StylesAjudaPage/StylesOpcoesAjuda/StylesOpcaoSuporte/styles";
import { HeaderOpcoes } from "@/components/Ajuda/Opcoes/Header";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function OpcaoSuporte() {
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

  const handleSupportPress = () => {
    const phoneNumber = "tel:34 99931-7302";
    Linking.openURL(phoneNumber);
  };

  return (
    <View style={styles.container}>
      <HeaderOpcoes />
      <View style={[styles.containerInstrucao]}>
        <Text style={[styles.textoTituloInstrucao, {fontFamily: 'MPlusRounded1c-Medium'}]}>
          Já sou filiado (a) da Aserpa Saúde e perdi meu acesso ao app. O que
          fazer?
        </Text>
        <Text style={[styles.textoInstrucao, {fontFamily: 'MPlusRounded1c-Regular'}]}>1) É necessário informar o seu CPF.</Text>
        <Text style={[styles.textoInstrucao, {fontFamily: 'MPlusRounded1c-Regular'}]}>2) Você marca se é dependente, ou titular.</Text>
        <Text style={[styles.textoInstrucao, {fontFamily: 'MPlusRounded1c-Regular'}]}>3) Você deve ter cadastrado no seu aparelho uma face ou biometria para que seja necessário autenticar a entrada no APP.</Text>
      </View>
      <TouchableOpacity style={[styles.containerButtonSuporte]} onPress={handleSupportPress}>
        <Text style={[styles.textoButtonSuporte, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Suporte</Text>
      </TouchableOpacity>
    </View>
  );
}
