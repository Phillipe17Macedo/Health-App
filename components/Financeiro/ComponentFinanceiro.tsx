import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image
} from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { ModalFinanceiro } from "./ModalFinanceiro/ModalFinanceiro";

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
              flexDirection: 'column',
              marginTop: 25,
              elevation: 3,
              marginBottom: 100,
              borderWidth: 0.5,
              borderColor: '#65A693'
            },
          ]}
        >
          <Text style={[styles.textoTituloContainer]}>Contratos em Aberto:</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/images/grafico-barras-teste-786x424.png')}
              style={[{alignSelf: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#65A693', marginBottom: 25}]}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.containerItem]} onPress={() => handleOpenModal("Junho 2024")}>
            <Text style={[styles.tituloTextoItem]}>Mês de Junho 2024</Text>
            <View style={[styles.containerIcone]}>
              <MaterialIcons name="monetization-on" size={64} color={'#F22222'} />
            </View>
            <Text style={[styles.textoDescricaoItem]}>Clique para mais informações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.containerItem]} onPress={() => handleOpenModal("Maio 2024")}>
            <Text style={[styles.tituloTextoItem]}>Mês de Maio 2024</Text>
            <View style={[styles.containerIcone]}>
              <MaterialIcons name="monetization-on" size={64} color={'#8CBF1F'} />
            </View>
            <Text style={[styles.textoDescricaoItem]}>Clique para mais informações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.containerItem]} onPress={() => handleOpenModal("Abril 2024")}>
            <Text style={[styles.tituloTextoItem]}>Mês de Abril 2024</Text>
            <View style={[styles.containerIcone]}>
              <MaterialIcons name="monetization-on" size={64} color={'#F22222'} />
            </View>
            <Text style={[styles.textoDescricaoItem]}>Clique para mais informações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.containerItem]} onPress={() => handleOpenModal("Março 2024")}>
            <Text style={[styles.tituloTextoItem]}>Mês de Março 2024</Text>
            <View style={[styles.containerIcone]}>
              <MaterialIcons name="monetization-on" size={64} color={'#F22222'} />
            </View>
            <Text style={[styles.textoDescricaoItem]}>Clique para mais informações</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.containerItem]} onPress={() => handleOpenModal("Fevereiro 2024")}>
            <Text style={[styles.tituloTextoItem]}>Mês de Fevereiro 2024</Text>
            <View style={[styles.containerIcone]}>
              <MaterialIcons name="monetization-on" size={64} color={'#8CBF1F'} />
            </View>
            <Text style={[styles.textoDescricaoItem]}>Clique para mais informações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.containerItem]} onPress={() => handleOpenModal("Janeiro 2024")}>
            <Text style={[styles.tituloTextoItem]}>Mês de Janeiro 2024</Text>
            <View style={[styles.containerIcone]}>
              <MaterialIcons name="monetization-on" size={64} color={'#8CBF1F'} />
            </View>
            <Text style={[styles.textoDescricaoItem]}>Clique para mais informações</Text>
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
        valorConsultas={250.00}
        valorExames={150.00}
        valorTotal={400.00}
      />
    </SafeAreaView>
  );
}
