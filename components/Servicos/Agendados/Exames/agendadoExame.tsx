import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

interface Exame {
  id: number;
  tipo: string;
  data: string;
  hora: string;
  local: string;
}

interface AgendadoExameProps {
  exames: Exame[];
}

const AgendadoExame: React.FC<AgendadoExameProps> = ({ exames }) => {
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
      {exames.map((exame) => (
        <View key={exame.id} style={styles.item}>
          <View style={[styles.constainerIcone]}>
            <MaterialCommunityIcons name="flask-round-bottom" size={28} color="#52D981" />
            <Text style={[styles.textoIcone, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Exames Agendados</Text>
          </View>
          <Text style={[styles.text, {fontFamily: 'MPlusRounded1c-Bold'}]}>Tipo: {exame.tipo}</Text>
          <Text style={[styles.text, {fontFamily: 'MPlusRounded1c-Bold'}]}>Data: {exame.data}</Text>
          <Text style={[styles.text, {fontFamily: 'MPlusRounded1c-Bold'}]}>Hora: {exame.hora}</Text>
          <Text style={[styles.text, {fontFamily: 'MPlusRounded1c-Bold'}]}>Local: {exame.local}</Text>

          <View style={styles.conatinersButtons}>
          <TouchableOpacity style={styles.containerButtonConfirmar}>
            <Text style={[styles.textoButtonConfirmar, {fontFamily: 'MPlusRounded1c-Bold'}]}>
              Confirmar Agendamento
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.containerTempo]}>
          <TouchableOpacity style={[styles.containerButtonCancelar]}>
              <Text
                style={[styles.textoButtonCancelar, {fontFamily: 'MPlusRounded1c-Bold'}]}
              >
                Cancelar Agendamento
              </Text>
          </TouchableOpacity>
        </View>
        </View>
      ))}
    </View>
  );
};

export default AgendadoExame;
