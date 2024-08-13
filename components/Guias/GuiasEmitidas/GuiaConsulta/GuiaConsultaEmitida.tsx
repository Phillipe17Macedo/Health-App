import React, { useState, useEffect } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { cancelarGuiaConsultaEmitida } from "@/utils/cancelarGuiaConsultaEmitida";
import { FontAwesome6, FontAwesome5 } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

interface GuiaConsulta {
  idGuia: number;
  dataGuia: string;
  aderente: string;
  dependente: string | null;
  especialidade: string;
  idMedico: number;
  medico: string;
  status: string;
  vlrGuia?: number;
}

interface GuiaConsultaEmitidaProps {
  guias: GuiaConsulta[];
  onGuiaCancelada: () => void;
}

const GuiaConsultaEmitida: React.FC<GuiaConsultaEmitidaProps> = ({
  guias,
  onGuiaCancelada,
}) => {
  console.log("Guias recebidas no componente:", guias);

  const handleCancel = async (idGuia: number) => {
    try {
      await cancelarGuiaConsultaEmitida(idGuia);
      Alert.alert("Sucesso", "Guia de consulta cancelada com sucesso.");
      onGuiaCancelada();
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível cancelar a guia de consulta. Tente novamente mais tarde."
      );
    }
  };

  const GuiaItem: React.FC<{ guia: GuiaConsulta }> = ({ guia }) => {
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
          <MaterialCommunityIcons name="pill" size={26} color="#9C71D9" />
          <Text
            style={[
              styles.textoIcone,
              { fontFamily: "MPlusRounded1c-ExtraBold" },
            ]}
          >
            Guia de Consulta
          </Text>
        </View>

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome6 name="person" size={21} color="#3E3D3D" />
          <Text
            style={[
              styles.textoPadrao,
              { fontFamily: "MPlusRounded1c-ExtraBold" },
            ]}
          >
            Aderente:
          </Text>
        </View>
        <Text
          style={[
            styles.textoConfirmacao,
            ,
            { fontFamily: "MPlusRounded1c-Medium" },
          ]}
        >
          {guia.aderente}
        </Text>

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome6 name="people-arrows" size={19} color="#3E3D3D" />
          <Text
            style={[
              styles.textoPadrao,
              { fontFamily: "MPlusRounded1c-ExtraBold" },
            ]}
          >
            Dependente:
          </Text>
        </View>
        <Text
          style={[
            styles.textoConfirmacao,
            ,
            { fontFamily: "MPlusRounded1c-Medium" },
          ]}
        >
          {guia.dependente || "N/A"}
        </Text>

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome6 name="user-doctor" size={19} color="#3E3D3D" />
          <Text
            style={[
              styles.textoPadrao,
              { fontFamily: "MPlusRounded1c-ExtraBold" },
            ]}
          >
            Médico:
          </Text>
        </View>
        <Text
          style={[
            styles.textoConfirmacao,
            ,
            { fontFamily: "MPlusRounded1c-Medium" },
          ]}
        >
          {guia.medico}
        </Text>

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome5 name="notes-medical" size={19} color="#3E3D3D" />
          <Text
            style={[
              styles.textoPadrao,
              { fontFamily: "MPlusRounded1c-ExtraBold" },
            ]}
          >
            Especialidade:
          </Text>
        </View>
        <Text
          style={[
            styles.textoConfirmacao,
            ,
            { fontFamily: "MPlusRounded1c-Medium" },
          ]}
        >
          {guia.especialidade}
        </Text>

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome5 name="calendar-alt" size={19} color="#3E3D3D" />
          <Text
            style={[
              styles.textoPadrao,
              { fontFamily: "MPlusRounded1c-ExtraBold" },
            ]}
          >
            Data:
          </Text>
        </View>
        <Text
          style={[
            styles.textoConfirmacao,
            ,
            { fontFamily: "MPlusRounded1c-Medium" },
          ]}
        >
          {new Date(guia.dataGuia).toLocaleDateString("pt-BR", {
            timeZone: "UTC",
          })}
        </Text>

        {guia.vlrGuia !== undefined && (
          <>
            <Text
              style={[
                styles.textoPadrao,
                {
                  color: "#F22",
                  marginBottom: 5,
                  fontFamily: "MPlusRounded1c-ExtraBold",
                },
              ]}
            >
              **ATENÇÃO PAGO NO LOCAL**
            </Text>
            <View style={[styles.containerTextoPadrao]}>
              <FontAwesome5 name="money-bill-alt" size={19} color="#3E3D3D" />
              <Text
                style={[
                  styles.textoPadrao,
                  { fontFamily: "MPlusRounded1c-ExtraBold" },
                ]}
              >
                Valor:
              </Text>
            </View>
            <Text
              style={[
                styles.textoConfirmacao,
                { fontFamily: "MPlusRounded1c-Medium" },
              ]}
            >
              R$ {guia.vlrGuia.toFixed(2)}
            </Text>
          </>
        )}

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome5 name="print" size={19} color="#3E3D3D" />
          <Text
            style={[
              styles.textoPadrao,
              { fontFamily: "MPlusRounded1c-ExtraBold" },
            ]}
          >
            Status da Guia Emitida:
          </Text>
        </View>
        <Text
          style={[
            styles.textoConfirmacao,
            ,
            { fontFamily: "MPlusRounded1c-Medium" },
          ]}
        >
          {guia.status}
        </Text>

        <View style={styles.containerTempo}>
          <TouchableOpacity style={[styles.containerButtonCancelar]}>
            <Text
              onPress={() => handleCancel(guia.idGuia)}
              style={[
                styles.textoButtonCancelar,
                { fontFamily: "MPlusRounded1c-ExtraBold" },
              ]}
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
        <Text
          style={[styles.emptyText, { fontFamily: "MPlusRounded1c-Medium" }]}
        >
          Não há guias emitidas.
        </Text>
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

export default GuiaConsultaEmitida;
