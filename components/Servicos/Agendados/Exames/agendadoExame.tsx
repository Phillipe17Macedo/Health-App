import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

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
  return (
    <View style={styles.container}>
      {exames.map((exame) => (
        <View key={exame.id} style={styles.item}>
          <Text style={styles.text}>Tipo: {exame.tipo}</Text>
          <Text style={styles.text}>Data: {exame.data}</Text>
          <Text style={styles.text}>Hora: {exame.hora}</Text>
          <Text style={styles.text}>Local: {exame.local}</Text>
        </View>
      ))}
    </View>
  );
}

export default AgendadoExame;