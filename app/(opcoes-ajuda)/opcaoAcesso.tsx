import React from "react";
import { View, Text } from "react-native";

import { styles } from "@/styles/StylesAjudaPage/StylesOpcoesAjuda/StylesOpcaoAcesso/styles";
import { HeaderOpcoes } from "@/components/Ajuda/Opcoes/Header";

export default function OpcaoAcesso() {
  return (
    <View style={styles.container}>
      <HeaderOpcoes />
      <Text>Opção de Acesso ao App</Text>
    </View>
  );
}
