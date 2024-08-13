import React, { useState, useEffect } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { cancelarGuiaDeExameEmitida } from "@/utils/requestConfig";
import { FontAwesome6, FontAwesome5 } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

interface GuiaExame {
  idGuia: number;
  dataGuia: string;
  aderente: string;
  dependente: string | null;
  laboratorio: string;
  status: string;
  vlrGuia?: number;
}

interface GuiaExameEmitidaProps {
  guias: GuiaExame[];
  onGuiaCancelada: () => void;
}

const GuiaExameEmitida: React.FC<GuiaExameEmitidaProps> = ({
  guias,
  onGuiaCancelada,
}) => {
  const handleCancel = async (idGuia: number) => {
    try {
      Alert.alert(
        "Confirmação",
        "Você tem certeza que deseja cancelar esta guia?",
        [
          { text: "Não", style: "cancel" },
          {
            text: "Sim",
            onPress: async () => {
              await cancelarGuiaDeExameEmitida(idGuia);
              Alert.alert("Sucesso", "Guia de exame cancelada com sucesso.");
              onGuiaCancelada();
            },
          },
        ]
      );
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível cancelar a guia de exame. Tente novamente mais tarde."
      );
    }
  };

  const GuiaItem: React.FC<{ guia: GuiaExame }> = ({ guia }) => {
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
      <View key={guia.idGuia} style={styles.item}>
        <View style={[styles.constainerIcone]}>
          <MaterialCommunityIcons name="flask-round-bottom" size={26} color="#1ED960" />
          <Text style={[styles.textoIcone, { fontFamily: 'MPlusRounded1c-ExtraBold' }]}>Guia Laboratorial</Text>
        </View>

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome6 name="person" size={21} color="#3E3D3D" />
          <Text style={[styles.textoPadrao, { fontFamily: 'MPlusRounded1c-ExtraBold' }]}>Aderente:</Text>
        </View>
        <Text style={[styles.textoConfirmacao, , { fontFamily: 'MPlusRounded1c-Medium' }]}>
          {guia.aderente}
        </Text>

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome6 name="people-arrows" size={19} color="#3E3D3D" />
          <Text style={[styles.textoPadrao, { fontFamily: 'MPlusRounded1c-ExtraBold' }]}>Dependente:</Text>
        </View>
        <Text style={[styles.textoConfirmacao, , { fontFamily: 'MPlusRounded1c-Medium' }]}>{guia.dependente || "N/A"}</Text>

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome5 name="notes-medical" size={19} color="#3E3D3D" />
          <Text style={[styles.textoPadrao, { fontFamily: 'MPlusRounded1c-ExtraBold' }]}>Laboratório:</Text>
        </View>
        <Text style={[styles.textoConfirmacao, , { fontFamily: 'MPlusRounded1c-Medium' }]}>{guia.laboratorio}</Text>

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome5 name="calendar-alt" size={19} color="#3E3D3D" />
          <Text style={[styles.textoPadrao, { fontFamily: 'MPlusRounded1c-ExtraBold' }]}>Data:</Text>
        </View>
        <Text style={[styles.textoConfirmacao, , { fontFamily: 'MPlusRounded1c-Medium' }]}>
          {new Date(guia.dataGuia).toLocaleDateString(
            "pt-BR",
            {
              timeZone: "UTC",
            }
          )}
        </Text>

        {guia.vlrGuia !== undefined && (
          <>
            <Text style={[styles.textoPadrao, { color: "#F22", marginBottom: 5, fontFamily: 'MPlusRounded1c-ExtraBold' }]}>
              **ATENÇÃO PAGO NO LOCAL**
            </Text>
            <View style={[styles.containerTextoPadrao]}>
              <FontAwesome5 name="money-bill-alt" size={19} color="#3E3D3D" />
              <Text style={[styles.textoPadrao, { fontFamily: 'MPlusRounded1c-ExtraBold' }]}>Valor:</Text>
            </View>
            <Text style={[styles.textoConfirmacao, { fontFamily: 'MPlusRounded1c-Medium' }]}>R$ {guia.vlrGuia.toFixed(2)}</Text>
          </>
        )}

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome5 name="print" size={19} color="#3E3D3D" />
          <Text style={[styles.textoPadrao, { fontFamily: 'MPlusRounded1c-ExtraBold' }]}>Status da Guia Emitida:</Text>
        </View>
        <Text style={[styles.textoConfirmacao, , { fontFamily: 'MPlusRounded1c-Medium' }]}>{guia.status}</Text>

        <View style={styles.containerTempo}>
          <TouchableOpacity style={[styles.containerButtonCancelar]}>
            <Text
              onPress={() => handleCancel(guia.idGuia)}
              style={[styles.textoButtonCancelar, { fontFamily: 'MPlusRounded1c-ExtraBold' }]}
            >
              Cancelar Guia👆
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  if (guias.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={[styles.emptyText, { fontFamily: 'MPlusRounded1c-Medium' }]}>Não há guias emitidas.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {guias.map((guia) => (
        <GuiaItem key={guia.idGuia} guia={guia} />
      ))}
    </View>
  );
};

export default GuiaExameEmitida;