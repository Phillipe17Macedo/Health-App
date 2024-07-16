import React, { useState, useEffect } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { cancelarAgendamentoConsulta } from "@/utils/requestConfig";
import { FontAwesome6, FontAwesome5 } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

interface Consulta {
  idAgenda: number;
  dataAgenda: string | null;
  horaAgenda: string | null;
  medico: string;
  status: string;
}

interface GuiaConsultaEmitidaProps {
  consultas: Consulta[];
  onConsultaCancelada: () => void;
}

const GuiaConsultaEmitida: React.FC<GuiaConsultaEmitidaProps> = ({
  consultas,
  onConsultaCancelada,
}) => {
  console.log("Consultas recebidas no componente:", consultas);

  const handleCancel = async (idAgendamento: number) => {
    try {
      await cancelarAgendamentoConsulta(idAgendamento);
      Alert.alert("Sucesso", "Consulta cancelada com sucesso.");
      onConsultaCancelada();
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível cancelar a consulta. Tente novamente mais tarde."
      );
    }
  };

  const ConsultaItem: React.FC<{ consulta: Consulta }> = ({ consulta }) => {
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
      <View key={consulta.idAgenda} style={styles.item}>
        <View style={[styles.constainerIcone]}>
          <MaterialCommunityIcons name="pill" size={26} color="#9C71D9" />
          <Text style={[styles.textoIcone, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Guia de Consulta</Text>
        </View>

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome6 name="person" size={21} color="#3E3D3D" />
          <Text style={[styles.textoPadrao, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Aderente:</Text>
        </View>
        <Text style={[styles.textoConfirmacao, , {fontFamily: 'MPlusRounded1c-Medium'}]}>
          ADAILTON FERREIRA ANDRE NUNES DA SILVA JUNIOR
        </Text>

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome6 name="people-arrows" size={19} color="#3E3D3D" />
          <Text style={[styles.textoPadrao, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Dependente:</Text>
        </View>
        <Text style={[styles.textoConfirmacao, , {fontFamily: 'MPlusRounded1c-Medium'}]}>HELENA NUNES GUIMARAES</Text>

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome6 name="user-doctor" size={19} color="#3E3D3D" />
          <Text style={[styles.textoPadrao, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Médico:</Text>
        </View>
        <Text style={[styles.textoConfirmacao, , {fontFamily: 'MPlusRounded1c-Medium'}]}>{consulta.medico}</Text>

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome5 name="notes-medical" size={19} color="#3E3D3D" />
          <Text style={[styles.textoPadrao, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Especialidade:</Text>
        </View>
        <Text style={[styles.textoConfirmacao, , {fontFamily: 'MPlusRounded1c-Medium'}]}>PSICOLOGO</Text>

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome5 name="calendar-alt" size={19} color="#3E3D3D" />
          <Text style={[styles.textoPadrao, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Data:</Text>
        </View>
        <Text style={[styles.textoConfirmacao, , {fontFamily: 'MPlusRounded1c-Medium'}]}>
          {consulta.dataAgenda
            ? new Date(consulta.dataAgenda.split("T")[0]).toLocaleDateString(
                "pt-BR",
                {
                  timeZone: "UTC",
                }
              )
            : "N/A"}
        </Text>

        <Text style={[styles.textoPadrao, { color: "#F22", marginBottom: 5, fontFamily: 'MPlusRounded1c-ExtraBold' }]}>
          **ATENÇÃO PAGO NO LOCAL**
        </Text>
        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome5 name="money-bill-alt" size={19} color="#3E3D3D" />
          <Text style={[styles.textoPadrao, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Valor:</Text>
        </View>
        <Text style={[styles.textoConfirmacao, {fontFamily: 'MPlusRounded1c-Medium'}]}>R$ 79,00</Text>

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome5 name="print" size={19} color="#3E3D3D" />
          <Text style={[styles.textoPadrao, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Guia Emitida:</Text>
        </View>
        <Text style={[styles.textoConfirmacao, , {fontFamily: 'MPlusRounded1c-Medium'}]}>{consulta.status}</Text>

        <View style={styles.containerTempo}>
          <TouchableOpacity style={[styles.containerButtonCancelar]}>
            <Text
              onPress={() => handleCancel(consulta.idAgenda)}
              style={[styles.textoButtonCancelar, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}
            >
              Cancelar Guia👆
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  if (consultas.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={[styles.emptyText, {fontFamily: 'MPlusRounded1c-Medium'}]}>Não há guias emitidas.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {consultas.map((consulta) => (
        <ConsultaItem key={consulta.idAgenda} consulta={consulta} />
      ))}
    </View>
  );
};

export default GuiaConsultaEmitida;
