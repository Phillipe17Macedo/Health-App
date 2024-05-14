import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

export function Anuncios() {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        colors={["#025940", "#03A66A"]}
        start={{ x: 1, y: 0.5 }}
        end={{ x: 0, y: -0 }}
        style={[styles.anuncio]}
      >
        <View style={[styles.iconAnuncio]}>
          <Image source={require("../../assets/images/icons8-person-94.png")} />
        </View>
        <View style={[styles.containerTextoAnuncio]}>
          <Text style={[styles.textoTituloAnuncio]}>ANUNCIO EVENTO</Text>
          <Text style={[styles.textoDescricaoAnuncio]}>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..." "There is no one who loves pain
            itself, who seeks after it and wants to have it, simply because it
            is pain..."
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
