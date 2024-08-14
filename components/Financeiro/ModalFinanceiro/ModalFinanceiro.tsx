import React from 'react';
import { Modal, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';

interface ModalFinanceiroProps {
  visivel: boolean;
  onClose: () => void;
  mes: string;
  valor: number;
  parcela: string;
  quitado: boolean;
  dataQuitacao: string | null;
  documento: string;
  descricao: string;
}

export function ModalFinanceiro({
  visivel,
  onClose,
  mes,
  valor,
  parcela,
  quitado,
  dataQuitacao,
  documento,
  descricao,
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
            <Text style={styles.modalTitle}>Detalhes de {mes}</Text>
            <Text>Valor: R$ {valor.toFixed(2)}</Text>
            <Text>Parcela: {parcela}</Text>
            <Text>Documento: {documento}</Text>
            <Text>Descrição: {descricao}</Text>
            <Text>Status: {quitado ? `Quitado em ${dataQuitacao}` : "Não Quitado"}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}