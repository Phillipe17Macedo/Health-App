import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { Anuncios } from "../anunciosHome/Anuncios";
import { styles } from "./styles";
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
export function Carrossel() {
  return (
    <>
      <View style={[styles.containerOpcoes]}>
        <View style={[styles.ContainertextoAcessoRapido]}> 
          <Text style={[styles.textoAcessoRapido]}>ACESSO RÁPIDO</Text>
          <AntDesign name="doubleright" size={21} color="#03A66A" />
        </View>
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
        <View style={[styles.ContainertextoAcessoRapido]}> 
          <Text style={[styles.textoAcessoRapido]}>ACESSO RÁPIDO</Text>
          <AntDesign name="doubleright" size={21} color="#03A66A" />
        </View>
        <TouchableOpacity>
          <Link href={"/exame"} style={[styles.containerLink]}>
            <View style={[styles.opcoes]}>
              <FontAwesome6 name="x-ray" size={48} color="#107357"/>
              <Text style={[styles.textoOpcoesIcone]}>RAIO-X</Text>
            </View>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity>
          <Link href={"/exame"} style={[styles.containerLink]}>
            <View style={[styles.opcoes]}>
              <Ionicons name="pulse" size={48} color="#107357" />
              <Text style={[styles.textoOpcoesIcone]}>CORAÇÃO</Text>
            </View>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity>
          <Link href={"/consulta"} style={[styles.containerLink]}>
            <View style={[styles.opcoes]}>
              <FontAwesome6 name="user-doctor" size={48} color="#107357" />
              <Text style={[styles.textoOpcoesIcone]}>PEDIATRIA</Text>
            </View>
          </Link>
        </TouchableOpacity>
      </View>
    </>
  );
}
