import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export default function DadosUser() {
  return (
    <>
      <View style={[styles.container]}>
        <View>
          <TextInput
            placeholder="TELEFONE"
            style={[styles.dadosInput]}
            keyboardType="number-pad"
          />
          <TextInput
            placeholder="SENHA"
            style={[styles.dadosInput]}
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={[styles.containerButton]}>
          <Text style={[styles.textoButton]}>EDITAR</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
