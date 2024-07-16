import React, { useEffect, useState } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

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

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          "MPlusRounded1c-Medium": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Medium.ttf"),
          "MPlusRounded1c-Regular": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Regular.ttf"),
          "MPlusRounded1c-Bold": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Bold.ttf"),
          "MPlusRounded1c-ExtraBold": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-ExtraBold.ttf"),
        });

        setFontLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!fontLoaded) {
    return null;
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visivel}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={[styles.modalTitle, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Selecione um Dependente</Text>
          {isDependente && (
            <Picker
              selectedValue={selectedDependente ? selectedDependente.id : ""}
              onValueChange={(itemValue) => {
                const dependente = dependentes.find(dep => dep.id === itemValue);
                setSelectedDependente(dependente || null);
              }}
              style={[styles.picker]}
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
              <Text style={[styles.confirmButtonText, {fontFamily: 'MPlusRounded1c-Bold'}]}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={onClose}
            >
              <Text style={[styles.cancelButtonText, {fontFamily: 'MPlusRounded1c-Bold'}]}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}