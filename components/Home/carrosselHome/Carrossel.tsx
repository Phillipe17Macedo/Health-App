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
            source={require("../../../assets/images/Home/Carrossel/maleta-medica-50.png")}
            style={[styles.imagemCarrossel]}
          />
          <Text style={[styles.textoSituacaoMedica]}>CONSULTAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.carrossel]}>
          <Image
            source={require("../../../assets/images/Home/Carrossel/coracao-50.png")}
            style={[styles.imagemCarrossel]}
          />
          <Text style={[styles.textoSituacaoMedica]}>EXAMES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.carrossel]}>
          <Image
            source={require("../../../assets/images/Home/Carrossel/relatorio-50.png")}
            style={[styles.imagemCarrossel]}
          />
          <Text style={[styles.textoSituacaoMedica]}>RELATÓRIOS</Text>
        </TouchableOpacity>
      </View>

      <Anuncios />

      <View style={[styles.containerCarrossel, { marginBottom: 95 }]}>
        <TouchableOpacity style={[styles.carrossel]}>
          <Image
            source={require("../../../assets/images/Home/Carrossel/maleta-medica-50.png")}
            style={[styles.imagemCarrossel]}
          />
          <Text style={[styles.textoSituacaoMedica]}>PAGAMENTOS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.carrossel]}>
          <Image
            source={require("../../../assets/images/Home/Carrossel/maleta-medica-50.png")}
            style={[styles.imagemCarrossel]}
          />
          <Text style={[styles.textoSituacaoMedica]}>PLANOS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.carrossel]}>
          <Image
            source={require("../../../assets/images/Home/Carrossel/maleta-medica-50.png")}
            style={[styles.imagemCarrossel]}
          />
          <Text style={[styles.textoSituacaoMedica]}>CORAÇÃO</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
