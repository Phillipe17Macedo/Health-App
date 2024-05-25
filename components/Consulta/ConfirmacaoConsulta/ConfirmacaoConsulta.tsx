import React from "react";
import { View, Modal, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import Consulta from "../../../app/consulta";

interface ConfirmacaoConsultaProps {
  visivel: boolean;
  onClose: () => void;
  onConfirm: () => void;
  consulta: {
    usuario: string;
    especialidade: string;
    medico: string;
    data: string;
    horario: string;
  };
}

export function ConfirmacaoConsulta({
  visivel,
  onClose,
  onConfirm,
  consulta,
}: ConfirmacaoConsultaProps) {
  return (
    <Modal visible={visivel} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.confirmationText}>Confirme sua consulta:</Text>
          <Text>Usuário: {consulta.usuario}</Text>
          <Text>Especialidade: {consulta.especialidade}</Text>
          <Text>Médico: {consulta.medico}</Text>
          <Text>Data: {consulta.data}</Text>
          <Text>Horário: {consulta.horario}</Text>
          <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
            <Text style={styles.confirmButtonText}>Confirmar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
