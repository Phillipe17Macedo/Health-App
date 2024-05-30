import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { Calendar, DateData } from "react-native-calendars";
import { styles } from "./styles";

interface CalendarioConsultaProps {
  visivel: boolean;
  onClose: () => void;
  onDateSelect: (date: string) => void;
  diasDisponiveis: string[];
}

const diasUteis = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

export default function CalendarioConsulta({
  visivel,
  onClose,
  onDateSelect,
  diasDisponiveis,
}: CalendarioConsultaProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDiaPress = (dia: DateData) => {
    const date = dia.dateString;
    const dayOfWeek = diasUteis[new Date(date).getDay()];
    if (diasDisponiveis.includes(dayOfWeek)) {
      setSelectedDate(date);
    }
  };

  const handleConfirm = () => {
    if (selectedDate) {
      onDateSelect(selectedDate);
      onClose();
    }
  };

  const renderDay = (day: DateData) => {
    const date = day.dateString;
    const dayOfWeek = diasUteis[new Date(date).getDay()];
    const isDisabled = !diasDisponiveis.includes(dayOfWeek);

    return {
      textColor: isDisabled ? "gray" : "black",
      disabled: isDisabled,
    };
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
          <Text style={styles.modalTitle}>Selecione a Data</Text>
          <Calendar
            onDayPress={handleDiaPress}
            markingType={"custom"}
            markedDates={{
              [selectedDate || ""]: {
                selected: true,
                marked: true,
                selectedColor: "blue",
              },
            }}
            dayComponent={({ date }) => {
              if (!date) return null;
              const { textColor, disabled } = renderDay(date);
              return (
                <View style={{ width: 32, height: 32, justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ color: textColor }}>{date.day}</Text>
                </View>
              );
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
