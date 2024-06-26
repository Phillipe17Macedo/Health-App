import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";

interface SelecaoDependenteProps {
  visivel: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isDependente: boolean;
  setIsDependente: (value: boolean) => void;
  dependentes: { id: string; nome: string }[];
  selectedDependente: { id: string; nome: string } | null;
  setSelectedDependente: (value: { id: string; nome: string } | null) => void;
}

export default function SelecaoDependente({
  visivel,
  onClose,
  onConfirm,
  isDependente,
  setIsDependente,
  dependentes,
  selectedDependente,
  setSelectedDependente,
}: SelecaoDependenteProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visivel}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Selecione um Dependente</Text>
          {isDependente && (
            <Picker
              selectedValue={selectedDependente ? selectedDependente.id : ""}
              onValueChange={(itemValue) => {
                const dependente = dependentes.find(dep => dep.id === itemValue);
                setSelectedDependente(dependente || null);
              }}
              style={styles.picker}
            >
              {dependentes.map((dependente) => (
                <Picker.Item
                  key={dependente.id}
                  label={dependente.nome}
                  value={dependente.id}
                />
              ))}
            </Picker>
          )}
          <View style={[styles.containerButtons]}>
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
              <Text style={styles.cancelButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}