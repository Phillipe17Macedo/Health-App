import React, { useState, useEffect } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { buscarMedicosPorEspecialidadeGuiaDeConsulta } from "@/utils/buscarMedicosPorEspecialidadeGuiaDeConsulta";
import { styles } from "./styles";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

interface MedicoProps {
  especialidadeId: string | null;
  medicoSelecionado: string | null;
  onMedicoSelect: (medico: any) => void;
  onOpen: () => void;
  onClose: () => void;
  aberto: boolean;
}

export default function Medico({
  especialidadeId,
  medicoSelecionado,
  onMedicoSelect,
  onOpen,
  onClose,
  aberto,
}: MedicoProps) {
  const [valor, setValor] = useState(medicoSelecionado);
  const [itens, setItens] = useState<
    { label: string; value: string; key: string; diasAtendimento: string[] }[]
  >([]);

  useEffect(() => {
    async function carregarMedicos() {
      if (especialidadeId) {
        try {
          const response = await buscarMedicosPorEspecialidadeGuiaDeConsulta(Number(especialidadeId));
          const medicos = response.data;
          setItens(
            medicos.map((medico: any) => ({
              label: medico.nomeMedico,
              value: medico.idMedico.toString(),
              key: medico.idMedico.toString(),
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
  }, [especialidadeId]);

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
        open={aberto}
        value={valor}
        items={itens}
        setOpen={onOpen}
        onClose={onClose}
        setValue={setValor}
        onChangeValue={handleChangeValue}
        setItems={setItens}
        placeholder="Selecione um Médico"
        style={styles.dropdown}
        placeholderStyle={[styles.textoDropdown, { fontFamily: 'MPlusRounded1c-ExtraBold' }]}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        listItemLabelStyle={[styles.itensLista, { fontFamily: 'MPlusRounded1c-ExtraBold' }]}
        selectedItemLabelStyle={[styles.itemSelecionado, { fontFamily: 'MPlusRounded1c-ExtraBold' }]}
        disabled={!especialidadeId}
        zIndex={1000}
        zIndexInverse={2000}
      />
    </View>
  );
}