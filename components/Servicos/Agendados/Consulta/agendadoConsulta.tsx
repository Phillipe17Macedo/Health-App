// AgendadoConsulta.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface Consulta {
  id: number;
  medico: string;
  especialidade: string;
  data: string;
  hora: string;
}

interface AgendadoConsultaProps {
  consultas: Consulta[];
}

const AgendadoConsulta: React.FC<AgendadoConsultaProps> = ({ consultas }) => {
  return (
    <View style={styles.container}>
      {consultas.map((consulta) => (
        <View key={consulta.id} style={styles.item}>
          <Text style={styles.text}>Médico: {consulta.medico}</Text>
          <Text style={styles.text}>Especialidade: {consulta.especialidade}</Text>
          <Text style={styles.text}>Data: {consulta.data}</Text>
          <Text style={styles.text}>Hora: {consulta.hora}</Text>
        </View>
      ))}
    </View>
  );
}

export default AgendadoConsulta;