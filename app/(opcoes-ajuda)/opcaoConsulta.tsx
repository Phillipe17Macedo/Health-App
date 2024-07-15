import React from "react";
import { View, Text } from "react-native";

import { styles } from "@/styles/StylesAjudaPage/StylesOpcoesAjuda/StylesOpcaoConsulta/styles";
import { HeaderOpcoes } from "@/components/Ajuda/Opcoes/Header";

export default function OpcaoConsulta() {
  return (
    <View style={styles.container}>
      <HeaderOpcoes/>
      <Text>Opcao Consulta</Text>
    </View>
  );
}
