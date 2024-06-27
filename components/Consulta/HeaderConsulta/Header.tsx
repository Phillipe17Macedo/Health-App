import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { styles } from "./styles";

interface HeaderConsultaProps {
  onRefresh: () => void;
}

export function HeaderConsulta({ onRefresh }: HeaderConsultaProps) {
  return (
    <View style={styles.container}>
      <Link href={"/servicos"} style={[styles.containerLink]}>

        <View style={[styles.containerIcone]}>
          <Ionicons name="arrow-back-circle" size={42} color="#F2F2F2" />
        </View>

        <View style={[styles.containerTexto]}>
          <Text style={[styles.textoHeader]}>Voltar</Text>
        </View>
      </Link>
      <TouchableOpacity onPress={onRefresh} style={styles.refreshButton}>
        <Fontisto name="cloud-refresh" size={25} color="#F2F2F2" />
        <Text style={[styles.textoIcone]}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
}
