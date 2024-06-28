// ModalErro.tsx
import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface ModalErroProps {
  visivel: boolean;
  onClose: () => void;
  mensagem: string;
}

export default function ModalErro({
  visivel,
  onClose,
  mensagem,
}: ModalErroProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visivel}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Erro</Text>
          <Text style={styles.modalMessage}>{mensagem}</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
