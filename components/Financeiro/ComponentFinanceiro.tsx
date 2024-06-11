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
            <Text>Mês de Maio 2024</Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
