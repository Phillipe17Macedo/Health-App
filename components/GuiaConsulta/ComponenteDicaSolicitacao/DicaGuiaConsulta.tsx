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
          1- Selecione a Unidade de Atendimento.
        </Text>
        <Text style={styles.orientacao}>
          2- Marque se é para um Dependente ou Não.
        </Text>
        <Text style={styles.orientacao}>
          3- Selecione a Especialidade da consulta.
        </Text>
        <Text style={styles.orientacao}>
          4- Selecione o Médico.
        </Text>
        <Text style={styles.orientacao}>
          5- Selecione o Dia e Horário Disponíveis.
        </Text>
      </View>
    </>
  );
}
