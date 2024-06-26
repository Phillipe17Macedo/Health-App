import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { FontAwesome6, FontAwesome5 } from '@expo/vector-icons';

interface ConfirmacaoConsultaProps {
  visivel: boolean;
  onClose: () => void;
  onConfirm: () => void;
  consulta: {
    usuario: string;
    dependente: string;
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

          <View style={[styles.containerTextoPadrao]}>
            <FontAwesome6 name="person" size={21} color="#3E3D3D" />
            <Text style={styles.textoPadrao}>Aderente:</Text>
          </View>
          <Text style={styles.textoConfirmacao}>{consulta.usuario}</Text>

          <View style={[styles.containerTextoPadrao]}>
            <FontAwesome6 name="people-arrows" size={19} color="#3E3D3D" />
            <Text style={styles.textoPadrao}>Dependente:</Text>
          </View>
          <Text style={styles.textoConfirmacao}>{consulta.dependente ? consulta.dependente : "N/A"}</Text>

          <View style={[styles.containerTextoPadrao]}>
            <FontAwesome5 name="hospital-alt" size={19} color="#3E3D3D" />
            <Text style={styles.textoPadrao}>Unidade de Atendimento:</Text>
          </View>
          <Text style={styles.textoConfirmacao}>{consulta.unidadeAtendimento}</Text>

          <View style={[styles.containerTextoPadrao]}>
            <FontAwesome6 name="user-doctor" size={19} color="#3E3D3D" />
            <Text style={styles.textoPadrao}>Médico:</Text>
          </View>
          <Text style={styles.textoConfirmacao}>{consulta.medico}</Text>

          <View style={[styles.containerTextoPadrao]}>
            <FontAwesome6 name="briefcase-medical" size={19} color="#3E3D3D" />
            <Text style={styles.textoPadrao}>Especialidade:</Text>
          </View>
          <Text style={styles.textoConfirmacao}>{consulta.especialidade}</Text>

          <View style={[styles.containerTextoPadrao]}>
            <FontAwesome5 name="calendar-alt" size={19} color="#3E3D3D" />
            <Text style={styles.textoPadrao}>Data:</Text>
          </View>
          <Text style={styles.textoConfirmacao}>{consulta.data}</Text>

          <View style={[styles.containerTextoPadrao]}>
            <FontAwesome5 name="clock" size={19} color="#3E3D3D" />
            <Text style={styles.textoPadrao}>Horário:</Text>
          </View>
          <Text style={styles.textoConfirmacao}>{consulta.horario}</Text>

          <View style={[styles.containerTextoPadrao]}>
            <FontAwesome6 name="phone-volume" size={19} color="#3E3D3D" />
            <Text style={styles.textoPadrao}>Telefone de Contato:</Text>
          </View>
          <Text style={styles.textoConfirmacao}>{consulta.telefoneContato}</Text>
          
          <View style={[styles.containerButton]}>
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
      </View>
    </Modal>
  );
}
