import React, { useState, useEffect } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { buscarEspecialidades } from "@/utils/requestConfig";
import { styles } from "./styles";

interface EspecialidadeProps {
  EspecialidadeCarregada: (especialidadeId: string | null, especialidadeNome: string | null) => void;
  especialidadeSelecionada: string | null;
}

export default function Especialidade({ EspecialidadeCarregada, especialidadeSelecionada }: EspecialidadeProps) {
  const [abrir, setAbrir] = useState(false);
  const [valor, setValor] = useState<string | null>(especialidadeSelecionada);
  const [itens, setItens] = useState<{ label: string; value: string; key: string }[]>([]);

  useEffect(() => {
    async function carregarEspecialidades() {
      try {
        const response = await buscarEspecialidades();
        const especialidades = response.data;
        const especialidadesComChave = especialidades.map((especialidade: any) => ({
          label: especialidade.nome,
          value: especialidade.id,
          key: especialidade.id, // Chave única para cada item
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

  return (
    <>
      <View style={styles.container}>
        <DropDownPicker
          open={abrir}
          value={valor}
          items={itens}
          setOpen={setAbrir}
          setValue={setValor}
          onChangeValue={handleChangeValue}
          setItems={setItens}
          placeholder="Selecione uma especialidade"
          style={styles.dropdown}
          placeholderStyle={styles.textoDropdown}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          listItemLabelStyle={styles.itensLista}
          selectedItemLabelStyle={styles.itemSelecionado}
          zIndex={3000}
          zIndexInverse={1000}
        />
      </View>
    </>
  );
}
