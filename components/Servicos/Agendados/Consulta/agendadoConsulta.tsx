import React, { useState, useEffect } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { cancelarAgendamentoConsulta } from "@/utils/requestConfig";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

interface Consulta {
  idAgenda: number;
  dataAgenda: string | null;
  horaAgenda: string | null;
  medico: string;
  status: string;
}

interface AgendadoConsultaProps {
  consultas: Consulta[];
  onConsultaCancelada: () => void;
}

const AgendadoConsulta: React.FC<AgendadoConsultaProps> = ({
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

  const tempoFormatado = (milisegundos: number) => {
    const segundosTotais = Math.floor(milisegundos / 1000);
    const dias = Math.floor(segundosTotais / 86400);
    const horas = Math.floor((segundosTotais % 86400) / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;
    return `${dias > 0 ? `${dias}d ` : ""}${horas
      .toString()
      .padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos
      .toString()
      .padStart(2, "0")}`;
  };

  const ConsultaItem: React.FC<{ consulta: Consulta }> = ({ consulta }) => {
    const [tempoRestante, setTempoRestante] = useState<number | null>(null);
    const [mostrarBotaoCancelar, setMostrarBotaoCancelar] = useState(true);

    useEffect(() => {
      const calcularTempoRestante = () => {
        if (consulta.dataAgenda && consulta.horaAgenda) {
          const dataHoraAgendada = new Date(
            `${consulta.dataAgenda.split("T")[0]}T${consulta.horaAgenda}`
          );
          const dataAtual = new Date();
          const diferencaMilissegundos =
            dataHoraAgendada.getTime() - dataAtual.getTime();

          setTempoRestante(diferencaMilissegundos);

          const vinteEQuatroHorasEmMilissegundos = 24 * 60 * 60 * 1000;

          if (diferencaMilissegundos <= vinteEQuatroHorasEmMilissegundos) {
            setMostrarBotaoCancelar(false);
          } else {
            setMostrarBotaoCancelar(true);
          }
        } else {
          setTempoRestante(null);
        }
      };

      calcularTempoRestante();

      const interval = setInterval(() => {
        calcularTempoRestante();
      }, 1000);

      return () => clearInterval(interval);
    }, [consulta.dataAgenda, consulta.horaAgenda]);

    const vinteEQuatroHorasEmMilissegundos = 24 * 60 * 60 * 1000;
    const textoTempo =
      tempoRestante !== null &&
      tempoRestante <= vinteEQuatroHorasEmMilissegundos
        ? `Faltam `
        : `Faltam `;

    const textoAcao =
      tempoRestante !== null &&
      tempoRestante <= vinteEQuatroHorasEmMilissegundos
        ? "para sua consulta"
        : "para cancelar";

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
          <Text style={[styles.textoIcone, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Consulta Agendada</Text>
        </View>
        <Text style={[styles.text, {fontFamily: 'MPlusRounded1c-Bold'}]}>Médico: {consulta.medico}</Text>
        <Text style={[styles.text, {fontFamily: 'MPlusRounded1c-Bold'}]}>
          Data:{" "}
          {consulta.dataAgenda
            ? new Date(consulta.dataAgenda.split("T")[0]).toLocaleDateString(
                "pt-BR",
                {
                  timeZone: "UTC",
                }
              )
            : "N/A"}
        </Text>
        <Text style={[styles.text, {fontFamily: 'MPlusRounded1c-Bold'}]}>Horário: {consulta.horaAgenda}</Text>
        <Text style={[styles.text, {fontFamily: 'MPlusRounded1c-Bold'}]}>Agendamento: {consulta.status}</Text>

        <View style={styles.containerTempo}>
          {tempoRestante !== null ? (
            <Text style={styles.textoContainerTempo}>
              {textoTempo}
              <Text style={[styles.textoTempo, {fontFamily: 'MPlusRounded1c-Bold'}]}>
                {tempoFormatado(tempoRestante)}
              </Text>{" "}
              {textoAcao}
            </Text>
          ) : (
            <Text style={styles.textoContainerTempo}>
              Informações de data e horário inválidas
            </Text>
          )}
          {mostrarBotaoCancelar && (
            <TouchableOpacity style={[styles.containerButtonCancelar]}>
              <Text
                onPress={() => handleCancel(consulta.idAgenda)}
                style={[styles.textoButtonCancelar, {fontFamily: 'MPlusRounded1c-Bold'}]}
              >
                Cancelar Agendamento
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.conatinersButtons}>
          <TouchableOpacity style={styles.containerButtonConfirmar}>
            <Text style={[styles.textoButtonConfirmar, {fontFamily: 'MPlusRounded1c-Bold'}]}>
              Confirmar Agendamento
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  if (consultas.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={[styles.emptyText, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Não há consultas agendadas.</Text>
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

export default AgendadoConsulta;
