import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { buscarUnidadeAtendimento } from "@/utils/requestConfig";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { styles } from "./styles";

interface UnidadeAtendimentoProps {
  UnidadeAtendimentoCarregada : (unidadeatendimentoId: string | null, unidadeAtendimentoNome: string | null) => void;
  unidadeAtendimentoSelecionada: string | null;
};

export default function UnidadeAtendimento({UnidadeAtendimentoCarregada, unidadeAtendimentoSelecionada}: UnidadeAtendimentoProps) {
  const [abrir, setAbrir] = useState(false);
  const [valor, setValor] = useState<string | null>(unidadeAtendimentoSelecionada);
  const [itens, setItens] = useState<{ label: string; value: string; key: string }[]>([]);

  useEffect (() => {
    async function carregarUnidadesAtendimento() {
      try {
        const response = await buscarUnidadeAtendimento();
        const unidadesAtendimento = response.data;

        const unidadesAtendimentoComChave = unidadesAtendimento.map((unidade: any) => ({
          label: unidade.nome,
          value: unidade.id.toString(),
          key: unidade.id.toString(), // Usar id como chave
        }));
        setItens(unidadesAtendimentoComChave);
      } catch (error) {
        console.error("Erro ao carregar Unidades de Atendimento: ", error);
      }
    }
    carregarUnidadesAtendimento();
  }, []);

  useEffect(() => {
    setValor(unidadeAtendimentoSelecionada);
  }, [unidadeAtendimentoSelecionada]);

  const handleChangeValue = (value: string | null) => {
    const selectedUnidadeAtendimento = itens.find((item) => item.value === value);
    if (selectedUnidadeAtendimento) {
      UnidadeAtendimentoCarregada(value, selectedUnidadeAtendimento.label);
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
        open={abrir}
        value={valor}
        items={itens}
        setOpen={setAbrir}
        setValue={setValor}
        onChangeValue={handleChangeValue}
        setItems={setItens}
        placeholder="Selecione uma Unidade de Atendimento"
        style={styles.dropdown}
        placeholderStyle={[styles.textoDropdown, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        listItemLabelStyle={[styles.itensLista, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}
        selectedItemLabelStyle={[styles.itemSelecionado, , {fontFamily: 'MPlusRounded1c-ExtraBold'}]}
        zIndex={3000}
        zIndexInverse={1000}
      />
    </View>
  );
}