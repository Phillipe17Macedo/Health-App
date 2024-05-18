import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

import { Anuncios } from "../anunciosHome/Anuncios";
import { styles } from "./styles";

export function Carrossel() {
  return (
    <>
      <View style={[styles.containerOpcoes]}>

        <TouchableOpacity>
          <Link href={"/consulta"} style={[styles.containerLink]}>
            <View style={[styles.opcoes]}>
              <Image
                source={require("../../../assets/images/Home/Carrossel/maleta-medica-50.png")}
                style={[styles.imagemOpcoes]}
              />
              <Text style={[styles.textoOpcoesIcone]}>CONSULTAS</Text>
            </View>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity>
          <Link href={"/exame"} style={[styles.containerLink]}>
            <View style={[styles.opcoes]}>
              <Image
                source={require("../../../assets/images/Home/Carrossel/coracao-50.png")}
                style={[styles.imagemOpcoes]}
              />
              <Text style={[styles.textoOpcoesIcone]}>EXAMES</Text>
            </View>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity>
          <Link href={"/financeiro"} style={[styles.containerLink]}>
            <View style={[styles.opcoes]}>
              <Image
                source={require("../../../assets/images/Home/Carrossel/relatorio-50.png")}
                style={[styles.imagemOpcoes]}
              />
              <Text style={[styles.textoOpcoesIcone]}>RELATÓRIOS</Text>
            </View>
          </Link>
        </TouchableOpacity>

      </View>

      <Anuncios />

      <View style={[styles.containerOpcoes, { marginBottom: 95 }]}>
        <TouchableOpacity style={[styles.opcoes]}>
          <Image
            source={require("../../../assets/images/Home/Carrossel/maleta-medica-50.png")}
            style={[styles.imagemOpcoes]}
          />
          <Text style={[styles.textoOpcoesIcone]}>PAGAMENTOS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.opcoes]}>
          <Image
            source={require("../../../assets/images/Home/Carrossel/maleta-medica-50.png")}
            style={[styles.imagemOpcoes]}
          />
          <Text style={[styles.textoOpcoesIcone]}>PLANOS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.opcoes]}>
          <Image
            source={require("../../../assets/images/Home/Carrossel/maleta-medica-50.png")}
            style={[styles.imagemOpcoes]}
          />
          <Text style={[styles.textoOpcoesIcone]}>CORAÇÃO</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
