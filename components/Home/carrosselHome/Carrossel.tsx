import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  FontAwesome6,
} from "@expo/vector-icons";
import { styles } from "./styles";
import { Fontisto } from "@expo/vector-icons";

export function Carrossel() {
  return (
    <>
      <View style={[styles.container]}>
        
        <View style={[styles.ContainertextoAcessoRapido]}>
          <Text style={[styles.textoAcessoRapido]}>
            Agendamentos Clínicas Aserpa
          </Text>
          <FontAwesome6 name="hospital" size={18} color="#03A66A" />
        </View>

        <View style={[styles.containerOpcoes]}>
          <TouchableOpacity>
            <Link href={"/consulta"} style={[styles.containerLink]}>
              <View style={[styles.opcoes]}>
                <Image source={require('@/assets/images/Home/Carrossel/icons-canva/teste-resolucao/Consulta.png')} style={[styles.imagemOpcoes]} />
                <Text style={[styles.textoOpcoesIcone]}>Agendar Consulta</Text>
              </View>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link href={"/exame"} style={[styles.containerLink]}>
              <View style={[styles.opcoes]}>
                <Image source={require('@/assets/images/Home/Carrossel/icons-canva/teste-resolucao/Exame.png')} style={[styles.imagemOpcoes]} />
                <Text style={[styles.textoOpcoesIcone]}>Agendar Exame</Text>
              </View>
            </Link>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.container]}>
        <View style={[styles.ContainertextoAcessoRapido]}>
          <Text style={[styles.textoAcessoRapido]}>Solicitação de Guias</Text>
          <FontAwesome6 name="hospital-user" size={18} color="#03A66A" />
        </View>
        <View style={[styles.containerOpcoes, { marginBottom: 95 }]}>
          <TouchableOpacity>
            <Link href={"/guiaConsulta"} style={[styles.containerLink]}>
              <View style={[styles.opcoes]}>
                <Image source={require('@/assets/images/Home/Carrossel/icons-canva/teste-resolucao/guia-consulta.png')} style={[styles.imagemOpcoes]} />
                <Text style={[styles.textoOpcoesIcone]}>
                  Guia de Consultas
                </Text>
              </View>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link href={"/exame"} style={[styles.containerLink]}>
              <View style={[styles.opcoes]}>
                <Image source={require('@/assets/images/Home/Carrossel/icons-canva/teste-resolucao/guia-exame.png')} style={[styles.imagemOpcoes]} />
                <Text style={[styles.textoOpcoesIcone]}>Guia de Exames</Text>
              </View>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
