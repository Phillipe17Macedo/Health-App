import React from "react";
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

export function ComponentFinanceiro() {
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
              borderRadius: 20,
              paddingHorizontal: 15,
              flexDirection: 'column',
              marginTop: 25,
              elevation: 3,
              marginBottom: 100
            },
          ]}
        >
          <Text style={[styles.textoTituloContainer]}>Contratos em Aberto:</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/images/grafico-barras-teste-786x424.png')}
              style={[{alignSelf: 'center', borderRadius: 10, borderWidth: 1, borderColor: 'black', marginBottom: 25}]}
            />
          </TouchableOpacity>

          <View style={[styles.containerItem]}>
            <Text style={[styles.tituloTextoItem]}>Mês de Junho 2024</Text>
            <View style={[styles.containerIcone]}>
              <MaterialIcons name="monetization-on" size={64} color={'#F22222'} />
            </View>
            <Text style={[styles.textoDescricaoItem]}>Clique para mais informações</Text>
          </View>

          <View style={[styles.containerItem]}>
            <Text style={[styles.tituloTextoItem]}>Mês de Maio 2024</Text>
            <View style={[styles.containerIcone]}>
              <MaterialIcons name="monetization-on" size={64} color={'#8CBF1F'} />
            </View>
            <Text style={[styles.textoDescricaoItem]}>Clique para mais informações</Text>
          </View>

          <View style={[styles.containerItem]}>
            <Text style={[styles.tituloTextoItem]}>Mês de Abril 2024</Text>
            <View style={[styles.containerIcone]}>
              <MaterialIcons name="monetization-on" size={64} color={'#F22222'} />
            </View>
            <Text style={[styles.textoDescricaoItem]}>Clique para mais informações</Text>
          </View>

          <View style={[styles.containerItem]}>
            <Text style={[styles.tituloTextoItem]}>Mês de Março 2024</Text>
            <View style={[styles.containerIcone]}>
              <MaterialIcons name="monetization-on" size={64} color={'#F22222'} />
            </View>
            <Text style={[styles.textoDescricaoItem]}>Clique para mais informações</Text>
          </View>
          
          <View style={[styles.containerItem]}>
            <Text style={[styles.tituloTextoItem]}>Mês de Fevereiro 2024</Text>
            <View style={[styles.containerIcone]}>
              <MaterialIcons name="monetization-on" size={64} color={'#8CBF1F'} />
            </View>
            <Text style={[styles.textoDescricaoItem]}>Clique para mais informações</Text>
          </View>

          <View style={[styles.containerItem]}>
            <Text style={[styles.tituloTextoItem]}>Mês de Janeiro 2024</Text>
            <View style={[styles.containerIcone]}>
              <MaterialIcons name="monetization-on" size={64} color={'#8CBF1F'} />
            </View>
            <Text style={[styles.textoDescricaoItem]}>Clique para mais informações</Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
