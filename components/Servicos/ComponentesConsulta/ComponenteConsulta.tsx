import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { styles } from "./styles";

export function ComponentesConsulta() {
  return (
    <>
      <TouchableOpacity style={[styles.container]}>
        <Link href={"/consulta"} style={{ width: 150 }}>
          <View style={[styles.containerLink]}>
            <MaterialCommunityIcons
              name="pill"
              size={64}
              color="#9C71D9"
            />
            <Text style={[styles.textoConsultas]}>Agendar Consulta</Text>
          </View>
        </Link>
      </TouchableOpacity>
    </>
  );
}
