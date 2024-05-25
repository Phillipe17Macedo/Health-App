import React, { useState } from "react";
import { View, Modal, TouchableOpacity, Text, FlatList } from "react-native";
import { styles } from "./styles";

interface HorarioConsultaProps {
  visivel: boolean;
  onClose: () => void;
  onTimeSelect: (time: string) => void;
}

const horarios = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export default function HorarioConsulta({
  visivel,
  onClose,
  onTimeSelect,
}: HorarioConsultaProps) {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleTimePress = (time: string) => {
    setSelectedTime(time);
    onTimeSelect(time);
    onClose();
  };

  return (
    <Modal visible={visivel} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <FlatList
            data={horarios}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleTimePress(item)}>
                <Text style={styles.timeItem}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
