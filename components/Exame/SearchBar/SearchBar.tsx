import React from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";

export function SearchBar() {
  return (
    <>
      <View style={[styles.containerAreaPesquisa]}>
        <View style={[styles.containerTextInput]}>
          <TextInput
            placeholder="PESQUISAR..."
            style={[styles.textoTextInput]}
          />
        </View>
        <TouchableOpacity style={[styles.containerIconePesquisar]}>
          <View>
            <FontAwesome name="search" size={18} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.containerOrientacao]}>
        <Text style={[styles.orientacao]}>
            Procurando um Exame ?
        </Text>
        <Text style={[styles.orientacao]}>
            Qual é o seu Problema ?
        </Text>
        <Text style={[styles.orientacao]}>
            Pesquise acima !
        </Text>
      </View>
    </>
  );
}
