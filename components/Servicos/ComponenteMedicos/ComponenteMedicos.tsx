import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";

export function ComponenteMedicos() {
  return (
    <>
      <View style={styles.containerMedicos}>
        <Image source={require('../../../assets/images/icone-pessoa/pessoa-60.png')} style={[styles.imagemIcone]}/>

        <View style={[styles.areaTextos]}>
          <View style={[styles.textoNomeMedico]}>
            <Text style={[styles.nomeMedico]}>CLÍNICA MEDICINA DO TRABALHO</Text>
          </View>
          <View style={[styles.textoEndereco]}>
            <Text style={[styles.nomeEndereco]}>Endereço:</Text>
          </View>
        </View>

      </View>
    </>
  );
}
