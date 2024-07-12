import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Exame {
  id: number;
  tipo: string;
  data: string;
  hora: string;
  local: string;
}

interface GuiaExameEmitidaProps {
  exames: Exame[];
}

const GuiaExameEmitida: React.FC<GuiaExameEmitidaProps> = ({ exames }) => {
  return (
    <View style={styles.container}>
      {exames.map((exame) => (
        <View key={exame.id} style={styles.item}>
          <View style={[styles.constainerIcone]}>
            <MaterialCommunityIcons name="flask-round-bottom" size={28} color="#52D981" />
            <Text style={[styles.textoIcone]}>Exames</Text>
          </View>
          <Text style={styles.text}>Tipo: {exame.tipo}</Text>
          <Text style={styles.text}>Data: {exame.data}</Text>
          <Text style={styles.text}>Hora: {exame.hora}</Text>
          <Text style={styles.text}>Local: {exame.local}</Text>
        </View>
      ))}
    </View>
  );
};

export default GuiaExameEmitida;
