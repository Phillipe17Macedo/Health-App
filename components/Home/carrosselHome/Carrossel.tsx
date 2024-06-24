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
            AGENDAMENTOS CLÍNICAS ASERPA
          </Text>
          <FontAwesome6 name="hospital" size={18} color="#03A66A" />
        </View>

        <View style={[styles.containerOpcoes]}>
          <TouchableOpacity>
            <Link href={"/consulta"} style={[styles.containerLink]}>
              <View style={[styles.opcoes]}>
                <Image source={require('@/assets/images/Home/Carrossel/icons8-doctors-bag-color/icons8-doctors-bag-48.png')} />
                <Text style={[styles.textoOpcoesIcone]}>AGENDAR CONSULTA</Text>
              </View>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link href={"/exame"} style={[styles.containerLink]}>
              <View style={[styles.opcoes]}>
                <Image source={require('@/assets/images/Home/Carrossel/icons8-medical-color/icons8-medical-48.png')} />
                <Text style={[styles.textoOpcoesIcone]}>AGENDAR EXAME</Text>
              </View>
            </Link>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.container]}>
        <View style={[styles.ContainertextoAcessoRapido]}>
          <Text style={[styles.textoAcessoRapido]}>SOLICITAÇÃO DE GUIAS</Text>
          <FontAwesome6 name="hospital-user" size={18} color="#03A66A" />
        </View>
        <View style={[styles.containerOpcoes, { marginBottom: 95 }]}>
          <TouchableOpacity>
            <Link href={"/guiaConsulta"} style={[styles.containerLink]}>
              <View style={[styles.opcoes]}>
                <Image source={require('@/assets/images/Home/Carrossel/icons8-health-lineal-color/icons8-health-48.png')} />
                <Text style={[styles.textoOpcoesIcone]}>
                  GUIA DE CONSULTAS
                </Text>
              </View>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link href={"/exame"} style={[styles.containerLink]}>
              <View style={[styles.opcoes]}>
                <Image source={require('@/assets/images/Home/Carrossel/icons8-docs-color/icons8-docs-48.png')} />
                <Text style={[styles.textoOpcoesIcone]}>GUIA DE EXAMES</Text>
              </View>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
