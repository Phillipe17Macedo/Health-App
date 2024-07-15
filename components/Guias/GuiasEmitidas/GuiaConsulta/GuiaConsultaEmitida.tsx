import React, { useState, useEffect } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { cancelarAgendamentoConsulta } from "@/utils/requestConfig";
import { FontAwesome6, FontAwesome5 } from '@expo/vector-icons';

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

  const tempoFormatado = (milisegundos: number) => {
    const segundosTotais = Math.floor(milisegundos / 1000);
    const dias = Math.floor(segundosTotais / 86400);
    const horas = Math.floor((segundosTotais % 86400) / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;
    return `${dias > 0 ? `${dias}d ` : ""}${horas.toString().padStart(2, "0")}:${minutos
      .toString()
      .padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
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
      tempoRestante !== null && tempoRestante <= vinteEQuatroHorasEmMilissegundos
        ? `Faltam `
        : `Faltam `;

    const textoAcao =
      tempoRestante !== null && tempoRestante <= vinteEQuatroHorasEmMilissegundos
        ? "para sua consulta"
        : "para cancelar";

    return (
      <View key={consulta.idAgenda} style={styles.item}>
        <View style={[styles.constainerIcone]}>
          <MaterialCommunityIcons name="pill" size={26} color="#9C71D9" />
          <Text style={[styles.textoIcone]}>Guia de Consulta</Text>
        </View>

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome6 name="person" size={21} color="#3E3D3D" />
          <Text style={styles.textoPadrao}>Aderente:</Text>
        </View>
        <Text style={styles.textoConfirmacao}>ADAILTON FERREIRA ANDRE NUNES DA SILVA JUNIOR</Text>
        
        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome6 name="people-arrows" size={19} color="#3E3D3D" />
          <Text style={styles.textoPadrao}>Dependente:</Text>
        </View>
        <Text style={styles.textoConfirmacao}>HELENA NUNES GUIMARAES</Text>

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome6 name="user-doctor" size={19} color="#3E3D3D" />
          <Text style={styles.textoPadrao}>Médico:</Text>
        </View>
        <Text style={styles.textoConfirmacao}>{consulta.medico}</Text>

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome5 name="notes-medical" size={19} color="#3E3D3D" />
          <Text style={styles.textoPadrao}>Especialidade:</Text>
        </View>
        <Text style={styles.textoConfirmacao}>PSICOLOGO</Text>

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome5 name="calendar-alt" size={19} color="#3E3D3D" />
          <Text style={styles.textoPadrao}>Data:</Text>
        </View>
        <Text style={styles.textoConfirmacao}>
          {consulta.dataAgenda
            ? new Date(consulta.dataAgenda.split("T")[0]).toLocaleDateString("pt-BR", {
                timeZone: "UTC",
              })
            : "N/A"}
        </Text>

        <Text style={[styles.textoPadrao, {color: '#F22', marginBottom: 5}]}>**ATENÇÃO PAGO NO LOCAL**</Text>
        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome5 name="money-bill-alt" size={19} color="#3E3D3D" />
          <Text style={styles.textoPadrao}>Valor:</Text>
        </View>
        <Text style={styles.textoConfirmacao}>R$ 79,00</Text>

        <View style={[styles.containerTextoPadrao]}>
          <FontAwesome5 name="print" size={19} color="#3E3D3D" />
          <Text style={styles.textoPadrao}>Guia Emitida:</Text>
        </View>
        <Text style={styles.textoConfirmacao}>{consulta.status}</Text>


        <View style={styles.containerTempo}>
          {tempoRestante !== null ? (
            <Text style={styles.textoContainerTempo}>
              {textoTempo}
              <Text style={[styles.textoTempo, { fontWeight: "bold" }]}>
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
                style={styles.textoButtonCancelar}
              >
                Cancelar Guia
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  if (consultas.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Não há guias emitidas.</Text>
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