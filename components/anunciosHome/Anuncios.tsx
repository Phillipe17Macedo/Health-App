import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

export function Anuncios() {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        colors={["#025940", "#8CBF1F"]}
        start={{ x: 1, y: 0.5 }}
        end={{ x: 0, y: -0 }}
        style={[styles.anuncio]}
      >
        <View style={[styles.iconAnuncio]}/>
        <Text style={[styles.textoAnuncio]}>TESTE</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
