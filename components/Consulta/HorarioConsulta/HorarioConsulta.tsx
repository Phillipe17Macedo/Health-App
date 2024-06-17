import React from "react";
import { Modal, View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";

interface HorarioConsultaProps {
  visivel: boolean;
  onClose: () => void;
  onTimeSelect: (time: string) => void;
  horariosDisponiveis: string[];
}

export default function HorarioConsulta({
  visivel,
  onClose,
  onTimeSelect,
  horariosDisponiveis,
}: HorarioConsultaProps) {
  const handleTimePress = (time: string) => {
    onTimeSelect(time);
    onClose();
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
          <Text style={styles.modalTitle}>Selecione um Horário Disponível</Text>
          <FlatList
            data={horariosDisponiveis}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.timeItem}
                onPress={() => handleTimePress(item)}
              >
                <Text style={styles.timeText}>{item}</Text>
              </TouchableOpacity>
            )}
            numColumns={3}
            columnWrapperStyle={styles.columnWrapper}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
