import React, { useState } from "react";
import { View, Modal, TouchableOpacity, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import { styles } from "./styles";

interface CalendarioConsultaProps {
  visivel: boolean;
  onClose: () => void;
  onDateSelected: (date: string) => void;
}

export function CalendarioConsulta({
  visivel,
  onClose,
  onDateSelected,
}: CalendarioConsultaProps) {
  const [dataSelecionada, setDataSelecionada] = useState<string | null>(null);

  const handleDayPress = (dia: any) => {
    setDataSelecionada(dia.dateString);
    onDateSelected(dia.dateString);
    onClose();
  };
  return (
    <Modal visible={visivel} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Calendar onDayPress={handleDayPress} />
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
