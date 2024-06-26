import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { buscarUnidadeAtendimento } from "@/utils/requestConfig";

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
        placeholderStyle={styles.textoDropdown}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        listItemLabelStyle={styles.itensLista}
        selectedItemLabelStyle={styles.itemSelecionado}
        zIndex={3000}
        zIndexInverse={1000}
      />
    </View>
  );
}