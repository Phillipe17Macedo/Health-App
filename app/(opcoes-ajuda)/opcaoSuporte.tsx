import React from "react";
import { View, Text } from "react-native";

import { styles } from "@/styles/StylesAjudaPage/StylesOpcoesAjuda/StylesOpcaoSuporte/styles";
import { HeaderOpcoes } from "@/components/Ajuda/Opcoes/Header";

export default function OpcaoSuporte() {
  return (
    <View style={styles.container}>
      <HeaderOpcoes />
      <Text>Opcao Suporte</Text>
    </View>
  );
}
