import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { ModalFinanceiro } from "./ModalFinanceiro/ModalFinanceiro";
import { BarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export function ComponentFinanceiro() {
  const [modalVisivel, setModalVisivel] = useState(false);
  const [mesSelecionado, setMesSelecionado] = useState("");

  const handleOpenModal = (mes: string) => {
    setMesSelecionado(mes);
    setModalVisivel(true);
  };

  const handleCloseModal = () => {
    setModalVisivel(false);
  };

  const data = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [
      {
        data: [300, 450, 280, 800, 990, 430],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#FFF",
    backgroundGradientTo: "#FFF",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(140, 191, 31, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(3, 166, 106, ${opacity})`,
    style: {
      borderRadius: 10,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#03A66A",
    },
    propsForLabels: {
      fontSize: 9,
      fontWeight: "bold",
      fontFamily: "Arial",
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={[
            {
              backgroundColor: "#DFF2ED",
              width: "95%",
              height: 1000,
              alignSelf: "center",
              borderRadius: 5,
              paddingHorizontal: 15,
              flexDirection: "column",
              marginTop: 25,
              elevation: 3,
              marginBottom: 100,
              borderWidth: 0.5,
              borderColor: "#65A693",
            },
          ]}
        >
          <Text style={[styles.textoTituloContainer]}>
            Contratos em Aberto:
          </Text>

          <ScrollView horizontal style={[{marginBottom: 10, borderRadius: 5}]}>
            <BarChart
              data={data}
              width={screenWidth * 1.2}
              height={180}
              chartConfig={chartConfig}
              yAxisLabel="R$"
              yAxisSuffix=""
              style={{ alignSelf: "center", borderRadius: 5 }}
            />
          </ScrollView>

          <TouchableOpacity
            style={[styles.containerItem]}
            onPress={() => handleOpenModal("Junho 2024")}
          >
            <Text style={[styles.tituloTextoItem]}>Mês de Junho 2024</Text>
            <View style={[styles.containerIcone]}>
              <MaterialIcons
                name="monetization-on"
                size={64}
                color={"#F22222"}
              />
            </View>
            <Text style={[styles.textoDescricaoItem]}>
              Clique para mais informações
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.containerItem]}
            onPress={() => handleOpenModal("Maio 2024")}
          >
            <Text style={[styles.tituloTextoItem]}>Mês de Maio 2024</Text>
            <View style={[styles.containerIcone]}>
              <MaterialIcons
                name="monetization-on"
                size={64}
                color={"#8CBF1F"}
              />
            </View>
            <Text style={[styles.textoDescricaoItem]}>
              Clique para mais informações
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.containerItem]}
            onPress={() => handleOpenModal("Abril 2024")}
          >
            <Text style={[styles.tituloTextoItem]}>Mês de Abril 2024</Text>
            <View style={[styles.containerIcone]}>
              <MaterialIcons
                name="monetization-on"
                size={64}
                color={"#F22222"}
              />
            </View>
            <Text style={[styles.textoDescricaoItem]}>
              Clique para mais informações
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.containerItem]}
            onPress={() => handleOpenModal("Março 2024")}
          >
            <Text style={[styles.tituloTextoItem]}>Mês de Março 2024</Text>
            <View style={[styles.containerIcone]}>
              <MaterialIcons
                name="monetization-on"
                size={64}
                color={"#F22222"}
              />
            </View>
            <Text style={[styles.textoDescricaoItem]}>
              Clique para mais informações
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.containerItem]}
            onPress={() => handleOpenModal("Fevereiro 2024")}
          >
            <Text style={[styles.tituloTextoItem]}>Mês de Fevereiro 2024</Text>
            <View style={[styles.containerIcone]}>
              <MaterialIcons
                name="monetization-on"
                size={64}
                color={"#8CBF1F"}
              />
            </View>
            <Text style={[styles.textoDescricaoItem]}>
              Clique para mais informações
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.containerItem]}
            onPress={() => handleOpenModal("Janeiro 2024")}
          >
            <Text style={[styles.tituloTextoItem]}>Mês de Janeiro 2024</Text>
            <View style={[styles.containerIcone]}>
              <MaterialIcons
                name="monetization-on"
                size={64}
                color={"#8CBF1F"}
              />
            </View>
            <Text style={[styles.textoDescricaoItem]}>
              Clique para mais informações
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <ModalFinanceiro
        visivel={modalVisivel}
        onClose={handleCloseModal}
        mes={mesSelecionado}
        nomeAderente="João da Silva"
        consultasFeitas={5}
        examesFeitos={3}
        dependentesUsaram={["Maria", "José"]}
        valorConsultas={250.0}
        valorExames={150.0}
        valorTotal={400.0}
      />
    </SafeAreaView>
  );
}
