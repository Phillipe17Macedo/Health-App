import React from "react";
import { TextInput, View } from "react-native";

import { styles } from './styles';
import { ButtonLogin } from "./ButtonLogin/ButtonLogin";

export function InputLogin() {
  return (
    <View style={styles.container}>
      <View style={[styles.containerInput]}>
        <TextInput placeholder="CPF 000.000.000-00" keyboardType="numeric" style={[styles.textInput]}/>
      </View>
      <ButtonLogin/>
    </View>
  );
}
