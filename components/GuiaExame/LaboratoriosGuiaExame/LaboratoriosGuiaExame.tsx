import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";
import Fontisto from "@expo/vector-icons/Fontisto";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function LaboratoriosGuiaExame() {
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
    <View style={[styles.container]}>
      <View style={[styles.componenteLaboratorio]}>
        <View style={[styles.containerImagemLaboratorio]}>
          <Image
            source={require("@/assets/images/Home/Carrossel/icons8-plano-de-saúde-48.png")}
          />
        </View>
        <View style={[styles.containerTextoLaboratorio]}>
          <Text style={[styles.textoNomeLaboratorio]}>Laboratorio</Text>
          <Text style={[styles.textoEnderecoLaboratorio]}>Endereço</Text>
          <Text style={[styles.textoDistanciaLaboratorio]}>Distância</Text>
        </View>
        <View style={[]}>
          <Fontisto name="map" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}
