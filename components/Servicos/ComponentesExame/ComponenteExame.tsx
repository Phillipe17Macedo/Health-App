import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from "./styles";

export function ComponentesExame() {
  return (
    <>
      <TouchableOpacity style={[styles.container]}>
        <Link href={'/exame'} style={[styles.containerLink]}>
          <Text style={[styles.textoExame]}>EXAMES </Text>
          <FontAwesome5
            name="file-medical-alt"
            size={21}
            color="#025940"
          />
        </Link>
      </TouchableOpacity>
    </>
  );
}
