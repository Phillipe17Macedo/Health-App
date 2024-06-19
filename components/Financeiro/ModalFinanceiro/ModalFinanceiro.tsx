import React from 'react';
import { Modal, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';

interface ModalFinanceiroProps {
  visivel: boolean;
  onClose: () => void;
  mes: string;
  nomeAderente: string;
  consultasFeitas: number;
  examesFeitos: number;
  dependentesUsaram: string[];
  valorConsultas: number;
  valorExames: number;
  valorTotal: number;
}

export function ModalFinanceiro({
  visivel,
  onClose,
  mes,
  nomeAderente,
  consultasFeitas,
  examesFeitos,
  dependentesUsaram,
  valorConsultas,
  valorExames,
  valorTotal,
}: ModalFinanceiroProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visivel}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ScrollView>
            <Text style={styles.modalTitle}>Detalhes do {mes}</Text>
            <Text style={styles.modalText}>Nome do Aderente: {nomeAderente}</Text>
            <Text style={styles.modalText}>Consultas Feitas: {consultasFeitas}</Text>
            <Text style={styles.modalText}>Exames Feitos: {examesFeitos}</Text>
            <Text style={styles.modalText}>Dependentes que Usaram: {dependentesUsaram.join(", ")}</Text>
            <Text style={styles.modalText}>Valor de Consultas: R${valorConsultas.toFixed(2)}</Text>
            <Text style={styles.modalText}>Valor de Exames: R${valorExames.toFixed(2)}</Text>
            <Text style={styles.modalText}>Valor Total: R${valorTotal.toFixed(2)}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}