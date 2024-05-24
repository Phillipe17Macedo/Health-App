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
            placeholder="ENDEREÇO"
            style={[styles.dadosInput]}
            keyboardType="number-pad"
          />
          <TextInput
            placeholder="EMAIL"
            style={[styles.dadosInput]}
            keyboardType="email-address"
          />
        </View>
        <TouchableOpacity style={[styles.containerButton]}>
          <Text style={[styles.textoButton]}>EDITAR</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
