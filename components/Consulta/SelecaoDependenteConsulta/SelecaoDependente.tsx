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
  dependentes: any[];
  selectedDependente: string | null;
  setSelectedDependente: (value: string | null) => void;
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
          <Text style={styles.modalTitle}>Selecione o Dependente</Text>
          <View style={styles.checkboxContainer}>
          </View>
          {isDependente && (
            <Picker
              selectedValue={selectedDependente}
              onValueChange={(itemValue) => setSelectedDependente(itemValue)}
              style={styles.picker}
            >
              {dependentes.map((dependente) => (
                <Picker.Item
                  key={dependente.nome}
                  label={dependente.nome}
                  value={dependente.nome}
                />
              ))}
            </Picker>
          )}
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={onConfirm}
          >
            <Text style={styles.confirmButtonText}>Continuar</Text>
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
