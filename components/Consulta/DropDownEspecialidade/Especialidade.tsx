import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { buscarEspecialidades } from "@/utils/buscarEspecialidade";
import { styles } from "./styles";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

interface EspecialidadeProps {
  EspecialidadeCarregada: (especialidadeId: string | null, especialidadeNome: string | null) => void;
  especialidadeSelecionada: string | null;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Especialidade({ EspecialidadeCarregada, especialidadeSelecionada, isOpen, setIsOpen }: EspecialidadeProps) {
  const [valor, setValor] = useState<string | null>(especialidadeSelecionada);
  const [itens, setItens] = useState<{ label: string; value: string; key: string }[]>([]);

  useEffect(() => {
    async function carregarEspecialidades() {
      try {
        const response = await buscarEspecialidades();
        const especialidades = response.data;

        const especialidadesComChave = especialidades.map((especialidade: any) => ({
          label: especialidade.nome,
          value: especialidade.id.toString(),
          key: especialidade.id.toString(), // Usar id como chave
        }));
        setItens(especialidadesComChave);
      } catch (error) {
        console.error("Erro ao carregar especialidades:", error);
      }
    }

    carregarEspecialidades();
  }, []);

  useEffect(() => {
    setValor(especialidadeSelecionada);
  }, [especialidadeSelecionada]);

  const handleChangeValue = (value: string | null) => {
    const selectedEspecialidade = itens.find((item) => item.value === value);
    if (selectedEspecialidade) {
      EspecialidadeCarregada(value, selectedEspecialidade.label);
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
        placeholder="Selecione uma especialidade"
        style={styles.dropdown}
        placeholderStyle={[styles.textoDropdown, , {fontFamily: 'MPlusRounded1c-ExtraBold'}]}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        listItemLabelStyle={[styles.itensLista, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}
        selectedItemLabelStyle={[styles.itemSelecionado, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}
        zIndex={3000}
        zIndexInverse={1000}
      />
    </View>
  );
}