import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";

import { Anuncios } from "../anunciosHome/Anuncios";
import { styles } from "./styles";

export function Carrossel() {
  return (
    <>
      <View style={[styles.containerCarrossel]}>
        <TouchableOpacity style={[styles.carrossel]}>
          <Image
            source={require("../../../assets/images/icons8-medical-94.png")}
            style={[styles.imagemCarrossel]}
          />
          <Text style={[styles.textoSituacaoMedica]}>CORAÇÃO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.carrossel]}>
          <Image
            source={require("../../../assets/images/icons8-mind-94.png")}
            style={[styles.imagemCarrossel]}
          />
          <Text style={[styles.textoSituacaoMedica]}>DOR DE CABEÇA</Text>
        </TouchableOpacity>
      </View>

      <Anuncios />

      <View style={[styles.containerCarrossel, { marginBottom: 95 }]}>
        <TouchableOpacity style={[styles.carrossel]}>
          <Image
            source={require("../../../assets/images/icons8-cash-94.png")}
            style={[styles.imagemCarrossel]}
          />
          <Text style={[styles.textoSituacaoMedica]}>PAGAMENTOS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.carrossel]}>
          <Image
            source={require("../../../assets/images/icons8-oferta-94.png")}
            style={[styles.imagemCarrossel]}
          />
          <Text style={[styles.textoSituacaoMedica]}>PLANOS</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
