import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from "./styles";

export function ComponentesExame() {
  return (
    <>
      <TouchableOpacity style={[styles.container]}>
        <Link href={'/exame'} style={[styles.containerLink]}>
          <MaterialCommunityIcons name="flask-round-bottom" size={28} color="#52D981" />
          <Text style={[styles.textoExame]}> AGENDAMENTO DE EXAMES</Text>
        </Link>
      </TouchableOpacity>
    </>
  );
}
