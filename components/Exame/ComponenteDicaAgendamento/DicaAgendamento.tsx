import React from "react";
import {View, Text} from "react-native";
import { styles } from "./styles";

export function DicaAgendamento() {
  return (
    <>
      <View style={styles.containerOrientacao}>
        <Text style={[styles.tituloOrientacao]}>AGENDAMENTO DE EXAME</Text>
        <Text style={styles.orientacao}>
          Para agendar um exame, siga os passos abaixo:
        </Text>
        <Text style={styles.orientacao}>
          1- Selecione a Especialidade do Exame.
        </Text>
        <Text style={styles.orientacao}>
          2- Selecione o Laboratório.
        </Text>
        <Text style={styles.orientacao}>
          3- Selecione um Data Disponível.
        </Text>
        <Text style={styles.orientacao}>
          4- Selecione um Horário Disponível.
        </Text>
      </View>
    </>
  );
}
