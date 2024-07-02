import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from "expo-router";
import { styles } from './styles';

export function ComponentesConsulta() {
  return (
    <>
      <TouchableOpacity style={[styles.container]}>
        <MaterialCommunityIcons name="pill" size={26} color="#9C71D9" />
        <Link href={'/consulta'} style={[styles.containerLink]}>
          <Text style={[styles.textoConsultas]}> AGENDAMENTO DE CONSULTAS</Text>
        </Link>
      </TouchableOpacity>
    </>
  );
}
