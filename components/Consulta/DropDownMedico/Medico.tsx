import React, { useState, useEffect } from "react";
import { View } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { buscarMedicosPorEspecialidade } from "@/connection/buscarMedicos";
import { styles } from "./styles";

interface MedicoProps {
  especialidadeId: string | null;
}

export default function Medico({ especialidadeId }: MedicoProps) {
    const [abrir, setAbrir] = useState(false);
    const [valor, setValor] = useState(null);
    const [itens, setItens] = useState<{ label: string, value: string }[]>([]);

    useEffect(() => {
      async function carregarMedicos() {
        if (especialidadeId) {
          try {
            const medicos = await buscarMedicosPorEspecialidade(especialidadeId);
            setItens(medicos);
          } catch (error) {
            console.error("Erro ao carregar médicos:", error);
          }
        } else {
          setItens([]);
        }
      }
  
      carregarMedicos();
    }, [especialidadeId]);

  return (
    <>
      <View style={styles.container}>
        <DropDownPicker
            open={abrir}
            value={valor}
            items={itens}
            setOpen={setAbrir}
            setValue={setValor}
            setItems={setItens}
            placeholder="Selecione um Médico"
            style={styles.dropdown}
            placeholderStyle={styles.textoDropdown}
            dropDownContainerStyle={styles.dropDownContainerStyle}
            listItemLabelStyle={styles.itensLista}
            selectedItemLabelStyle={styles.itemSelecionado}
            disabled={!especialidadeId}     
            zIndex={2000}
            zIndexInverse={2000}
        />
      </View>
    </>
  );
}
