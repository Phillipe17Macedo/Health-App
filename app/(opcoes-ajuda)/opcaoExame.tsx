import React from "react";
import { View, Text } from "react-native";

import { styles } from "@/styles/StylesAjudaPage/StylesOpcoesAjuda/StylesOpcaoExame/styles";
import { HeaderOpcoes } from "@/components/Ajuda/Opcoes/Header";

export default function OpcaoExame() {
  return (
    <View style={styles.container}>
      <HeaderOpcoes/>
      <Text>Opcao Exame</Text>
    </View>
  );
}
