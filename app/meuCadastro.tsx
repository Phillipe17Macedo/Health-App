import React from "react";
import { View, Text } from "react-native";

import { styles } from "@/styles/StylesMeuCadastro/styles";
import DadosUsuario from "@/components/Perfil/MeuCadastro/DadosUsuario";
import { HeaderEditarPerfil } from "@/components/Perfil/EditarPerfil/Header";

export default function MeuCadastro() {
  return (
    <View style={styles.container}>
      <HeaderEditarPerfil/>
      <DadosUsuario/>
    </View>
  );
}
