import React, { useState } from "react";
import { View, Modal, Text, FlatList, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HeaderConsulta } from "@/components/Consulta/HeaderConsulta/Header";
import { SearchBar } from "../components/Consulta/SeachBar/SearchBar";
import Especialidade from "@/components/Consulta/DropDownEspecialidade/Especialidade";
import Medico from "@/components/Consulta/DropDownMedico/Medico";
import { buscarAreas } from "../connection/buscarAreas";
import { styles } from "../styles/StylesServicosPage/StylesConsultaPage/styles";
import { query } from "firebase/database";

export default function Consulta() {
  const [especialidadeId, setEspecialidadeId] = useState<string | null>(null);
  const [resultadoPesquisa, setResultadoPesquisa] = useState<any[]>([]);
  const [modalVisivel, setModalVisivel] = useState(false);

  const handlePesquisar = async (query: string) => {
    try {
      const results = await buscarAreas(query);
      setResultadoPesquisa(results);
      setModalVisivel(true);
    } catch (error) {
      console.error("Erro ao realizar pesquisa:", error);
    }
  };

  const handleSugestoes = async (query: string) => {
    try {
      const results = await buscarAreas(query);
      setResultadoPesquisa(results);
    } catch (error) {
      console.error("Erro ao obter sugestões:", error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HeaderConsulta />
      <SearchBar onSearch={handlePesquisar} onSugest={handleSugestoes} resultados={resultadoPesquisa} />
      <Especialidade EspecialidadeCarregada={setEspecialidadeId} />
      <Medico especialidadeId={especialidadeId} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {resultadoPesquisa.length > 0 ? (
              <FlatList
                data={resultadoPesquisa}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View style={styles.resultItem}>
                    <Text style={styles.resultText}>
                      {item.nome} ({item.type === "especialidade" ? "Especialidade" : "Médico"})
                    </Text>
                  </View>
                )}
              />
            ) : (
              <Text style={styles.noResultsText}>
                Nenhum resultado encontrado
              </Text>
            )}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisivel(false)}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
