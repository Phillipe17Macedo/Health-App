import React from "react";
import { View, Text } from "react-native";

import { styles } from "@/styles/StylesAjudaPage/StylesOpcoesAjuda/StylesOpcaoGuias/styles";
import { HeaderOpcoes } from "@/components/Ajuda/Opcoes/Header";

export default function OpcaoGuia() {
  return (
    <View style={styles.container}>
      <HeaderOpcoes />
      <Text>Opcao Guia</Text>
    </View>
  );
}
