import React from "react";
import { View, Modal, Text, ActivityIndicator } from "react-native";

import { styles } from "./styles";

interface ModalCarreegamentoProps {
  visivel: boolean;
  onClose?: () => void;
}

export default function ModalCarregamento({
  visivel,
}: ModalCarreegamentoProps) {
  return (
    <Modal visible={visivel} transparent={true} animationType="fade">
      <View style={styles.modalBackground}>
        <View style={[styles.modalContainer]}>
          <ActivityIndicator size="large" color="#8CBF1F" />
          <Text style={styles.loadingText}>Buscando Informações...</Text>
        </View>
      </View>
    </Modal>
  );
}
