import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

import { styles } from "./styles";

export default function Especialidade() {
    const [abrir, setAbrir] = useState(false);
    const [valor, setValor] = useState(null);
    const [itens, setItens] = useState([
        { label: 'Especialidade 1', value: 'especialidade1' },
        { label: 'Especialidade 2', value: 'especialidade2' },
        { label: 'Especialidade 3', value: 'especialidade3' },
    ]);
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
            placeholder="Selecione uma especialidade"
        />
      </View>
    </>
  );
}
