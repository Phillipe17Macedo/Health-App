import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface MedicoProps {
  medico: {
    id: number;
    nome: string;
    especialidade: string;
    diasAtendimento: Record<string, string[]>;
  };
  onSelect: (medico: any) => void;
}

const MedicoCard: React.FC<MedicoProps> = ({ medico, onSelect }) => {
  return (
    <TouchableOpacity style={styles.medicoCard} onPress={() => onSelect(medico)}>
      <Text style={styles.medicoName}>{medico.nome}</Text>
      <Text style={styles.medicoDetails}>Especialidade: {medico.especialidade}</Text>
    </TouchableOpacity>
  );
};

export default MedicoCard;
