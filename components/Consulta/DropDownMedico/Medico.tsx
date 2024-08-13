import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { buscarMedicosEspecialidade } from "@/utils/buscarMedicosPorEspecialidade";
import { styles } from "./styles";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

interface MedicoProps {
  especialidadeId: string | null;
  unidadeAtendimentoId: string | null;
  medicoSelecionado: string | null;
  onMedicoSelect: (medico: any) => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Medico({
  especialidadeId,
  unidadeAtendimentoId,
  medicoSelecionado,
  onMedicoSelect,
  isOpen,
  setIsOpen,
}: MedicoProps) {
  const [valor, setValor] = useState(medicoSelecionado);
  const [itens, setItens] = useState<
    { label: string; value: string; key: string; diasAtendimento: string[] }[]
  >([]);

  useEffect(() => {
    async function carregarMedicos() {
      if (especialidadeId && unidadeAtendimentoId) {
        try {
          const response = await buscarMedicosEspecialidade(especialidadeId, unidadeAtendimentoId);
          const medicos = response.data;
          setItens(
            medicos.map((medico: any) => ({
              label: medico.nomeMedico,
              value: medico.idMedico.toString(),
              key: medico.idMedico.toString(), // Usar idMedico como chave
              diasAtendimento: medico.diasAtendimento,
            }))
          );
        } catch (error) {
          console.error("Erro ao carregar médicos:", error);
        }
      } else {
        setItens([]);
      }
    }

    carregarMedicos();
  }, [especialidadeId, unidadeAtendimentoId]);

  useEffect(() => {
    setValor(medicoSelecionado);
  }, [medicoSelecionado]);

  const handleChangeValue = (value: string | null) => {
    const selectedMedico = itens.find((item) => item.value === value);
    if (selectedMedico) {
      onMedicoSelect(selectedMedico);
    }
    setValor(value);
  };

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
    <View style={styles.container}>
      <DropDownPicker
        open={isOpen}
        value={valor}
        items={itens}
        setOpen={setIsOpen}
        setValue={setValor}
        onChangeValue={handleChangeValue}
        setItems={setItens}
        placeholder="Selecione um Médico"
        style={styles.dropdown}
        placeholderStyle={[styles.textoDropdown, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        listItemLabelStyle={[styles.itensLista, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}
        selectedItemLabelStyle={[styles.itemSelecionado, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}
        disabled={!especialidadeId || !unidadeAtendimentoId}
        zIndex={1000}
        zIndexInverse={2000}
      />
    </View>
  );
}
