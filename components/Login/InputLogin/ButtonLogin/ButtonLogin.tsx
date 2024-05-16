import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { styles } from "./styles";

export function ButtonLogin() {
  return (
      <TouchableOpacity  style={[styles.containerButtonEntrar]}>
        <Link href={"/(tabs)/home"} style={styles.buttonEntrar}>
          <Text style={[styles.textoButton]}>Entrar</Text>
        </Link>
      </TouchableOpacity>
  );
}
