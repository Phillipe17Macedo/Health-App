import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function DadosUsuario() {
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
      <View style={[styles.container]}>
        <View style={[styles.containerAreaDados]}>
          <Text style={[styles.tituloDados, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Telefone:</Text>
          <View style={[styles.containerTextInput]}>
            <TextInput
              placeholder="Telefone"
              style={[styles.textInput, {fontFamily: 'MPlusRounded1c-Bold'}]}
            />
          </View>
        </View>
        <View style={[styles.containerAreaDados, { marginTop: 10 }]}>
          <Text style={[styles.tituloDados, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Endereço:</Text>
          <View style={[styles.containerTextInput]}>
            <TextInput
              placeholder="Endereço"
              style={[styles.textInput, {fontFamily: 'MPlusRounded1c-Bold'}]}
            />
          </View>
        </View>
        <View style={[styles.containerButton]} >
          <TouchableOpacity style={[styles.button]}>
            <Text style={[styles.textoButton, {fontFamily: 'MPlusRounded1c-Bold'}]}>Editar Dados</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
