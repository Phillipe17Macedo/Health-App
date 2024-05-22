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

interface SearchBarProps {
  onSearch: (query: string) => void;
  onSugest: (query: string) => void;
  onSelecionarSugestao: (item: any) => void;
  resultados: any[];
}

export function SearchBar({ onSearch, onSugest, onSelecionarSugestao, resultados }: SearchBarProps) {
  const [pesquisarTexto, setPesquisarTexto] = useState("");

  useEffect(() => {
    if (pesquisarTexto.length > 0) {
      onSugest(pesquisarTexto);
    }
  }, [pesquisarTexto]);

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
      {pesquisarTexto.length > 0 && (
        <View style={styles.sugestaoContainer}>
          <FlatList
            data={resultados}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => onSelecionarSugestao(item)}
                style={styles.sugestaoItem}
              >
                <Text style={styles.sugestaoText}>
                  {item.nome} ({item.type === "especialidade" ? "Especialidade" : "Médico"})
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      <View style={styles.containerOrientacao}>
        <Text style={styles.orientacao}>Procurando uma consulta ?</Text>
        <Text style={styles.orientacao}>Qual é o seu Problema ?</Text>
        <Text style={styles.orientacao}>Pesquise acima !</Text>
      </View>
    </>
  );
}
