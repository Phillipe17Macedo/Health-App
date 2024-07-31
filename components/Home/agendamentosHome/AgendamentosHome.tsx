import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function AgendamentosHome() {
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

  //, {fontFamily: 'MPlusRounded1c-ExtraBold'}
  return (
    <View style={styles.container}>
      <View style={[styles.containerAgendamento]}>
        <View style={[styles.containerAreaTitulo]}>
          <Text
            style={[
              styles.textoTituloAgendamento,
              { fontFamily: "MPlusRounded1c-Medium" },
            ]}
          >
            Meu Agendamento
          </Text>
          <View>
            <Entypo name="chevron-right" size={18} color="#FFF" />
          </View>
        </View>
        <View style={[styles.containerAreaDataAgendamento]}>
          <View>
            <FontAwesome5 name="calendar-alt" size={18} color="#FFF" />
          </View>
          <Text
            style={[
              styles.textoDataAgendamento,
              { fontFamily: "MPlusRounded1c-Bold" },
            ]}
          >
            {" "}
            22 Agosto, 2024
          </Text>
        </View>
        <View style={[styles.containerAreaHorarioAgendamento]}>
          <View>
            <FontAwesome5 name="clock" size={18} color="#FFF" />
          </View>
          <Text
            style={[
              styles.textoDataAgendamento,
              { fontFamily: "MPlusRounded1c-Bold" },
            ]}
          >
            {" "}
            08:00 AM - 09:30 AM
          </Text>
        </View>
      </View>
      <View style={[styles.containerMedicoAgendamento]}>
        <View style={[styles.containerAreaFotoMedico]}>
          <Image
            source={require("@/assets/images/medicos/medico-consulta.png")}
            style={[
              {
                width: "100%",
                height: "100%",
                borderRadius: 10 /*resizeMode: "contain"*/,
              },
            ]}
          />
        </View>
        <View style={[styles.containerAreaDadosMedico]}>
          <Text style={[styles.textoNomeMedico, { fontFamily: "MPlusRounded1c-ExtraBold" }]}>
            Dr. Clésio Camilo de Souza
          </Text>
          <Text style={[styles.textoDescricaoMedico, { fontFamily: "MPlusRounded1c-Medium" }]}>Psicólogo</Text>
        </View>
      </View>
    </View>
  );
}
