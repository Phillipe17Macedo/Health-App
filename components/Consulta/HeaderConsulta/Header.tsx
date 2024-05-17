import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

export function HeaderConulta() {
  return (
    <>
      <View style={styles.container}>
        <Link href={"/servicos"} style={[styles.containerLink]}>
          <View style={[styles.containerIcone]}>
            <Ionicons name="arrow-back-circle" size={42} color="#F2F2F2" />
          </View>
          <View style={[styles.containerTexto]}>
            <Text style={[styles.textoHeader]}>Voltar</Text>
          </View>
        </Link>
      </View>
    </>
  );
}
