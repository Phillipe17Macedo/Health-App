import React, { useState, useEffect } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { cancelarAgendamentoConsulta } from "@/utils/requestConfig";

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
    const horas = Math.floor(segundosTotais / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;
    return `${horas.toString().padStart(2, "0")}:${minutos
      .toString()
      .padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
  };

  const ConsultaItem: React.FC<{ consulta: Consulta }> = ({ consulta }) => {
    const [tempoRestante, setTempoRestante] = useState(3600000);

    useEffect(() => {
      const interval = setInterval(() => {
        setTempoRestante((prevTime) => {
          const newTime = prevTime - 1000;
          if (newTime <= 0) {
            clearInterval(interval);
            return 0;
          }
          return newTime;
        });
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <View key={consulta.idAgenda} style={styles.item}>
        <View style={[styles.constainerIcone]}>
          <MaterialCommunityIcons name="pill" size={26} color="#9C71D9" />
          <Text style={[styles.textoIcone]}>Consulta Agendada</Text>
        </View>
        <Text style={styles.text}>Médico: {consulta.medico}</Text>
        <Text style={styles.text}>
          Data:{" "}
          {consulta.dataAgenda
            ? new Date(consulta.dataAgenda).toLocaleDateString("pt-BR", {
                timeZone: "UTC",
              })
            : "N/A"}
        </Text>
        <Text style={styles.text}>Horário: {consulta.horaAgenda}</Text>
        <Text style={styles.text}>Agendamento: {consulta.status}</Text>

        <View style={styles.containerTempo}>
          <Text style={styles.textoContainerTempo}>
            Resta{" "}
            <Text style={styles.textoTempo}>
              {tempoFormatado(tempoRestante)}
            </Text>{" "}
            para cancelar:
          </Text>
          <TouchableOpacity style={[styles.containerButtonCancelar]}>
            <Text
              onPress={() => handleCancel(consulta.idAgenda)}
              style={styles.textoButtonCancelar}
            >
              Cancelar Agendamento
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.conatinersButtons}>
          <TouchableOpacity style={styles.containerButtonConfirmar}>
            <Text style={styles.textoButtonConfirmar}>
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
        <Text style={styles.emptyText}>Não há consultas agendadas.</Text>
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
