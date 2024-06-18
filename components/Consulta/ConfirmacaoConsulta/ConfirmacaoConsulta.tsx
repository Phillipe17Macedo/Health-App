import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ConfirmacaoConsultaProps {
  visivel: boolean;
  onClose: () => void;
  onConfirm: () => void;
  consulta: {
    usuario: string;
    dependente: string | null;
    unidadeAtendimento: string;
    especialidade: string;
    medico: string;
    data: string;
    horario: string;
    telefoneContato: string;
  };
}

export default function ConfirmacaoConsulta({ visivel, onClose, onConfirm, consulta }: ConfirmacaoConsultaProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visivel}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Confirmação da Consulta</Text>
          <Text style={styles.confirmText}>Aderente: {consulta.usuario}</Text>
          <Text style={styles.confirmText}>Dependente: {consulta.dependente ? consulta.dependente : "N/A"}</Text>
          <Text style={styles.confirmText}>Unidade de Atendimento: {consulta.unidadeAtendimento}</Text>
          <Text style={styles.confirmText}>Médico: {consulta.medico}</Text>
          <Text style={styles.confirmText}>Especialidade: {consulta.especialidade}</Text>
          <Text style={styles.confirmText}>Data: {consulta.data}</Text>
          <Text style={styles.confirmText}>Horário: {consulta.horario}</Text>
          <Text style={styles.confirmText}>Telefone de Contato: {consulta.telefoneContato}</Text>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={onConfirm}
          >
            <Text style={styles.confirmButtonText}>Confirmar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={onClose}
          >
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
