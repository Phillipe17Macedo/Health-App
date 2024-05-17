import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { styles } from './styles';

export function ComponentesConsulta() {
  return (
    <>
      <TouchableOpacity style={[styles.container]}>
        <Link href={'/consulta'} style={[styles.containerLink]}>
          <Text style={[styles.textoConsultas]}>CONSULTAS </Text>
          <FontAwesome5
            name="hand-holding-medical"
            size={21}
            color="#025940"
          />
        </Link>
      </TouchableOpacity>
    </>
  );
}
