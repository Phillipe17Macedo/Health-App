import React, { useState, useEffect } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";

export function DicaGuiaConsulta() {
  return (
    <>
      <View style={styles.containerOrientacao}>
        <Text style={[styles.tituloOrientacao]}>SOLICITAÇÃO DE GUIA PARA CONSULTA</Text>
        <Text style={styles.orientacao}>
          Para agendar uma consulta, siga os passos abaixo:
        </Text>
        <Text style={styles.orientacao}>
          1- Marque se é para um Dependente ou Não.
        </Text>
        <Text style={styles.orientacao}>
          2- Selecione a Especialidade do Médico.
        </Text>
        <Text style={styles.orientacao}>
          3- Selecione o Médico.
        </Text>
      </View>
    </>
  );
}
