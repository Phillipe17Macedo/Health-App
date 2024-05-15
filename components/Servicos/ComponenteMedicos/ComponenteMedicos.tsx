import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";

export function ComponenteMedicos() {
  return (
    <>
      <View style={styles.containerMedicos}>
        <Image source={require('../../../assets/images/icone-pessoa/pessoa-60.png')} style={[styles.imagemIcone]}/>
        <Text style={[styles.tituloMedico]}>Médicos</Text>
      </View>
    </>
  );
}
