import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [pesquisarTexto, setPesquisarTexto] = useState("");

  return (
    <>
      <View style={styles.containerAreaPesquisa}>
        <View style={styles.containerTextInput}>
          <TextInput
            placeholder="PESQUISAR..."
            style={styles.textoTextInput}
            value={pesquisarTexto}
            onChangeText={setPesquisarTexto}
          />
        </View>
        <TouchableOpacity
          style={styles.containerIconePesquisar}
          onPress={() => onSearch(pesquisarTexto)}
        >
          <View>
            <FontAwesome name="search" size={18} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.containerOrientacao}>
        <Text style={styles.orientacao}>Procurando uma consulta ?</Text>
        <Text style={styles.orientacao}>Qual é o seu Problema ?</Text>
        <Text style={styles.orientacao}>Pesquise acima !</Text>
      </View>
    </>
  );
}
