// AgendadoConsulta.tsx
import React from 'react';
import { View, Text, Alert, Button } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { cancelarAgendamentoConsulta } from '@/utils/requestConfig';

interface Consulta {
  id: number;
  dataAgenda: string | null;
  horaAgenda: string | null;
  medico: string;
}

interface AgendadoConsultaProps {
  consultas: Consulta[];
  onConsultaCancelada: () => void;
}

const AgendadoConsulta: React.FC<AgendadoConsultaProps> = ({ consultas, onConsultaCancelada }) => {
  console.log('Consultas recebidas no componente:', consultas);

  const handleCancel = async (idAgendamento: number) => {
    try {
      await cancelarAgendamentoConsulta(idAgendamento);
      Alert.alert("Sucesso", "Consulta cancelada com sucesso.");
      onConsultaCancelada();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível cancelar a consulta. Tente novamente mais tarde.");
    }
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
        <View key={consulta.id} style={styles.item}>
          <View style={[styles.constainerIcone]}>
            <MaterialCommunityIcons name="pill" size={26} color="#9C71D9" />
            <Text style={[styles.textoIcone]}>Consulta</Text>
          </View>
          <Text style={styles.text}>Médico: {consulta.medico}</Text>
          <Text style={styles.text}>Data: {consulta.dataAgenda ? new Date(consulta.dataAgenda).toLocaleDateString('pt-BR', {timeZone: 'UTC'}) : 'N/A'}</Text>
          <Text style={styles.text}>Horário: {consulta.horaAgenda}</Text>
          <View style={[styles.containerButton]}>
            <Button title="Cancelar Agendamento" onPress={() => handleCancel(consulta.id)} color={"#F22222"} />
          </View>
        </View>
      ))}
    </View>
  );
}

export default AgendadoConsulta;