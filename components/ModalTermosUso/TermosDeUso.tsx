import React from "react";
import { Modal, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";

interface TermosDeUsoModalProps {
  visible: boolean;
  onAccept: () => void;
  onDecline: () => void;
}

const TermosDeUsoModal: React.FC<TermosDeUsoModalProps> = ({
  visible,
  onAccept,
  onDecline,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onDecline}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ScrollView>
            <Text style={styles.title}>Termos de Uso</Text>
            <Text style={styles.content}>
              Aqui vão os termos de uso do seu aplicativo. Você pode colocar o
              texto completo aqui.
            </Text>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onAccept}>
              <Text style={styles.buttonText}>Aceitar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onDecline}>
              <Text style={styles.buttonText}>Recusar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
