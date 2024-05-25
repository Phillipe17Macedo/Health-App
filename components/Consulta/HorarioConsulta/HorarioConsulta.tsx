import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "./styles";

interface HorarioConsultaProps {
  visivel: boolean;
  onClose: () => void;
  onTimeSelect: (time: string) => void;
}

export default function HorarioConsulta({ visivel, onClose, onTimeSelect }: HorarioConsultaProps) {
  const [selectedTime, setSelectedTime] = useState<Date | null>(new Date());

  const handleConfirm = () => {
    if (selectedTime) {
      const formattedTime = selectedTime.toTimeString().split(" ")[0]; // Formatando o horário para HH:MM:SS
      onTimeSelect(formattedTime);
      onClose();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visivel}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Selecione o Horário</Text>
          <DateTimePicker
            value={selectedTime}
            mode="time"
            display="default"
            onChange={(event, date) => {
              setSelectedTime(date || selectedTime);
            }}
          />
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirm}
          >
            <Text style={styles.confirmButtonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
