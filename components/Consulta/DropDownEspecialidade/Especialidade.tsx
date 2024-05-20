import React, { useState, useEffect } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { buscarEspecialidades } from "@/connection/buscarEspecialidades";
import { styles } from "./styles";

interface EspecialidadeProps {
  EspecialidadeCarregada: (especialidadeId: string | null) => void;
}

export default function Especialidade({EspecialidadeCarregada}: EspecialidadeProps) {
  const [abrir, setAbrir] = useState(false);
  const [valor, setValor] = useState<string | null>(null);
  const [itens, setItens] = useState<{ label: string; value: string }[]>([]);

  useEffect(() => {
    async function carregarEspecialidades() {
      try {
        const especialidades = await buscarEspecialidades();
        setItens(especialidades);
      } catch (error) {
        console.error("Erro ao carregar especialidades:", error);
      }
    }

    carregarEspecialidades();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <DropDownPicker
          open={abrir}
          value={valor}
          items={itens}
          setOpen={setAbrir}
          setValue={(value) => {
            setValor(value);
            EspecialidadeCarregada(value);
          }}
          setItems={setItens}
          placeholder="Selecione uma especialidade"
        />
      </View>
    </>
  );
}
