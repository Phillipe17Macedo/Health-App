import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { ModalFinanceiro } from "./ModalFinanceiro/ModalFinanceiro";
import { BarChart } from "react-native-chart-kit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { buscarMovimentoFinanceiro } from "@/utils/buscarMovimentoFinanceiro";

const screenWidth = Dimensions.get("window").width;

export function ComponentFinanceiro() {
  const [modalVisivel, setModalVisivel] = useState(false);
  const [mesSelecionado, setMesSelecionado] = useState<any>(null);
  const [movimentacao, setMovimentacao] = useState<any[]>([]);
  const [dadosGrafico, setDadosGrafico] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarMovimentacao = async () => {
      try {
        const idAderente = await AsyncStorage.getItem("userId");
        console.log("ID Aderente:", idAderente);

        if (!idAderente) {
          throw new Error("ID do aderente não encontrado no AsyncStorage.");
        }

        const dados = await buscarMovimentoFinanceiro(Number(idAderente));
        console.log("Movimento Financeiro:", dados);

        if (dados?.data && Array.isArray(dados.data) && dados.data.length > 0) {
          setMovimentacao(dados.data);

          const valoresMensais = dados.data.map((item: any) => item.valor);
          setDadosGrafico(valoresMensais);
        } else {
          setMovimentacao([]);
        }
      } catch (error) {
        console.error("Erro ao carregar os dados financeiros:", error);
        Alert.alert("Erro", "Não foi possível carregar os dados financeiros.");
      } finally {
        setLoading(false);
      }
    };

    carregarMovimentacao();
  }, []);

  const handleOpenModal = (item: any) => {
    setMesSelecionado(item); 
    setModalVisivel(true);
  };

  const handleCloseModal = () => {
    setModalVisivel(false);
  };

  const data = {
    labels: movimentacao.map((item: any) =>
      new Date(item.vencimento).toLocaleString("pt-BR", { month: "short" })
    ),
    datasets: [
      {
        data: dadosGrafico,
      },
    ],
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Carregando dados financeiros...</Text>
      </SafeAreaView>
    );
  }

  if (movimentacao.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Você não tem Movimentação Financeira.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.containerOpcoes]}>
          <Text style={[styles.textoTituloContainer]}>
            Movimentação Financeira
          </Text>

          {movimentacao.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.containerItem]}
              onPress={() => handleOpenModal(item)}
            >
              <Text style={[styles.tituloTextoItem]}>
                Mês de {new Date(item.vencimento).toLocaleString("pt-BR", { month: "long", year: "numeric" })}
              </Text>
              <View style={[styles.containerIcone]}>
                <MaterialIcons
                  name="monetization-on"
                  size={64}
                  color={item.quitado ? "#8CBF1F" : "#F22222"}
                />
              </View>
              <Text style={[styles.textoDescricaoItem]}>
                Valor: R$ {item.valor.toFixed(2)}
              </Text>
              <Text style={[styles.textoDescricaoItem]}>
                {item.quitado ? `Quitado em ${new Date(item.dataQuitacao).toLocaleDateString("pt-BR")}` : "Não Quitado"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {mesSelecionado && (
        <ModalFinanceiro
          visivel={modalVisivel}
          onClose={handleCloseModal}
          mes={new Date(mesSelecionado.vencimento).toLocaleString("pt-BR", { month: "long", year: "numeric" })}
          valor={mesSelecionado.valor}
          parcela={mesSelecionado.parcela}
          quitado={mesSelecionado.quitado}
          dataQuitacao={mesSelecionado.quitado ? new Date(mesSelecionado.dataQuitacao).toLocaleDateString("pt-BR") : null}
          documento={mesSelecionado.documento}
          descricao={mesSelecionado.descricao}
        />
      )}
    </SafeAreaView>
  );
}